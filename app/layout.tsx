import type { Metadata, Viewport } from "next";
import { Space_Mono, Inter, Bebas_Neue, Fraunces } from "next/font/google";
// @ts-expect-error CSS file is handled by Next.js
import "./globals.css";

const geistSans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const geistMono = Space_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: "400"
});

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-display",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-serif",
});

export const metadata: Metadata = {
  title: "Akhnas Furqan — Software Developer | CS Student",
  description:
    "CS student specializing in backend systems, databases, and software engineering. Seeking internship opportunities.",
};

export const viewport: Viewport = {
  themeColor: "#09090b",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${bebasNeue.variable} ${fraunces.variable}`}
    >
      <body className="font-sans antialiased bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}