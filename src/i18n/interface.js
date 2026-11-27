const labels = {
  pl: ["Szkolenia VR dla nauczycieli", "Biometria", "Sponsorzy", "W sprawie sponsoringu", "Język", "Animacja", "Widok wirtualnej klasy", "Scena z symulacji"],
  en: ["VR training for teachers", "Biometrics", "Sponsors", "Sponsorship enquiries", "Language", "Animation", "Virtual classroom overview", "Simulation scene"],
  de: ["VR-Training für Lehrkräfte", "Biometrie", "Sponsoren", "Sponsoring-Anfragen", "Sprache", "Animation", "Virtuelles Klassenzimmer", "Simulationsszene"],
  fr: ["Formation des enseignants en VR", "Biométrie", "Sponsors", "Devenir sponsor", "Langue", "Animation", "Salle de classe virtuelle", "Scène de simulation"],
  es: ["Formación docente en VR", "Biometría", "Patrocinadores", "Consultas de patrocinio", "Idioma", "Animación", "Aula virtual", "Escena de simulación"],
  zh: ["教师虚拟现实培训", "生物识别", "赞助商", "赞助咨询", "语言", "动画", "虚拟教室全景", "模拟场景"],
  ko: ["교사를 위한 VR 훈련", "생체 측정", "후원사", "후원 문의", "언어", "애니메이션", "가상 교실 전경", "시뮬레이션 장면"],
  jp: ["教員向けVR研修", "生体計測", "スポンサー", "協賛のお問い合わせ", "言語", "アニメーション", "仮想教室の全景", "シミュレーション場面"],
  ar: ["تدريب المعلمين بالواقع الافتراضي", "القياسات الحيوية", "الرعاة", "استفسارات الرعاية", "اللغة", "الحركة", "الفصل الدراسي الافتراضي", "مشهد من المحاكاة"],
};

export function interfaceText(lang) {
  const [headline, biometrics, sponsors, sponsorship, language, animation, classroom, scenario] = labels[lang];
  return { headline, biometrics, sponsors, sponsorship, language, animation, classroom, scenario };
}
