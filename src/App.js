import { useEffect, useState } from "react";
import Header from "./components/Header";
import SignalField from "./components/SignalField";
import messages, { detectLanguage } from "./i18n/showcase";
import { detailsFor } from "./i18n/details";
import { translations } from "./i18n/translations";

const assets = `${process.env.PUBLIC_URL}/assets/`;
const school = {
  name: "Zespół Szkół nr 6 im. Króla Jana III Sobieskiego",
  url: "https://zs6sobieski.pl",
  article: "https://zs6sobieski.pl/accedo-inny-w-edukacji/",
  email: "szkola@zs6sobieski.edu.pl",
  phones: [
    { label: "Tel./fax", display: "+48 32 471 72 64", value: "+48324717264" },
    { label: "Tel.", display: "+48 32 473 25 50", value: "+48324732550" },
  ],
  records: [
    ["e-Doręczenia", "AE:PL-73226-13803-GEDIS-31"],
    ["ePUAP", "/ZS6-JASTRZEBIE-ZDROJ/SkrytkaESP"],
    ["REGON", "000835408"],
    ["NIP", "633-18-20-220"],
  ],
};
const videoTitles = {
  pl: "Accedo w praktyce", en: "Accedo in practice", de: "Accedo in der Praxis",
  fr: "Accedo en pratique", es: "Accedo en la práctica", "zh-Hans": "Accedo 演示",
  "zh-Hant": "Accedo 示範", ko: "Accedo 시연", ja: "Accedoのデモ",
  ar: "عرض توضيحي لمشروع Accedo", th: "ชมการสาธิต Accedo", ru: "Accedo на практике",
};
const gallery = ["vr-headset", "vr-classroom", "vr-exercise", "prototype-editor", "character-model", "classroom-scene"];
const languageStorageKey = "accedo-language";
const translationKeys = { ja: "jp", "zh-Hans": "zh" };

// Add confirmed sponsors with their name, website and logo filename in public/assets.
const sponsors = [];

function deviceLanguage() {
  return detectLanguage([...(navigator.languages || []), navigator.language || ""]);
}

function savedLanguage() {
  try {
    const value = localStorage.getItem(languageStorageKey);
    return Object.hasOwn(messages, value) ? value : "auto";
  } catch {
    return "auto";
  }
}

function Arrow({ down = false }) {
  return <span aria-hidden="true" dir="ltr">{down ? "↓" : "↗"}</span>;
}

