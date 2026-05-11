import { Link } from 'react-router-dom';

export function About() {
  return (
    <article className="container-prose py-16 md:py-24">
      <div className="grid md:grid-cols-5 gap-10 md:gap-14 items-start">
        {/* Portrait — left */}
        <div className="md:col-span-2">
          <figure
            className="aspect-[4/5] rounded-2xl overflow-hidden border"
            style={{ borderColor: 'var(--color-rule)' }}
          >
            <img
              src="/images/about/allison.jpg"
              alt="Allison Chugh"
              className="w-full h-full object-cover"
            />
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
            Allison Chugh
          </h1>

          <div className="space-y-5 text-[17px] leading-[1.75] text-ink">
            <p>
              I'm a third-year biochemistry major at{' '}
              <span className="text-forest-600 font-medium">Canisius University</span>
              , aiming to enter medical school in 2027.
            </p>
            <p>
              I created{' '}
              <span
                className="text-forest-600"
                style={{ fontStyle: 'italic', fontWeight: 500 }}
              >
                Skin Atlas
              </span>{' '}
              after a clinical experience in dermatology where I saw how
              different the same skin condition could appear across different
              skin tones. I also became aware of a gap in dermatology education:
              many textbooks and learning resources overwhelmingly feature
              conditions on lighter skin.
            </p>
            <p>
              Skin Atlas is a simple visual reference designed to display
              dermatologic conditions side by side across the full Fitzpatrick
              spectrum, making differences in presentation easier to recognize
              and study.
            </p>
            <p>
              This is a personal project, started as a way to deepen my own
              learning while creating a resource that may also help others
              studying dermatology.
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
