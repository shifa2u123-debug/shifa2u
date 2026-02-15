import type { Metadata } from "next";
import { Inter, Fraunces, Questrial } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ToasterProvider from "@/components/providers/ToasterProvider";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-fraunces",
});

const questrial = Questrial({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
  variable: "--font-questerial",
});

export const metadata: Metadata = {
  title: {
    default: "Al-Shifa Home Health Care | Home Health Care in Anaheim, California",
    template: "%s | Al-Shifa Home Health Care",
  },
  description:
    "Al-Shifa Home Health Care Agency is a home health care agency serving multiple counties in California. Providing compassionate care with proven results.",
  keywords: [
    "home health care",
    "Anaheim",
    "California",
    "nursing",
    "physical therapy",
    "senior care",
    "rehabilitation",
    "Al-Shifa",
  ],
  authors: [{ name: "Al-Shifa Home Health Care Agency" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://shifa2u.com",
    siteName: "Al-Shifa Home Health Care",
    title: "Al-Shifa Home Health Care | Compassionate Care, Proven Results",
    description:
      "Professional home health care services in California. Post-surgical rehabilitation, skilled nursing, physical therapy, and more.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${fraunces.variable} ${questrial.variable}`}>
      <body className="antialiased min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
        <ToasterProvider />
      </body>
    </html>
  );
}
