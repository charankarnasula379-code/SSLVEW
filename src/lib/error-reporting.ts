/**
 * Generic runtime error reporting helper.
 * Forwards errors to any registered error handler on the window object.
 * This replaces the Lovable-specific error reporting module; the interface
 * is kept compatible so callers do not need to change.
 */

type ErrorReportOptions = {
  mechanism?: "manual" | "onerror" | "unhandledrejection" | "react_error_boundary";
  handled?: boolean;
  severity?: "error" | "warning" | "info";
};

type ErrorEvents = {
  captureException?: (
    error: unknown,
    context?: Record<string, unknown>,
    options?: ErrorReportOptions,
  ) => void;
};

declare global {
  interface Window {
    __errorEvents?: ErrorEvents;
    __reportRuntimeError?: (payload: {
      message: string;
      stack?: string;
      filename?: string;
    }) => void;
    // Keep legacy Lovable hooks alive so the vite plugin (required dep) does
    // not break if it looks for them at runtime in the editor preview.
    __lovableEvents?: ErrorEvents;
    __lovableReportRuntimeError?: (payload: {
      message: string;
      stack?: string;
      filename?: string;
    }) => void;
  }
}

export function reportError(error: unknown, context: Record<string, unknown> = {}) {
  if (typeof window === "undefined") return;

  const opts: ErrorReportOptions = {
    mechanism: "react_error_boundary",
    handled: false,
    severity: "error",
  };

  const ctx = {
    source: "react_error_boundary",
    route: window.location.pathname,
    ...context,
  };

  window.__errorEvents?.captureException?.(error, ctx, opts);
  // Also forward to legacy Lovable hook — only present inside the Lovable
  // editor preview, a no-op in production.
  window.__lovableEvents?.captureException?.(error, ctx, opts);

  const message =
    error instanceof Response
      ? `Response ${error.status}${error.url ? ` at ${error.url}` : ""}`
      : error instanceof Error
        ? error.message
        : String(error);
  const stack = error instanceof Error ? error.stack : undefined;

  const payload = {
    message,
    ...(stack !== undefined && { stack }),
    filename: window.location.pathname,
  };
  window.__reportRuntimeError?.(payload);
  window.__lovableReportRuntimeError?.(payload);
}
