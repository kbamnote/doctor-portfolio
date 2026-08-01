// Single source of truth for the campaign page's WhatsApp destination.
// The Google landing page is standalone — every conversion CTA opens this
// chat rather than navigating into the main website.
export const WHATSAPP_URL =
  "https://wa.me/919354985058?text=Hello!%20I%20want%20homeopathy%20treatment.%E2%80%8E";

export const openWhatsApp = () => {
  window.open(WHATSAPP_URL, "_blank", "noopener,noreferrer");
};
