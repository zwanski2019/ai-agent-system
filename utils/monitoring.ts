interface Metric {
  name: string
  value: number
  timestamp: number
  tags?: Record<string, string>
}

class Monitoring {
  private static instance: Monitoring
  private metrics: Metric[] = []

  private constructor() {}

  static getInstance(): Monitoring {
    if (!Monitoring.instance) {
      Monitoring.instance = new Monitoring()
    }
    return Monitoring.instance
  }

  trackMetric(name: string, value: number, tags?: Record<string, string>) {
    const metric: Metric = {
      name,
      value,
      timestamp: Date.now(),
      tags,
    }

    this.metrics.push(metric)

    // In a real implementation, you would send this to a monitoring service
    console.log("Metric tracked:", metric)
  }

  getMetrics(): Metric[] {
    return this.metrics
  }
}

export const monitoring = Monitoring.getInstance()

