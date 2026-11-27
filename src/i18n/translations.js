export const supportedLangs = ["pl", "en", "de", "fr", "es", "zh", "ko",  "jp", "ar"];

export const translations = {
  pl: {
    nav: {
      about: "O projekcie",
      mission: "Misja i wizja",
      value: "Dlaczego Accedo",
      tech: "Technologia",
      team: "Zespół",
      supervisors: "Opiekunowie",
      institutions: "Instytucje",
      contact: "Kontakt",
    },
    hero: {
      title: "Accedo: immersyjny ekosystem szkoleniowy",
      subtitle:
        "Accedo to projekt szkolenia z edukacji włączającej. W wirtualnej klasie nauczyciele i studenci pedagogiki mogą ćwiczyć reakcje na trudne sytuacje szkolne.",
      cta: "Poznaj Accedo",
    },
    about: {
      title: "O projekcie",
      intro: [
        "Celem Accedo jest stworzenie prototypu, który pomoże nauczycielom lepiej reagować na zróżnicowane potrzeby uczniów. Projekt obejmuje symulacje VR, moduł do rejestrowania sygnałów biometrycznych oraz aplikację na iOS.",
        "System został zaprojektowany tak, aby odzwierciedlać realne wyzwania współczesnej szkoły: pracę z uczniem ze spektrum autyzmu, reagowanie na napad epilepsji, radzenie sobie z przeciążeniem sensorycznym oraz podejmowanie decyzji pod presją czasu i emocji.",
        "Accedo łączy immersję VR, obiektywną analizę biometryczną oraz wsparcie dydaktyczne, tworząc środowisko, w którym nauczyciel może bezpiecznie popełniać błędy, analizować swoje reakcje i świadomie rozwijać kompetencje społeczne oraz zawodowe.",
      ],
    },
    mission: {
      title: "Misja i wizja Accedo",
      blocks: [
        "Misją Accedo jest stworzenie bezpiecznego, immersyjnego środowiska, w którym nauczyciele mogą praktycznie ćwiczyć reakcje na sytuacje kryzysowe bez ryzyka dla realnych uczniów. System pozwala na popełnianie błędów, refleksję nad decyzjami oraz świadome budowanie odporności psychicznej.",
        "Wizją projektu jest upowszechnienie narzędzi opartych na wirtualnej rzeczywistości i biometrii w edukacji włączającej. Accedo pomaga nauczycielom wejść w perspektywę ucznia z nadwrażliwościami sensorycznymi lub specjalnymi potrzebami edukacyjnymi, wspierając równość szans i inkluzywność.",
        "Accedo stawia na obiektywną biometrię zamiast wyłącznie subiektywnej oceny. Analizuje nie tylko poprawność podjętej decyzji, ale również poziom emocji i stresu, w jakim została ona podjęta. Dzięki temu stanowi wartościowe narzędzie badawcze i wdrożeniowe dla szkół oraz uczelni wyższych.",
      ],
    },
    value: {
      title: "Dlaczego Accedo",
      blocks: [
        "Accedo odpowiada na realną potrzebę praktycznego szkolenia nauczycieli w warunkach zbliżonych do rzeczywistych, ale pozbawionych ryzyka dla uczniów. Zamiast teoretycznych wykładów, oferuje doświadczenie, w którym decyzje podejmowane są w dynamicznym, immersyjnym środowisku.",
        "System wspiera edukację włączającą, umożliwiając nauczycielom wejście w rolę ucznia z nadwrażliwościami sensorycznymi, lękami czy trudnościami komunikacyjnymi. Dzięki temu pomaga lepiej zrozumieć perspektywę ucznia i świadomie budować strategie wsparcia.",
        "Accedo cechuje się wysoką mobilnością i autonomią. Lekki moduł mechatroniczny montowany na goglach VR, komunikacja bezprzewodowa oraz możliwość pracy w trybie offline sprawiają, że system można łatwo wdrożyć zarówno w szkołach, jak i na stoiskach targowych czy konferencjach.",
      ],
    },
    tech: {
      title: "Technologia Accedo",
      blocks: [
        "Moduł immersyjny VR, zbudowany w oparciu o Godot Engine 4.5 i OpenXR, generuje realistyczne, trójwymiarowe środowiska klasowe oraz interaktywne scenariusze. Scenariusze powstają we współpracy z ekspertami z Uniwersytetu Śląskiego i obejmują między innymi napad epilepsji u ucznia oraz przeciążenie sensoryczne w spektrum autyzmu.",
        "Moduł mechatroniczny bazujący na ESP32 to autonomiczne, mobilne urządzenie w obudowie drukowanej 3D, zasilane akumulatorem Li Po 4000 mAh. Wykorzystuje układ czujników składający się z elektrod EKG SparkFun SEN 11574 oraz pulsometru optycznego. Autorski algorytm fuzji danych oblicza w czasie rzeczywistym wskaźniki stresu, skupienia oraz obciążenia poznawczego.",
        "Aplikacja mobilna napisana w Swift i SwiftUI na system iOS stanowi wsparcie procesu dydaktycznego poza środowiskiem VR. Zawiera moduł edukacyjny, testowy, egzaminacyjny oraz wbudowanego asystenta AI wspierającego analizę sytuacji pedagogicznych. Jest przystosowana do pracy w trybie offline oraz do generowania raportów biometrycznych i historii sesji.",
      ],
    },
    team: {
      title: "Zespół",
      subtitle: "Zespół uczniowski",
      members: [
        {
          name: "Jakub Michalik",
          email: "michalik.jakub@zs6sobieski.edu.pl",
        },
        {
          name: "Oskar Gala",
          email: "gala.oskar@zs6sobieski.edu.pl",
        },
        {
          name: "Kryspin Wilczyński",
          email: "wilczynski.kryspin@zs6sobieski.edu.pl",
        },
      ],
    },
    supervisors: {
      title: "Opiekunowie i wsparcie",
      subtitle: "Zespół wspierający projekt",
      school: [
        { name: "mgr Bogusława Nidecka", role: "Opiekun szkolny projektu Accedo" },
        { name: "mgr Marcin Mazur", role: "Opiekun szkolny ds. technologii i wdrożeń" },
      ],
      academic: [
        {
          name: "dr Dorota Prysak",
          role: "Wsparcie merytoryczne: pedagogika, scenariusze edukacyjne",
        },
      ],
    },
    institutions: {
      title: "Instytucje współpracujące",
      subtitle: "Partnerzy projektu Accedo",
      items: [
        {
          name: "ZS6 im. Króla Jana III Sobieskiego",
          desc: "Szkoła średnia zawodowa, środowisko testowe i organizacyjne projektu.",
          location: "Jastrzębie Zdrój, Polska",
          url: "https://zs6sobieski.pl",
        },
        {
          name: "Uniwersytet Śląski",
          desc: "Wsparcie eksperckie w zakresie pedagogiki i scenariuszy VR.",
          location: "Katowice, Polska",
          url: "https://us.edu.pl",
        },
      ],
    },
    contact: {
      title: "Kontakt",
      subtitle: "Chcesz dowiedzieć się więcej o Accedo?",
      schoolTitle: "Zespół Szkół nr 6 im. Króla Jana III Sobieskiego",
      schoolAddress: "ul. Harcerska 12, 44 335 Jastrzębie Zdrój, Polska",
      note: "Projekt demonstracyjny: dane kontaktowe służą do celów informacyjnych.",
    },
    footer: {
      madeBy: "Made by Jakub Michalik",
      tech: "React • Node 24 • Godot 4.5 • ESP32 • SwiftUI",
    },
  },

  de: {
  nav: {
    about: "Über das Projekt",
    mission: "Mission und Vision",
    value: "Warum Accedo",
    tech: "Technologie",
    team: "Team",
    supervisors: "Betreuer",
    institutions: "Institutionen",
    contact: "Kontakt",
  },
  hero: {
    title: "Accedo: immersives Schulungsökosystem",
    subtitle:
      "VR, Biometrie und eine mobile Anwendung unterstützen Lehrkräfte, Pädagogikstudierende und Ausbildende bei der Entwicklung von Soft Skills und Stressresistenz.",
    cta: "Accedo kennenlernen",
  },
  about: {
    title: "Über das Projekt",
    intro: [
      "Accedo ist ein innovatives, modulares Schulungsökosystem, das für Lehrkräfte, Pädagogikstudierende und Ausbildende entwickelt wurde. Das Projekt integriert virtuelle Realität, ein autonomes mechatronisches Modul zur Erfassung biometrischer Signale sowie eine mobile iOS‑Anwendung.",
      "Das System wurde entwickelt, um die realen Herausforderungen der modernen Schule widerzuspiegeln: die Arbeit mit Schülern aus dem Autismusspektrum, die Reaktion auf epileptische Anfälle, den Umgang mit sensorischer Überlastung sowie das Treffen von Entscheidungen unter Zeit- und emotionalem Druck.",
      "Accedo verbindet VR‑Immersion, objektive biometrische Analyse und didaktische Unterstützung und schafft eine Umgebung, in der Lehrkräfte sicher Fehler machen, ihre Reaktionen analysieren und bewusst soziale und berufliche Kompetenzen entwickeln können.",
    ],
  },
  mission: {
    title: "Mission und Vision von Accedo",
    blocks: [
      "Die Mission von Accedo besteht darin, eine sichere, immersive Umgebung zu schaffen, in der Lehrkräfte Krisenreaktionen praktisch üben können, ohne ein Risiko für reale Schüler darzustellen. Das System ermöglicht Fehler, Reflexion über Entscheidungen und den bewussten Aufbau psychischer Widerstandskraft.",
      "Die Vision des Projekts ist die Verbreitung von Werkzeugen, die auf virtueller Realität und Biometrie basieren, in der inklusiven Bildung. Accedo hilft Lehrkräften, die Perspektive von Schülern mit sensorischer Überempfindlichkeit oder besonderen Bildungsbedürfnissen einzunehmen und unterstützt Chancengleichheit und Inklusion.",
      "Accedo setzt auf objektive Biometrie statt ausschließlich subjektiver Bewertung. Es analysiert nicht nur die Richtigkeit der getroffenen Entscheidung, sondern auch das Maß an Emotionen und Stress, unter dem sie getroffen wurde. Dadurch ist es ein wertvolles Forschungs- und Implementierungswerkzeug für Schulen und Hochschulen.",
    ],
  },
  value: {
    title: "Warum Accedo",
    blocks: [
      "Accedo beantwortet den realen Bedarf an praktischer Lehrkräfteausbildung unter realitätsnahen, aber risikofreien Bedingungen für Schüler. Statt theoretischer Vorlesungen bietet es Erfahrungen, bei denen Entscheidungen in einer dynamischen, immersiven Umgebung getroffen werden.",
      "Das System unterstützt die inklusive Bildung, indem es Lehrkräften ermöglicht, in die Rolle eines Schülers mit sensorischer Überempfindlichkeit, Ängsten oder Kommunikationsschwierigkeiten zu schlüpfen. Dadurch hilft es, die Perspektive des Schülers besser zu verstehen und bewusst Unterstützungsstrategien zu entwickeln.",
      "Accedo zeichnet sich durch hohe Mobilität und Autonomie aus. Ein leichtes mechatronisches Modul, das an VR‑Brillen montiert wird, drahtlose Kommunikation und die Möglichkeit des Offline‑Betriebs ermöglichen eine einfache Implementierung sowohl in Schulen als auch auf Messeständen oder Konferenzen.",
    ],
  },
  tech: {
    title: "Accedo‑Technologie",
    blocks: [
      "Das immersive VR‑Modul, entwickelt auf Basis von Godot Engine 4.5 und OpenXR, erzeugt realistische, dreidimensionale Klassenumgebungen und interaktive Szenarien. Die Szenarien entstehen in Zusammenarbeit mit Experten der Universität Schlesien und umfassen unter anderem einen epileptischen Anfall eines Schülers sowie sensorische Überlastung im Autismusspektrum.",
      "Das mechatronische Modul auf Basis des ESP32 ist ein autonomes, mobiles Gerät in einem 3D‑gedruckten Gehäuse, betrieben mit einem Li‑Po‑Akku mit 4000 mAh. Es verwendet ein Sensorsystem aus EKG‑Elektroden SparkFun SEN 11574 und einem optischen Pulssensor. Ein proprietärer Datenfusionsalgorithmus berechnet in Echtzeit Stress‑, Konzentrations‑ und kognitive Belastungsindikatoren.",
      "Die mobile Anwendung, geschrieben in Swift und SwiftUI für iOS, unterstützt den didaktischen Prozess außerhalb der VR‑Umgebung. Sie enthält ein Bildungs‑, Test‑ und Prüfungsmodul sowie einen integrierten KI‑Assistenten zur Analyse pädagogischer Situationen. Sie ist für den Offline‑Betrieb geeignet und ermöglicht die Erstellung biometrischer Berichte und Sitzungsverläufe.",
    ],
  },
  team: {
    title: "Lerne das Team kennen",
    subtitle: "Schülerteam",
    members: [
      {
        name: "Jakub Michalik",
        email: "michalik.jakub@zs6sobieski.edu.pl",
      },
      {
        name: "Oskar Gala",
        email: "gala.oskar@zs6sobieski.edu.pl",
      },
      {
        name: "Kryspin Wilczyński",
        email: "wilczynski.kryspin@zs6sobieski.edu.pl",
      },
    ],
  },
  supervisors: {
    title: "Betreuer und Unterstützung",
    subtitle: "Das Projekt unterstützendes Team",
    school: [
      { name: "mgr Bogusława Nidecka", role: "Schulbetreuerin des Projekts Accedo" },
      { name: "mgr Marcin Mazur", role: "Schulbetreuer für Technologie und Implementierung" },
    ],
    academic: [
      {
        name: "dr Dorota Prysak",
        role: "Fachliche Unterstützung: Pädagogik, Bildungsszenarien",
      },
    ],
  },
  institutions: {
    title: "Kooperierende Institutionen",
    subtitle: "Partner des Projekts Accedo",
    items: [
      {
        name: "ZS6 König Johann III. Sobieski",
        desc: "Berufliche Sekundarschule, Test- und Organisationsumgebung des Projekts.",
        location: "Jastrzębie Zdrój, Polen",
        url: "https://zs6sobieski.pl",
      },
      {
        name: "Universität Schlesien",
        desc: "Expertenunterstützung im Bereich Pädagogik und VR‑Szenarien.",
        location: "Katowice, Polen",
        url: "https://us.edu.pl",
      },
    ],
  },
  contact: {
    title: "Kontakt",
    subtitle: "Möchten Sie mehr über Accedo erfahren?",
    schoolTitle: "Schulkomplex Nr. 6 König Johann III. Sobieski",
    schoolAddress: "ul. Harcerska 12, 44‑335 Jastrzębie Zdrój, Polen",
    note: "Demoprojekt: Kontaktinformationen dienen nur zu Informationszwecken.",
  },
  footer: {
    madeBy: "Erstellt von Jakub Michalik",
    tech: "React • Node 24 • Godot 4.5 • ESP32 • SwiftUI",
  },
},

  ar: {
  nav: {
    about: "حول المشروع",
    mission: "المهمة والرؤية",
    value: "لماذا أكيدو",
    tech: "التقنية",
    team: "الفريق",
    supervisors: "المشرفون",
    institutions: "المؤسسات",
    contact: "اتصال",
  },
  hero: {
    title: "Accedo: نظام تدريب غامر",
    subtitle:
      "الواقع الافتراضي والقياسات الحيوية وتطبيق الهاتف المحمول يدعمون المعلمين وطلاب التربية والمربين في تطوير المهارات الناعمة ومقاومة الضغط.",
    cta: "اكتشف Accedo",
  },
  heroCards: [
    {
      title: "الواقع الافتراضي",
      text: "سيناريوهات صفية غامرة مبنية باستخدام Godot Engine 4.5 و OpenXR.",
    },
    {
      title: "القياسات الحيوية",
      text: "وحدة ESP32 مع أقطاب ECG ومستشعر نبض بصري لتحليل الضغط في الوقت الحقيقي.",
    },
    {
      title: "تطبيق الهاتف",
      text: "تطبيق iOS يحتوي على وحدات تعليمية واختبارات وامتحانات بالإضافة إلى مساعد ذكاء اصطناعي.",
    },
  ],
  about: {
    title: "حول المشروع",
    intro: [
      "Accedo هو نظام تدريب مبتكر ومعياري مصمم للمعلمين وطلاب التربية والمربين. يدمج المشروع الواقع الافتراضي ووحدة ميكاترونية مستقلة لتسجيل الإشارات الحيوية بالإضافة إلى تطبيق iOS.",
      "تم تصميم النظام ليعكس التحديات الحقيقية للمدرسة الحديثة: العمل مع طالب من طيف التوحد، الاستجابة لنوبة صرع، التعامل مع الحمل الحسي الزائد، واتخاذ القرارات تحت الضغط الزمني والعاطفي.",
      "يجمع Accedo بين الانغماس في الواقع الافتراضي والتحليل الحيوي الموضوعي والدعم التعليمي، مما يخلق بيئة يمكن للمعلم فيها ارتكاب الأخطاء بأمان وتحليل ردود فعله وتطوير مهاراته الاجتماعية والمهنية بوعي.",
    ],
  },
  mission: {
    title: "مهمة ورؤية Accedo",
    blocks: [
      "تهدف مهمة Accedo إلى إنشاء بيئة آمنة وغامرة يمكن للمعلمين فيها ممارسة الاستجابة للمواقف الحرجة دون أي خطر على الطلاب الحقيقيين. يسمح النظام بارتكاب الأخطاء والتفكير في القرارات وبناء المرونة النفسية بوعي.",
      "تتمثل رؤية المشروع في نشر الأدوات القائمة على الواقع الافتراضي والقياسات الحيوية في التعليم الشامل. يساعد Accedo المعلمين على فهم منظور الطالب ذي الحساسية الحسية أو الاحتياجات التعليمية الخاصة، مما يدعم تكافؤ الفرص والاندماج.",
      "يعتمد Accedo على القياسات الحيوية الموضوعية بدلاً من التقييمات الذاتية فقط. فهو يحلل ليس فقط صحة القرار المتخذ، بل أيضًا مستوى المشاعر والضغط أثناء اتخاذه، مما يجعله أداة قيمة للبحث والتطبيق في المدارس والجامعات.",
    ],
  },
  value: {
    title: "لماذا أكيدو",
    blocks: [
      "يلبي Accedo الحاجة الحقيقية لتدريب عملي للمعلمين في ظروف قريبة من الواقع ولكن دون أي خطر على الطلاب. بدلاً من المحاضرات النظرية، يقدم تجربة يتم فيها اتخاذ القرارات في بيئة ديناميكية وغامرة.",
      "يدعم النظام التعليم الشامل من خلال السماح للمعلمين بتجربة دور الطالب ذي الحساسية الحسية أو المخاوف أو صعوبات التواصل. يساعد ذلك على فهم منظور الطالب بشكل أفضل وتطوير استراتيجيات الدعم بوعي.",
      "يتميز Accedo بالتنقل العالي والاستقلالية. وحدة ميكاترونية خفيفة الوزن تُثبت على نظارات الواقع الافتراضي، واتصال لاسلكي، وإمكانية العمل دون اتصال، مما يجعل النظام سهل التطبيق في المدارس والمعارض والمؤتمرات.",
    ],
  },
  tech: {
    title: "تقنية Accedo",
    blocks: [
      "تم بناء وحدة الواقع الافتراضي الغامرة باستخدام Godot Engine 4.5 و OpenXR، وتولد بيئات صفية ثلاثية الأبعاد واقعية وسيناريوهات تفاعلية. تم تطوير السيناريوهات بالتعاون مع خبراء من جامعة سيليزيا وتشمل نوبة صرع لدى طالب وحملًا حسيًا زائدًا في طيف التوحد.",
      "تعتمد الوحدة الميكاترونية على ESP32 وهي جهاز مستقل ومتنقل داخل هيكل مطبوع ثلاثي الأبعاد، يعمل ببطارية Li‑Po بسعة 4000 mAh. تستخدم نظام مستشعرات يتكون من أقطاب ECG ومستشعر نبض بصري. يحسب خوارزم التحليل الحيوي الخاص مؤشرات الضغط والتركيز والعبء المعرفي في الوقت الحقيقي.",
      "تطبيق الهاتف المحمول مكتوب بـ Swift و SwiftUI لنظام iOS، ويدعم العملية التعليمية خارج بيئة الواقع الافتراضي. يحتوي على وحدة تعليمية واختبارية وامتحانية بالإضافة إلى مساعد ذكاء اصطناعي. يدعم العمل دون اتصال ويولد تقارير حيوية وسجل الجلسات.",
    ],
  },
  team: {
    title: "تعرف على الفريق",
    subtitle: "فريق الطلاب",
    members: [
      { name: "Jakub Michalik", email: "michalik.jakub@zs6sobieski.edu.pl" },
      { name: "Oskar Gala", email: "gala.oskar@zs6sobieski.edu.pl" },
      { name: "Kryspin Wilczyński", email: "wilczynski.kryspin@zs6sobieski.edu.pl" },
    ],
  },
  supervisors: {
    title: "المشرفون والدعم",
    subtitle: "الفريق الداعم للمشروع",
    school: [
      { name: "mgr Bogusława Nidecka", role: "مشرفة المشروع المدرسية" },
      { name: "mgr Marcin Mazur", role: "مشرف المدرسة للتقنية والتنفيذ" },
    ],
    academic: [
      {
        name: "dr Dorota Prysak",
        role: "دعم أكاديمي: التربية والسيناريوهات التعليمية",
      },
    ],
  },
  institutions: {
    title: "المؤسسات المتعاونة",
    subtitle: "شركاء مشروع Accedo",
    items: [
      {
        name: "ZS6 الملك يان الثالث سوبيسكي",
        desc: "مدرسة ثانوية مهنية: بيئة اختبار وتنظيم للمشروع.",
        location: "Jastrzębie Zdrój، بولندا",
        url: "https://zs6sobieski.pl",
      },
      {
        name: "جامعة سيليزيا",
        desc: "دعم خبراء في التربية والسيناريوهات التعليمية بالواقع الافتراضي.",
        location: "كاتوفيتسه، بولندا",
        url: "https://us.edu.pl",
      },
    ],
  },
  contact: {
    title: "اتصال",
    subtitle: "هل تريد معرفة المزيد عن Accedo؟",
    schoolTitle: "مجمع المدارس رقم 6 الملك يان الثالث سوبيسكي",
    schoolAddress: "ul. Harcerska 12، 44‑335 Jastrzębie Zdrój، بولندا",
    note: "مشروع تجريبي: معلومات الاتصال للاستخدام الإعلامي فقط.",
  },
  footer: {
    madeBy: "تم الإنشاء بواسطة Jakub Michalik",
    tech: "React • Node 24 • Godot 4.5 • ESP32 • SwiftUI",
  },
},


  jp: {
  nav: {
    about: "プロジェクトについて",
    mission: "ミッションとビジョン",
    value: "なぜ Accedo なのか",
    tech: "技術",
    team: "チーム",
    supervisors: "指導者",
    institutions: "協力機関",
    contact: "お問い合わせ",
  },
  hero: {
    title: "Accedo: 没入型トレーニングエコシステム",
    subtitle:
      "VR、生体認証、モバイルアプリが教師、教育学専攻の学生、教育者のソフトスキルとストレス耐性の向上を支援します。",
    cta: "Accedo を知る",
  },
  about: {
    title: "プロジェクトについて",
    intro: [
      "Accedo は、教師、教育学の学生、教育者のために設計された革新的でモジュール式のトレーニングエコシステムです。プロジェクトは、仮想現実、生体信号を記録する自律型メカトロニクスモジュール、そして iOS モバイルアプリを統合しています。",
      "このシステムは、現代の学校が直面する現実の課題を反映するよう設計されています。自閉症スペクトラムの生徒との関わり、てんかん発作への対応、感覚過負荷への対処、時間的・感情的プレッシャー下での意思決定などが含まれます。",
      "Accedo は VR の没入感、客観的な生体分析、教育支援を組み合わせ、教師が安全に失敗し、自身の反応を分析し、社会的および専門的能力を意識的に発展させることができる環境を提供します。",
    ],
  },
  mission: {
    title: "Accedo のミッションとビジョン",
    blocks: [
      "Accedo のミッションは、教師が実際の生徒に危険を与えることなく危機状況への対応を実践できる、安全で没入型の環境を作ることです。システムは失敗、意思決定の振り返り、心理的レジリエンスの意識的な構築を可能にします。",
      "プロジェクトのビジョンは、仮想現実と生体認証に基づくツールをインクルーシブ教育に普及させることです。Accedo は、感覚過敏や特別な教育的ニーズを持つ生徒の視点を教師が理解することを助け、機会均等とインクルージョンを支援します。",
      "Accedo は主観的評価だけでなく、客観的な生体データを重視します。意思決定の正確性だけでなく、その決定が下された際の感情やストレスのレベルも分析します。これにより、学校や高等教育機関にとって価値ある研究・導入ツールとなります。",
    ],
  },
  value: {
    title: "なぜ Accedo なのか",
    blocks: [
      "Accedo は、現実に近いが生徒に危険のない条件下で教師を実践的に訓練するという実際のニーズに応えます。理論講義ではなく、動的で没入型の環境で意思決定を行う体験を提供します。",
      "このシステムは、感覚過敏、不安、コミュニケーションの困難を抱える生徒の役割を教師が体験できるようにすることで、インクルーシブ教育を支援します。これにより、生徒の視点をより深く理解し、支援戦略を意識的に構築できます。",
      "Accedo は高いモビリティと自律性を備えています。VR ヘッドセットに取り付けられる軽量メカトロニクスモジュール、無線通信、オフライン動作機能により、学校だけでなく展示会や会議でも容易に導入できます。",
    ],
  },
  tech: {
    title: "Accedo の技術",
    blocks: [
      "没入型 VR モジュールは Godot Engine 4.5 と OpenXR を基盤として構築され、現実的な 3D 教室環境とインタラクティブなシナリオを生成します。シナリオはシレジア大学の専門家と協力して開発され、生徒のてんかん発作や自閉症スペクトラムにおける感覚過負荷などを含みます。",
      "ESP32 を基盤としたメカトロニクスモジュールは、3D プリントケースに収められた自律型モバイルデバイスで、4000 mAh の Li‑Po バッテリーで動作します。SparkFun SEN 11574 ECG 電極と光学式脈拍センサーで構成されたセンサーシステムを使用します。独自のデータ融合アルゴリズムがストレス、集中度、認知負荷の指標をリアルタイムで計算します。",
      "Swift と SwiftUI で iOS 向けに開発されたモバイルアプリは、VR 環境外で教育プロセスを支援します。教育モジュール、テストモジュール、試験モジュール、教育状況を分析する AI アシスタントを備えています。オフライン動作に対応し、生体認証レポートやセッション履歴を生成できます。",
    ],
  },
  team: {
    title: "Meet the team",
    subtitle: "学生チーム",
    members: [
      {
        name: "Jakub Michalik",
        email: "michalik.jakub@zs6sobieski.edu.pl",
      },
      {
        name: "Oskar Gala",
        email: "gala.oskar@zs6sobieski.edu.pl",
      },
      {
        name: "Kryspin Wilczyński",
        email: "wilczynski.kryspin@zs6sobieski.edu.pl",
      },
    ],
  },
  supervisors: {
    title: "指導と支援",
    subtitle: "プロジェクト支援チーム",
    school: [
      { name: "mgr Bogusława Nidecka", role: "Accedo プロジェクト学校指導者" },
      { name: "mgr Marcin Mazur", role: "技術および導入担当学校指導者" },
    ],
    academic: [
      {
        name: "dr Dorota Prysak",
        role: "学術支援: 教育学、教育シナリオ",
      },
    ],
  },
  institutions: {
    title: "協力機関",
    subtitle: "Accedo プロジェクトパートナー",
    items: [
      {
        name: "ZS6 ヤン3世ソビエスキ学校",
        desc: "職業高校、プロジェクトのテストおよび運営環境。",
        location: "Jastrzębie Zdrój、ポーランド",
        url: "https://zs6sobieski.pl",
      },
      {
        name: "シレジア大学",
        desc: "教育学および VR シナリオに関する専門家支援。",
        location: "カトヴィツェ、ポーランド",
        url: "https://us.edu.pl",
      },
    ],
  },
  contact: {
    title: "お問い合わせ",
    subtitle: "Accedo についてもっと知りたいですか？",
    schoolTitle: "ヤン3世ソビエスキ第6学校複合体",
    schoolAddress: "ul. Harcerska 12, 44‑335 Jastrzębie Zdrój、ポーランド",
    note: "デモプロジェクト: 連絡先情報は参考用です。",
  },
  footer: {
    madeBy: "Made by Jakub Michalik",
    tech: "React • Node 24 • Godot 4.5 • ESP32 • SwiftUI",
  },
},

  fr: {
  nav: {
    about: "À propos du projet",
    mission: "Mission et vision",
    value: "Pourquoi Accedo",
    tech: "Technologie",
    team: "Équipe",
    supervisors: "Encadrants",
    institutions: "Institutions",
    contact: "Contact",
  },
  hero: {
    title: "Accedo: écosystème de formation immersif",
    subtitle:
      "La réalité virtuelle, la biométrie et une application mobile soutiennent les enseignants, les étudiants en pédagogie et les éducateurs dans le développement des compétences sociales et de la résistance au stress.",
    cta: "Découvrir Accedo",
  },
  about: {
    title: "À propos du projet",
    intro: [
      "Accedo est un écosystème de formation innovant et modulaire conçu pour les enseignants, les étudiants en pédagogie et les éducateurs. Le projet intègre la réalité virtuelle, un module mécatronique autonome enregistrant les signaux biométriques ainsi qu’une application mobile iOS.",
      "Le système a été conçu pour refléter les défis réels de l’école moderne : travailler avec un élève du spectre autistique, réagir à une crise d’épilepsie, gérer une surcharge sensorielle et prendre des décisions sous pression temporelle et émotionnelle.",
      "Accedo combine l’immersion VR, l’analyse biométrique objective et le soutien didactique, créant un environnement dans lequel l’enseignant peut faire des erreurs en toute sécurité, analyser ses réactions et développer consciemment ses compétences sociales et professionnelles.",
    ],
  },
  mission: {
    title: "Mission et vision d’Accedo",
    blocks: [
      "La mission d’Accedo est de créer un environnement immersif et sécurisé dans lequel les enseignants peuvent pratiquer des réactions à des situations de crise sans risque pour les élèves réels. Le système permet de faire des erreurs, de réfléchir aux décisions et de développer consciemment la résilience psychologique.",
      "La vision du projet est de diffuser des outils basés sur la réalité virtuelle et la biométrie dans l’éducation inclusive. Accedo aide les enseignants à adopter la perspective d’un élève présentant une hypersensibilité sensorielle ou des besoins éducatifs particuliers, soutenant l’égalité des chances et l’inclusion.",
      "Accedo mise sur la biométrie objective plutôt que sur une évaluation uniquement subjective. Il analyse non seulement la pertinence de la décision prise, mais aussi le niveau d’émotions et de stress dans lequel elle a été prise. Cela en fait un outil précieux pour la recherche et la mise en œuvre dans les écoles et les établissements d’enseignement supérieur.",
    ],
  },
  value: {
    title: "Pourquoi Accedo",
    blocks: [
      "Accedo répond au besoin réel d’une formation pratique des enseignants dans des conditions proches de la réalité mais sans risque pour les élèves. Au lieu de cours théoriques, il offre une expérience où les décisions sont prises dans un environnement dynamique et immersif.",
      "Le système soutient l’éducation inclusive en permettant aux enseignants d’adopter le rôle d’un élève présentant une hypersensibilité sensorielle, des peurs ou des difficultés de communication. Cela aide à mieux comprendre la perspective de l’élève et à développer consciemment des stratégies de soutien.",
      "Accedo se caractérise par une grande mobilité et autonomie. Un module mécatronique léger monté sur des lunettes VR, une communication sans fil et la possibilité de fonctionner hors ligne permettent une mise en œuvre facile dans les écoles ainsi que sur les stands de salons ou conférences.",
    ],
  },
  tech: {
    title: "Technologie Accedo",
    blocks: [
      "Le module VR immersif, construit sur Godot Engine 4.5 et OpenXR, génère des environnements de classe tridimensionnels réalistes et des scénarios interactifs. Les scénarios sont élaborés en collaboration avec des experts de l’Université de Silésie et incluent notamment une crise d’épilepsie chez un élève et une surcharge sensorielle dans le spectre autistique.",
      "Le module mécatronique basé sur l’ESP32 est un dispositif autonome et mobile dans un boîtier imprimé en 3D, alimenté par une batterie Li‑Po de 4000 mAh. Il utilise un ensemble de capteurs composé d’électrodes ECG SparkFun SEN 11574 et d’un capteur optique de pouls. Un algorithme propriétaire de fusion de données calcule en temps réel les indicateurs de stress, de concentration et de charge cognitive.",
      "L’application mobile, écrite en Swift et SwiftUI pour iOS, soutient le processus didactique en dehors de l’environnement VR. Elle comprend un module éducatif, un module de test, un module d’examen ainsi qu’un assistant IA intégré pour analyser les situations pédagogiques. Elle est adaptée au fonctionnement hors ligne et à la génération ultérieure de rapports biométriques et d’historiques de sessions.",
    ],
  },
  team: {
    title: "Meet the team",
    subtitle: "Équipe d’élèves",
    members: [
      {
        name: "Jakub Michalik",
        email: "michalik.jakub@zs6sobieski.edu.pl",
      },
      {
        name: "Oskar Gala",
        email: "gala.oskar@zs6sobieski.edu.pl",
      },
      {
        name: "Kryspin Wilczyński",
        email: "wilczynski.kryspin@zs6sobieski.edu.pl",
      },
    ],
  },
  supervisors: {
    title: "Encadrants et soutien",
    subtitle: "Équipe soutenant le projet",
    school: [
      { name: "mgr Bogusława Nidecka", role: "Encadrante scolaire du projet Accedo" },
      { name: "mgr Marcin Mazur", role: "Encadrant scolaire pour la technologie et la mise en œuvre" },
    ],
    academic: [
      {
        name: "dr Dorota Prysak",
        role: "Soutien académique: pédagogie, scénarios éducatifs",
      },
    ],
  },
  institutions: {
    title: "Institutions partenaires",
    subtitle: "Partenaires du projet Accedo",
    items: [
      {
        name: "ZS6 Roi Jean III Sobieski",
        desc: "Lycée professionnel, environnement de test et d’organisation du projet.",
        location: "Jastrzębie Zdrój, Pologne",
        url: "https://zs6sobieski.pl",
      },
      {
        name: "Université de Silésie",
        desc: "Soutien d’experts en pédagogie et scénarios VR.",
        location: "Katowice, Pologne",
        url: "https://us.edu.pl",
      },
    ],
  },
  contact: {
    title: "Contact",
    subtitle: "Vous souhaitez en savoir plus sur Accedo ?",
    schoolTitle: "Complexe scolaire n° 6 Roi Jean III Sobieski",
    schoolAddress: "ul. Harcerska 12, 44‑335 Jastrzębie Zdrój, Pologne",
    note: "Projet démonstratif: les coordonnées sont fournies à titre informatif.",
  },
  footer: {
    madeBy: "Made by Jakub Michalik",
    tech: "React • Node 24 • Godot 4.5 • ESP32 • SwiftUI",
  },
},

  zh: {
  nav: {
    about: "关于项目",
    mission: "使命与愿景",
    value: "为什么选择 Accedo",
    tech: "技术",
    team: "团队",
    supervisors: "指导人员",
    institutions: "合作机构",
    contact: "联系",
  },
  hero: {
    title: "Accedo: 沉浸式培训生态系统",
    subtitle:
      "虚拟现实、生物识别技术和移动应用程序帮助教师、教育学学生和教育工作者发展软技能和抗压能力。",
    cta: "了解 Accedo",
  },
  about: {
    title: "关于项目",
    intro: [
      "Accedo 是一个创新的模块化培训生态系统，专为教师、教育学学生和教育工作者设计。该项目整合了虚拟现实、用于记录生物信号的自主机电模块以及 iOS 移动应用程序。",
      "系统旨在反映现代学校的真实挑战：与自闭症谱系学生合作、应对癫痫发作、处理感官过载，以及在时间和情绪压力下做出决策。",
      "Accedo 将 VR 沉浸式体验、客观的生物识别分析和教学支持结合起来，创建一个环境，使教师能够安全地犯错、分析自己的反应，并有意识地发展社会和职业能力。",
    ],
  },
  mission: {
    title: "Accedo 的使命与愿景",
    blocks: [
      "Accedo 的使命是创建一个安全的沉浸式环境，使教师能够在没有对真实学生造成风险的情况下练习应对危机情境。系统允许犯错、反思决策，并有意识地建立心理韧性。",
      "项目的愿景是推广基于虚拟现实和生物识别技术的工具，以支持融合教育。Accedo 帮助教师进入具有感官敏感性或特殊教育需求学生的视角，从而促进机会平等和包容性。",
      "Accedo 注重客观的生物识别数据，而非仅依赖主观评价。它不仅分析所做决策的正确性，还分析决策时的情绪和压力水平。因此，它成为学校和高等教育机构中具有价值的研究和实施工具。",
    ],
  },
  value: {
    title: "为什么选择 Accedo",
    blocks: [
      "Accedo 满足了教师在接近真实但对学生无风险的条件下进行实践培训的实际需求。它不是理论讲座，而是提供在动态、沉浸式环境中做出决策的体验。",
      "系统支持融合教育，使教师能够体验具有感官敏感性、焦虑或沟通困难的学生的角色。这有助于更好地理解学生的视角，并有意识地制定支持策略。",
      "Accedo 具有高度的移动性和自主性。轻量级机电模块可安装在 VR 头显上，支持无线通信，并可离线运行，使系统易于在学校、展会或会议上部署。",
    ],
  },
  tech: {
    title: "Accedo 技术",
    blocks: [
      "沉浸式 VR 模块基于 Godot Engine 4.5 和 OpenXR 构建，生成逼真的三维课堂环境和交互式场景。场景与西里西亚大学专家合作开发，包括学生癫痫发作和自闭症谱系中的感官过载等情境。",
      "基于 ESP32 的机电模块是一个自主移动设备，采用 3D 打印外壳，由 4000 mAh Li‑Po 电池供电。它使用由 SparkFun SEN 11574 心电电极和光学脉搏传感器组成的传感器系统。自主数据融合算法实时计算压力、专注度和认知负荷指标。",
      "使用 Swift 和 SwiftUI 为 iOS 编写的移动应用程序在 VR 环境之外支持教学过程。它包含教育模块、测试模块、考试模块以及用于分析教育情境的内置 AI 助手。应用程序支持离线运行，并可生成生物识别报告和会话历史记录。",
    ],
  },
  team: {
    title: "Meet the team",
    subtitle: "学生团队",
    members: [
      {
        name: "Jakub Michalik",
        email: "michalik.jakub@zs6sobieski.edu.pl",
      },
      {
        name: "Oskar Gala",
        email: "gala.oskar@zs6sobieski.edu.pl",
      },
      {
        name: "Kryspin Wilczyński",
        email: "wilczynski.kryspin@zs6sobieski.edu.pl",
      },
    ],
  },
  supervisors: {
    title: "指导与支持",
    subtitle: "项目支持团队",
    school: [
      { name: "mgr Bogusława Nidecka", role: "Accedo 项目学校指导教师" },
      { name: "mgr Marcin Mazur", role: "学校技术与实施指导教师" },
    ],
    academic: [
      {
        name: "dr Dorota Prysak",
        role: "学术支持: 教育学、教学场景设计",
      },
    ],
  },
  institutions: {
    title: "合作机构",
    subtitle: "Accedo 项目合作伙伴",
    items: [
      {
        name: "ZS6 国王约翰三世索别斯基学校",
        desc: "职业中学，项目的测试和组织环境。",
        location: "Jastrzębie Zdrój，波兰",
        url: "https://zs6sobieski.pl",
      },
      {
        name: "西里西亚大学",
        desc: "在教育学和 VR 场景方面提供专家支持。",
        location: "卡托维兹，波兰",
        url: "https://us.edu.pl",
      },
    ],
  },
  contact: {
    title: "联系",
    subtitle: "想了解更多关于 Accedo 的信息吗？",
    schoolTitle: "国王约翰三世索别斯基第六学校综合体",
    schoolAddress: "ul. Harcerska 12, 44‑335 Jastrzębie Zdrój，波兰",
    note: "演示项目: 联系信息仅用于参考。",
  },
  footer: {
    madeBy: "Made by Jakub Michalik",
    tech: "React • Node 24 • Godot 4.5 • ESP32 • SwiftUI",
  },
},

  ko: {
  nav: {
    about: "프로젝트 소개",
    mission: "미션과 비전",
    value: "왜 Accedo인가",
    tech: "기술",
    team: "팀",
    supervisors: "지도 교사",
    institutions: "협력 기관",
    contact: "연락처",
  },
  hero: {
    title: "Accedo: 몰입형 교육 생태계",
    subtitle:
      "VR, 생체 인식 및 모바일 애플리케이션은 교사, 교육학 전공 학생 및 교육자를 지원하여 소프트 스킬과 스트레스 대응 능력을 개발하도록 돕습니다.",
    cta: "Accedo 알아보기",
  },
  about: {
    title: "프로젝트 소개",
    intro: [
      "Accedo는 교사, 교육학 학생 및 교육자를 위해 설계된 혁신적인 모듈형 교육 생태계입니다. 이 프로젝트는 가상 현실, 생체 신호를 기록하는 자율 메카트로닉 모듈 및 iOS 모바일 애플리케이션을 통합합니다.",
      "이 시스템은 현대 학교의 실제 도전을 반영하도록 설계되었습니다. 예를 들어 자폐 스펙트럼 학생과의 작업, 간질 발작 대응, 감각 과부하 처리, 시간 및 감정적 압박 속에서의 의사 결정 등이 있습니다.",
      "Accedo는 VR 몰입, 객관적인 생체 분석 및 교육 지원을 결합하여 교사가 안전하게 실수를 하고 자신의 반응을 분석하며 사회적 및 전문적 역량을 의식적으로 개발할 수 있는 환경을 제공합니다.",
    ],
  },
  mission: {
    title: "Accedo의 미션과 비전",
    blocks: [
      "Accedo의 미션은 교사가 실제 학생에게 위험을 주지 않고 위기 상황 대응을 실습할 수 있는 안전하고 몰입형 환경을 만드는 것입니다. 이 시스템은 실수, 의사 결정에 대한 성찰, 심리적 회복력의 의식적 구축을 가능하게 합니다.",
      "프로젝트의 비전은 가상 현실과 생체 인식 기반 도구를 포용 교육에 확산시키는 것입니다. Accedo는 교사가 감각 과민 또는 특수 교육 요구가 있는 학생의 관점을 이해하도록 도와 기회 평등과 포용성을 지원합니다.",
      "Accedo는 주관적 평가 대신 객관적인 생체 데이터를 중시합니다. 이는 결정의 정확성뿐 아니라 결정이 내려진 감정 및 스트레스 수준도 분석합니다. 따라서 학교 및 고등 교육 기관에서 가치 있는 연구 및 구현 도구가 됩니다.",
    ],
  },
  value: {
    title: "왜 Accedo인가",
    blocks: [
      "Accedo는 학생에게 위험이 없는 현실에 가까운 조건에서 교사를 실질적으로 훈련해야 하는 실제 요구를 충족합니다. 이 시스템은 이론 강의 대신 역동적이고 몰입형 환경에서 의사 결정을 경험하게 합니다.",
      "이 시스템은 교사가 감각 과민, 불안 또는 의사소통 어려움을 겪는 학생의 역할을 경험할 수 있게 하여 포용 교육을 지원합니다. 이를 통해 학생의 관점을 더 잘 이해하고 지원 전략을 의식적으로 개발할 수 있습니다.",
      "Accedo는 높은 이동성과 자율성을 갖추고 있습니다. VR 헤드셋에 장착되는 경량 메카트로닉 모듈, 무선 통신 및 오프라인 작동 기능은 학교뿐 아니라 박람회나 회의에서도 쉽게 배포할 수 있게 합니다.",
    ],
  },
  tech: {
    title: "Accedo 기술",
    blocks: [
      "몰입형 VR 모듈은 Godot Engine 4.5와 OpenXR을 기반으로 구축되어 현실적인 3D 교실 환경과 상호작용 시나리오를 생성합니다. 시나리오는 실레지아 대학 전문가와 협력하여 개발되며, 학생의 간질 발작 및 자폐 스펙트럼의 감각 과부하 상황 등을 포함합니다.",
      "ESP32 기반 메카트로닉 모듈은 3D 프린팅 케이스에 담긴 자율 이동 장치로, 4000 mAh Li‑Po 배터리로 구동됩니다. SparkFun SEN 11574 심전도 전극과 광학 맥박 센서로 구성된 센서 시스템을 사용합니다. 독자적인 데이터 융합 알고리즘은 스트레스, 집중도 및 인지 부하 지표를 실시간으로 계산합니다.",
      "Swift 및 SwiftUI로 작성된 iOS 모바일 애플리케이션은 VR 환경 외부에서 교육 과정을 지원합니다. 교육 모듈, 테스트 모듈, 시험 모듈 및 교육 상황 분석을 위한 AI 도우미를 포함합니다. 오프라인 작동을 지원하며 생체 보고서 및 세션 기록을 생성할 수 있습니다.",
    ],
  },
  team: {
    title: "Meet the team",
    subtitle: "학생 팀",
    members: [
      {
        name: "Jakub Michalik",
        email: "michalik.jakub@zs6sobieski.edu.pl",
      },
      {
        name: "Oskar Gala",
        email: "gala.oskar@zs6sobieski.edu.pl",
      },
      {
        name: "Kryspin Wilczyński",
        email: "wilczynski.kryspin@zs6sobieski.edu.pl",
      },
    ],
  },
  supervisors: {
    title: "지도 및 지원",
    subtitle: "프로젝트 지원 팀",
    school: [
      { name: "mgr Bogusława Nidecka", role: "Accedo 프로젝트 학교 지도 교사" },
      { name: "mgr Marcin Mazur", role: "기술 및 구현 담당 학교 지도 교사" },
    ],
    academic: [
      {
        name: "dr Dorota Prysak",
        role: "학술 지원: 교육학, 교육 시나리오",
      },
    ],
  },
  institutions: {
    title: "협력 기관",
    subtitle: "Accedo 프로젝트 파트너",
    items: [
      {
        name: "ZS6 얀 3세 소비에스키 학교",
        desc: "직업 고등학교, 프로젝트 테스트 및 운영 환경.",
        location: "Jastrzębie Zdrój, 폴란드",
        url: "https://zs6sobieski.pl",
      },
      {
        name: "실레지아 대학교",
        desc: "교육학 및 VR 시나리오 분야 전문가 지원.",
        location: "카토비체, 폴란드",
        url: "https://us.edu.pl",
      },
    ],
  },
  contact: {
    title: "연락처",
    subtitle: "Accedo에 대해 더 알고 싶으신가요?",
    schoolTitle: "얀 3세 소비에스키 제6학교 복합체",
    schoolAddress: "ul. Harcerska 12, 44‑335 Jastrzębie Zdrój, 폴란드",
    note: "데모 프로젝트: 연락처 정보는 참고용입니다.",
  },
  footer: {
    madeBy: "Made by Jakub Michalik",
    tech: "React • Node 24 • Godot 4.5 • ESP32 • SwiftUI",
  },
},
es: {
  nav: {
    about: "Sobre el proyecto",
    mission: "Misión y visión",
    value: "Por qué Accedo",
    tech: "Tecnología",
    team: "Equipo",
    supervisors: "Supervisores",
    institutions: "Instituciones",
    contact: "Contacto",
  },
  hero: {
    title: "Accedo: ecosistema de formación inmersivo",
    subtitle:
      "La realidad virtual, la biometría y una aplicación móvil apoyan a docentes, estudiantes de pedagogía y educadores en el desarrollo de competencias blandas y resistencia al estrés.",
    cta: "Conocer Accedo",
  },
  about: {
    title: "Sobre el proyecto",
    intro: [
      "Accedo es un ecosistema de formación modular e innovador creado para docentes, estudiantes de pedagogía y educadores. El proyecto integra realidad virtual, un módulo mecatrónico autónomo que registra señales biométricas y una aplicación móvil para iOS.",
      "El sistema fue diseñado para reflejar los desafíos reales de la escuela moderna: trabajar con un alumno del espectro autista, reaccionar ante una crisis epiléptica, manejar la sobrecarga sensorial y tomar decisiones bajo presión emocional y de tiempo.",
      "Accedo combina inmersión en VR, análisis biométrico objetivo y apoyo didáctico, creando un entorno en el que el docente puede cometer errores de forma segura, analizar sus reacciones y desarrollar conscientemente competencias sociales y profesionales.",
    ],
  },
  mission: {
    title: "Misión y visión de Accedo",
    blocks: [
      "La misión de Accedo es crear un entorno seguro e inmersivo en el que los docentes puedan practicar respuestas a situaciones de crisis sin riesgo para alumnos reales. El sistema permite cometer errores, reflexionar sobre las decisiones y construir conscientemente resiliencia psicológica.",
      "La visión del proyecto es difundir herramientas basadas en realidad virtual y biometría en la educación inclusiva. Accedo ayuda a los docentes a adoptar la perspectiva de un alumno con hipersensibilidad sensorial o necesidades educativas especiales, apoyando la igualdad de oportunidades y la inclusión.",
      "Accedo apuesta por la biometría objetiva en lugar de una evaluación exclusivamente subjetiva. Analiza no solo la corrección de la decisión tomada, sino también el nivel de emociones y estrés en el que fue tomada. Esto lo convierte en una herramienta valiosa para la investigación y la implementación en escuelas y universidades.",
    ],
  },
  value: {
    title: "Por qué Accedo",
    blocks: [
      "Accedo responde a la necesidad real de formación práctica de docentes en condiciones cercanas a la realidad pero sin riesgo para los alumnos. En lugar de conferencias teóricas, ofrece una experiencia en la que las decisiones se toman en un entorno dinámico e inmersivo.",
      "El sistema apoya la educación inclusiva al permitir que los docentes adopten el rol de un alumno con hipersensibilidad sensorial, miedos o dificultades de comunicación. Esto ayuda a comprender mejor la perspectiva del alumno y a desarrollar conscientemente estrategias de apoyo.",
      "Accedo se caracteriza por una alta movilidad y autonomía. Un módulo mecatrónico ligero montado en gafas VR, comunicación inalámbrica y la posibilidad de funcionar sin conexión permiten una implementación sencilla tanto en escuelas como en ferias o conferencias.",
    ],
  },
  tech: {
    title: "Tecnología Accedo",
    blocks: [
      "El módulo VR inmersivo, construido sobre Godot Engine 4.5 y OpenXR, genera entornos de aula tridimensionales realistas y escenarios interactivos. Los escenarios se desarrollan en colaboración con expertos de la Universidad de Silesia e incluyen, entre otros, una crisis epiléptica en un alumno y sobrecarga sensorial en el espectro autista.",
      "El módulo mecatrónico basado en ESP32 es un dispositivo autónomo y móvil en una carcasa impresa en 3D, alimentado por una batería Li‑Po de 4000 mAh. Utiliza un sistema de sensores compuesto por electrodos ECG SparkFun SEN 11574 y un sensor óptico de pulso. Un algoritmo propietario de fusión de datos calcula en tiempo real indicadores de estrés, concentración y carga cognitiva.",
      "La aplicación móvil, escrita en Swift y SwiftUI para iOS, apoya el proceso didáctico fuera del entorno VR. Incluye un módulo educativo, un módulo de pruebas, un módulo de exámenes y un asistente de IA integrado para analizar situaciones pedagógicas. Está adaptada para funcionar sin conexión y generar informes biométricos e historiales de sesiones.",
    ],
  },
  team: {
    title: "Meet the team",
    subtitle: "Equipo estudiantil",
    members: [
      {
        name: "Jakub Michalik",
        email: "michalik.jakub@zs6sobieski.edu.pl",
      },
      {
        name: "Oskar Gala",
        email: "gala.oskar@zs6sobieski.edu.pl",
      },
      {
        name: "Kryspin Wilczyński",
        email: "wilczyński.kryspin@zs6sobieski.edu.pl",
      },
    ],
  },
  supervisors: {
    title: "Supervisión y apoyo",
    subtitle: "Equipo que apoya el proyecto",
    school: [
      { name: "mgr Bogusława Nidecka", role: "Supervisora escolar del proyecto Accedo" },
      { name: "mgr Marcin Mazur", role: "Supervisor escolar de tecnología e implementación" },
    ],
    academic: [
      {
        name: "dr Dorota Prysak",
        role: "Apoyo académico: pedagogía, escenarios educativos",
      },
    ],
  },
  institutions: {
    title: "Instituciones colaboradoras",
    subtitle: "Socios del proyecto Accedo",
    items: [
      {
        name: "ZS6 Rey Juan III Sobieski",
        desc: "Escuela secundaria profesional, entorno de pruebas y organización del proyecto.",
        location: "Jastrzębie Zdrój, Polonia",
        url: "https://zs6sobieski.pl",
      },
      {
        name: "Universidad de Silesia",
        desc: "Apoyo experto en pedagogía y escenarios VR.",
        location: "Katowice, Polonia",
        url: "https://us.edu.pl",
      },
    ],
  },
  contact: {
    title: "Contacto",
    subtitle: "¿Quieres saber más sobre Accedo?",
    schoolTitle: "Complejo Escolar Nº 6 Rey Juan III Sobieski",
    schoolAddress: "ul. Harcerska 12, 44‑335 Jastrzębie Zdrój, Polonia",
    note: "Proyecto demostrativo: la información de contacto es solo informativa.",
  },
  footer: {
    madeBy: "Made by Jakub Michalik",
    tech: "React • Node 24 • Godot 4.5 • ESP32 • SwiftUI",
  },
},



  en: {
    nav: {
      about: "About",
      mission: "Mission and vision",
      value: "Why Accedo",
      tech: "Technology",
      team: "Team",
      supervisors: "Mentors",
      institutions: "Institutions",
      contact: "Contact",
    },
    hero: {
      title: "Accedo: immersive training ecosystem",
      subtitle:
        "VR, biometrics and a mobile app help educators develop soft skills and stress resilience.",
      cta: "Explore Accedo",
    },
    about: {
      title: "About the project",
      intro: [
        "Accedo is an innovative, modular training ecosystem designed for teachers, pedagogy students and educators. It integrates virtual reality, an autonomous biometric module and an iOS mobile application.",
        "The system reflects real challenges of modern schools: working with autistic students, responding to epileptic seizures, handling sensory overload and making decisions under emotional and time pressure.",
        "Accedo combines VR immersion, objective biometric analysis and didactic support, creating an environment where teachers can safely make mistakes, analyse their reactions and consciously develop social and professional skills.",
      ],
    },
    mission: {
      title: "Mission and vision",
      blocks: [
        "Accedo’s mission is to create a safe, immersive environment where teachers can practice crisis responses without risk to real students. The system enables mistakes, reflection and conscious development of psychological resilience.",
        "The project’s vision is to popularize VR and biometric tools in inclusive education. Accedo helps educators step into the perspective of students with sensory overload or special educational needs, supporting equality of opportunity.",
        "Accedo focuses on objective biometrics rather than purely subjective evaluation. It analyses both the correctness of decisions and the emotional context in which they are made, making it a valuable research and deployment tool.",
      ],
    },
    value: {
      title: "Why Accedo",
      blocks: [
        "Accedo addresses the real need for practical teacher training in conditions close to reality but free from risk to students. Instead of theoretical lectures, it offers experiences where decisions are made in a dynamic, immersive environment.",
        "The system supports inclusive education by allowing teachers to experience the role of students with sensory overload, anxiety or communication difficulties. This helps build better understanding and more effective support strategies.",
        "Accedo is highly mobile and autonomous. A lightweight biometric module mounted on VR goggles, wireless communication and offline capabilities make it easy to deploy in schools, universities and exhibition stands.",
      ],
    },
    tech: {
      title: "Accedo technology",
      blocks: [
        "The immersive VR module built on Godot Engine 4.5 and OpenXR generates realistic classroom environments and interactive scenarios. Scenarios are designed in collaboration with experts from the University of Silesia and include epileptic seizures and sensory overload situations.",
        "The ESP32 based biometric module is an autonomous, mobile device in a 3D printed enclosure powered by a Li Po 4000 mAh battery. It uses EKG electrodes and an optical pulse sensor. A custom data fusion algorithm calculates stress, focus and cognitive load in real time.",
        "The iOS mobile app written in Swift and SwiftUI extends the training beyond VR. It includes educational, test and exam modules plus an AI assistant for analysing pedagogical situations. It supports offline work and biometric reporting.",
      ],
    },
    team: {
      title: "Meet the team",
      subtitle: "Student team",
      members: [
        {
          name: "Jakub Michalik",
          email: "michalik.jakub@zs6sobieski.edu.pl",
        },
        {
          name: "Oskar Gala",
          email: "gala.oskar@zs6sobieski.edu.pl",
        },
        {
          name: "Kryspin Wilczyński",
          email: "wilczynski.kryspin@zs6sobieski.edu.pl",
        },
      ],
    },
    supervisors: {
      title: "Mentors and support",
      subtitle: "Supporting staff",
      school: [
        { name: "Ms Bogusława Nidecka", role: "School mentor for Accedo project" },
        { name: "Mr Marcin Mazur", role: "School mentor for technology and deployment" },
      ],
      academic: [
        {
          name: "Dr Dorota Prysak",
          role: "Academic support: pedagogy and scenario design",
        },
      ],
    },
    institutions: {
      title: "Partner institutions",
      subtitle: "Collaborating environments",
      items: [
        {
          name: "ZS6 King John III Sobieski School Complex",
          desc: "Vocational secondary school and testing environment.",
          location: "Jastrzębie Zdrój, Poland",
          url: "https://zs6sobieski.pl",
        },
        {
          name: "University of Silesia",
          desc: "Expert support in pedagogy and VR scenarios.",
          location: "Katowice, Poland",
          url: "https://us.edu.pl",
        },
      ],
    },
    contact: {
      title: "Contact",
      subtitle: "Want to learn more about Accedo?",
      schoolTitle: "ZS6 King John III Sobieski School Complex",
      schoolAddress: "Harcerska 12, 44 335 Jastrzębie Zdrój, Poland",
      note: "Demo project: contact details are illustrative.",
    },
    footer: {
      madeBy: "Made by Jakub Michalik",
      tech: "React • Node 24 • Godot 4.5 • ESP32 • SwiftUI",
    },
  },
};
