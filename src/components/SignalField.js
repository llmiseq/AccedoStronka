import { useEffect, useRef } from "react";

const turn = Math.PI * 2;
const samples = 96;

export default function SignalField({ paused }) {
  const canvasRef = useRef(null);
  const elapsed = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    if (!context) return;

    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let frame;
    let lastTime;
    let width;
    let height;
    let visible = true;

    function draw() {
      const time = elapsed.current;
      const scale = Math.min(width / 6.8, height / 4.3);
      const yaw = -0.30 + 0.48 * Math.sin(time * 0.65);
      const pitch = 0.13 + 0.14 * Math.cos(time * 0.53);
      const lift = 5 * Math.sin(time * 1.05);
      const radians = Array.from({ length: samples }, (_, index) => index * turn / samples);

      context.clearRect(0, 0, width, height);

      function project(x, y, z) {
        const rotatedX = x * Math.cos(yaw) + z * Math.sin(yaw);
        const depth = z * Math.cos(yaw) - x * Math.sin(yaw);
        const rotatedY = y * Math.cos(pitch) - depth * Math.sin(pitch);
        const perspective = 1 / (1 + (depth * Math.cos(pitch) + y * Math.sin(pitch)) * 0.11);
        return [width / 2 + rotatedX * scale * perspective, height / 2 + lift + rotatedY * scale * perspective];
      }

      function trace(points, color, closed = false) {
        context.beginPath();
        points.forEach(([x, y], index) => index ? context.lineTo(x, y) : context.moveTo(x, y));
        if (closed) context.closePath();
        context.strokeStyle = color;
        context.stroke();
      }

      function shell(angle, slice) {
        const cos = Math.cos(angle);
        const sin = Math.sin(angle);
        const x = 2.05 * Math.sign(cos) * Math.abs(cos) ** 0.49;
        const nose = sin > 0 ? 0.34 * Math.exp(-((x / 0.48) ** 2)) : 0;
        const y = 0.93 * Math.sign(sin) * Math.abs(sin) ** 0.62 - nose;
        const taper = 1 - slice * 0.16;
        return project(x * taper, y * taper, -0.34 + slice * 0.91);
      }

      const orbit = radians.map(angle => project(2.85 * Math.cos(angle), 1.48 * Math.sin(angle), 0.55 * Math.sin(angle) + 0.18));
      context.lineWidth = 0.85;
      context.setLineDash([2, 5]);
      trace(orbit, "#466291", true);
      context.setLineDash([]);

      for (let row = 4; row >= 0; row--) {
        trace(radians.map(angle => shell(angle, row / 4)), row === 0 ? "#aecaff" : "#456696", true);
      }
      for (let column = 0; column < 24; column++) {
        const angle = column * turn / 24;
        trace([shell(angle, 0), shell(angle, 1)], "#456696");
      }

      for (const center of [-0.96, 0.96]) {
        for (const radius of [0.58, 0.46]) {
          const lens = radians.map(angle => project(center + radius * Math.cos(angle), -0.07 + radius * 0.74 * Math.sin(angle), -0.36));
          trace(lens, radius > 0.5 ? "#91b6ff" : "#456696", true);
        }
        trace([project(center - 0.11, -0.07, -0.37), project(center + 0.11, -0.07, -0.37)], "#91b6ff");
        trace([project(center, -0.16, -0.37), project(center, 0.02, -0.37)], "#91b6ff");
      }

      const [x, y] = orbit[Math.floor(time * 22) % samples];
      context.beginPath();
      context.arc(x, y, 3.2, 0, turn);
      context.fillStyle = "#e2edff";
      context.fill();
    }

    function animate(now) {
      if (lastTime !== undefined) elapsed.current += Math.min(now - lastTime, 50) / 1000;
      lastTime = now;
      draw();
      frame = requestAnimationFrame(animate);
    }

    function sync() {
      cancelAnimationFrame(frame);
      lastTime = undefined;
      if (visible && !paused && !motion.matches && !document.hidden) {
        frame = requestAnimationFrame(animate);
      }
    }

    function resize() {
      const ratio = Math.min(window.devicePixelRatio || 1, 2);
      width = canvas.clientWidth;
      height = canvas.clientHeight;
      canvas.width = Math.round(width * ratio);
      canvas.height = Math.round(height * ratio);
      context.setTransform(ratio, 0, 0, ratio, 0, 0);
      draw();
    }

    resize();
    const sizeObserver = new ResizeObserver(resize);
    sizeObserver.observe(canvas);
    const visibilityObserver = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      sync();
    });
    visibilityObserver.observe(canvas);
    motion.addEventListener("change", sync);
    document.addEventListener("visibilitychange", sync);
    sync();
    return () => {
      cancelAnimationFrame(frame);
      sizeObserver.disconnect();
      visibilityObserver.disconnect();
      motion.removeEventListener("change", sync);
      document.removeEventListener("visibilitychange", sync);
    };
  }, [paused]);

  return <canvas className="signal-field" ref={canvasRef} aria-hidden="true" />;
}
