import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { GoogleTagManager } from '@next/third-parties/google'
import TriggerAnalytics from './TriggerAnalytics'

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "깃없총",
  description: "나만 깃발 없엉 총연맹",
  openGraph: {
    title: "",
    siteName: "나만 깃발 없엉",
    description: "",
    locale: 'ko_KR',
    type: 'website',
    url: "https://flag123.diginori.com",
    images: {
      url: "https://flag123.diginori.com/og.png",
      alt: "",
    }
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <GoogleTagManager gtmId="GTM-KNF3TMFJ" />
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <TriggerAnalytics />
      </body>
    </html>
  );
}
