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
    let scrollRange = 1;
    let heroHeight = 1;
    let frame;
    let lastStep;
    let canvasWidth;
    let canvasHeight;
    let drawingScale;

    function resizeBackdrop() {
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
        drawPerspective(context, width, height, 0.35, root.dir === "rtl");
      }

    }

    function update() {
      frame = undefined;
      const fraction = clamp(window.scrollY / scrollRange);
      bar.style.transform = `scaleX(${fraction})`;

      if (hero) {
        const amount = motion.matches || paused ? 0 : clamp(window.scrollY / heroHeight);
        hero.style.setProperty("--hero-drift", `${amount * 45}px`);
        hero.style.setProperty("--hero-scale", 1 - amount * 0.08);
      }

    }

    function scheduleUpdate() {
      if (frame === undefined) frame = requestAnimationFrame(update);
    }

    function updateLayout() {
      scrollRange = Math.max(1, root.scrollHeight - window.innerHeight);
      heroHeight = Math.max(1, hero?.offsetHeight || 1);
      resizeBackdrop();
      if (header) root.style.setProperty("--header-offset", `${header.offsetHeight + 15}px`);
      scheduleUpdate();
    }

    const reveal = "IntersectionObserver" in window ? new IntersectionObserver(entries => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        if (!paused && !motion.matches) entry.target.classList.add("has-revealed");
        reveal.unobserve(entry.target);
      }
    }, { threshold: 0.1 }) : null;

    document.querySelectorAll("[data-reveal]").forEach(element => reveal?.observe(element));
    const activeChapter = "IntersectionObserver" in window ? new IntersectionObserver(entries => {
      const current = entries.find(entry => entry.isIntersecting);
      if (!current) return;
      lastStep?.classList.remove("is-current");
      lastStep = current.target;
      lastStep.classList.add("is-current");
    }, { rootMargin: "-45% 0px -45% 0px" }) : null;
    chapters.forEach(chapter => activeChapter?.observe(chapter));
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
      activeChapter?.disconnect();
      resize?.disconnect();
      window.removeEventListener("scroll", scheduleUpdate);
      window.removeEventListener("resize", updateLayout);
      motion.removeEventListener("change", scheduleUpdate);
      lastStep?.classList.remove("is-current");
      root.style.removeProperty("--header-offset");
      hero?.style.removeProperty("--hero-drift");
      hero?.style.removeProperty("--hero-scale");

    };
  }, [language, paused]);

  return <div className="reading-progress" aria-hidden="true" ref={progress} />;
}
