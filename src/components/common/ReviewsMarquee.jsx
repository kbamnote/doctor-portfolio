import React, { useMemo } from "react";
import { Star, Quote } from "lucide-react";
import { theme } from "../../theme/colors";
import { REVIEWS } from "../../data/googleReviews";

// Seconds each card takes to cross. Keeping it per-card means the pace stays
// the same however many reviews are added.
const SECONDS_PER_CARD = 9;

const TONES = {
  dark: {
    card: "rgba(255,255,255,0.08)",
    border: "1px solid rgba(255,255,255,0.14)",
    quoteMark: "rgba(255,255,255,0.35)",
    body: "rgba(255,255,255,0.9)",
    name: theme.text.white,
    meta: "rgba(255,255,255,0.5)",
    divider: "1px solid rgba(255,255,255,0.16)",
  },
  light: {
    card: theme.background.primary,
    border: `1px solid ${theme.neutral[200]}`,
    quoteMark: theme.primary[200],
    body: theme.text.secondary,
    name: theme.text.primary,
    meta: theme.text.light,
    divider: `1px solid ${theme.neutral[200]}`,
  },
};

export const StarRow = ({ count = 5, size = 14 }) => (
  <span className="flex items-center gap-0.5" aria-hidden="true">
    {Array.from({ length: count }).map((_, i) => (
      <Star
        key={i}
        size={size}
        strokeWidth={0}
        fill={theme.accent.orange}
        style={{ color: theme.accent.orange }}
      />
    ))}
  </span>
);

const ReviewCard = ({ review, t }) => (
  <figure
    className="flex h-full w-[19rem] flex-shrink-0 flex-col rounded-2xl p-6 sm:w-[22rem]"
    style={{ backgroundColor: t.card, border: t.border }}
  >
    <StarRow count={review.rating} />

    <Quote
      size={22}
      strokeWidth={2}
      className="mt-4"
      style={{ color: t.quoteMark }}
      aria-hidden="true"
    />

    <blockquote
      className="mt-3 text-sm leading-relaxed"
      style={{ color: t.body }}
    >
      &ldquo;{review.text}&rdquo;
    </blockquote>

    <figcaption className="mt-auto pt-5" style={{ borderTop: t.divider }}>
      <p className="text-sm font-bold" style={{ color: t.name }}>
        {review.name}
      </p>
      <p className="mt-1 text-xs" style={{ color: t.meta }}>
        Google review &middot; {review.when}
      </p>
    </figcaption>
  </figure>
);

const ReviewsMarquee = ({ tone = "dark" }) => {
  const t = TONES[tone] ?? TONES.dark;

  // Two copies, so when the first has scrolled past the second sits exactly
  // in its place and the loop is seamless.
  const loop = useMemo(() => [...REVIEWS, ...REVIEWS], []);
  const duration = REVIEWS.length * SECONDS_PER_CARD;

  return (
    <>
      <style>{`
        @keyframes reviewMarquee {
          from { transform: translate3d(0, 0, 0); }
          to   { transform: translate3d(-50%, 0, 0); }
        }
        .review-marquee__track {
          animation: reviewMarquee var(--marquee-duration) linear infinite;
          width: max-content;
        }
        .review-marquee:hover .review-marquee__track { animation-play-state: paused; }
        @media (prefers-reduced-motion: reduce) {
          .review-marquee__track { animation: none; }
          .review-marquee { overflow-x: auto; }
        }
      `}</style>

      <div
        className="review-marquee relative w-full overflow-hidden"
        style={{ "--marquee-duration": `${duration}s` }}
      >
        <div className="review-marquee__track flex gap-5 sm:gap-6">
          {loop.map((review, index) => (
            <ReviewCard key={`${review.name}-${index}`} review={review} t={t} />
          ))}
        </div>
      </div>
    </>
  );
};

export default ReviewsMarquee;
