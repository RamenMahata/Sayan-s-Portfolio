'use client'

import * as React from 'react'
import dynamic from 'next/dynamic'

// Dynamically import the theme provider to reduce initial bundle size
const NextThemesProvider = dynamic(
  () => import('next-themes').then((mod) => ({
    default: mod.ThemeProvider as React.ComponentType<React.PropsWithChildren<{
      attribute?: string
      defaultTheme?: string
      enableSystem?: boolean
      disableTransitionOnChange?: boolean
    }>>
  })),
  { 
    ssr: false,
    loading: () => <>{null}</>,
  }
)

// Only render the provider on the client side
export function ThemeProvider({ 
  children, 
  ...props 
}: {
  children: React.ReactNode
  attribute?: string
  defaultTheme?: string
  enableSystem?: boolean
  disableTransitionOnChange?: boolean
}) {
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])


  return (
    <NextThemesProvider 
      enableSystem={true}
      disableTransitionOnChange
      {...props}
    >
      {children}
    </NextThemesProvider>
  )
}
