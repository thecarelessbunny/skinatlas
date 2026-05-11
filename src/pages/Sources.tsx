import { Link } from 'react-router-dom';

interface Source {
  name: string;
  domain: string;
  url: string;
  blurb: string;
}

const SOURCES: Source[] = [
  {
    name: 'DermNet NZ',
    domain: 'dermnetnz.org',
    url: 'https://dermnetnz.org',
    blurb:
      'A New Zealand–based clinical reference maintained by dermatologists, with one of the largest open-access image libraries in dermatology.',
  },
  {
    name: 'WebMD',
    domain: 'webmd.com',
    url: 'https://www.webmd.com',
    blurb:
      'Consumer health publisher with physician-reviewed condition guides and clinical photography across common dermatologic disease.',
  },
  {
    name: 'Skinsight',
    domain: 'skinsight.com',
    url: 'https://skinsight.com',
    blurb:
      'A patient-facing visual diagnosis aid built on the VisualDx clinical image collection, featuring presentations across skin tones.',
  },
  {
    name: 'Pine Belt Dermatology',
    domain: 'pinebeltderm.com',
    url: 'https://www.pinebeltderm.com',
    blurb:
      'A dermatology practice that publishes patient-education articles on how common conditions present differently in skin of color.',
  },
];

export function Sources() {
  return (
    <article className="container-prose py-16 md:py-24 max-w-5xl">
      <header className="mb-14 md:mb-20 max-w-2xl">
        <p className="text-[11px] uppercase tracking-[0.25em] text-coral-500 mb-4 font-medium">
          Image attribution
        </p>
        <h1
          className="font-serif text-5xl md:text-6xl leading-[1.05] mb-6 text-ink"
          style={{ fontWeight: 400 }}
        >
          Sources
        </h1>
        <p className="text-[17px] leading-[1.75] text-ink-muted">
          Clinical photography on Skin Atlas is drawn from the open-licensed
          and educational resources below. Click any source to visit the site.
        </p>
      </header>

      <ul className="grid sm:grid-cols-2 gap-5 md:gap-6">
        {SOURCES.map((s) => (
          <li key={s.domain}>
            <a
              href={s.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group block h-full rounded-2xl border bg-white p-6 md:p-7 transition hover:-translate-y-0.5 hover:shadow-md"
              style={{ borderColor: 'var(--color-rule)' }}
            >
              <div className="flex items-start justify-between gap-4">
                <h2
                  className="font-serif text-2xl md:text-[26px] leading-tight text-ink group-hover:text-forest-600 transition"
                  style={{ fontWeight: 500 }}
                >
                  {s.name}
                </h2>
                <span
                  aria-hidden
                  className="text-ink-soft/60 group-hover:text-coral-500 transition translate-y-0.5"
                >
                  ↗
                </span>
              </div>
              <p className="mt-1 text-[11px] uppercase tracking-[0.2em] text-ink-soft font-mono">
                {s.domain}
              </p>
              <p className="mt-4 text-[15px] leading-[1.65] text-ink-muted">
                {s.blurb}
              </p>
            </a>
          </li>
        ))}
      </ul>

      <Link
        to="/"
        className="inline-block mt-14 text-forest-600 hover:text-coral-500 transition"
      >
        ← Back to search
      </Link>
    </article>
  );
}
