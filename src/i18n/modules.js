const modules = {
  pl: [
    ["Symulacja VR", "Nauczyciel wchodzi do wirtualnej klasy, obserwuje zachowanie ucznia i wybiera sposób reakcji. Może powtórzyć scenariusz i porównać swoje decyzje. Środowisko powstaje z użyciem Godot i OpenXR."],
    ["Moduł pomiarowy", "Moduł oparty na ESP32 rejestruje sygnały z czujników, takich jak pulsometr, podczas sesji. Po ćwiczeniu zapis może pomóc uczestnikowi i trenerowi omówić przebieg symulacji."],
    ["Aplikacja mobilna", "Przed sesją aplikacja ma udostępniać materiały i krótkie testy. Po ćwiczeniu pozwoli wrócić do historii sesji oraz przejrzeć raport bez zakładania gogli."],
  ],
  en: [
    ["VR simulation", "Teachers enter a virtual classroom, observe a student and choose how to respond. They can repeat the scenario and compare their decisions. The environment is built with Godot and OpenXR."],
    ["Sensor module", "The ESP32 module records sensor signals, including pulse data, during the session. Afterwards, the recording can help the participant and trainer discuss what happened in the simulation."],
    ["Mobile app", "Before a session, the app is designed to provide learning materials and short quizzes. After the exercise, it will let participants review session history and reports without wearing the headset."],
  ],
  de: [
    ["VR-Simulation", "Lehrkräfte betreten ein virtuelles Klassenzimmer, beobachten das Kind und wählen eine Reaktion. Sie können das Szenario wiederholen und ihre Entscheidungen vergleichen. Die Umgebung entsteht mit Godot und OpenXR."],
    ["Sensormodul", "Das ESP32-Modul erfasst während der Übung Sensorsignale wie den Puls. Die Aufzeichnung kann anschließend bei der gemeinsamen Besprechung der Simulation helfen."],
    ["Mobile App", "Vor der Übung soll die App Lernmaterialien und kurze Tests bereitstellen. Danach sollen Teilnehmende den Sitzungsverlauf und Berichte ohne VR-Brille einsehen können."],
  ],
  fr: [
    ["Simulation en réalité virtuelle", "Les enseignants entrent dans une salle virtuelle, observent un élève et choisissent comment réagir. Ils peuvent rejouer la situation et comparer leurs décisions. L’environnement est développé avec Godot et OpenXR."],
    ["Module de mesure", "Le module ESP32 enregistre les signaux des capteurs, notamment le pouls, pendant la séance. Les mesures peuvent ensuite servir de support à la discussion avec le formateur."],
    ["Application mobile", "L’application doit proposer des ressources et de courts quiz avant la séance. Après l’exercice, elle permettra de consulter l’historique et le rapport sans casque."],
  ],
  es: [
    ["Simulación en realidad virtual", "El docente entra en un aula virtual, observa a un estudiante y elige cómo responder. Puede repetir el escenario y comparar sus decisiones. El entorno se desarrolla con Godot y OpenXR."],
    ["Módulo de medición", "El módulo ESP32 registra señales de los sensores, como el pulso, durante la sesión. El registro puede servir para comentar lo ocurrido con el formador."],
    ["Aplicación móvil", "Antes de la sesión, la aplicación ofrecerá materiales y cuestionarios breves. Después permitirá revisar el historial y el informe sin ponerse el visor."],
  ],
  "zh-Hans": [
    ["VR 模拟", "教师进入虚拟教室，观察学生并选择如何回应，也可以重复情境、比较不同决定。虚拟环境使用 Godot 和 OpenXR 构建。"],
    ["传感模块", "ESP32 模块在练习中记录心率等传感器数据，供参与者和培训者在结束后回顾模拟过程。"],
    ["移动应用", "应用计划在课前提供学习资料和简短测验。完成练习后，参与者无需佩戴头显即可查看训练记录和报告。"],
  ],
  "zh-Hant": [
    ["VR 模擬", "教師進入虛擬教室，觀察學生並選擇如何回應，也能重做情境、比較不同的決定。虛擬環境使用 Godot 和 OpenXR 建構。"],
    ["感測模組", "ESP32 模組在練習中記錄心率等感測資料，供參與者及指導者在結束後回顧模擬過程。"],
    ["行動應用程式", "應用程式規劃在課前提供學習資料和簡短測驗。練習結束後，參與者不用戴上頭戴裝置即可查看訓練紀錄與報告。"],
  ],
  ko: [
    ["VR 시뮬레이션", "교사는 가상 교실에 들어가 학생을 관찰하고 대응 방법을 선택합니다. 같은 상황을 반복하며 결정을 비교할 수 있습니다. 가상 환경은 Godot과 OpenXR로 개발합니다."],
    ["측정 모듈", "ESP32 모듈은 훈련 중 맥박 등 센서 신호를 기록합니다. 참가자와 지도자는 이 기록을 바탕으로 훈련 과정을 돌아볼 수 있습니다."],
    ["모바일 앱", "훈련 전에는 학습 자료와 짧은 퀴즈를 제공할 예정입니다. 훈련 후에는 헤드셋 없이 세션 기록과 보고서를 확인할 수 있도록 설계합니다."],
  ],
  ja: [
    ["VRシミュレーション", "教員は仮想教室に入り、児童・生徒を観察して対応を選びます。練習を繰り返して判断を比較できます。仮想環境はGodotとOpenXRで開発しています。"],
    ["計測モジュール", "ESP32モジュールは練習中に脈拍などのセンサー情報を記録します。記録は参加者と指導者が練習を振り返る際に活用できます。"],
    ["モバイルアプリ", "練習前に学習資料や短い確認テストを提供する予定です。練習後にはヘッドセットなしで履歴やレポートを確認できるようにします。"],
  ],
  ar: [
    ["محاكاة الواقع الافتراضي", "يدخل المعلّم صفًا افتراضيًا ويراقب الطالب ويختار طريقة الاستجابة. ويمكنه تكرار الموقف ومقارنة قراراته. تُبنى البيئة باستخدام Godot وOpenXR."],
    ["وحدة القياس", "تسجل وحدة ESP32 إشارات المستشعرات، مثل النبض، أثناء التمرين. ويمكن استخدام التسجيل بعد الجلسة لمناقشة ما حدث في المحاكاة مع المدرّب."],
    ["تطبيق الهاتف المحمول", "من المخطط أن يوفّر التطبيق مواد تعليمية واختبارات قصيرة قبل الجلسة، وأن يتيح بعدها مراجعة سجل التمرين والتقرير من دون ارتداء النظارة."],
  ],
  th: [
    ["การจำลองด้วย VR", "ครูเข้าสู่ห้องเรียนเสมือน สังเกตนักเรียน และเลือกวิธีตอบสนอง ผู้ฝึกสามารถทำซ้ำและเปรียบเทียบการตัดสินใจได้ สภาพแวดล้อมพัฒนาด้วย Godot และ OpenXR"],
    ["โมดูลวัดสัญญาณ", "โมดูล ESP32 บันทึกสัญญาณจากเซนเซอร์ เช่น ชีพจร ระหว่างการฝึก ข้อมูลช่วยให้ผู้ฝึกและผู้สอนทบทวนเหตุการณ์หลังจบการจำลองได้"],
    ["แอปมือถือ", "แอปมีแผนให้สื่อการเรียนและแบบทดสอบสั้น ๆ ก่อนฝึก หลังการฝึกจะสามารถดูประวัติการฝึกและรายงานได้โดยไม่ต้องสวมแว่น VR"],
  ],
  ru: [
    ["Симуляция в VR", "Учитель входит в виртуальный класс, наблюдает за учеником и выбирает способ реакции. Сценарий можно повторить и сравнить решения. Среда создаётся с помощью Godot и OpenXR."],
    ["Модуль измерения", "Модуль на ESP32 записывает сигналы датчиков, в том числе пульс, во время занятия. Запись может помочь участнику и инструктору обсудить ход симуляции."],
    ["Мобильное приложение", "До занятия приложение должно предоставлять учебные материалы и короткие тесты. После упражнения оно позволит открыть историю сессий и отчёт без гарнитуры."],
  ],
};

export default function modulesFor(lang) {
  return modules[lang].map(([title, description]) => ({ title, description }));
}
