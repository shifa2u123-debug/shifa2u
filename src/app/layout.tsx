import type { Metadata } from "next";
import { Inter, Fraunces, Questrial } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ToasterProvider from "@/components/providers/ToasterProvider";
import Script from "next/script";

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
    <html
      lang="en"
      className={`${inter.variable} ${fraunces.variable} ${questrial.variable}`}
    >
      <head>
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-NXNT6DNX');
            `,
          }}
        />
      </head>

      <body className="antialiased min-h-screen flex flex-col">
        {/* GTM noscript fallback */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-NXNT6DNX"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>

        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
        <ToasterProvider />
      </body>
    </html>
  );
}
