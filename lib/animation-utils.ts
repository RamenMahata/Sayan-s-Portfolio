import { useEffect, useRef, useState } from 'react'

type AnimationOptions = {
  root?: Element | null
  rootMargin?: string
  threshold?: number | number[]
  triggerOnce?: boolean
  defaultInView?: boolean
}

export function useAnimationTrigger(options: AnimationOptions = {}) {
  const {
    root = null,
    rootMargin = '0px',
    threshold = 0.1,
    triggerOnce = true,
    defaultInView = false,
  } = options

  const [inView, setInView] = useState(defaultInView)
  const ref = useRef<HTMLElement>(null)
  const observerRef = useRef<IntersectionObserver | null>(null)

  useEffect(() => {
    if (typeof window === 'undefined' || !ref.current) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting)
        
        if (entry.isIntersecting && triggerOnce) {
          observer.unobserve(entry.target)
        }
      },
      {
        root,
        rootMargin,
        threshold,
      }
    )

    observer.observe(ref.current)
    observerRef.current = observer

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect()
      }
    }
  }, [root, rootMargin, threshold, triggerOnce])

  return { ref, inView }
}

type AnimationVariant = {
  hidden: { [key: string]: any }
  visible: { [key: string]: any }
}

type UseAnimationProps = {
  variant: AnimationVariant
  options?: AnimationOptions
}

export function useAnimation({ variant, options = {} }: UseAnimationProps) {
  const { ref, inView } = useAnimationTrigger({
    triggerOnce: true,
    ...options,
  })

  const animation = {
    initial: 'hidden',
    animate: inView ? 'visible' : 'hidden',
    variants: variant,
    ref,
  }

  return { animation, inView }
}

// Example usage:
/*
const { animation } = useAnimation({
  variant: {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  }
})

return <motion.div {...animation}>Content</motion.div>
*/