export default function App() {
  const [automaticLanguage, setAutomaticLanguage] = useState(deviceLanguage);
  const [language, setLanguage] = useState(savedLanguage);
  const lang = language === "auto" ? automaticLanguage : language;
  const [paused, setPaused] = useState(false);
  const text = messages[lang];
  const project = translations[translationKeys[lang] || lang] || translations.pl;
  const labels = detailsFor(lang, project);
  const mentors = [...project.supervisors.school, ...project.supervisors.academic];
  const contactEmail = project.team.members[0].email;

  useEffect(() => {
    const updateLanguage = () => setAutomaticLanguage(deviceLanguage());
    window.addEventListener("languagechange", updateLanguage);
    return () => window.removeEventListener("languagechange", updateLanguage);
  }, []);

  useEffect(() => {
    try {
      if (language === "auto") localStorage.removeItem(languageStorageKey);
      else localStorage.setItem(languageStorageKey, language);
    } catch {
      // The selection still works for this page when browser storage is blocked.
    }
  }, [language]);

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
    document.title = `Accedo | ${text.title}`;
    document.querySelector('meta[name="description"]')?.setAttribute("content", text.lead);
  }, [lang, text]);

  return (
    <>
      <Header text={text} labels={labels} language={language} setLanguage={setLanguage} />
      <main>
        <section id="hero" className="hero">
          <div className="wrap hero-layout">
            <div className="hero-copy">
              <h1>{text.title}</h1>
              <p>{text.lead}</p>
              <div className="hero-links">
                <a className="button button-accent" href="#about">{text.learn} <Arrow down /></a>
                <a className="text-link" href={school.article} lang="pl">Accedo na stronie szkoły <Arrow /></a>
              </div>
            </div>
            <div className="hero-figure">
              <div className="signal-panel">
                <SignalField paused={paused} />
                <button type="button" className="motion-button" aria-label={text.animation} aria-pressed={!paused} title={text.animation} onClick={() => setPaused(value => !value)}>
                  <span aria-hidden="true">{paused ? "▶" : "Ⅱ"}</span>
                </button>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="section practice">
          <div className="wrap practice-layout">
            <div>
              <h2>{text.practice}</h2>
              <p>{text.description}</p>
            </div>
            <ol className="steps">
              {text.steps.map(step => <li key={step}>{step}</li>)}
            </ol>
          </div>
        </section>

        <section id="technology" className="section technology-section">
          <div className="wrap">
            <h2>{labels.tech}</h2>
            <div className="technology-grid">
              {labels.technology.map((description, index) => (
                <article key={description}>
                  <h3>{["VR", "ESP32", "iOS"][index]}</h3>
                  <p>{description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="gallery" className="section gallery-section">
          <div className="wrap">
            <h2>{labels.gallery}</h2>
            <div className="gallery-grid">
              {gallery.map((frame, index) => (
                <figure key={frame}>
                  <img src={assets + "gallery/" + frame + ".webp"} alt="" width="960" height="540" loading="lazy" />
                  <figcaption>{labels.captions[index]}</figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        <section id="team" className="section people">
          <div className="wrap">
            <h2>{text.team}</h2>
            <ul className="people-list">
              {project.team.members.map(member => (
                <li key={member.email}><a href={`mailto:${member.email}`}>{member.name} <Arrow /></a></li>
              ))}
            </ul>
            <div className="support-grid">
              <section id="supervisors">
                <h3>{text.support}</h3>
                {mentors.map(({ name, role }, index) => (
                  <div className="support-row" key={name}>
                    <strong>{name}</strong>
                    <p>{text.roles?.[index] || role}</p>
                  </div>
                ))}
              </section>
              <section id="institutions">
                <h3>{text.partners}</h3>
                {project.institutions.items.map((institution, index) => (
                  <a className="institution support-row" href={institution.url} key={institution.url}>
                    <img src={assets + ["sobieski.png", "us_logo.png"][index]} alt="" loading="lazy" />
                    <strong>{text.institutions?.[index] || institution.name} <Arrow /></strong>
                  </a>
                ))}
              </section>
            </div>
          </div>
        </section>

        <section id="film" className="section film-section" aria-labelledby="film-title">
          <div className="wrap">
            <h2 id="film-title">{videoTitles[lang]}</h2>
            <video className="project-film" lang="pl" aria-labelledby="film-title" controls playsInline preload="none" poster={assets + "accedo-film-poster.jpg"}>
              <source src={assets + "accedo-film.mp4"} type="video/mp4" />
            </video>
          </div>
        </section>

        <section id="sponsors" className="sponsor-strip">
          <div className="wrap sponsor-inner">
            <h2>{text.sponsors}</h2>
            {sponsors.length > 0 && (
              <ul className="sponsor-logos">
                {sponsors.map(({ name, url, logo }) => (
                  <li key={name}><a href={url}><img src={assets + logo} alt={name} loading="lazy" /></a></li>
                ))}
              </ul>
            )}
            <a className="text-link" href={`mailto:${contactEmail}`}>{text.sponsorship} <Arrow /></a>
          </div>
        </section>

      </main>
      <footer id="contact" className="site-footer">
        <div className="wrap footer-inner">
          <div>
            <h2>{text.invitation}</h2>
            <a className="text-link" href={`mailto:${contactEmail}`}><bdi>{contactEmail}</bdi> <Arrow /></a>
          </div>
          <div lang="pl">
            <address className="school-contact">
              <a className="text-link" href={school.url}>{school.name} <Arrow /></a>
              <p className="school-address">ul. Harcerska 12<br />44-335 Jastrzębie-Zdrój</p>
              <a className="text-link" href={`mailto:${school.email}`}><bdi>{school.email}</bdi></a>
              {school.phones.map(phone => (
                <span key={phone.value}>{phone.label} <a className="text-link" href={`tel:${phone.value}`}><bdi>{phone.display}</bdi></a></span>
              ))}
            </address>
            <details className="school-records">
              <summary>Dane urzędowe szkoły</summary>
              <dl>
                {school.records.map(([label, value]) => (
                  <div key={label}><dt>{label}</dt><dd><bdi>{value}</bdi></dd></div>
                ))}
              </dl>
            </details>
          </div>
        </div>
      </footer>
    </>
  );
}
