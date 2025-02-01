interface CacheEntry<T> {
  value: T
  expiry: number
}

class Cache {
  private static instance: Cache
  private store: Map<string, CacheEntry<any>> = new Map()

  private constructor() {}

  static getInstance(): Cache {
    if (!Cache.instance) {
      Cache.instance = new Cache()
    }
    return Cache.instance
  }

  set<T>(key: string, value: T, ttlSeconds = 3600): void {
    this.store.set(key, {
      value,
      expiry: Date.now() + ttlSeconds * 1000,
    })
  }

  get<T>(key: string): T | null {
    const entry = this.store.get(key)

    if (!entry) return null

    if (Date.now() > entry.expiry) {
      this.store.delete(key)
      return null
    }

    return entry.value
  }

  delete(key: string): void {
    this.store.delete(key)
  }

  clear(): void {
    this.store.clear()
  }
}

export const cache = Cache.getInstance()

