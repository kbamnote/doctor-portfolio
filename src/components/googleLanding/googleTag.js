// Google Ads conversion tracking.
//
// The base Google tag (gtag.js) is installed once in index.html, exactly as
// Google's "Install manually" instructions specify. There is no second tag.
//
// The event snippet cannot be pasted into HTML: this is a React SPA with a
// single index.html, so anything placed there would fire on every page of the
// site. It is dispatched from the Thank You component instead, which fires it
// only when that page is actually shown.

export const GOOGLE_ADS_ID = "AW-16477406746";

// "Booking Form Submit (1)" conversion action. Fired on the Thank You page,
// which is only reachable after a successful form submission.
export const CONVERSION_LABEL = "4-RrCOH46e4cEJqMhbE9";

// "Landing Page View (1)" conversion action — counts arrivals on the landing page.
// Must be SECONDARY in Google Ads: every ad click produces a page view, so as a
// primary action it would push bidding toward traffic instead of bookings.
export const PAGE_VIEW_CONVERSION_LABEL = "5In1CPDM6u4cEJqMhbE9";

export const trackPageView = () => {
  if (typeof window === "undefined" || !window.gtag) return;

  window.gtag("event", "page_view", {
    page_location: window.location.href,
    page_path: window.location.pathname,
    page_title: document.title,
  });
};

export const trackPageViewConversion = () => {
  if (typeof window === "undefined" || !window.gtag) return;

  if (!PAGE_VIEW_CONVERSION_LABEL) {
    console.warn(
      "[GoogleAds] PAGE_VIEW_CONVERSION_LABEL is not set — page-view conversion was not sent."
    );
    return;
  }

  window.gtag("event", "conversion", {
    send_to: `${GOOGLE_ADS_ID}/${PAGE_VIEW_CONVERSION_LABEL}`,
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
