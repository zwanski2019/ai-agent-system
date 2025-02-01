type LogLevel = "info" | "warn" | "error" | "debug"

interface LogEntry {
  timestamp: string
  level: LogLevel
  message: string
  metadata?: Record<string, any>
}

class Logger {
  private static instance: Logger
  private logs: LogEntry[] = []

  private constructor() {}

  static getInstance(): Logger {
    if (!Logger.instance) {
      Logger.instance = new Logger()
    }
    return Logger.instance
  }

  private log(level: LogLevel, message: string, metadata?: Record<string, any>) {
    const entry: LogEntry = {
      timestamp: new Date().toISOString(),
      level,
      message,
      metadata,
    }

    this.logs.push(entry)
    console.log(`[${entry.timestamp}] ${level.toUpperCase()}: ${message}`, metadata || "")
  }

  info(message: string, metadata?: Record<string, any>) {
    this.log("info", message, metadata)
  }

  warn(message: string, metadata?: Record<string, any>) {
    this.log("warn", message, metadata)
  }

  error(message: string, metadata?: Record<string, any>) {
    this.log("error", message, metadata)
  }

  debug(message: string, metadata?: Record<string, any>) {
    if (process.env.NODE_ENV === "development") {
      this.log("debug", message, metadata)
    }
  }

  getLogs(): LogEntry[] {
    return this.logs
  }
}

export const logger = Logger.getInstance()

