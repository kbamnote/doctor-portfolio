import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { trackPageView } from "./googleTag";

// The base tag lives in index.html, so nothing is loaded here. This only
// reports client-side route changes, which gtag cannot detect on its own —
// without it, moving from the landing page to the thank-you page would be
// invisible to Google.
const GoogleAdsTag = () => {
  const { pathname } = useLocation();
  const isFirstRoute = useRef(true);

  useEffect(() => {
    // The gtag('config', ...) call in index.html already sent the first
    // page view, so only report subsequent navigations.
    if (isFirstRoute.current) {
      isFirstRoute.current = false;
      return;
    }
    trackPageView();
  }, [pathname]);

  return null;
};

export default GoogleAdsTag;
