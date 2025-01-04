import "../styles/globals.css";
import { Outfit, Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/toaster";
import type { Metadata } from "next";
import { I18nProvider } from "@/components/i18n-provider";
import SectionProgress from "@/components/section-progress";
import Script from "next/script";

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
    url: "https://github.com/hotp0t",
    siteName: "Maximilien Rouillon Zhu Portfolio",
    title: "Maximilien Rouillon Zhu - Full-Stack Developer",
    description:
      "Portfolio of Maximilien Rouillon Zhu, a passionate full-stack developer creating innovative web solutions.",
    images: [
      {
        url: "https://github.com/HOTP0T/portfolio_MRZ/blob/9b0460226be95e946539c5f4a848c0de4af70bc2/public/images/fc_profilepic_AZ%20-%20PNG.png?raw=true",
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
    index: false,
    follow: false,
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
        <Script
          src="https://cloud.umami.is/script.js"
          data-website-id="300875c8-bfa4-4c43-9bc2-da55ba1b0579"
          strategy="afterInteractive"
        />
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
