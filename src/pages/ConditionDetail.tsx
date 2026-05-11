import { useParams, Link, Navigate } from 'react-router-dom';
import { useState } from 'react';
import { conditionsBySlug } from '../data/conditions';

const EXTENSIONS = ['jpg', 'jpeg', 'png', 'webp'] as const;

export function ConditionDetail() {
  const { slug } = useParams<{ slug: string }>();
  const condition = slug ? conditionsBySlug[slug] : undefined;

  if (!condition) return <Navigate to="/" replace />;

  return (
    <article className="container-prose py-12 md:py-16 max-w-4xl">
      <Link
        to="/"
        className="text-sm text-ink-muted hover:text-forest-600 transition inline-flex items-center gap-2 mb-10"
      >
        <span>←</span> Back to search
      </Link>

      <header className="mb-12">
        <h1
          className="font-serif text-5xl md:text-6xl leading-[1.05] text-ink"
          style={{ fontWeight: 400 }}
        >
          {condition.name}
        </h1>
        {condition.aliases && (
          <p className="text-ink-soft italic mt-3">
            {condition.aliases.join(' · ')}
          </p>
        )}
      </header>

      <Section eyebrow="Overview" title={`What is ${condition.name}?`}>
        <p className="text-[17px] leading-[1.75] text-ink">
          {condition.description}
        </p>
      </Section>

      <Section eyebrow="Across skin tones" title="What it looks like">
        <p className="text-[15px] leading-[1.7] text-ink-muted mb-8 max-w-2xl">
          {condition.summary}
        </p>
        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          <ImageSlot
            slug={condition.slug}
            variant="light"
            label="Lighter skin"
            sublabel="Fitzpatrick I–III"
          />
          <ImageSlot
            slug={condition.slug}
            variant="dark"
            label="Darker skin"
            sublabel="Fitzpatrick IV–VI"
          />
        </div>
      </Section>
    </article>
  );
}

function Section({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mb-16">
      <p className="text-[11px] uppercase tracking-[0.25em] text-coral-500 font-medium mb-3">
        {eyebrow}
      </p>
      <h2
        className="font-serif text-3xl md:text-4xl leading-[1.1] text-ink mb-6"
        style={{ fontWeight: 400 }}
      >
        {title}
      </h2>
      {children}
    </section>
  );
}

function ImageSlot({
  slug,
  variant,
  label,
  sublabel,
}: {
  slug: string;
  variant: 'light' | 'dark';
  label: string;
  sublabel: string;
}) {
  const [extIndex, setExtIndex] = useState(0);
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <figure
        className="rounded-2xl border-2 border-dashed bg-paper-2/50 aspect-square flex flex-col items-center justify-center p-6 text-center"
        style={{ borderColor: 'var(--color-rule)' }}
      >
        <div className="flex-1 flex items-center justify-center">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            className="w-16 h-16 text-ink-soft/40"
          >
            <rect x="3" y="3" width="18" height="18" rx="2" />
            <circle cx="8.5" cy="8.5" r="1.5" />
            <path d="M21 15l-5-5L5 21" />
          </svg>
        </div>
        <figcaption className="mt-4">
          <p className="font-serif text-xl text-ink" style={{ fontWeight: 500 }}>
            {label}
          </p>
          <p className="text-xs text-ink-soft uppercase tracking-[0.2em] mt-1">
            {sublabel}
          </p>
          <p className="mt-3 text-[10px] uppercase tracking-[0.2em] text-ink-soft/70 font-mono">
            /images/{slug}/{variant}.jpg
          </p>
        </figcaption>
      </figure>
    );
  }

  const src = `/images/${slug}/${variant}.${EXTENSIONS[extIndex]}`;

  return (
    <figure
      className="rounded-2xl overflow-hidden border bg-paper"
      style={{ borderColor: 'var(--color-rule)' }}
    >
      <div className="aspect-square overflow-hidden bg-paper-2 flex items-center justify-center">
        <img
          src={src}
          alt={`${label} presentation`}
          className="w-full h-full object-contain"
          onError={() => {
            if (extIndex < EXTENSIONS.length - 1) {
              setExtIndex(extIndex + 1);
            } else {
              setFailed(true);
            }
          }}
        />
      </div>
      <figcaption className="p-4 text-center">
        <p className="font-serif text-xl text-ink" style={{ fontWeight: 500 }}>
          {label}
        </p>
        <p className="text-xs text-ink-soft uppercase tracking-[0.2em] mt-1">
          {sublabel}
        </p>
      </figcaption>
    </figure>
  );
}
