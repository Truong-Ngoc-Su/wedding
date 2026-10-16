/**
 * ============================================================
 *  WEDDING CONFIGURATION — Trương Ngọc Sự ❤️ Trần Thị Kim Oanh
 *  Edit this file to update all wedding details site-wide.
 * ============================================================
 */

// ─── Couple ──────────────────────────────────────────────────
export const GROOM_NAME = "Ngọc Sự";
export const BRIDE_NAME = "Kim Oanh";
export const COUPLE_NAMES = `${GROOM_NAME} & ${BRIDE_NAME}`;
export const COUPLE_NAMES_HEART = `${GROOM_NAME} ❤️ ${BRIDE_NAME}`;
export const HASHTAG = "#SuOanh2026";
export const TAGLINE = "Từ hôm nay, chúng mình cùng viết nên một hành trình mới.";
export const INVITATION_HEADING =
  "Trân trọng kính mời quý khách đến chung vui trong ngày trọng đại của";

// Email address to use in mailto: links
export const WEDDING_EMAIL = "";

// ─── Dates ───────────────────────────────────────────────────
/** ISO datetime of the main wedding ceremony (used for countdown) */
export const WEDDING_DATETIME_ISO = "2026-10-30T11:00:00+07:00";
/** Human-readable display date shown throughout the site */
export const WEDDING_DATE_DISPLAY = "30 tháng 10, 2026";
/** Main ceremony start time for date-and-time displays */
export const WEDDING_TIME_DISPLAY = "11 giờ 00";
/** Short year used in badges / seals */
export const WEDDING_YEAR = "2026";
/** Calendar date range (UTC) for the main wedding ceremony */
export const WEDDING_CALENDAR_DATES = "20261030T110000Z/20261030T160000Z";

// ─── Venue ───────────────────────────────────────────────────
export const VENUE_NAME = "Tư gia nhà trai";
export const VENUE_CITY = "";
export const VENUE_STATE = "";
export const VENUE_COUNTRY = "Việt Nam";
export const VENUE_FULL_ADDRESS = "Tư gia nhà trai";
export const VENUE_MAP_URL = "https://www.google.com/maps/place/X%C6%B0%E1%BB%9Fng+g%E1%BB%97+Ba+C%E1%BA%A3nh/@14.5753508,109.0207305,843m/data=!3m2!1e3!4b1!4m6!3m5!1s0x3168c30051130673:0x8aed5ac664cb4077!8m2!3d14.5753508!4d109.0233054!16s%2Fg%2F11yfnp6zq9?entry=ttu";
export const VENUE_MAP_EMBED_URL = "https://www.google.com/maps?q=14.5753508,109.0233054&z=17&output=embed";

// ─── Celebration Schedule ───────────────────────────────────
export const CELEBRATION_SCHEDULE = [
  {
    time: "10:30",
    title: "Đón khách",
    description: "Kính mời quý khách check-in, chụp ảnh và gặp gỡ gia đình hai bên trước khi buổi lễ bắt đầu.",
    icon: "📸",
  },
  {
    time: "11:00",
    title: "Lễ thành hôn",
    description: "Nghi thức chính bắt đầu với lời chào của gia đình, lời hẹn ước của cô dâu chú rể và nghi thức trao nhẫn.",
    icon: "💍",
  },
  {
    time: "11:20",
    title: "Khai tiệc",
    description: "Cùng nâng ly chúc mừng, dùng tiệc trưa và chia sẻ niềm vui trong không gian ấm cúng, thân mật.",
    icon: "🥂",
  },
  {
    time: "11:40",
    title: "Nghi thức cắt bánh",
    description: "Khoảnh khắc nhỏ nhưng đáng nhớ, đánh dấu ngày chính thức bắt đầu hành trình mới của hai đứa.",
    icon: "🎂",
  },
  {
    time: "13:00",
    title: "Gửi lời cảm ơn",
    description: "Cô dâu chú rể gửi lời cảm ơn đến từng vị khách đã có mặt và cùng khép lại buổi tiệc bằng những cái ôm thân tình.",
    icon: "🧡",
  },
] as const;

export const VENUE_MOMENTS = [
  {
    title: "Lễ cưới nhà gái",
    time: "28/10/2026",
    description: "Tư gia nữ",
    icon: "🏠",
  },
  {
    title: "Lễ cưới nhà trai",
    time: "30/10/2026",
    description: "Tư gia nhà trai",
    icon: "💍",
  },
] as const;

// ─── Gifts / UPI ─────────────────────────────────────────────
export const GROOM_GIFT = { name: GROOM_NAME, qrImage: "/imgs/IMG_1361.JPG" };
export const BRIDE_GIFT = {
  name: BRIDE_NAME,
  qrImage: "/imgs/f90b8860-e8fb-4b28-a77f-0800d27ad993.jpg",
};
/** Google Apps Script Web App URL for guest lookup and RSVP submission. */
export const GOOGLE_APPS_SCRIPT_URL = process.env.NEXT_PUBLIC_GOOGLE_APPS_SCRIPT_URL ?? "";

// ─── Couple Portrait ─────────────────────────────────────────
export const COUPLE_PORTRAIT_URL =
  "/imgs/IMG_0577.JPG";

/** Flat list of event titles used by the currently disabled RSVP form */
export const RSVP_EVENTS_LIST = [
  "Lễ cưới nhà gái (28/10/2026)",
  "Lễ cưới nhà trai (30/10/2026)",
];

// ─── Design Palette ──────────────────────────────────────────
export const PALETTE = {
  gold: "#C9A46A",
  goldLight: "#DFBE85",
  goldDark: "#B58742",
  goldDeep: "#A37E3E",
  ivory: "#F8F5F0",
  ivoryLight: "#FCFAF7",
  charcoal: "#2D2622",
  charcoalMid: "#5C524A",
  charcoalLight: "#7F8D70",
  roseGold: "#B76E79",
  sage: "#A8B59A",
  sageDark: "#7F8D70",
} as const;
