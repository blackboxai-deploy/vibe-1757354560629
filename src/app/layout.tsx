import type { Metadata } from 'next'
import { Inter, Noto_Sans_Arabic } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const notoSansArabic = Noto_Sans_Arabic({ 
  subsets: ['arabic'], 
  variable: '--font-noto-arabic' 
})

export const metadata: Metadata = {
  title: 'صحتك بالدنيا | Healthy Life',
  description: 'مرجع شامل للصحة والتغذية العلاجية مع كامل المنجليفي - أخصائي التغذية',
  keywords: 'صحة، تغذية، علاج، سكري، التغذية العلاجية، كامل المنجليفي',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ar" dir="rtl">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#4CAF50" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="صحتك بالدنيا" />
      </head>
      <body className={`${inter.variable} ${notoSansArabic.variable} font-arabic antialiased bg-gradient-to-br from-green-50 to-blue-50 min-h-screen`}>
        <div id="root">
          {children}
        </div>
      </body>
    </html>
  )
}