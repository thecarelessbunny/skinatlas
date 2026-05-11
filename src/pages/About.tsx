import { Link } from 'react-router-dom';

export function About() {
  return (
    <article className="container-prose py-16 md:py-24">
      <div className="grid md:grid-cols-5 gap-10 md:gap-14 items-start">
        {/* Portrait placeholder — left */}
        <div className="md:col-span-2">
          <figure
            className="aspect-[4/5] rounded-2xl border-2 border-dashed bg-paper-2/50 flex flex-col items-center justify-center"
            style={{ borderColor: 'var(--color-rule)' }}
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              className="w-20 h-20 text-ink-soft/40"
            >
              <circle cx="12" cy="8" r="4" />
              <path d="M4 21c0-4.4 3.6-8 8-8s8 3.6 8 8" />
            </svg>
            <figcaption className="mt-4 text-xs uppercase tracking-[0.2em] text-ink-soft">
              Portrait
            </figcaption>
          </figure>
        </div>

        {/* Bio — right */}
        <div className="md:col-span-3">
          <p className="text-[11px] uppercase tracking-[0.25em] text-coral-500 mb-4 font-medium">
            About the author
          </p>
          <h1
            className="font-serif text-5xl md:text-6xl leading-[1.05] mb-6 text-ink"
            style={{ fontWeight: 400 }}
          >
            Ally Chugh
          </h1>

          <div className="space-y-5 text-[17px] leading-[1.75] text-ink">
            <p>
              I'm a biochemistry student at{' '}
              <span className="text-forest-600 font-medium">Canisius University</span>,
              on track for medical school with my eye set on dermatology.
            </p>
            <p>
              I built{' '}
              <span
                className="text-forest-600"
                style={{ fontStyle: 'italic', fontWeight: 500 }}
              >
                Skin Atlas
              </span>{' '}
              because I kept noticing the same gap in the dermatology resources I
              studied from: nearly every textbook image showed conditions on light
              skin. The same disease can look entirely different on darker skin
              tones — and patients of color often pay the price in delayed or
              missed diagnoses. I wanted a simple, visual reference that puts the
              full Fitzpatrick spectrum side by side, so the differences are
              undeniable.
            </p>
            <p>
              This is a personal project — built, written, and curated by me as a
              way to deepen my own learning and share something useful with anyone
              else studying derm.
            </p>
          </div>

          <Link
            to="/"
            className="inline-block mt-10 text-forest-600 hover:text-coral-500 transition"
          >
            ← Back to search
          </Link>
        </div>
      </div>
    </article>
  );
}
