import { useRef, useState } from "react";

const frames = ["vr-headset", "vr-classroom", "vr-exercise", "prototype-editor", "scene-layout", "classroom-scene"];

export default function PrototypeGallery({ assets, labels, experience }) {
  const dialog = useRef(null);
  const trigger = useRef(null);
  const [current, setCurrent] = useState(0);
  const frameUrl = index => `${assets}gallery/${frames[index]}.webp`;
  const advance = offset => setCurrent(index => (index + offset + frames.length) % frames.length);

  function open(event, index) {
    trigger.current = event.currentTarget;
    setCurrent(index);
    dialog.current.showModal();
  }

  function handleKeys(event) {
    if (!["ArrowLeft", "ArrowRight"].includes(event.key)) return;
    event.preventDefault();
    const direction = document.documentElement.dir === "rtl" ? -1 : 1;
    advance((event.key === "ArrowRight" ? 1 : -1) * direction);
  }

  return (
    <section id="gallery" className="section gallery-section" aria-labelledby="gallery-title">
      <div className="wrap">
        <h2 id="gallery-title" data-reveal>{labels.gallery}</h2>
        <div className="gallery-grid">
          {frames.map((frame, index) => (
            <figure key={frame} data-reveal>
              <button className="gallery-trigger" type="button" onClick={event => open(event, index)} aria-label={`${experience.enlarge}: ${labels.captions[index]}`}>
                <img src={frameUrl(index)} alt="" width="960" height="540" loading="lazy" />
                <span className="gallery-enlarge" aria-hidden="true">↗</span>
              </button>
              <figcaption>{labels.captions[index]}</figcaption>
            </figure>
          ))}
        </div>
      </div>
      <dialog className="gallery-dialog" ref={dialog} aria-labelledby="gallery-caption" onKeyDown={handleKeys} onClose={() => trigger.current?.focus()}>
        <div className="gallery-toolbar">
          <p id="gallery-caption" aria-live="polite">{labels.captions[current]} <bdi>{current + 1} / {frames.length}</bdi></p>
          <button type="button" onClick={() => dialog.current.close()} aria-label={experience.close} autoFocus>×</button>
        </div>
        <img src={frameUrl(current)} alt="" width="960" height="540" />
        <div className="gallery-toolbar gallery-controls">
          <button type="button" aria-label={experience.previous} onClick={() => advance(-1)}>←</button>
          <button type="button" aria-label={experience.next} onClick={() => advance(1)}>→</button>
        </div>
      </dialog>
    </section>
  );
}
