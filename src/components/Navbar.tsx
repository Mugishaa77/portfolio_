import { useEffect, useState } from 'react';

const sections = [
  { id: 'hero', label: 'Home', bgType: 'light' },
  { id: 'about', label: 'About', bgType: 'dark' },
  { id: 'skills', label: 'Skills', bgType: 'light' },
  { id: 'projects', label: 'Projects', bgType: 'dark' },
  { id: 'contact', label: 'Contact', bgType: 'light' },
];

const getTextColor = (isActive: boolean, bgType: string) => {
  if (bgType === 'light') {
    return isActive ? 'rgba(99, 102, 241, 0.96)' : 'rgba(120, 125, 255, 0.8)';
  }
  return isActive ? 'rgba(240, 232, 255, 0.96)' : 'rgba(220, 210, 245, 0.85)';
};

const getTextHoverColor = (bgType: string) => {
  if (bgType === 'light') {
    return 'rgba(99, 102, 241, 0.92)';
  }
  return 'rgba(240, 232, 255, 0.92)';
};

const getInactiveColor = (bgType: string) => {
  if (bgType === 'light') {
    return 'rgba(120, 125, 255, 0.8)';
  }
  return 'rgba(220, 210, 245, 0.85)';
};

function Navbar() {
  const [activeSection, setActiveSection] = useState('hero');
  const activeBgType = sections.find(s => s.id === activeSection)?.bgType || 'dark';

  useEffect(() => {
    const onScroll = () => {
      let current = 'hero';
      let bestScore = Number.POSITIVE_INFINITY;

      sections.forEach(({ id }) => {
        const el = document.getElementById(id);
        if (!el) return;

        const rect = el.getBoundingClientRect();
        const score = Math.abs(rect.top - window.innerHeight * 0.24);
        if (score < bestScore) {
          bestScore = score;
          current = id;
        }
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
    <aside
      style={{
        position: 'fixed',
        top: '18px',
        right: '18px',
        zIndex: 60,
      }}
    >
      <nav
        aria-label="Primary"
        style={{
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          gap: '10px',
          paddingLeft: '16px',
        }}
      >
        {/* Liquid glass background */}
        <div
          aria-hidden
          style={{
            position: 'absolute',
            inset: '-8px',
            borderRadius: '16px',
            background: 'linear-gradient(135deg, rgba(88, 76, 144, 0.24), rgba(68, 58, 118, 0.18))',
            backdropFilter: 'blur(14px) saturate(160%)',
            WebkitBackdropFilter: 'blur(14px) saturate(160%)',
            border: '1px solid rgba(218, 202, 255, 0.22)',
            boxShadow: 'inset 0 1px 2px rgba(255, 255, 255, 0.28), 0 8px 24px rgba(40, 30, 80, 0.12)',
            pointerEvents: 'none',
            zIndex: -1,
          }}
        />

        <div
          aria-hidden
          style={{
            position: 'absolute',
            left: '4px',
            top: '8px',
            bottom: '8px',
            width: '2px',
            borderRadius: '999px',
            background: 'repeating-linear-gradient(to bottom, rgba(175, 160, 205, 0.75) 0 2px, transparent 2px 8px)',
          }}
        />

        {sections.map(({ id, label }) => (
          <a
            key={id}
            href={`#${id}`}
            onClick={() => setActiveSection(id)}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              textDecoration: 'none',
              color: getTextColor(activeSection === id, activeBgType),
              fontSize: '13px',
              fontWeight: 500,
              letterSpacing: '0.02em',
              transition: 'color 0.2s',
              textShadow: activeSection === id
                ? activeBgType === 'light'
                  ? '0 0 8px rgba(99, 102, 241, 0.3)'
                  : '0 0 8px rgba(240, 160, 128, 0.28)'
                : 'none',
            }}
            onMouseEnter={e => {
              if (activeSection !== id) {
                e.currentTarget.style.color = getTextHoverColor(activeBgType);
              }
            }}
            onMouseLeave={e => {
              if (activeSection !== id) {
                e.currentTarget.style.color = getInactiveColor(activeBgType);
              }
            }}
          >
            <span
              aria-hidden
              style={{
                width: '8px',
                height: '8px',
                borderRadius: '50%',
                background: activeSection === id
                  ? activeBgType === 'light'
                    ? '#6366f1'
                    : '#f0a080'
                  : 'rgba(170, 155, 200, 0.9)',
                boxShadow: activeSection === id
                  ? activeBgType === 'light'
                    ? '0 0 0 3px rgba(99, 102, 241, 0.22), 0 0 10px rgba(99, 102, 241, 0.85)'
                    : '0 0 0 3px rgba(240, 160, 128, 0.24), 0 0 10px rgba(240, 160, 128, 0.8)'
                  : 'none',
                transition: 'all 0.2s',
              }}
            />
            <span>{label}</span>
          </a>
        ))}
      </nav>
    </aside>
  );
}

export default Navbar;