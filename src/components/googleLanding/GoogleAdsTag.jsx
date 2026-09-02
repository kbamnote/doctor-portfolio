import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { loadGoogleTag, trackPageView } from "./googleTag";

// Mounted once for the whole campaign section (from Layout), so it survives
// navigation between the landing page and the thank-you page.
const GoogleAdsTag = () => {
  const { pathname } = useLocation();
  const isFirstRoute = useRef(true);

  useEffect(() => {
    loadGoogleTag();
  }, []);

  useEffect(() => {
    // The initial gtag('config', ...) call already sends a page view,
    // so only fire for subsequent client-side route changes.
    if (isFirstRoute.current) {
      isFirstRoute.current = false;
      return;
    }
    trackPageView();
  }, [pathname]);

  return null;
};

export default GoogleAdsTag;
