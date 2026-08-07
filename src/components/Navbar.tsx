import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

type BgType = 'light' | 'dark';

const sections: { id: string; label: string; bgType: BgType }[] = [
  { id: 'hero',     label: 'Home',     bgType: 'light' },
  { id: 'about',    label: 'About',    bgType: 'dark'  },
  { id: 'skills',   label: 'Skills',   bgType: 'light' },
  { id: 'projects', label: 'Projects', bgType: 'dark'  },
  { id: 'contact',  label: 'Contact',  bgType: 'light' },
];

// Jeju Volcanic Palette
// Basalt Black: #363636
// Leaf Green:   #457534
// Sea Grey:     #7D8285
// Tangerine:    #F58F1F

const colors = {
  light: {
    active:      '#363636',
    inactive:    '#7D8285',
    hover:       '#457534',
    dot:         '#457534',
    dotGlow:     '0 0 0 3px rgba(69,117,52,0.15), 0 0 12px rgba(245,143,31,0.35)',
    dotInactive: '#7D8285',
    track:       'linear-gradient(to bottom, transparent, rgba(69,117,52,0.35), rgba(245,143,31,0.2), transparent)',
    dash:        '#F58F1F',
    dashGlow:    'rgba(245,143,31,0.35)',
    textShadow:  'none',
  },
  dark: {
    active:      '#F58F1F',
    inactive:    '#7D8285',
    hover:       '#457534',
    dot:         '#F58F1F',
    dotGlow:     '0 0 0 3px rgba(245,143,31,0.2), 0 0 16px rgba(245,143,31,0.4)',
    dotInactive: '#7D8285',
    track:       'linear-gradient(to bottom, transparent, rgba(69,117,52,0.3), rgba(245,143,31,0.15), transparent)',
    dash:        '#457534',
    dashGlow:    'rgba(69,117,52,0.35)',
    textShadow:  '0 1px 2px rgba(0,0,0,0.3)',
  },
};

function Navbar() {
  const [activeSection, setActiveSection] = useState('hero');
  const [hoveredSection, setHoveredSection] = useState<string | null>(null);

  const activeBgType = sections.find(s => s.id === activeSection)?.bgType ?? 'light';
  const c = colors[activeBgType];

  useEffect(() => {
    const onScroll = () => {
      let current = 'hero';
      let bestScore = Number.POSITIVE_INFINITY;
      sections.forEach(({ id }) => {
        const el = document.getElementById(id);
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const score = Math.abs(rect.top - window.innerHeight * 0.24);
        if (score < bestScore) { bestScore = score; current = id; }
      });
      setActiveSection(current);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  return (
    <aside style={{ position: 'fixed', top: 0, right: 0, zIndex: 60, padding: '2px 4px' }}>
      <nav
        aria-label="Primary"
        style={{ display: 'flex', flexDirection: 'column', gap: '6px', position: 'relative', paddingLeft: '20px' }}
      >
        {/* Track - reads like a climbing vine */}
        <div aria-hidden style={{
          position: 'absolute', left: '3px', top: '8px', bottom: '8px',
          width: '1px', borderRadius: '2px',
          background: c.track,
          transition: 'background 0.4s ease',
          opacity: 0.7,
        }} />

        {/* Gliding orb - a little bud, tangerine-to-green */}
        <motion.div
          aria-hidden
          style={{
            position: 'absolute', left: '-1px',
            width: '9px', height: '9px', borderRadius: '50%',
            background: 'radial-gradient(circle at 30% 30%, #F58F1F, #457534)',
            boxShadow: c.dotGlow,
            transition: 'box-shadow 0.35s ease',
          }}
          animate={{ top: `${sections.findIndex(s => s.id === activeSection) * 34 + 4}px` }}
          transition={{ type: 'spring', stiffness: 280, damping: 28 }}
        />

        {sections.map(({ id, label }) => {
          const isActive = activeSection === id;
          const isHovered = hoveredSection === id && !isActive;

          return (
            <a
              key={id}
              href={`#${id}`}
              onClick={() => setActiveSection(id)}
              onMouseEnter={() => setHoveredSection(id)}
              onMouseLeave={() => setHoveredSection(null)}
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '10px',
                height: '28px', textDecoration: 'none',
                color: isActive ? c.active : isHovered ? c.hover : c.inactive,
                fontSize: '11px',
                fontWeight: isActive ? 700 : 400,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                transition: 'color 0.2s, transform 0.2s',
                transform: isHovered ? 'translateX(3px)' : 'translateX(0)',
                userSelect: 'none',
                textShadow: c.textShadow || 'none',
              }}
            >
              {/* Tick bar - teardrop tip on active, like a leaf */}
              <span aria-hidden style={{
                width: '2px',
                height: isActive ? '18px' : '4px',
                borderRadius: isActive ? '0 8px 8px 8px' : '1px',
                background: isActive ? c.dot : c.dotInactive,
                boxShadow: isActive ? c.dotGlow : 'none',
                transition: 'height 0.3s cubic-bezier(0.34,1.56,0.64,1), background 0.3s, box-shadow 0.3s, border-radius 0.3s',
                flexShrink: 0,
                display: 'inline-block',
              }} />

              <span style={{
                opacity: isActive ? 1 : isHovered ? 0.8 : 0.45,
                transition: 'opacity 0.2s',
              }}>
                {label}
              </span>

              {/* Trailing dash */}
              <AnimatePresence>
                {isActive && (
                  <motion.span
                    aria-hidden key="dash"
                    initial={{ scaleX: 0, opacity: 0 }}
                    animate={{ scaleX: 1, opacity: 1 }}
                    exit={{ scaleX: 0, opacity: 0 }}
                    transition={{ duration: 0.25, ease: 'easeOut' }}
                    style={{
                      display: 'inline-block',
                      width: '14px', height: '1px',
                      borderRadius: '1px',
                      background: c.dash,
                      opacity: 0.6,
                      transformOrigin: 'left',
                    }}
                  />
                )}
              </AnimatePresence>
            </a>
          );
        })}
      </nav>
    </aside>
  );
}

export default Navbar;