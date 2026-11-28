import { useEffect, useRef } from "react";

const turn = Math.PI * 2;
const samples = 64;
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
      const yaw = -0.42 + 0.53 * Math.sin(time * 0.64) + pointerX * 0.28;
      const pitch = 0.21 + 0.11 * Math.cos(time * 0.6) - pointerY * 0.19;
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

      function trace(points, color, closed = false, fill) {
        context.beginPath();
        points.forEach(([x, y], index) => index ? context.lineTo(x, y) : context.moveTo(x, y));
        if (closed) context.closePath();
        if (fill) {
          context.fillStyle = fill;
          context.fill();
        }
        context.strokeStyle = color;
        context.stroke();
      }

      function roundedPoint(angle, width, height) {
        const cos = Math.cos(angle);
        const sin = Math.sin(angle);
        return [
          width * Math.sign(cos) * Math.abs(cos) ** 0.53,
          height * Math.sign(sin) * Math.abs(sin) ** 0.53,
        ];
      }

      function faceDepth(x, y) {
        return -0.73 + 0.16 * (x / 2) ** 2 + 0.10 * (y / 0.9) ** 2;
      }

      function shell(angle, slice) {
        const [x, y] = roundedPoint(angle, 2.02 + slice * 0.12, 0.86 + slice * 0.10);
        const nose = y > 0 ? slice * 0.13 * Math.exp(-((x / 0.53) ** 2)) : 0;
        return project(x, y - nose, faceDepth(x, y) + slice * 1.46);
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

      for (const edge of [-0.19, 0.19]) {
        const strap = strapAngles.map(angle => project(edge, -0.78 - 0.57 * Math.sin(angle), 0.04 + 1.19 * (1 - Math.cos(angle))));
        trace(strap, "#799bd1");
      }
      for (const angle of strapAngles.filter((_, index) => index % 8 === 0)) {
        const y = -0.78 - 0.57 * Math.sin(angle);
        const z = 0.04 + 1.19 * (1 - Math.cos(angle));
        trace([project(-0.19, y, z), project(0.19, y, z)], "#456696");
      }

      const rows = 7;
      for (let row = rows; row >= 0; row--) {
        trace(radians.map(angle => shell(angle, row / rows)), row === 0 ? "#aecaff" : "#496da4", true);
      }
      // Batch mesh segments by colour so the canvas strokes each group once.
      for (const diagonal of [false, true]) {
        context.beginPath();
        for (let column = 0; column < 36; column++) {
          const angle = column * turn / 36;
          const segments = diagonal ? rows : 1;
          for (let row = 0; row < segments; row++) {
            context.moveTo(...shell(angle, row / segments));
            context.lineTo(...shell(diagonal ? angle + turn / 36 : angle, (row + 1) / segments));
          }
        }
        context.strokeStyle = diagonal ? "#354f78" : "#496da4";
        context.stroke();
      }

      context.lineWidth = 1.3;
      trace(radians.map(angle => shell(angle, 0)), "#b4cdff", true, "#1e3356");
      context.lineWidth = 0.72;
      const gridShape = 2 / 0.53;
      for (let line = -6; line <= 6; line++) {
        const position = line / 7;
        const radius = (1 - Math.abs(position) ** gridShape) ** (1 / gridShape);
        const horizontal = [];
        const vertical = [];
        for (let sample = 0; sample <= 24; sample++) {
          const fraction = (sample / 12 - 1) * radius;
          const x = fraction * 2.02;
          const y = position * 0.86;
          horizontal.push(project(x, y, faceDepth(x, y) - 0.01));
          const vx = position * 2.02;
          const vy = fraction * 0.86;
          vertical.push(project(vx, vy, faceDepth(vx, vy) - 0.01));
        }
        trace(horizontal, "#3d5885");
        trace(vertical, "#3d5885");
      }

      for (const side of [-1, 1]) {
        for (const height of [-1, 1]) {
          const cameraX = side * (height < 0 ? 1.74 : 1.66);
          const cameraY = height * 0.57;
          const cameraDepth = faceDepth(cameraX, cameraY) - 0.02;
          for (const radius of [0.15, 0.075]) {
            const rim = radians.map(angle => project(cameraX + radius * Math.cos(angle), cameraY + radius * Math.sin(angle), cameraDepth));
            trace(rim, radius > 0.1 ? "#acc9ff" : "#5876ac", true, "#111e33");
          }
        }

        const controllerX = side * 2.62;
        const controllerY = 0.84 + 0.09 * Math.sin(time * 1.7 + side);
        const grip = [
          project(controllerX - side * 0.18, controllerY + 0.13, -0.35),
          project(controllerX - side * 0.18, controllerY + 0.65, -0.25),
          project(controllerX - side * 0.05, controllerY + 0.76, -0.22),
          project(controllerX + side * 0.13, controllerY + 0.71, -0.25),
          project(controllerX + side * 0.22, controllerY + 0.16, -0.35),
        ];
        trace(grip, "#8fabd9", true, "#203556");
        for (const radius of [0.48, 0.39]) {
          const ring = radians.map(angle => project(
            controllerX + radius * Math.cos(angle),
            controllerY - 0.11 + radius * Math.sin(angle) * 0.63,
            -0.35 + radius * Math.sin(angle) * 0.58,
          ));
          trace(ring, "#8fabd9", true);
        }
        const joystick = radians.map(angle => project(controllerX + 0.078 * Math.cos(angle), controllerY + 0.08 + 0.056 * Math.sin(angle), -0.42));
        trace(joystick, "#b4cdff", true, "#121f33");
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
      const ratio = Math.min(window.devicePixelRatio || 1, 1.5);
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
