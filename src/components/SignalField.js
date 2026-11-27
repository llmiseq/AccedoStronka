import { useEffect, useRef } from "react";

const turn = Math.PI * 2;
const samples = 96;
const radians = Array.from({ length: samples }, (_, index) => index * turn / samples);

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
    let targetX = 0;
    let targetY = 0;
    let pointerX = 0;
    let pointerY = 0;

    function draw() {
      const time = elapsed.current;
      const scale = Math.min(width / 7.4, height / 4.55);
      const yaw = -0.28 + 0.46 * Math.sin(time * 0.64) + pointerX * 0.35;
      const pitch = 0.21 + 0.13 * Math.cos(time * 0.6) - pointerY * 0.28;
      const lift = 5 * Math.sin(time * 1.05);
      const sinYaw = Math.sin(yaw);
      const cosYaw = Math.cos(yaw);
      const sinPitch = Math.sin(pitch);
      const cosPitch = Math.cos(pitch);

      context.clearRect(0, 0, width, height);

      function project(x, y, z) {
        const rotatedX = x * cosYaw + z * sinYaw;
        const depth = z * cosYaw - x * sinYaw;
        const rotatedY = y * cosPitch - depth * sinPitch;
        const perspective = 1 / (1 + (depth * cosPitch + y * sinPitch) * 0.11);
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

      const strapAngles = radians.slice(0, samples / 2 + 1);
      for (const edge of [-0.19, 0.12]) {
        trace(strapAngles.map(angle => project(1.75 * Math.cos(angle), edge - 0.25 * Math.sin(angle), 0.52 + 2.05 * Math.sin(angle))), "#6d8fc7");
      }
      for (const angle of strapAngles.filter((_, index) => index % 6 === 0)) {
        const x = 1.75 * Math.cos(angle);
        const z = 0.52 + 2.05 * Math.sin(angle);
        const y = -0.25 * Math.sin(angle);
        trace([project(x, y - 0.19, z), project(x, y + 0.12, z)], "#3d5985");
      }

      const rows = 7;
      for (let row = rows; row >= 0; row--) {
        trace(radians.map(angle => shell(angle, row / rows)), row === 0 ? "#aecaff" : "#496da4", true);
      }
      for (let column = 0; column < 36; column++) {
        const angle = column * turn / 36;
        const next = angle + turn / 36;
        trace([shell(angle, 0), shell(angle, 1)], "#496da4");
        for (let row = 0; row < rows; row++) {
          trace([shell(angle, row / rows), shell(next, (row + 1) / rows)], "#354f78");
        }
      }

      for (const center of [-0.96, 0.96]) {
        for (const radius of [0.58, 0.46]) {
          const lens = radians.map(angle => project(center + radius * Math.cos(angle), -0.07 + radius * 0.74 * Math.sin(angle), -0.36));
          trace(lens, radius > 0.5 ? "#91b6ff" : "#456696", true);
        }
        trace([project(center - 0.11, -0.07, -0.37), project(center + 0.11, -0.07, -0.37)], "#91b6ff");
        trace([project(center, -0.16, -0.37), project(center, 0.02, -0.37)], "#91b6ff");
      }

      for (const side of [-1, 1]) {
        const controllerX = side * 2.55;
        const controllerY = 0.82 + 0.09 * Math.sin(time * 1.7 + side);
        const ring = radians.map(angle => project(controllerX + 0.40 * Math.cos(angle), controllerY + 0.26 * Math.sin(angle), -0.30 + 0.15 * Math.sin(angle)));
        trace(ring, "#6389c6", true);
        trace([
          project(controllerX - side * 0.11, controllerY + 0.14, -0.30),
          project(controllerX - side * 0.17, controllerY + 0.61, -0.26),
          project(controllerX + side * 0.07, controllerY + 0.66, -0.26),
          project(controllerX + side * 0.18, controllerY + 0.17, -0.30),
        ], "#6389c6", true);
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
      pointerX += (targetX - pointerX) * 0.08;
      pointerY += (targetY - pointerY) * 0.08;
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

    function followPointer(event) {
      if (event.pointerType === "touch") return;
      const bounds = canvas.getBoundingClientRect();
      targetX = 2 * (event.clientX - bounds.left) / bounds.width - 1;
      targetY = 2 * (event.clientY - bounds.top) / bounds.height - 1;
    }

    function releasePointer() {
      targetX = 0;
      targetY = 0;
    }

    canvas.addEventListener("pointermove", followPointer);
    canvas.addEventListener("pointerleave", releasePointer);
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
      canvas.removeEventListener("pointermove", followPointer);
      canvas.removeEventListener("pointerleave", releasePointer);
      sizeObserver.disconnect();
      visibilityObserver.disconnect();
      motion.removeEventListener("change", sync);
      document.removeEventListener("visibilitychange", sync);
    };
  }, [paused]);

  return <canvas className="signal-field" ref={canvasRef} aria-hidden="true" />;
}
