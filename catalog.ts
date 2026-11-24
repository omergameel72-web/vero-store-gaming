export type GameId = "free-fire" | "valorant" | "pubg-mobile" | "cod-mobile";

export type GamePack = {
  id: string;
  name: string;
  amount: number;
  unit: string;
  price: number; // بالجنيه المصري
  bonus?: number;
  tag?: string;
  popular?: boolean;
};

export type Game = {
  id: GameId;
  name: string;
  short: string;
  currency: string;
  unit: string;
  image: string;
  accent: string;
  glow: string;
  delivery: string;
  region: string;
  tagline: string;
  minId: number;
  maxId: number;
  idLabel: string;
  idHint: string;
  steps: string[];
  packs: GamePack[];
};

export const GAMES: Game[] = [
  {
    id: "free-fire",
    name: "Free Fire",
    short: "فري فاير",
    currency: "جوهرة",
    unit: "Diamond",
    image: "/images/game-battle-royale.jpg",
    accent: "#2fd8ff",
    glow: "rgba(47,216,255,0.35)",
    delivery: "من 30 ثانية إلى 3 دقائق",
    region: "جميع المناطق — الشرق الأوسط، آسيا، أمريكا اللاتينية",
    tagline: "أرخص جوهرة في السيرفر، من غير باسورد ومن غير انتظار.",
    minId: 7,
    maxId: 12,
    idLabel: "معرّف اللاعب (Player ID)",
    idHint: "افتح فري فاير ← اضغط على صورتك ← ستجد الـ ID أسفل الاسم.",
    steps: [
      "افتح اللعبة واضغط على صورة البروفايل يسار الشاشة.",
      "انسخ الرقم الموجود تحت اسمك (7 إلى 12 خانة).",
      "الصقه في الخانة وتأكد من الاسم الذي يظهر تلقائيًا.",
      "اختر الباقة وأكمل الدفع — الجواهر تدخل حسابك مباشرة.",
    ],
    packs: [
      { id: "ff-1", name: "100 جوهرة", amount: 100, unit: "جوهرة", price: 26, tag: "تجربة" },
      { id: "ff-2", name: "310 جوهرة", amount: 310, unit: "جوهرة", price: 76, bonus: 10 },
      { id: "ff-3", name: "520 جوهرة", amount: 520, unit: "جوهرة", price: 124, bonus: 25, popular: true, tag: "الأكثر طلبًا" },
      { id: "ff-4", name: "1060 جوهرة", amount: 1060, unit: "جوهرة", price: 239, bonus: 60 },
      { id: "ff-5", name: "2180 جوهرة", amount: 2180, unit: "جوهرة", price: 469, bonus: 150, tag: "توفير 8%" },
      { id: "ff-6", name: "5600 جوهرة", amount: 5600, unit: "جوهرة", price: 1165, bonus: 420, tag: "أفضل قيمة" },
      { id: "ff-7", name: "عضوية الأسبوع", amount: 7, unit: "يوم", price: 62, tag: "مفتوحة" },
      { id: "ff-8", name: "عضوية الشهر + 500 جوهرة", amount: 30, unit: "يوم", price: 218, bonus: 500 },
    ],
  },
  {
    id: "valorant",
    name: "VALORANT",
    short: "ڤلورانت",
    currency: "VP",
    unit: "Value Point",
    image: "/images/game-tactical-shooter.jpg",
    accent: "#6fb4ff",
    glow: "rgba(111,180,255,0.35)",
    delivery: "خلال دقيقتين في المتوسط",
    region: "Riot Account — NA / EU / TR / MENA",
    tagline: "اشترِ سكِن الأكتيفيشن والسيزون باس قبل أي أحد.",
    minId: 6,
    maxId: 20,
    idLabel: "Riot ID (الاسم#التاج)",
    idHint: "الصيغة الصحيحة: Name#TAG — مثال: Vero#EUW1",
    steps: [
      "افتح عميل Riot أو موقع Riot Games وسجّل الدخول.",
      "من Riot ID انسخ الاسم الكامل مع التاج (Name#TAG).",
      "تأكد أن التاج مطابق تمامًا وإلا لن يصل الشحن.",
      "اختر مقدار VP وأكمل الدفع لتصل النقاط لحسابك.",
    ],
    packs: [
      { id: "vl-1", name: "475 VP", amount: 475, unit: "VP", price: 132 },
      { id: "vl-2", name: "1000 VP", amount: 1000, unit: "VP", price: 265, popular: true, tag: "الأكثر طلبًا" },
      { id: "vl-3", name: "1875 VP", amount: 1875, unit: "VP", price: 489, bonus: 50 },
      { id: "vl-4", name: "2050 VP + بريميوم", amount: 2050, unit: "VP", price: 540, tag: "حزمة" },
      { id: "vl-5", name: "3650 VP", amount: 3650, unit: "VP", price: 945, bonus: 150, tag: "توفير 6%" },
      { id: "vl-6", name: "5350 VP", amount: 5350, unit: "VP", price: 1360, bonus: 260, tag: "أفضل قيمة" },
      { id: "vl-7", name: "11000 VP", amount: 11000, unit: "VP", price: 2740, bonus: 700 },
    ],
  },
  {
    id: "pubg-mobile",
    name: "PUBG Mobile",
    short: "ببجي موبايل",
    currency: "UC",
    unit: "Unknown Cash",
    image: "/images/game-battle-royale.jpg",
    accent: "#3f8cff",
    glow: "rgba(63,140,255,0.3)",
    delivery: "فوري بعد التحقق من الـ Character ID",
    region: "جميع السيرفرات",
    tagline: "Royal Pass والعربات والسكنات… كلها بضغطة زر.",
    minId: 8,
    maxId: 11,
    idLabel: "Character ID",
    idHint: "من داخل اللعبة: Inventory ← Profile ← الرقم تحت الصورة.",
    steps: [
      "ادخل اللعبة ثم افتح ملفك الشخصي.",
      "انسخ الـ Character ID المكوّن من أرقام فقط.",
      "اختر مقدار UC المناسب للباست أو الحدث.",
      "الدفع ثم وصولUC لحسابك خلال دقائق.",
    ],
    packs: [
      { id: "uc-1", name: "60 UC", amount: 60, unit: "UC", price: 36 },
      { id: "uc-2", name: "325 UC", amount: 325, unit: "UC", price: 172, popular: true, tag: "الأكثر طلبًا" },
      { id: "uc-3", name: "660 UC", amount: 660, unit: "UC", price: 340, bonus: 20 },
      { id: "uc-4", name: "1800 UC", amount: 1800, unit: "UC", price: 870, bonus: 90, tag: "توفير 7%" },
      { id: "uc-5", name: "3850 UC", amount: 3850, unit: "UC", price: 1780, bonus: 260, tag: "أفضل قيمة" },
      { id: "uc-6", name: "Royal Pass Elite", amount: 1, unit: "موسم", price: 262 },
    ],
  },
  {
    id: "cod-mobile",
    name: "Call of Duty Mobile",
    short: "كول أوف ديوتي",
    currency: "CP",
    unit: "CoD Points",
    image: "/images/game-tactical-shooter.jpg",
    accent: "#57a0ff",
    glow: "rgba(87,160,255,0.3)",
    delivery: "من 1 إلى 5 دقائق",
    region: "Activision ID — جميع المناطق",
    tagline: "باتل باس والباندل أسطوري قبل نهاية الموسم.",
    minId: 6,
    maxId: 14,
    idLabel: "Activision ID + المعرّف الرقمي",
    idHint: "الاسم يظهر مع علامة # ورقم Uid داخل إعدادات البروفايل.",
    steps: [
      "افتح CoD Mobile ← Settings ← Account.",
      "انسخ Activision ID والـ UID المصاحب له.",
      "اختر باقة CP أو الباتل باس.",
      "أكمل الدفع ليصلك المحتوى فورًا.",
    ],
    packs: [
      { id: "cp-1", name: "480 CP", amount: 480, unit: "CP", price: 215 },
      { id: "cp-2", name: "960 CP", amount: 960, unit: "CP", price: 415, popular: true, tag: "الأكثر طلبًا" },
      { id: "cp-3", name: "2400 CP", amount: 2400, unit: "CP", price: 985, bonus: 120 },
      { id: "cp-4", name: "5000 CP", amount: 5000, unit: "CP", price: 1975, bonus: 350, tag: "أفضل قيمة" },
      { id: "cp-5", name: "Battle Pass + 420 CP", amount: 1, unit: "موسم", price: 340 },
    ],
  },
];

