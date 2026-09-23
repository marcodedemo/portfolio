import { track } from "@vercel/analytics";

// Solo WhatsApp: il numero non va pubblicato come telefono da chiamare
export const WHATSAPP_DISPLAY = "+39 346 522 2074";

export const whatsappUrl = (text) =>
  `https://wa.me/393465222074?text=${encodeURIComponent(text)}`;

export const trackWhatsApp = (location) => track("whatsapp_click", { location });
