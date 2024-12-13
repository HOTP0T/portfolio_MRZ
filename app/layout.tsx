import '../styles/globals.css'
import { Outfit, Inter } from 'next/font/google'
import { ThemeProvider } from '@/components/theme-provider'
import { Toaster } from "@/components/ui/toaster"
import { Metadata } from 'next'
import { I18nProvider } from '@/components/i18n-provider'
import SectionProgress from '@/components/section-progress'
import Head from 'next/head'

const outfit = Outfit({ 
  subsets: ['latin'],
  variable: '--font-outfit',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'Maximilien Rouillon Zhu - Full-Stack Developer',
  description: 'Portfolio of Maximilien Rouillon Zhu, a passionate full-stack developer creating innovative web solutions.',
  keywords: ['Full-Stack Developer', 'Web Development', 'React', 'Node.js', 'Portfolio'],
  authors: [{ name: 'Maximilien Rouillon Zhu' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://github.com/hotp0t',
    siteName: 'Maximilien Rouillon Zhu Portfolio',
    images: [
      {
        url: 'https://github.com/hotp0t/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Maximilien Rouillon Zhu - Full-Stack Developer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@HOTP0T',
    creator: '@HOTP0T',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const sbSiteSecret = process.env.NEXT_PUBLIC_SB_SITE_SECRET
  const sbScriptUrl = process.env.NEXT_PUBLIC_SITEBEHAVIOUR_SCRIPT_URL

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${outfit.variable} ${inter.variable} font-sans bg-gradient-to-br from-blue-50 via-indigo-50 to-white dark:from-gray-900 dark:via-gray-800 dark:to-black min-h-screen`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <I18nProvider>
            <SectionProgress />
            {children}
            <Toaster />
          </I18nProvider>
        </ThemeProvider>

        {/* SiteBehaviour Script */}
        <Head>
          <script
            dangerouslySetInnerHTML={{
              __html: `
                (function() {
                  var sbSiteSecret = '${sbSiteSecret}';
                  window.sitebehaviourTrackingSecret = sbSiteSecret;
                  var scriptElement = document.createElement('script');
                  scriptElement.async = true;
                  scriptElement.id = 'site-behaviour-script-v2';
                  scriptElement.src = '${sbScriptUrl}?sitebehaviour-secret=' + sbSiteSecret;
                  document.head.appendChild(scriptElement); 
                })()
              `,
            }}
          ></script>
        </Head>
      </body>
    </html>
  )
}