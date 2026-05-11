import { useState, useMemo, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { conditions } from '../data/conditions';

export function Home() {
  const navigate = useNavigate();
  const [query, setQuery] = useState('');
  const [focused, setFocused] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [translateY, setTranslateY] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const searchBoxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mql = window.matchMedia('(max-width: 767px)');
    const update = () => setIsMobile(mql.matches);
    update();
    mql.addEventListener('change', update);
    return () => mql.removeEventListener('change', update);
  }, []);

  // When the user focuses the search, gently slide the search bar up to sit
  // just below the nav, and fade out the hero. Reverse on close.
  // On mobile, skip the transform — the iOS keyboard does its own viewport
  // shuffling and the combination pushes the input above the visible area.
  // Instead the layout collapses the hero so the search bar is already near
  // the top of the page; we just scroll to the top.
  useEffect(() => {
    if (focused && searchBoxRef.current) {
      if (isMobile) {
        setTranslateY(0);
        window.scrollTo({ top: 0, behavior: 'smooth' });
        return;
      }
      const rect = searchBoxRef.current.getBoundingClientRect();
      const headerEl = document.querySelector('header');
      // Use offsetHeight (static) instead of viewport position so we always
      // land below the nav regardless of scroll state.
      const headerHeight = (headerEl as HTMLElement | null)?.offsetHeight ?? 100;
      const desiredTopFromViewport = headerHeight + 32;
      const shift = rect.top - desiredTopFromViewport;
      setTranslateY(shift > 0 ? -shift : 0);
    } else {
      setTranslateY(0);
    }
  }, [focused, isMobile]);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target as Node)) {
        setFocused(false);
        inputRef.current?.blur();
      }
    };
    document.addEventListener('mousedown', onClick);
    return () => document.removeEventListener('mousedown', onClick);
  }, []);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return conditions;
    return conditions.filter((c) => {
      const haystack = `${c.name} ${(c.aliases ?? []).join(' ')} ${c.summary}`.toLowerCase();
      return haystack.includes(q);
    });
  }, [query]);

  useEffect(() => {
    setActiveIndex(0);
  }, [query]);

  function go(slug: string) {
    navigate(`/conditions/${slug}`);
  }

  function onKeyDown(e: React.KeyboardEvent) {
    if (e.key === 'Escape') {
      setFocused(false);
      inputRef.current?.blur();
      return;
    }
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setFocused(true);
      setActiveIndex((i) => Math.min(filtered.length - 1, i + 1));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setActiveIndex((i) => Math.max(0, i - 1));
    } else if (e.key === 'Enter') {
      const target = filtered[activeIndex];
      if (target) go(target.slug);
    }
  }

  return (
    <section
      className={`flex justify-center px-6 ${
        isMobile && focused
          ? 'items-start pt-6 pb-16 min-h-[60vh]'
          : 'items-center py-16 min-h-[80vh]'
      }`}
    >
      <div
        ref={wrapperRef}
        className="w-full max-w-4xl"
        style={{
          transform: `translateY(${translateY}px)`,
          transition: 'transform 360ms cubic-bezier(0.32, 0.72, 0, 1)',
        }}
      >
        {/* Centered intro — fades out when search is focused. On mobile we
            also collapse it out of flow so the search bar lands near the top. */}
        <div
          className={`text-center mb-12 md:mb-16 max-w-2xl mx-auto ${
            isMobile && focused ? 'hidden' : ''
          }`}
          style={{
            opacity: focused ? 0 : 1,
            transition: 'opacity 220ms ease',
            pointerEvents: focused ? 'none' : 'auto',
          }}
        >
          <div className="flex justify-center gap-2 mb-7" aria-hidden>
            {['#f8dcc6', '#eebd99', '#d29a73', '#a16d3f', '#6e4523', '#3a2110'].map((c) => (
              <span
                key={c}
                className="w-4 h-4 rounded-full"
                style={{ background: c, boxShadow: '0 1px 2px rgba(0,0,0,0.08)' }}
              />
            ))}
          </div>

          <h1
            className="font-serif text-5xl md:text-7xl mb-6 leading-[1.0] text-forest-600"
            style={{ fontWeight: 400, letterSpacing: '-0.02em', fontStyle: 'italic' }}
          >
            Skin Atlas
          </h1>
          <p className="font-serif text-xl md:text-2xl text-ink leading-[1.5]" style={{ fontWeight: 400 }}>
            Most dermatology textbooks were written from a single skin tone.
            See how common conditions actually present across the full{' '}
            <span className="text-coral-500" style={{ fontWeight: 500 }}>Fitzpatrick range</span>{' '}
            — side by side, no narrative needed.
          </p>
          <p className="mt-5 text-sm text-ink-soft leading-relaxed">
            Educational only. Not for diagnosis. Imagery curated from
            open-licensed academic sources.
          </p>
        </div>

        {/* Prompt — also fades out */}
        <p
          className={`text-center text-sm uppercase tracking-[0.25em] text-coral-500 mb-4 font-medium ${
            isMobile && focused ? 'hidden' : ''
          }`}
          style={{
            opacity: focused ? 0 : 1,
            transition: 'opacity 220ms ease',
          }}
        >
          Search a condition below to get started
        </p>

        {/* Search box */}
        <div ref={searchBoxRef} className="relative">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.25"
            className="absolute left-6 top-1/2 -translate-y-1/2 w-6 h-6 text-ink-soft pointer-events-none"
            aria-hidden
          >
            <circle cx="11" cy="11" r="7" />
            <path d="M21 21l-4.5-4.5" strokeLinecap="round" />
          </svg>
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setFocused(true);
            }}
            onClick={() => setFocused(true)}
            onKeyDown={onKeyDown}
            placeholder="Search a condition…"
            className="w-full pl-16 pr-6 py-6 rounded-2xl bg-paper border-2 text-2xl font-serif placeholder:text-ink-soft focus:outline-none focus:border-forest-600 transition"
            style={{ borderColor: focused ? 'var(--color-forest-600)' : 'var(--color-rule)' }}
          />

          {focused && (
            <div
              className="absolute left-0 right-0 top-full mt-2 bg-paper border rounded-2xl shadow-[0_8px_30px_-12px_rgba(31,77,70,0.15)] overflow-hidden z-10"
              style={{ borderColor: 'var(--color-rule)' }}
            >
              {filtered.length === 0 ? (
                <div className="px-6 py-8 text-ink-soft text-center">
                  No matches.
                </div>
              ) : (
                <ul className="max-h-[320px] overflow-y-auto">
                  {filtered.map((c, i) => (
                    <li key={c.slug}>
                      <button
                        onMouseEnter={() => setActiveIndex(i)}
                        onClick={() => go(c.slug)}
                        className={`w-full text-left px-6 py-4 flex items-baseline gap-4 transition ${i === activeIndex ? 'bg-paper-2' : 'hover:bg-paper-2'}`}
                      >
                        <span className="font-serif text-lg text-ink" style={{ fontWeight: 500 }}>
                          {c.name}
                        </span>
                        <span className="ml-auto text-xs text-ink-soft hidden sm:block max-w-md text-right">
                          {c.summary}
                        </span>
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
