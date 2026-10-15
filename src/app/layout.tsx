import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Great_Vibes, Poppins } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const greatVibes = Great_Vibes({
  variable: "--font-great-vibes",
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ngọc Sự ❤️ Kim Oanh | Thiệp cưới",
  description:
    "Trân trọng kính mời quý khách đến chung vui trong lễ thành hôn của Ngọc Sự và Kim Oanh.",
  keywords: [
    "Ngọc Sự Kim Oanh",
    "Thiệp cưới",
    "Lễ thành hôn",
    "20 February 2027",
    "Đăng ký tham dự lễ cưới",
  ],
  authors: [{ name: "Ngọc Sự & Kim Oanh" }],
  openGraph: {
    title: "Ngọc Sự ❤️ Kim Oanh — Thiệp cưới",
    description: "Trân trọng kính mời quý khách đến chung vui trong lễ thành hôn.",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/imgs/IMG_0577.JPG",
        width: 1200,
        height: 630,
        alt: "Ngọc Sự và Kim Oanh",
      },
    ],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  viewportFit: "cover",
  themeColor: "#F8F5F0",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${greatVibes.variable} ${poppins.variable} scroll-smooth`}
    >
      <body className="min-h-screen bg-[#F8F5F0] text-[#2D2622] font-poppins selection:bg-[#C9A46A]/20 selection:text-[#2D2622]">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
