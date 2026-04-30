const WHATSAPP_PHONE = "261385283093";
const APP_URL = `whatsapp://send?phone=${WHATSAPP_PHONE}`;
const WEB_URL = `https://wa.me/${WHATSAPP_PHONE}`;

export function openWhatsAppPreferApp() {
  if (typeof window === "undefined" || typeof document === "undefined") return;

  let pageHidden = false;
  const fallbackDelayMs = 1200;

  const handleVisibilityChange = () => {
    if (document.visibilityState === "hidden") {
      pageHidden = true;
    }
  };

  document.addEventListener("visibilitychange", handleVisibilityChange, {
    passive: true,
  });

  const fallbackTimer = window.setTimeout(() => {
    document.removeEventListener("visibilitychange", handleVisibilityChange);

    if (!pageHidden) {
      window.open(WEB_URL, "_blank", "noopener,noreferrer");
    }
  }, fallbackDelayMs);

  window.location.href = APP_URL;

  window.setTimeout(() => {
    window.clearTimeout(fallbackTimer);
    document.removeEventListener("visibilitychange", handleVisibilityChange);
  }, fallbackDelayMs + 4000);
}
