// Google Ads tag for the campaign pages.
//
// Google's pasted snippet assumes a full page load per page. This is a React
// SPA, so the tag is loaded once and page views / conversions are fired
// explicitly on route changes instead.

export const GOOGLE_ADS_ID = "AW-16477406746";

// Conversion label from the "Booking Form Submit" conversion action.
// Fired on the thank-you page, which is only reachable after a successful send.
export const CONVERSION_LABEL = "EHE6CPyyuewcEJqMhbE9";

let isLoaded = false;

export const loadGoogleTag = () => {
  if (typeof window === "undefined" || isLoaded) return;
  isLoaded = true;

  window.dataLayer = window.dataLayer || [];
  if (!window.gtag) {
    window.gtag = function gtag() {
      window.dataLayer.push(arguments);
    };
  }

  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GOOGLE_ADS_ID}`;
  document.head.appendChild(script);

  window.gtag("js", new Date());
  // Sends the initial page view for this session.
  window.gtag("config", GOOGLE_ADS_ID);
};

export const trackPageView = () => {
  if (typeof window === "undefined" || !window.gtag) return;

  window.gtag("event", "page_view", {
    page_location: window.location.href,
    page_path: window.location.pathname,
    page_title: document.title,
  });
};

export const trackConversion = () => {
  if (typeof window === "undefined" || !window.gtag) return;

  if (!CONVERSION_LABEL) {
    console.warn(
      "[GoogleAds] CONVERSION_LABEL is not set — conversion was not sent."
    );
    return;
  }

  window.gtag("event", "conversion", {
    send_to: `${GOOGLE_ADS_ID}/${CONVERSION_LABEL}`,
  });
};
