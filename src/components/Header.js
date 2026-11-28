const languageNames = {
  pl: "🇵🇱 Polski", en: "🇬🇧 English", de: "🇩🇪 Deutsch", fr: "🇫🇷 Français", es: "🇪🇸 Español",
  "zh-Hans": "🇨🇳 简体中文", "zh-Hant": "🇹🇼 繁體中文", ko: "🇰🇷 한국어", ja: "🇯🇵 日本語",
  ar: "🇸🇦 العربية", th: "🇹🇭 ไทย", ru: "🇷🇺 Русский",
};

export function Brand() {
  return (
    <a href="#hero" className="brand" aria-label="Accedo">
      <span className="brand-mark" aria-hidden="true" />
      accedo
    </a>
  );
}

export default function Header({ text, labels, language, setLanguage }) {
  return (
    <header className="site-header">
      <div className="wrap header-inner">
        <Brand />
        <nav className="site-nav">
          <a href="#about">{text.about}</a>
          <a href="#gallery">{labels.gallery}</a>
          <a href="#team">{text.team}</a>
          <a href="#contact">{text.contact}</a>
        </nav>
        <label className="language-picker">
          <span>{labels.language}</span>
          <select value={language} onChange={event => setLanguage(event.target.value)}>
            <option value="auto">🌐 Auto</option>
            {Object.entries(languageNames).map(([code, name]) => (
              <option key={code} value={code} lang={code}>{name}</option>
            ))}
          </select>
        </label>
      </div>
    </header>
  );
}
