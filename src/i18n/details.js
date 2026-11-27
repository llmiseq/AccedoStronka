const labels = {
  pl: ["Język", "Galeria prototypu", "Technologia projektu", "Gogle VR", "Wirtualna klasa", "Ćwiczenie w symulacji", "Projektowanie klasy", "Model postaci", "Scena w klasie"],
  en: ["Language", "Prototype gallery", "Project technology", "VR headset", "Virtual classroom", "Simulation exercise", "Classroom design", "Character model", "Classroom scene"],
  de: ["Sprache", "Prototypgalerie", "Projekttechnologie", "VR-Brille", "Virtuelles Klassenzimmer", "Simulationsübung", "Raumgestaltung", "Figurenmodell", "Unterrichtsszene"],
  fr: ["Langue", "Galerie du prototype", "Technologie du projet", "Casque VR", "Salle de classe virtuelle", "Exercice de simulation", "Conception de la salle", "Modèle de personnage", "Scène en classe"],
  es: ["Idioma", "Galería del prototipo", "Tecnología del proyecto", "Visor de realidad virtual", "Aula virtual", "Ejercicio de simulación", "Diseño del aula", "Modelo del personaje", "Escena en clase"],
  "zh-Hans": ["语言", "原型图集", "项目技术", "VR 头显", "虚拟教室", "模拟练习", "教室设计", "角色模型", "课堂场景"],
  "zh-Hant": ["語言", "原型圖集", "專案技術", "VR 頭戴裝置", "虛擬教室", "模擬練習", "教室設計", "角色模型", "課堂場景"],
  ko: ["언어", "프로토타입 갤러리", "프로젝트 기술", "VR 헤드셋", "가상 교실", "시뮬레이션 연습", "교실 설계", "캐릭터 모델", "교실 장면"],
  ja: ["言語", "試作版ギャラリー", "プロジェクトの技術", "VRヘッドセット", "仮想教室", "シミュレーション演習", "教室の設計", "キャラクターモデル", "教室の場面"],
  ar: ["اللغة", "معرض النموذج الأولي", "تقنيات المشروع", "نظارة الواقع الافتراضي", "صف افتراضي", "تمرين المحاكاة", "تصميم الصف", "نموذج شخصية", "مشهد في الصف"],
  th: ["ภาษา", "ภาพจากต้นแบบ", "เทคโนโลยีของโครงการ", "แว่น VR", "ห้องเรียนเสมือนจริง", "แบบฝึกในสถานการณ์จำลอง", "การออกแบบห้องเรียน", "โมเดลตัวละคร", "ฉากในห้องเรียน"],
  ru: ["Язык", "Галерея прототипа", "Технологии проекта", "Гарнитура VR", "Виртуальный класс", "Учебное упражнение", "Проектирование класса", "Модель персонажа", "Сцена в классе"],
};

const technology = {
  "zh-Hant": [
    "使用 Godot 和 OpenXR 建構虛擬教室。教師可以在模擬情境中觀察學生、選擇回應方式，並重做同一個練習。",
    "專案也探索以 ESP32 模組記錄生理訊號，作為課後回顧訓練過程的參考。",
    "規劃中的 iOS 應用程式可在 VR 設備之外提供學習材料、練習及訓練紀錄。",
  ],
  th: [
    "ห้องเรียนเสมือนจริงสร้างด้วย Godot และ OpenXR ครูสามารถสังเกตสถานการณ์ เลือกวิธีตอบสนอง และลองฝึกซ้ำได้",
    "โครงการยังสำรวจการใช้โมดูล ESP32 เพื่อบันทึกสัญญาณทางสรีรวิทยาสำหรับทบทวนหลังการฝึก",
    "แอป iOS ที่วางแผนไว้จะรวบรวมสื่อการเรียน แบบฝึก และประวัติการฝึกที่เข้าถึงได้โดยไม่ต้องใช้แว่น VR",
  ],
  ru: [
    "Виртуальный класс создаётся на Godot и OpenXR. Педагог может наблюдать за ситуацией, выбирать способ реакции и повторять упражнение.",
    "В проекте рассматривается модуль на ESP32 для записи физиологических сигналов, которые можно использовать при разборе тренировки.",
    "Планируемое приложение для iOS позволит открывать учебные материалы, упражнения и историю занятий без гарнитуры.",
  ],
};

export function detailsFor(lang, project) {
  const [language, gallery, tech, ...captions] = labels[lang];
  return { language, gallery, tech, captions, technology: technology[lang] || project.tech.blocks };
}