export function getGame(id: string | null | undefined): Game {
  return GAMES.find((g) => g.id === id) ?? GAMES[0];
}

export function findPack(packId: string | null | undefined) {
  if (!packId) return null;
  for (const game of GAMES) {
    const pack = game.packs.find((p) => p.id === packId);
    if (pack) return { game, pack };
  }
  return null;
}

export const CURRENCIES = [
  { code: "EGP", symbol: "ج.م", label: "جنيه مصري", rate: 1, decimals: 0 },
  { code: "USD", symbol: "$", label: "دولار", rate: 0.0207, decimals: 2 },
  { code: "SAR", symbol: "ر.س", label: "ريال سعودي", rate: 0.0776, decimals: 2 },
  { code: "AED", symbol: "د.إ", label: "درهم إماراتي", rate: 0.0759, decimals: 2 },
] as const;

export type CurrencyCode = (typeof CURRENCIES)[number]["code"];

export function formatPrice(priceEgp: number, code: CurrencyCode = "EGP") {
  const c = CURRENCIES.find((x) => x.code === code) ?? CURRENCIES[0];
  const value = priceEgp * c.rate;
  const num = value.toLocaleString("ar-EG", {
    minimumFractionDigits: c.decimals,
    maximumFractionDigits: c.decimals,
  });
  return c.code === "EGP" ? `${num} ${c.symbol}` : `${c.symbol}${num}`;
}

