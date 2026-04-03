const sections = [
  { id: 'hero', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
];

function Navbar() {
  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 60,
        display: 'flex',
        justifyContent: 'center',
        pointerEvents: 'none',
      }}
    >
      <nav
        aria-label="Primary"
        style={{
          marginTop: '14px',
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          padding: '8px 12px',
          borderRadius: '999px',
          background: 'linear-gradient(135deg, rgba(22, 26, 44, 0.84), rgba(42, 34, 66, 0.8))',
          backdropFilter: 'blur(12px) saturate(120%)',
          WebkitBackdropFilter: 'blur(12px) saturate(120%)',
          border: '1px solid rgba(218, 202, 255, 0.28)',
          boxShadow: '0 10px 30px rgba(14, 12, 30, 0.28)',
          pointerEvents: 'auto',
        }}
      >
        {sections.map(({ id, label }) => (
          <a
            key={id}
            href={`#${id}`}
            style={{
              textDecoration: 'none',
              color: 'rgba(236, 230, 255, 0.9)',
              fontSize: '13px',
              fontWeight: 500,
              letterSpacing: '0.02em',
              padding: '6px 10px',
              borderRadius: '999px',
              transition: 'background 0.2s, color 0.2s',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.background = 'rgba(236, 230, 255, 0.16)';
              e.currentTarget.style.color = 'rgba(255, 255, 255, 0.98)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = 'transparent';
              e.currentTarget.style.color = 'rgba(236, 230, 255, 0.9)';
            }}
          >
            {label}
          </a>
        ))}
      </nav>
    </header>
  );
}

export default Navbar;