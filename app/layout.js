import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL
  || (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}`
      : 'http://localhost:3000')

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: 'Jai Upadhyay | Software Developer Portfolio',
  description:
    'Portfolio of Jai Upadhyay, a Computer Science student and software developer interested in Android development, AI/ML and modern web technologies.',
  keywords: [
    'Jai Upadhyay',
    'Software Developer',
    'Portfolio',
    'Android Developer',
    'AI/ML',
    'Full Stack Developer',
    'Galgotias University',
  ],
  authors: [{ name: 'Jai Upadhyay' }],
  openGraph: {
    title: 'Jai Upadhyay | Software Developer Portfolio',
    description:
      'Portfolio of Jai Upadhyay, a Computer Science student and software developer interested in Android development, AI/ML and modern web technologies.',
    type: 'website',
    locale: 'en_US',
    siteName: 'Jai Upadhyay Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jai Upadhyay | Software Developer Portfolio',
    description:
      'Portfolio of Jai Upadhyay, a Computer Science student and software developer.',
  },
  icons: {
    icon: '/favicon.svg',
  },
}

export const viewport = {
  themeColor: '#0a0a0f',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased bg-[#050510] text-slate-100 overflow-x-hidden`}>
        {children}
      </body>
    </html>
  )
}
