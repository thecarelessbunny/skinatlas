import { Outlet, Link, useLocation } from 'react-router-dom';
import { useEffect } from 'react';

const SWATCHES = ['#f8dcc6', '#eebd99', '#d29a73', '#a16d3f', '#6e4523', '#3a2110'];

export function Layout() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="min-h-screen flex flex-col bg-paper">
      {/* HEADER — white card that pops off the background */}
      <header
        className="bg-white relative z-10"
        style={{
          boxShadow:
            '0 1px 0 rgba(31,77,70,0.04), 0 4px 12px -2px rgba(20,30,28,0.08), 0 12px 28px -8px rgba(20,30,28,0.06)',
        }}
      >
        <div className="container-prose grid grid-cols-3 items-center py-7">
          <div className="flex items-center gap-1.5" aria-hidden>
            {SWATCHES.map((c) => (
              <span
                key={c}
                className="w-2.5 h-2.5 rounded-full"
                style={{ background: c, boxShadow: '0 1px 1px rgba(0,0,0,0.06)' }}
              />
            ))}
          </div>
          <Link to="/" className="group justify-self-center text-center">
            <div
              className="font-serif text-2xl md:text-3xl tracking-tight text-forest-600 group-hover:text-coral-500 transition leading-none"
              style={{ fontStyle: 'italic', fontWeight: 500 }}
            >
              Skin Atlas
            </div>
            <div className="mt-1 text-[10px] uppercase tracking-[0.25em] text-ink-soft">
              Dermatology Across Skin Tones | A Visual Reference
            </div>
          </Link>
          <nav className="justify-self-end flex items-center gap-7">
            <Link
              to="/about"
              className="text-[11px] uppercase tracking-[0.25em] font-medium text-forest-600 hover:text-coral-500 transition relative group"
            >
              About
              <span className="absolute left-0 right-0 -bottom-1 h-px bg-current opacity-30 group-hover:opacity-100 transition-opacity" />
            </Link>
          </nav>
        </div>
      </header>

      <main className="flex-1">
        <Outlet />
      </main>

      {/* FOOTER — slim, dark inverted; just the swatch logo + copyright */}
      <footer className="mt-20 py-6" style={{ background: 'var(--color-forest-900)' }}>
        <div className="container-prose flex flex-col items-center gap-2 text-center">
          <div className="flex items-center gap-1.5" aria-hidden>
            {SWATCHES.map((c) => (
              <span
                key={c}
                className="w-2.5 h-2.5 rounded-full"
                style={{ background: c }}
              />
            ))}
          </div>
          <p className="text-[11px] text-paper/45 font-mono">
            © {new Date().getFullYear()}
          </p>
        </div>
      </footer>
    </div>
  );
}