/* ————— واتساب المتجر —————
   كل الطلبات تُحوَّل إلى واتساب صاحب المتجر على هذا الرابط مباشرة. */
export const WHATSAPP_LINK = "https://wa.me/omar10101010?s=t";

/** يبني رابط واتساب مع رسالة جاهزة اختيارية. */
export function whatsappUrl(message?: string) {
  if (!message) return WHATSAPP_LINK;
  const sep = WHATSAPP_LINK.includes("?") ? "&" : "?";
  return `${WHATSAPP_LINK}${sep}text=${encodeURIComponent(message)}`;
}

/** رسالة طلب جاهزة تُرسل لصاحب المتجر على الواتساب. */
export function orderWhatsappMessage(params: {
  reference?: string | null;
  game: string;
  pack: string;
  playerId: string;
  total: number;
  payment?: string | null;
}) {
  const lines = [
    "السلام عليكم، أريد إتمام طلب شحن من Vero Store:",
    params.reference ? `• رقم الطلب: ${params.reference}` : null,
    `• اللعبة: ${params.game}`,
    `• الباقة: ${params.pack}`,
    `• معرّف اللاعب (ID): ${params.playerId}`,
    params.payment ? `• وسيلة الدفع: ${params.payment}` : null,
    `• الإجمالي: ${formatPrice(params.total)}`,
  ].filter(Boolean);
  return lines.join("\n");
}

export const PAYMENT_METHODS = [
  { id: "vodafone", label: "فودافون كاش", note: "تحويل فوري · رسوم 0%", tint: "#e63946" },
  { id: "instapay", label: "إنستا باي / InstaPay", note: "تحويل بنكي لحظي", tint: "#2fd8ff" },
  { id: "wallet", label: "فودافون / اتصالات / Orange", note: "محفظة موبايل", tint: "#6fb4ff" },
  { id: "card", label: "فيزا و ماستركارد", note: "3D Secure مشفّر", tint: "#3f8cff" },
  { id: "payee", label: "STC Pay / Bee / Zain Cash", note: "مدى ومحافظ الخليج", tint: "#7c5cff" },
  { id: "crypto", label: "USDT — TRC20", note: "شبكة ترون · تأكيد سريع", tint: "#26c281" },
] as const;

export type PaymentId = (typeof PAYMENT_METHODS)[number]["id"];
