import type { Product } from "./types";

// NOTE: All product data below is placeholder content for demonstration.
// Replace names, specs, descriptions and images with real product data.

function img(name: string) {
  return `/images/commons/${name}`;
}

export const products: Product[] = [
  {
    slug: "indoor-p15-fine-pitch",
    category: "indoor",
    applications: ["corporate", "government"],
    name: { en: "AX Indoor P1.5 Fine Pitch", ar: "AX داخلي P1.5 دقة فائقة" },
    tagline: {
      en: "Boardroom-grade clarity at close viewing distance",
      ar: "وضوح بجودة غرف الاجتماعات على مسافة رؤية قريبة",
    },
    description: {
      en: "A 1.5mm pixel pitch panel built for control rooms, boardrooms and broadcast environments where viewers sit close to the screen. Seamless cabinet joints and calibrated color uniformity keep large walls looking like a single image.",
      ar: "لوحة بدقة بكسل 1.5 ملم مصمّمة لغرف التحكم وقاعات الاجتماعات وبيئات البث حيث يجلس المشاهدون بالقرب من الشاشة. وصلات الكابينات غير المرئية وتوحيد الألوان المعاير يحافظان على مظهر الجدار الكبير كصورة واحدة.",
    },
    images: [img("led-videowall-studio.png"), img("led-display-detail-01.jpg"), img("control-room-vlt.jpg")],
    specs: {
      pixelPitch: "P1.5",
      brightness: "600 nits",
      refreshRate: "3840 Hz",
      resolutionModule: "128 x 128 px / 192 x 192 mm",
      viewingAngle: "160° / 160°",
      ipRating: "IP30 (Indoor)",
      lifespan: "100,000 hrs",
      powerConsumption: "avg 220 W/m², max 600 W/m²",
      cabinetSize: "600 x 337.5 x 75 mm, 8.2 kg",
    },
    featured: true,
  },
  {
    slug: "indoor-p19-control-room",
    category: "indoor",
    applications: ["corporate", "government", "transportation"],
    name: { en: "AX Indoor P1.9 Control Room", ar: "AX داخلي P1.9 لغرف التحكم" },
    tagline: {
      en: "24/7 duty-cycle panels for mission-critical monitoring",
      ar: "لوحات تعمل بشكل متواصل للمراقبة الحرجة",
    },
    description: {
      en: "Engineered for continuous operation in command and control environments. Redundant power and signal inputs, plus a low-noise cabinet design, keep operations centers running without interruption.",
      ar: "مصمّمة للتشغيل المستمر في بيئات القيادة والتحكم. مدخلات طاقة وإشارة احتياطية، إلى جانب تصميم كابينة منخفض الضوضاء، يبقيان مراكز العمليات تعمل بدون انقطاع.",
    },
    images: [img("control-room-vlt.jpg"), img("control-room-alcator.jpg"), img("control-room-b-reactor.jpg")],
    specs: {
      pixelPitch: "P1.9",
      brightness: "800 nits",
      refreshRate: "3840 Hz",
      resolutionModule: "168 x 168 px / 320 x 160 mm",
      viewingAngle: "160° / 160°",
      ipRating: "IP30 (Indoor)",
      lifespan: "100,000 hrs",
      powerConsumption: "avg 280 W/m², max 750 W/m²",
      cabinetSize: "640 x 480 x 80 mm, 9.6 kg",
    },
  },
  {
    slug: "outdoor-p4-billboard",
    category: "outdoor",
    applications: ["retail", "events"],
    name: { en: "AX Outdoor P4 Billboard", ar: "AX خارجي P4 للوحات إعلانية" },
    tagline: {
      en: "High-brightness advertising panels built for direct sun",
      ar: "لوحات إعلانية عالية السطوع مصمّمة للشمس المباشرة",
    },
    description: {
      en: "A weatherproof advertising panel with 5,500 nits of brightness to stay legible against direct UAE sunlight. Die-cast aluminum cabinets and conformal-coated PCBs resist dust, humidity and heat cycling.",
      ar: "لوحة إعلانية مقاومة للطقس بسطوع يصل إلى 5500 شمعة للبقاء واضحة تحت أشعة الشمس المباشرة في الإمارات. كابينات من الألمنيوم المصبوب ولوحات دوائر مطلية تقاوم الغبار والرطوبة وتقلّبات الحرارة.",
    },
    images: [img("billboard-shanghai.jpg"), img("billboard-available.jpg"), img("billboard-honiara.jpg")],
    specs: {
      pixelPitch: "P4.0",
      brightness: "5,500 nits",
      refreshRate: "1920 Hz",
      resolutionModule: "64 x 64 px / 256 x 256 mm",
      viewingAngle: "140° / 140°",
      ipRating: "IP65 (Front) / IP54 (Rear)",
      lifespan: "100,000 hrs",
      powerConsumption: "avg 450 W/m², max 1,200 W/m²",
      cabinetSize: "960 x 960 x 120 mm, 32 kg",
    },
    featured: true,
  },
  {
    slug: "outdoor-p6-facade",
    category: "outdoor",
    applications: ["retail", "hospitality"],
    name: { en: "AX Outdoor P6.6 Facade", ar: "AX خارجي P6.6 للواجهات" },
    tagline: {
      en: "Lightweight mesh cabinets for building facades",
      ar: "كابينات شبكية خفيفة مخصصة لواجهات المباني",
    },
    description: {
      en: "A low-weight mesh cabinet designed for permanent facade installations, with 60% wind-load openness and a modular structure that follows curved and angled building envelopes.",
      ar: "كابينة شبكية خفيفة الوزن مصمّمة للتركيبات الدائمة على الواجهات، بنسبة انفتاح تصل إلى 60% لتخفيف حمل الرياح وهيكل معياري يتبع واجهات المباني المنحنية والزاوية.",
    },
    images: [img("facade-shinjuku-neon.jpg"), img("billboard-honiara.jpg"), img("billboard-available.jpg")],
    specs: {
      pixelPitch: "P6.6",
      brightness: "6,000 nits",
      refreshRate: "1920 Hz",
      resolutionModule: "48 x 48 px / 320 x 320 mm",
      viewingAngle: "140° / 140°",
      ipRating: "IP65 (Front) / IP54 (Rear)",
      lifespan: "100,000 hrs",
      powerConsumption: "avg 400 W/m², max 1,100 W/m²",
      cabinetSize: "960 x 960 x 90 mm, 18 kg",
    },
  },
  {
    slug: "rental-p29-panel",
    category: "rental",
    applications: ["events", "corporate"],
    name: { en: "AX Rental P2.9 Panel", ar: "AX إيجار P2.9" },
    tagline: {
      en: "Quick-lock cabinets for touring stages and live events",
      ar: "كابينات سريعة التركيب مخصصة للمسارح والفعاليات الحية",
    },
    description: {
      en: "A die-cast aluminum panel built for the rigging and de-rigging cycle of touring production. Flight-case-ready, with front and rear service access and sub-15-minute wall assembly for a 3x3 configuration.",
      ar: "لوحة من الألمنيوم المصبوب مصمّمة لدورة التركيب والفك المتكررة في الإنتاج المتنقل. جاهزة للتعبئة في صناديق النقل، مع إمكانية صيانة أمامية وخلفية وتركيب جدار 3x3 في أقل من 15 دقيقة.",
    },
    images: [img("jumbotron-rogers-centre.jpg"), img("jumbotron-first-niagara.jpg"), img("jumbotron-fare-thee-well.jpg")],
    specs: {
      pixelPitch: "P2.9",
      brightness: "1,200 nits",
      refreshRate: "3840 Hz",
      resolutionModule: "184 x 184 px / 500 x 500 mm",
      viewingAngle: "160° / 160°",
      ipRating: "IP43 (Front) / IP22 (Rear)",
      lifespan: "100,000 hrs",
      powerConsumption: "avg 320 W/m², max 850 W/m²",
      cabinetSize: "500 x 500 x 73 mm, 6.8 kg",
    },
    featured: true,
  },
  {
    slug: "rental-p39-curve",
    category: "rental",
    applications: ["events"],
    name: { en: "AX Rental P3.9 Curve", ar: "AX إيجار P3.9 منحني" },
    tagline: {
      en: "Curved and creative-format cabinets for stage design",
      ar: "كابينات منحنية وأشكال إبداعية مخصصة لتصميم المسارح",
    },
    description: {
      en: "±10° lockable hinges on every cabinet edge allow concave and convex curves, arches and 360-degree columns without special-order hardware.",
      ar: "مفصلات قابلة للقفل بزاوية ±10° على كل حافة كابينة تتيح الانحناءات المقعرة والمحدبة والأقواس والأعمدة الدائرية بزاوية 360 درجة دون قطع خاصة.",
    },
    images: [img("jumbotron-aggievision.jpg"), img("stage-screen-hoffnungsfestival.jpg"), img("stage-screen-ultimate-tour.jpg")],
    specs: {
      pixelPitch: "P3.9",
      brightness: "1,000 nits",
      refreshRate: "3840 Hz",
      resolutionModule: "128 x 128 px / 500 x 500 mm",
      viewingAngle: "160° / 160°",
      ipRating: "IP43 (Front) / IP22 (Rear)",
      lifespan: "100,000 hrs",
      powerConsumption: "avg 300 W/m², max 800 W/m²",
      cabinetSize: "500 x 500 x 73 mm, 7.1 kg",
    },
  },
  {
    slug: "transparent-p39-glass",
    category: "transparent",
    applications: ["retail", "hospitality"],
    name: { en: "AX Transparent P3.9 Glass", ar: "AX شفاف P3.9" },
    tagline: {
      en: "See-through mesh panels for storefronts and facades",
      ar: "ألواح شبكية شفافة للواجهات التجارية",
    },
    description: {
      en: "A 78%-transparent LED mesh that mounts directly to glass, keeping storefronts visible from both inside and outside while carrying full-motion video content.",
      ar: "شبكة LED شفافة بنسبة 78% تُركّب مباشرة على الزجاج، مما يبقي المتجر التجاري مرئياً من الداخل والخارج مع عرض محتوى فيديو كامل الحركة.",
    },
    images: [img("transparent-oled-samsung.jpg"), img("transparent-led-rotating.jpg"), img("led-curtain-jrw205.jpg")],
    specs: {
      pixelPitch: "P3.9",
      brightness: "4,500 nits",
      refreshRate: "1920 Hz",
      resolutionModule: "62 x 32 px / 500 x 500 mm",
      viewingAngle: "140° / 140°",
      ipRating: "IP65 (Front) / IP54 (Rear)",
      lifespan: "100,000 hrs",
      powerConsumption: "avg 180 W/m², max 480 W/m²",
      cabinetSize: "500 x 500 x 40 mm, 4.2 kg",
    },
    featured: true,
  },
  {
    slug: "video-wall-p09-ultra",
    category: "video-wall",
    applications: ["government", "corporate", "transportation"],
    name: { en: "AX Video Wall P0.9 Ultra Fine", ar: "AX جدار فيديو P0.9 فائق الدقة" },
    tagline: {
      en: "Sub-millimeter pitch for seamless large-format walls",
      ar: "دقة أقل من الملليمتر لجدران كبيرة متراصة",
    },
    description: {
      en: "Our finest pitch product, built for command centers and premium lobbies where viewers stand close to a wall spanning tens of square meters. Front-serviceable cabinets keep maintenance off the show floor.",
      ar: "أدق منتجاتنا، مصمّم لمراكز القيادة والردهات الفاخرة حيث يقف المشاهدون بالقرب من جدار يمتد لعشرات الأمتار المربعة. كابينات قابلة للصيانة من الأمام تبقي الصيانة بعيداً عن مساحة العرض.",
    },
    images: [img("video-wall-kkmt.jpg"), img("video-wall-bandai-namco.jpg"), img("led-videowall-studio.png")],
    specs: {
      pixelPitch: "P0.9",
      brightness: "700 nits",
      refreshRate: "3840 Hz",
      resolutionModule: "216 x 216 px / 194.4 x 194.4 mm",
      viewingAngle: "170° / 170°",
      ipRating: "IP30 (Indoor)",
      lifespan: "100,000 hrs",
      powerConsumption: "avg 250 W/m², max 650 W/m²",
      cabinetSize: "600 x 337.5 x 75 mm, 8.6 kg",
    },
  },
  {
    slug: "signage-kiosk-55",
    category: "signage",
    applications: ["retail", "corporate", "hospitality"],
    name: { en: "AX Signage Kiosk 55″", ar: "AX كشك رقمي 55 إنش" },
    tagline: {
      en: "Freestanding digital signage for wayfinding and menus",
      ar: "لوحة رقمية مستقلة للإرشاد والقوائم",
    },
    description: {
      en: "A 55-inch commercial-grade LCD kiosk in a powder-coated steel enclosure, with a locking media compartment and cable management channel built for retail and hospitality floors.",
      ar: "كشك LCD تجاري مقاسه 55 إنش في هيكل فولاذي مطلي بالبودرة، مع حجيرة وسائط قابلة للقفل وقناة لإدارة الكابلات مصمّمة لأرضيات التجزئة والضيافة.",
    },
    images: [img("signage-incheon-airport.jpg"), img("signage-kiosk-kriesten.jpg"), img("signage-retail-handel.jpg")],
    specs: {
      pixelPitch: "N/A (LCD)",
      brightness: "700 nits",
      refreshRate: "60 Hz",
      resolutionModule: "3840 x 2160 px (4K UHD)",
      viewingAngle: "178° / 178°",
      ipRating: "IP30 (Indoor)",
      lifespan: "50,000 hrs (panel)",
      powerConsumption: "avg 150 W, max 280 W",
      cabinetSize: "560 x 1750 x 420 mm, 65 kg",
    },
  },
  {
    slug: "interactive-touch-86",
    category: "interactive",
    applications: ["corporate", "government"],
    name: { en: "AX Interactive Touch 86″", ar: "AX شاشة تفاعلية 86 إنش" },
    tagline: {
      en: "4K interactive display for conferencing and collaboration",
      ar: "شاشة تفاعلية 4K للاجتماعات والعمل التشاركي",
    },
    description: {
      en: "An 86-inch infrared multi-touch display with 20-point touch recognition, built-in annotation software and wireless screen-sharing for meeting rooms and training spaces.",
      ar: "شاشة لمس متعدد بالأشعة تحت الحمراء مقاسها 86 إنشاً مع تمييز لمس يدعم 20 نقطة، وبرمجيات تأشير مدمجة، ومشاركة شاشة لاسلكية لقاعات الاجتماعات والتدريب.",
    },
    images: [img("interactive-whiteboard-3.jpg"), img("interactive-panel-class.jpg"), img("interactive-whiteboard-julong.jpg")],
    specs: {
      pixelPitch: "N/A (LCD)",
      brightness: "400 nits",
      refreshRate: "60 Hz",
      resolutionModule: "3840 x 2160 px (4K UHD)",
      viewingAngle: "178° / 178°",
      ipRating: "IP30 (Indoor)",
      lifespan: "50,000 hrs (panel)",
      powerConsumption: "avg 220 W, max 350 W",
      cabinetSize: "1965 x 1155 x 90 mm, 58 kg",
    },
    featured: true,
  },
];

export function getProductBySlug(slug: string) {
  return products.find((p) => p.slug === slug);
}

export function getRelatedProducts(product: Product, count = 4) {
  return products
    .filter((p) => p.slug !== product.slug && p.category === product.category)
    .concat(products.filter((p) => p.slug !== product.slug && p.category !== product.category))
    .slice(0, count);
}
