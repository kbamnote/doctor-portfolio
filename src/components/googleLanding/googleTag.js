// Google Ads conversion events.
//
// The base Google tag (gtag.js) is installed directly in index.html, exactly
// as Google's "Install manually" instructions specify.
//
// The event snippets cannot be pasted into HTML: this is a React SPA with a
// single index.html, so anything placed there would fire on every page of the
// site. They are dispatched from the relevant component instead, which fires
// them only on the page they belong to.

export const GOOGLE_ADS_ID = "AW-16477406746";

// "Booking Form Submit" — fired on the thank-you page, which is only
// reachable after a successful form submission.
export const CONVERSION_LABEL = "EHE6CPyyuewcEJqMhbE9";

// "Page view" — fired when the landing page opens.
export const PAGE_VIEW_CONVERSION_LABEL = "uRLaCMSSs-0cEJqMhbE9";

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
    value: 1.0,
    currency: "INR",
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
