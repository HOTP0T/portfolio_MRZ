import "../styles/globals.css";
import { Outfit, Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/toaster";
import type { Metadata } from "next";
import { I18nProvider } from "@/components/i18n-provider";
import SectionProgress from "@/components/section-progress";
import Script from "next/script";
import { GoogleTagManager } from '@next/third-parties/google'

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Maximilien Rouillon Zhu - Full-Stack Developer",
  description:
    "Portfolio of Maximilien Rouillon Zhu, a passionate full-stack developer creating innovative web solutions.",
  keywords: [
    "Full-Stack Developer",
    "Web Development",
    "React",
    "Node.js",
    "Portfolio",
  ],
  authors: [{ name: "Maximilien Rouillon Zhu" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://portfolio-mrz.vercel.app/",
    siteName: "Maximilien Rouillon Zhu Portfolio",
    title: "Maximilien Rouillon Zhu - Full-Stack Developer",
    description:
      "Portfolio of Maximilien Rouillon Zhu, a passionate full-stack developer creating innovative web solutions.",
    images: [
      {
        url: "https://portfolio-mrz.vercel.app/images/OG-2025.png",
        width: 1200,
        height: 630,
        alt: "Maximilien Rouillon Zhu - Full-Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@HOTP0T",
    creator: "@HOTP0T",
    title: "Maximilien Rouillon Zhu - Full-Stack Developer",
    description:
      "Portfolio of Maximilien Rouillon Zhu, a passionate full-stack developer creating innovative web solutions.",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      {
        url: "/favicon_io/favicon-16x16.png",
        sizes: "16x16",
        type: "image/png",
      },
      {
        url: "/favicon_io/favicon-32x32.png",
        sizes: "32x32",
        type: "image/png",
      },
    ],
    apple: {
      url: "/favicon_io/apple-touch-icon.png",
      sizes: "180x180",
      type: "image/png",
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* <!-- Umami tag --> */}
        <Script
          src="https://cloud.umami.is/script.js"
          data-website-id="300875c8-bfa4-4c43-9bc2-da55ba1b0579"
          strategy="afterInteractive"
        />
        <GoogleTagManager gtmId="GTM-T9RGPZCK" /> 
      </head>
      <body
        className={`${outfit.variable} ${inter.variable} font-sans bg-gradient-to-br from-blue-50 via-indigo-50 to-white dark:from-gray-900 dark:via-gray-800 dark:to-black min-h-screen`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <I18nProvider>
            <SectionProgress />
            {children}
            <Toaster />
          </I18nProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}