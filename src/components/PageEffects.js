import { useEffect, useRef } from "react";

function clamp(value) {
  return Math.max(0, Math.min(1, value));
}

function drawPerspective(context, width, height, phase, rtl) {
  const focus = width * (rtl ? 0.70 : 0.30);
  const horizon = height * (0.42 - 0.18 * phase);
  const floor = height + 1;

  context.clearRect(0, 0, width, height);
  context.lineWidth = 1;
  context.strokeStyle = "#263856";
  context.beginPath();
  for (let column = -4; column <= 14; column++) {
    const edge = width * column / 10;
    context.moveTo(focus + (edge - focus) * 0.065, horizon);
    context.lineTo(edge, floor);
  }
  for (let row = 0; row < 12; row++) {
    const depth = (row + phase) / 12;
    const y = horizon + (floor - horizon) * depth ** 2.8;
    context.moveTo(0, y);
    context.lineTo(width, y);
  }
  context.stroke();

  const radius = Math.min(width * 0.39, height * 0.72);
  const center = horizon + height * 0.09;
  for (const size of [0.54, 0.77, 1]) {
    context.beginPath();
    context.strokeStyle = size === 0.77 ? "#3a557d" : "#283c5c";
    context.ellipse(focus, center, radius * size, radius * size * 0.39, (rtl ? 1 : -1) * 0.16, 0, Math.PI * 2);
    context.stroke();
  }
}

export default function PageEffects({ language, paused }) {
  const progress = useRef(null);

  useEffect(() => {
    const bar = progress.current;
    const root = document.documentElement;
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const header = document.querySelector(".site-header");
    const hero = document.getElementById("hero");
    const story = document.getElementById("scenarios");
    const background = story?.querySelector("canvas");
    const context = background?.getContext("2d");
    const chapters = story ? [...story.querySelectorAll("[data-scroll-step]")] : [];
    const scrollMotionItems = [...document.querySelectorAll("[data-scroll-motion]")];
    let frame;
    let lastStep;
    let canvasWidth;
    let canvasHeight;
    let drawingScale;

    function updateStory(viewport) {
      const section = story.getBoundingClientRect();
      if (section.bottom <= 0 || section.top >= viewport) return;

      const focus = viewport * 0.56;
      let nearest;
      let distance = Infinity;
      for (const chapter of chapters) {
        const bounds = chapter.getBoundingClientRect();
        const delta = Math.abs(bounds.top + bounds.height / 2 - focus);
        if (delta < distance) {
          distance = delta;
          nearest = chapter;
        }
      }
      if (nearest !== lastStep) {
        lastStep?.classList.remove("is-current");
        nearest?.classList.add("is-current");
        lastStep = nearest;
      }

      if (!context) return;
      const width = background.clientWidth;
      const height = background.clientHeight;
      const scale = Math.min(window.devicePixelRatio || 1, 1.5);
      if (width <= 0 || height <= 0) return;
      if (width !== canvasWidth || height !== canvasHeight || scale !== drawingScale) {
        canvasWidth = width;
        canvasHeight = height;
        drawingScale = scale;
        background.width = Math.round(width * scale);
        background.height = Math.round(height * scale);
        context.setTransform(scale, 0, 0, scale, 0, 0);
      }

      const phase = paused || motion.matches ? 0.35 : clamp((viewport - section.top) / (viewport + section.height));
      drawPerspective(context, width, height, phase, root.dir === "rtl");
    }

    function update() {
      frame = undefined;
      const viewport = window.innerHeight;
      const range = root.scrollHeight - viewport;
      const fraction = range > 0 ? clamp(window.scrollY / range) : 0;
      bar.style.transform = `scaleX(${fraction})`;

      if (hero) {
        const amount = motion.matches || paused ? 0 : clamp(window.scrollY / Math.max(1, hero.offsetHeight));
        hero.style.setProperty("--hero-drift", `${amount * 45}px`);
        hero.style.setProperty("--hero-scale", 1 - amount * 0.08);
      }
      const followScroll = !motion.matches && !paused;
      const scrollOffsets = scrollMotionItems.map(item => {
        const bounds = item.getBoundingClientRect();
        const distanceFromFocus = bounds.top + bounds.height / 2 - viewport * 0.56;
        const offset = followScroll ? Math.max(-12, Math.min(12, -distanceFromFocus * 0.025)) : 0;
        return [item, offset];
      });
      for (const [item, offset] of scrollOffsets) item.style.setProperty("--scroll-shift", `${offset.toFixed(2)}px`);
      if (story) updateStory(viewport);
    }

    function scheduleUpdate() {
      if (frame === undefined) frame = requestAnimationFrame(update);
    }

    function updateLayout() {
      if (header) root.style.setProperty("--header-offset", `${header.offsetHeight + 15}px`);
      scheduleUpdate();
    }

    const reveal = "IntersectionObserver" in window ? new IntersectionObserver(entries => {
      for (const entry of entries) {
        const isSection = entry.target.matches("main > section:not(#hero), .site-footer");
        if (isSection) {
          if (!entry.isIntersecting) continue;
          if (!motion.matches) entry.target.classList.add("section-has-arrived");
          reveal.unobserve(entry.target);
          continue;
        }

        if (entry.isIntersecting && !motion.matches) entry.target.classList.add("has-revealed");
        else if (!entry.isIntersecting) entry.target.classList.remove("has-revealed");
      }
    }, { threshold: 0.1 }) : null;

    document.querySelectorAll("[data-reveal], main > section:not(#hero), .site-footer").forEach(element => reveal?.observe(element));
    const resize = "ResizeObserver" in window ? new ResizeObserver(updateLayout) : null;
    resize?.observe(document.body);
    if (header) resize?.observe(header);
    window.addEventListener("scroll", scheduleUpdate, { passive: true });
    window.addEventListener("resize", updateLayout);
    motion.addEventListener("change", scheduleUpdate);
    updateLayout();

    return () => {
      cancelAnimationFrame(frame);
      reveal?.disconnect();
      resize?.disconnect();
      window.removeEventListener("scroll", scheduleUpdate);
      window.removeEventListener("resize", updateLayout);
      motion.removeEventListener("change", scheduleUpdate);
      lastStep?.classList.remove("is-current");
      root.style.removeProperty("--header-offset");
      hero?.style.removeProperty("--hero-drift");
      hero?.style.removeProperty("--hero-scale");
      for (const item of scrollMotionItems) item.style.removeProperty("--scroll-shift");
    };
  }, [language, paused]);

  return <div className="reading-progress" aria-hidden="true" ref={progress} />;
}
