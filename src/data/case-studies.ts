import type { CaseStudy } from "./types";

// NOTE: All case study data below is placeholder content for demonstration.
// Replace project names, clients, figures and images with real project data.

function img(name: string) {
  return `/images/commons/${name}`;
}

export const caseStudies: CaseStudy[] = [
  {
    slug: "downtown-mall-video-wall",
    industry: "retail",
    projectName: { en: "Downtown Mall Atrium Video Wall", ar: "جدار الفيديو في بهو مول وسط المدينة" },
    client: { en: "Regional Shopping Mall Operator", ar: "مشغّل مركز تسوق إقليمي" },
    location: { en: "Dubai, UAE", ar: "دبي، الإمارات" },
    resultLine: {
      en: "A 12m x 6m atrium wall raised average dwell time by 18%.",
      ar: "جدار بهو بقياس 12 × 6 متر رفع متوسط وقت التواجد بنسبة 18%.",
    },
    challenge: {
      en: "The mall's central atrium had no focal point strong enough to compete with tenant storefronts and needed a centerpiece visible from three levels.",
      ar: "لم يكن لدى البهو المركزي للمول نقطة تركيز قوية بما يكفي للمنافسة مع واجهات المتاجر، وكان بحاجة إلى قطعة مركزية تُرى من ثلاثة طوابق.",
    },
    solution: {
      en: "Arabix Tech installed a curved P1.9 indoor video wall spanning 12 by 6 metres, driven by a redundant processing rack with scheduled content playback synced to mall promotions.",
      ar: "ركّبت أرابكس تك جدار فيديو داخلي منحنياً بدقة P1.9 بقياس 12 × 6 متر، يُدار بواسطة وحدة معالجة احتياطية مع تشغيل محتوى مجدول متزامن مع عروض المول.",
    },
    results: [
      { en: "18% increase in average visitor dwell time", ar: "زيادة 18% في متوسط وقت بقاء الزوار" },
      { en: "Zero unplanned downtime across 14 months in operation", ar: "صفر في التوقف غير المخطط له على مدى 14 شهراً من التشغيل" },
      { en: "6 advertising slots sold per hour during peak trading", ar: "بيع 6 فترات إعلانية في الساعة خلال ذروة الذروة" },
    ],
    productsUsed: ["indoor-p19-control-room", "video-wall-p09-ultra"],
    images: [img("dubai-mall-14.jpg"), img("dubai-mall-30.jpg"), img("dubai-mall-31.jpg")],
    featured: true,
  },
  {
    slug: "headquarters-lobby-experience",
    industry: "corporate",
    projectName: { en: "Financial Tower Lobby Experience", ar: "تجربة بهو برج مالي" },
    client: { en: "Regional Investment Group", ar: "مجموعة استثمار إقليمية" },
    location: { en: "Dubai, UAE", ar: "دبي، الإمارات" },
    resultLine: {
      en: "A fine-pitch lobby wall replaced static branding across 40 floors of visitor traffic.",
      ar: "جدار بهو دقيق التباعد استبدل العلامات الثابتة لمبنى من 40 طابقاً.",
    },
    challenge: {
      en: "The client wanted a single lobby installation flexible enough to display brand content, wayfinding and investor-relations data without visible seams.",
      ar: "أراد العميل تركيباً واحداً في البهو يكون مرناً بما يكفي لعرض محتوى العلامة التجارية والإرشاد وبيانات علاقات المستثمرين دون وصلات ظاهرة.",
    },
    solution: {
      en: "A 9m P1.5 fine-pitch wall was installed behind the reception desk, with a content management system split into branded, wayfinding and live-data zones.",
      ar: "تم تركيب جدار دقة فائقة P1.5 بطول 9 أمتار خلف مكتب الاستقبال، مع نظام إدارة محتوى مقسّم إلى مناطق للعلامة التجارية والإرشاد والبيانات الحية.",
    },
    results: [
      { en: "Single wall replaced 6 separate static signage units", ar: "استبدل جدار واحد 6 وحدات لوحات ثابتة منفصلة" },
      { en: "Content updates deployed remotely in under 5 minutes", ar: "نشر تحديثات المحتوى عن بعد في أقل من 5 دقائق" },
      { en: "Seamless 4K-equivalent image from 2 metres viewing distance", ar: "صورة متسقة تعادل 4K من مسافة رؤية تبلغ مترين" },
    ],
    productsUsed: ["indoor-p15-fine-pitch"],
    images: [img("lobby-car-display-renaissance.jpg"), img("led-videowall-studio.png"), img("led-display-detail-01.jpg")],
    featured: true,
  },
  {
    slug: "festival-mainstage-rental",
    industry: "events",
    projectName: { en: "Desert Music Festival Mainstage", ar: "المسرح الرئيسي لمهرجان الموسيقي الصحراوي" },
    client: { en: "Independent Events Production House", ar: "بيت إنتاج فعاليات مستقل" },
    location: { en: "Ras Al Khaimah, UAE", ar: "رأس الخيمة، الإمارات" },
    resultLine: {
      en: "300 sqm of curved rental LED assembled and struck within a 3-day production window.",
      ar: "تركيب وفك 300 متر مربع من شاشات LED الإيجار المنحنية خلال نافذة إنتاج مدتها 3 أيام.",
    },
    challenge: {
      en: "The production needed a mainstage backdrop that could be trucked in, rigged overnight and withstand desert dust and temperature swings for a 3-night festival.",
      ar: "احتاج الإنتاج إلى خلفية مسرح رئيسي يمكن نقلها وتركيبها خلال الليل وتتحمل غبار الصحراء وتقلّبات درجات الحرارة لمدة مهرجان امتد 3 ليالٍ.",
    },
    solution: {
      en: "Arabix Tech supplied P2.9 rental panels in a curved 20m x 8m configuration, with an on-site technician team for load-in, show calling and strike.",
      ar: "وفّرت أرابكس تك ألواح إيجار بدقة P2.9 بتكوين منحنٍ بقياس 20 × 8 متر، مع فريق فنيٍ ميداني للتركيب والتشغيل والفك.",
    },
    results: [
      { en: "300 sqm curved wall assembled in under 6 hours", ar: "تركيب جدار منحنٍ بمساحة 300 متر مربع في أقل من 6 ساعات" },
      { en: "Zero panel failures across 3 nights of live performance", ar: "صفر في أعطال اللوحات على مدى 3 ليالٍ من العروض الحية" },
      { en: "1,200 nits sustained visibility against daylight load-in", ar: "وضوح 1200 شمعة مستدام حتى في ضوء النهار" },
    ],
    productsUsed: ["rental-p29-panel", "rental-p39-curve"],
    images: [img("jumbotron-fare-thee-well.jpg"), img("stage-screen-hoffnungsfestival.jpg"), img("stage-screen-ultimate-tour.jpg")],
  },
  {
    slug: "metro-station-wayfinding",
    industry: "transportation",
    projectName: { en: "Metro Interchange Wayfinding Network", ar: "شبكة إرشاد محطة المترو الرئيسية" },
    client: { en: "Public Transport Authority", ar: "هيئة النقل العام" },
    location: { en: "Dubai, UAE", ar: "دبي، الإمارات" },
    resultLine: {
      en: "22 synchronized displays cut passenger wayfinding queries by a third.",
      ar: "22 شاشة متزامنة خفّضت استفسارات الركّاب عن الإرشاد بمقدار الثلث.",
    },
    challenge: {
      en: "A major interchange station needed real-time wayfinding and service-status displays that could survive continuous public use and remote fleet management.",
      ar: "احتاجت محطة تبديل رئيسية إلى شاشات إرشاد وحالة خدمة فورية تتحمل الاستخدام العام المستمر وتدار عن بعد.",
    },
    solution: {
      en: "22 P1.9 indoor panels were installed across platforms and concourses, connected to a central fleet-management platform for live status and multilingual content.",
      ar: "تم تركيب 22 لوحة داخلية بدقة P1.9 عبر الأرصفة والممرات، متصلة بمنصة إدارة مركزية للحالة الحية والمحتوى متعدد اللغات.",
    },
    results: [
      { en: "33% reduction in staff-assisted wayfinding queries", ar: "انخفاض 33% في استفسارات الإرشاد المدعومة من الموظفين" },
      { en: "Remote monitoring across all 22 units from a single dashboard", ar: "مراقبة عن بعد لجميع الوحدات الـ 22 من لوحة تحكّم واحدة" },
      { en: "99.98% uptime across the first year of service", ar: "99.98% نسبة التشغيل خلال السنة الأولى من الخدمة" },
    ],
    productsUsed: ["indoor-p19-control-room"],
    images: [img("metro-seoul-sinchon.jpg"), img("metro-seoul-jegidong.jpg"), img("metro-seoul-hansung.jpg")],
  },
  {
    slug: "hotel-lobby-transparent-facade",
    industry: "hospitality",
    projectName: { en: "Five-Star Hotel Entrance Facade", ar: "واجهة مدخل فندق فاخر خمس نجوم" },
    client: { en: "Luxury Hospitality Group", ar: "مجموعة ضيافة فاخرة" },
    location: { en: "Abu Dhabi, UAE", ar: "أبوظبي، الإمارات" },
    resultLine: {
      en: "A transparent LED facade kept glass sightlines intact while adding a branded arrival moment.",
      ar: "حافظت الواجهة الشفافة على وضوح الزجاج مع إضافة لحظة وصول مميّزة.",
    },
    challenge: {
      en: "The hotel wanted digital branding at its entrance without blocking the double-height glass facade that defined the building's architecture.",
      ar: "أراد الفندق علامة تجارية رقمية عند المدخل دون حجب الواجهة الزجاجية مزدوجة الارتفاع التي تُميّز المبنى.",
    },
    solution: {
      en: "A 78%-transparent P3.9 mesh was mounted to the interior face of the glass, running welcome branding by day and full-motion content after sunset.",
      ar: "تم تركيب شبكة شفافة بنسبة 78% وبدقة P3.9 على الوجه الداخلي للزجاج، مع عرض علامة ترحيب نهاراً ومحتوى كامل الحركة بعد الغروب.",
    },
    results: [
      { en: "Glass sightlines preserved from both sides of the facade", ar: "الحفاظ على وضوح الرؤية الزجاجية من كلا جانبي الواجهة" },
      { en: "Content synced with 4 seasonal brand campaigns per year", ar: "محتوى متزامن مع 4 حملات علامة تجارية موسمية سنوياً" },
      { en: "Installed without structural changes to the glazing", ar: "تم التركيب دون أي تعديلات إنشائية على الزجاج" },
    ],
    productsUsed: ["transparent-p39-glass"],
    images: [img("transparent-oled-samsung.jpg"), img("hotel-lobby-royal-hawaiian.jpg"), img("hotel-lobby-amantaka.jpg")],
    featured: true,
  },
  {
    slug: "operations-center-control-room",
    industry: "government",
    projectName: { en: "Municipal Operations Command Center", ar: "مركز قيادة عمليات بلدي" },
    client: { en: "Municipal Government Authority", ar: "هيئة حكومية بلدية" },
    location: { en: "Sharjah, UAE", ar: "الشارقة، الإمارات" },
    resultLine: {
      en: "A 16-metre command wall unified 40 camera and sensor feeds into one operating picture.",
      ar: "وحّد جدار قيادة بطول 16 متراً 40 مصدراً من الكاميرات والمستشعرات في صورة تشغيلية واحدة.",
    },
    challenge: {
      en: "Operators were monitoring city infrastructure across a dozen disconnected monitors, slowing incident response and coordination.",
      ar: "كان المشغّلون يراقبون البنية التحتية للمدينة عبر عشرات الشاشات المنفصلة، مما أبطأ الاستجابة للحوادث والتنسيق.",
    },
    solution: {
      en: "A 16m x 3m P0.9 ultra-fine-pitch wall now runs 24/7, aggregating camera, traffic and utility feeds through a video-wall processor with redundant failover.",
      ar: "يعمل الآن جدار فائق الدقة P0.9 بقياس 16 × 3 متر بشكل متواصل، يُجمّع بيانات الكاميرات والمرور والمرافق عبر معالج جدار فيديو ذي تحوّل احتياطي.",
    },
    results: [
      { en: "40 live feeds consolidated onto a single wall", ar: "توحيد 40 مصدر بث حي على جدار واحد" },
      { en: "Incident response time reduced by 27%", ar: "انخفاض وقت الاستجابة للحوادث بنسبة 27%" },
      { en: "Dual redundant power feeds for continuous 24/7 operation", ar: "مدخلا طاقة احتياطيان للتشغيل المستمر على مدار الساعة" },
    ],
    productsUsed: ["video-wall-p09-ultra", "indoor-p19-control-room"],
    images: [img("control-room-vlt.jpg"), img("control-room-alcator.jpg"), img("control-room-b-reactor.jpg")],
  },
  {
    slug: "flagship-store-outdoor-facade",
    industry: "retail",
    projectName: { en: "Flagship Store Outdoor Facade", ar: "واجهة خارجية لمتجر رئيسي" },
    client: { en: "International Fashion Retailer", ar: "متجر أزياء عالمي" },
    location: { en: "Dubai, UAE", ar: "دبي، الإمارات" },
    resultLine: {
      en: "A P6.6 facade screen extended campaign visibility to street-level foot traffic.",
      ar: "وسّعت شاشة الواجهة بدقة P6.6 مدى وضوح الحملات للمشاة على مستوى الشارع.",
    },
    challenge: {
      en: "The retailer needed a permanent, weatherproof facade screen that could carry global campaign content without a full building retrofit.",
      ar: "احتاج المتجر إلى شاشة واجهة دائمة ومقاومة للطقس يمكنها عرض محتوى الحملات العالمية دون تجديد كامل للمبنى.",
    },
    solution: {
      en: "A lightweight P6.6 mesh cabinet was fitted to the existing facade structure using a custom bracket system, minimizing structural load.",
      ar: "تم تركيب كابينة شبكية خفيفة بدقة P6.6 على هيكل الواجهة القائم باستخدام نظام تثبيت مخصص، مما قلّص الحمل الإنشائي.",
    },
    results: [
      { en: "Campaign content visible from over 60 metres", ar: "محتوى الحملة مرئي من مسافة تزيد عن 60 متراً" },
      { en: "Installed over a single weekend with no store closure", ar: "تم التركيب خلال عطلة نهاية أسبوع واحدة دون إغلاق المتجر" },
      { en: "Rated for 5+ years of continuous outdoor exposure", ar: "مصمّمة لأكثر من 5 سنوات من التعرض الخارجي المستمر" },
    ],
    productsUsed: ["outdoor-p6-facade", "outdoor-p4-billboard"],
    images: [img("facade-shinjuku-neon.jpg"), img("billboard-shanghai.jpg"), img("billboard-available.jpg")],
  },
  {
    slug: "bank-branch-interactive-displays",
    industry: "corporate",
    projectName: { en: "Bank Branch Self-Service Displays", ar: "شاشات الخدمة الذاتية لفرع البنك" },
    client: { en: "National Retail Bank", ar: "بنك تجزئة وطني" },
    location: { en: "Dubai, UAE", ar: "دبي، الإمارات" },
    resultLine: {
      en: "Interactive kiosks across 9 branches cut average teller wait time by 22%.",
      ar: "خفّضت الأكشاك التفاعلية في 9 فروع متوسط وقت انتظار الصراف بنسبة 22%.",
    },
    challenge: {
      en: "The bank wanted to shift routine transactions away from teller counters without making branches feel less personal.",
      ar: "أراد البنك تحويل المعاملات الروتينية بعيداً عن مكاتب الصرافيين دون أن تفقد الفروع طابعها الشخصي.",
    },
    solution: {
      en: "86-inch interactive touch displays were deployed in 9 branches for self-service transactions, product walkthroughs and queue-free appointment booking.",
      ar: "تم نشر شاشات لمس تفاعلية مقاس 86 إنشاً في 9 فروع للمعاملات الذاتية وشرح المنتجات وحجز المواعيد دون انتظار.",
    },
    results: [
      { en: "22% reduction in average teller wait times", ar: "انخفاض 22% في متوسط وقت انتظار الصراف" },
      { en: "35% of routine transactions shifted to self-service", ar: "تحوّل 35% من المعاملات الروتينية إلى الخدمة الذاتية" },
      { en: "Deployed across 9 branches within one quarter", ar: "النشر في 9 فروع خلال ربع سنوي واحد" },
    ],
    productsUsed: ["interactive-touch-86", "signage-kiosk-55"],
    images: [img("interactive-panel-class.jpg"), img("interactive-whiteboard-3.jpg"), img("interactive-whiteboard-julong.jpg")],
  },
];

export function getCaseStudyBySlug(slug: string) {
  return caseStudies.find((c) => c.slug === slug);
}
