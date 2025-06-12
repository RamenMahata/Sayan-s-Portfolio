'use client'

import { useState, useEffect, useRef } from 'react'
import { useInView } from 'framer-motion'

type LazyLoadProps = {
  children: React.ReactNode
  rootMargin?: string
  placeholder?: React.ReactNode
  className?: string
}

export function LazyLoad({
  children,
  rootMargin = '200px',
  placeholder = null,
  className = '',
}: LazyLoadProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, {
    margin: rootMargin,
    once: true,
  })
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    if (isInView && !isLoaded) {
      setIsLoaded(true)
    }
  }, [isInView, isLoaded])

  // If we're in SSR, always render the content
  if (typeof window === 'undefined') {
    return <div className={className}>{children}</div>
  }

  return (
    <div ref={ref} className={className}>
      {isLoaded || isInView ? children : placeholder}
    </div>
  )
}

// Example usage:
/*
<LazyLoad 
  placeholder={
    <div className="h-64 w-full bg-muted animate-pulse rounded-lg" />
  }
>
  <HeavyComponent />
</LazyLoad>
*/
