const labels = {
  pl: ["Język", "Galeria prototypu", "Technologia projektu", "Gogle VR", "Wirtualna klasa", "Ćwiczenie w symulacji", "Projektowanie klasy", "Układ sali w edytorze", "Scena w klasie"],
  en: ["Language", "Prototype gallery", "Project technology", "VR headset", "Virtual classroom", "Simulation exercise", "Classroom design", "Classroom layout in the editor", "Classroom scene"],
  de: ["Sprache", "Prototypgalerie", "Projekttechnologie", "VR-Brille", "Virtuelles Klassenzimmer", "Simulationsübung", "Raumgestaltung", "Raumaufteilung im Editor", "Unterrichtsszene"],
  fr: ["Langue", "Galerie du prototype", "Technologie du projet", "Casque VR", "Salle de classe virtuelle", "Exercice de simulation", "Conception de la salle", "Disposition de la salle dans l’éditeur", "Scène en classe"],
  es: ["Idioma", "Galería del prototipo", "Tecnología del proyecto", "Visor de realidad virtual", "Aula virtual", "Ejercicio de simulación", "Diseño del aula", "Distribución del aula en el editor", "Escena en clase"],
  "zh-Hans": ["语言", "原型图集", "项目技术", "VR 头显", "虚拟教室", "模拟练习", "教室设计", "编辑器中的教室布局", "课堂场景"],
  "zh-Hant": ["語言", "原型圖集", "專案技術", "VR 頭戴裝置", "虛擬教室", "模擬練習", "教室設計", "編輯器中的教室配置", "課堂場景"],
  ko: ["언어", "프로토타입 갤러리", "프로젝트 기술", "VR 헤드셋", "가상 교실", "시뮬레이션 연습", "교실 설계", "편집기에서 본 교실 배치", "교실 장면"],
  ja: ["言語", "試作版ギャラリー", "プロジェクトの技術", "VRヘッドセット", "仮想教室", "シミュレーション演習", "教室の設計", "エディターでの教室レイアウト", "教室の場面"],
  ar: ["اللغة", "معرض النموذج الأولي", "تقنيات المشروع", "نظارة الواقع الافتراضي", "صف افتراضي", "تمرين المحاكاة", "تصميم الصف", "توزيع عناصر الصف في المحرر", "مشهد في الصف"],
  th: ["ภาษา", "ภาพจากต้นแบบ", "เทคโนโลยีของโครงการ", "แว่น VR", "ห้องเรียนเสมือนจริง", "แบบฝึกในสถานการณ์จำลอง", "การออกแบบห้องเรียน", "ผังห้องเรียนในโปรแกรมแก้ไข", "ฉากในห้องเรียน"],
  ru: ["Язык", "Галерея прототипа", "Технологии проекта", "Гарнитура VR", "Виртуальный класс", "Учебное упражнение", "Проектирование класса", "Планировка класса в редакторе", "Сцена в классе"],
};

export function detailsFor(lang) {
  const [language, gallery, tech, ...captions] = labels[lang];
  return { language, gallery, tech, captions };
}
