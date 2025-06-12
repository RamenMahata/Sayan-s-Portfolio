const cache = new Map<string, { data: any; timestamp: number }>()
const CACHE_DURATION = 5 * 60 * 1000 // 5 minutes

export async function fetchWithCache<T>(
  key: string,
  fetcher: () => Promise<T>,
  options: { cacheDuration?: number } = {}
): Promise<T> {
  const now = Date.now()
  const cacheDuration = options.cacheDuration ?? CACHE_DURATION
  
  // Check cache first
  const cached = cache.get(key)
  if (cached && now - cached.timestamp < cacheDuration) {
    return cached.data
  }

  try {
    // Fetch fresh data
    const data = await fetcher()
    
    // Update cache
    cache.set(key, { data, timestamp: now })
    
    return data
  } catch (error) {
    // If there's an error but we have cached data, return that
    if (cached) {
      console.warn(`Using cached data after fetch error: ${error}`)
      return cached.data
    }
    throw error
  }
}

// Utility to clear specific or all cache entries
export function clearCache(key?: string) {
  if (key) {
    cache.delete(key)
  } else {
    cache.clear()
  }
}

// Example usage:
/*
const userData = await fetchWithCache(
  `user-${userId}`, 
  () => fetch(`/api/users/${userId}`).then(res => res.json())
)
*/
