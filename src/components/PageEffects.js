import { useEffect, useRef } from "react";

export default function PageEffects({ language }) {
  const progress = useRef(null);

  useEffect(() => {
    const bar = progress.current;
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const header = document.querySelector(".site-header");
    let frame;

    function update() {
      const root = document.documentElement;
      const range = root.scrollHeight - window.innerHeight;
      const fraction = range > 0 ? Math.max(0, Math.min(1, window.scrollY / range)) : 0;
      bar.style.transform = `scaleX(${fraction})`;
      if (header) root.style.setProperty("--header-offset", `${header.offsetHeight + 15}px`);
    }

    function scheduleUpdate() {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(update);
    }

    const reveal = "IntersectionObserver" in window ? new IntersectionObserver(entries => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        if (!motion.matches) entry.target.classList.add("has-revealed");
        reveal.unobserve(entry.target);
      }
    }, { threshold: 0.1 }) : null;

    document.querySelectorAll("[data-reveal]").forEach(element => reveal?.observe(element));
    const resize = "ResizeObserver" in window ? new ResizeObserver(scheduleUpdate) : null;
    resize?.observe(document.body);
    if (header) resize?.observe(header);
    window.addEventListener("scroll", scheduleUpdate, { passive: true });
    window.addEventListener("resize", scheduleUpdate);
    update();

    return () => {
      cancelAnimationFrame(frame);
      reveal?.disconnect();
      resize?.disconnect();
      window.removeEventListener("scroll", scheduleUpdate);
      window.removeEventListener("resize", scheduleUpdate);
      document.documentElement.style.removeProperty("--header-offset");
    };
  }, [language]);

  return <div className="reading-progress" aria-hidden="true" ref={progress} />;
}
