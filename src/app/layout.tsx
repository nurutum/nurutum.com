import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "느루틈 | 크리에이티브 테크 스튜디오",
  description: "누구에게나 필요한 틈을 메우고, 새로운 가치를 만들어내는 크리에이티브 테크 스튜디오 느루틈(NURUTUM)입니다.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ko"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#08080c] text-[#f4f4f7]">{children}</body>
    </html>
  );
}
