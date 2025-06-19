import type { GtagEventParams } from "@/types/gtag";

/**
 * Utilitário para tracking de analytics e erros
 * Implementa logging estruturado para e-commerce
 */
export class Analytics {
  /**
   * Faz o tracking de erros críticos para monitoramento
   */
  static trackError(error: Error): void {
    const errorData = {
      message: error.message,
      stack: error.stack,
      timestamp: new Date().toISOString(),
      url: typeof window !== "undefined" ? window.location.href : "unknown",
      userAgent:
        typeof window !== "undefined" ? window.navigator.userAgent : "unknown",
      sessionId: this.getSessionId(),
    };

    // Log estruturado para desenvolvimento
    console.error("📊 Analytics - Error Tracked:", errorData);

    // Em produção, enviar para serviços como:
    // - Google Analytics 4
    // - Sentry
    // - DataDog
    // - Custom analytics endpoint

    if (
      typeof window !== "undefined" &&
      process.env.NODE_ENV === "production"
    ) {
      // Exemplo de envio para endpoint de analytics
      fetch("/api/analytics/error", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(errorData),
      }).catch((err) => console.error("Failed to send error analytics:", err));
    }
  }

  /**
   * Gera ou recupera um ID de sessão único
   */
  private static getSessionId(): string {
    if (typeof window === "undefined") return "server-side";

    let sessionId = sessionStorage.getItem("analytics_session_id");
    if (!sessionId) {
      sessionId = `session_${Date.now()}_${Math.random()
        .toString(36)
        .substr(2, 9)}`;
      sessionStorage.setItem("analytics_session_id", sessionId);
    }
    return sessionId;
  }

  /**
   * Envia evento de conversão para e-commerce
   */
  static trackConversion(eventName: string, params: GtagEventParams): void {
    if (typeof window === "undefined" || !window.gtag) {
      return;
    }

    window.gtag("event", eventName, {
      event_category: "ecommerce",
      ...params,
    });
  }

  /**
   * Tracking de performance crítica
   */
  static trackPerformance(metric: string, value: number): void {
    if (typeof window === "undefined" || !window.gtag) {
      return;
    }

    window.gtag("event", "timing_complete", {
      event_category: "performance",
      event_label: metric,
      value: Math.round(value),
    });
  }
}
