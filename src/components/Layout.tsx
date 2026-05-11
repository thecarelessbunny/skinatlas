import { Outlet, Link, useLocation } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';

const SWATCHES = ['#f8dcc6', '#eebd99', '#d29a73', '#a16d3f', '#6e4523', '#3a2110'];

const NAV_LINKS = [
  { to: '/about', label: 'About' },
  { to: '/sources', label: 'Sources' },
];

export function Layout() {
  const { pathname } = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!menuOpen) return;
    const onClick = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setMenuOpen(false);
      }
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMenuOpen(false);
    };
    document.addEventListener('mousedown', onClick);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('mousedown', onClick);
      document.removeEventListener('keydown', onKey);
    };
  }, [menuOpen]);

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
              Dermatology across skin tones
            </div>
          </Link>
          <nav className="justify-self-end hidden md:flex items-center gap-7">
            {NAV_LINKS.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className="text-[11px] uppercase tracking-[0.25em] font-medium text-forest-600 hover:text-coral-500 transition relative group"
              >
                {l.label}
                <span className="absolute left-0 right-0 -bottom-1 h-px bg-current opacity-30 group-hover:opacity-100 transition-opacity" />
              </Link>
            ))}
          </nav>

          <div ref={menuRef} className="justify-self-end md:hidden relative">
            <button
              type="button"
              aria-label="Open menu"
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((o) => !o)}
              className="w-9 h-9 -mr-1 flex flex-col items-center justify-center gap-[5px] text-forest-600 hover:text-coral-500 transition"
            >
              <span
                className={`block h-px w-5 bg-current transition-transform origin-center ${
                  menuOpen ? 'translate-y-[3px] rotate-45' : ''
                }`}
              />
              <span
                className={`block h-px w-5 bg-current transition-transform origin-center ${
                  menuOpen ? '-translate-y-[3px] -rotate-45' : ''
                }`}
              />
            </button>

            {menuOpen && (
              <div
                role="menu"
                className="absolute right-0 top-full mt-3 min-w-[160px] rounded-xl bg-white border py-2 z-20"
                style={{
                  borderColor: 'var(--color-rule)',
                  boxShadow:
                    '0 10px 30px -10px rgba(20,30,28,0.18), 0 4px 12px -4px rgba(20,30,28,0.08)',
                }}
              >
                {NAV_LINKS.map((l) => (
                  <Link
                    key={l.to}
                    to={l.to}
                    role="menuitem"
                    className="block px-5 py-2.5 text-[11px] uppercase tracking-[0.25em] font-medium text-forest-600 hover:text-coral-500 hover:bg-paper-2/60 transition"
                  >
                    {l.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
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
