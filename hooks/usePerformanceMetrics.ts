import { useEffect, useRef } from 'react'

type Metric = {
  name: string
  value: number
  rating: 'good' | 'needs-improvement' | 'poor'
}

export function usePerformanceMetrics(componentName: string) {
  const startTime = useRef(performance.now())
  const metrics = useRef<Metric[]>([])

  const measure = (metricName: string, value: number) => {
    let rating: Metric['rating'] = 'good'
    
    if (value > 100) rating = 'poor'
    else if (value > 50) rating = 'needs-improvement'
    
    metrics.current.push({ name: metricName, value, rating })
  }

  const logMetrics = () => {
    if (metrics.current.length === 0) return
    
    console.group(`📊 Performance Metrics: ${componentName}`)
    metrics.current.forEach(metric => {
      const color = 
        metric.rating === 'good' ? 'green' :
        metric.rating === 'needs-improvement' ? 'orange' : 'red'
      
      console.log(
        `%c${metric.name}: ${metric.value.toFixed(2)}ms`,
        `color: ${color}; font-weight: bold`
      )
    })
    console.groupEnd()
  }

  useEffect(() => {
    const endTime = performance.now()
    const renderTime = endTime - startTime.current
    
    measure('Render time', renderTime)
    
    // Log metrics after a small delay to ensure all effects have run
    const timer = setTimeout(logMetrics, 100)
    
    return () => clearTimeout(timer)
  }, [componentName])

  return { measure }
}
