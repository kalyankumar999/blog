import { Outfit, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { personalData } from "@/data/personalData";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  weight: ["500", "600", "700", "800"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600"],
});

const jbMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jbmono",
  weight: ["400", "500"],
});

export const metadata = {
  title: `${personalData.name} — ${personalData.role}`,
  description: personalData.summary,
  openGraph: {
    title: `${personalData.name} — ${personalData.role}`,
    description: personalData.summary,
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${outfit.variable} ${inter.variable} ${jbMono.variable} bg-black font-body antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
