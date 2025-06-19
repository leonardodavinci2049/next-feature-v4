export interface ErrorInfo {
  message: string;
  stack?: string;
  digest?: string;
  timestamp: string;
  userAgent: string;
  url: string;
  userId?: string;
  sessionId?: string;
}

export interface ErrorMetrics {
  errorType: "network" | "chunk" | "runtime" | "unknown";
  severity: "low" | "medium" | "high" | "critical";
  recoverable: boolean;
}

export type ErrorCategory =
  | "NETWORK_ERROR"
  | "CHUNK_LOAD_ERROR"
  | "PAYMENT_ERROR"
  | "AUTH_ERROR"
  | "VALIDATION_ERROR"
  | "SERVER_ERROR"
  | "UNKNOWN_ERROR";
