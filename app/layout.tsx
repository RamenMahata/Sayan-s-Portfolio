import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import dynamic from 'next/dynamic'

// Dynamically load components to reduce initial bundle size
const ThemeProvider = dynamic(
  () => import('@/components/theme-provider').then((mod) => mod.ThemeProvider),
  { 
    ssr: false,
    loading: () => null,
  }
)

const Navigation = dynamic(
  () => import('@/components/navigation').then((mod) => mod.Navigation),
  { 
    ssr: true,
    loading: () => (
      <header className="h-16 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60" />
    ),
  }
)

const Footer = dynamic(
  () => import('@/components/footer').then((mod) => mod.Footer),
  { 
    ssr: true,
    loading: () => null,
  }
)

// Preload the main font
const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: 'swap',
  variable: '--font-inter',
  preload: true,
})

// Define viewport settings
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#000000' },
  ],
}

export const metadata: Metadata = {
  title: {
    default: "Sayan Sasmal - Data Analysis Enthusiast",
    template: "%s | Sayan Sasmal",
  },
  description: "I turn raw data into meaningful insights using Python, Excel, SQL, and BI tools.",
  keywords: ["Data Analysis", "Python", "SQL", "Power BI", "Tableau", "Data Science", "Machine Learning"],
  authors: [{ 
    name: "Sayan Sasmal",
    url: "https://yourdomain.com"
  }],
  creator: "Sayan Sasmal",
  publisher: "Sayan Sasmal",
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Sayan Sasmal - Data Analysis Enthusiast",
    description: "I turn raw data into meaningful insights using Python, Excel, SQL, and BI tools.",
    url: process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
    siteName: "Sayan Sasmal",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Sayan Sasmal - Data Analysis Enthusiast',
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sayan Sasmal - Data Analysis Enthusiast",
    description: "I turn raw data into meaningful insights using Python, Excel, SQL, and BI tools.",
    creator: "@yourtwitterhandle",
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png' },
    ],
    other: [
      {
        rel: 'mask-icon',
        url: '/safari-pinned-tab.svg',
        color: '#5bbad5',
      },
    ],
  },
  manifest: '/site.webmanifest',
  generator: 'Next.js',
}

// Theme provider props type
type ThemeProviderProps = React.ComponentProps<typeof ThemeProvider>

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning className={inter.variable}>
      <head>
        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link 
          rel="preconnect" 
          href="https://fonts.gstatic.com" 
          crossOrigin="anonymous" 
        />
        
        {/* Preload critical resources */}
        <link 
          rel="preload" 
          href="/fonts/inter-var-latin.woff2" 
          as="font" 
          type="font/woff2" 
          crossOrigin="anonymous"
        />
      </head>
      <body className={`${inter.className} antialiased`}>
        <ThemeProvider 
          attribute="class" 
          defaultTheme="system" 
          enableSystem 
          disableTransitionOnChange
        >
          <div className="min-h-screen bg-background text-foreground flex flex-col">
            <Navigation />
            <main className="flex-1">
              {children}
            </main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
