import { useEffect } from 'react';

// react-helmet-async 2.x does not apply tags under React 19 — it fails
// silently, leaving every page on the static <title> from index.html.
// This sets the same tags directly instead; same props, no dependency.

const upsertMeta = (attr, key, content) => {
  if (!content) return;

  let el = document.head.querySelector(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
};

const removeMeta = (attr, key) => {
  const el = document.head.querySelector(`meta[${attr}="${key}"]`);
  if (el) el.remove();
};

const SEO = ({ title, description, noindex = false }) => {
  useEffect(() => {
    if (title) document.title = title;

    upsertMeta('name', 'description', description);

    // Open Graph / Facebook
    upsertMeta('property', 'og:type', 'website');
    upsertMeta('property', 'og:title', title);
    upsertMeta('property', 'og:description', description);

    // Twitter
    upsertMeta('property', 'twitter:card', 'summary_large_image');
    upsertMeta('property', 'twitter:title', title);
    upsertMeta('property', 'twitter:description', description);

    // Removed rather than left stale, so navigating from a noindex page
    // back to an indexable one does not carry the directive over.
    if (noindex) {
      upsertMeta('name', 'robots', 'noindex, nofollow');
    } else {
      removeMeta('name', 'robots');
    }
  }, [title, description, noindex]);

  return null;
};

export default SEO;
