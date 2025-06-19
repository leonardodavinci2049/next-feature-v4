/**
 * Tipagens para Google Analytics Global Site Tag (gtag)
 * Evita o uso de 'any' e fornece type safety
 */
export interface GtagEventParams {
  event_category?: string;
  event_label?: string;
  value?: number;
  description?: string;
  fatal?: boolean;
  error_digest?: string;
  custom_parameter?: string;
}

export interface GtagConfigParams {
  page_title?: string;
  page_location?: string;
  page_path?: string;
  send_page_view?: boolean;
}

export interface GtagCommand {
  (command: "config", targetId: string, config?: GtagConfigParams): void;
  (command: "event", eventName: string, eventParams?: GtagEventParams): void;
  (command: "set", config: Record<string, unknown>): void;
}

declare global {
  interface Window {
    gtag?: GtagCommand;
    dataLayer?: Array<Record<string, unknown>>;
  }
}
