import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Sayan Sasmal - Data Analysis Enthusiast",
  description: "I turn raw data into meaningful insights using Python, Excel, SQL, and BI tools.",
  keywords: ["Data Analysis", "Python", "SQL", "Power BI", "Tableau", "Data Science"],
  authors: [{ name: "Sayan Sasmal" }],
  openGraph: {
    title: "Sayan Sasmal - Data Analysis Enthusiast",
    description: "I turn raw data into meaningful insights using Python, Excel, SQL, and BI tools.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sayan Sasmal - Data Analysis Enthusiast",
    description: "I turn raw data into meaningful insights using Python, Excel, SQL, and BI tools.",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <div className="min-h-screen bg-background text-foreground">
            <Navigation />
            <main>{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
