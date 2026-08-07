import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaDownload, FaTimes } from 'react-icons/fa';

const About = () => {
  const [showModal, setShowModal] = useState(false);

  const handleDownload = () => {
    const link = document.createElement('a');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setShowModal(false);
  };

  return (
    <>
      <section
        id="about"
        className="py-32 px-6 md:px-16 relative overflow-hidden"
        style={{ background: '#26221E' }}
      >
        <CitrusSlice />

        {/* thin leaf-green rule, top and bottom echoes the hero's hairline */}
        <div aria-hidden style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '1px', background: '#457534', opacity: 0.5 }} />
        <div aria-hidden style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '1px', background: '#457534', opacity: 0.5 }} />

        <div className="max-w-2xl ml-auto relative z-10" style={{ paddingTop: '5rem', paddingBottom: '5rem' }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* eyebrow matches hero's italic serif voice */}
            <p style={{
              fontFamily: "'EB Garamond', Georgia, serif",
              fontStyle: 'italic',
              fontSize: '17px',
              color: '#8FBB6E',
              marginBottom: '14px',
            }}>
              A little about me
            </p>

            <h2 style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontWeight: 500,
              fontSize: 'clamp(2.2rem, 4.5vw, 3.2rem)',
              color: '#F2EFE9',
              marginBottom: '28px',
              letterSpacing: '-0.01em',
            }}>
              About me<span style={{ color: '#F58F1F' }}>.</span>
            </h2>

            <div className="space-y-6" style={{
              fontFamily: "'EB Garamond', Georgia, serif",
              fontSize: '19px',
              lineHeight: 1.75,
            }}>
              <p style={{ color: '#C9C5BD' }}>
                I'm a <span style={{ color: '#8FBB6E', fontStyle: 'italic' }}>software engineer</span> who
                works across systems and user interfaces from building scalable backends to crafting
                polished, accessible frontends. I build websites and apps using modern React toolchains,
                including{' '}
                <span style={{
                  color: '#D9D6D0',
                  borderBottom: '1px solid #7D8285',
                  paddingBottom: '1px',
                }}>
                  Next.js
                </span>
                {' '}and other React frameworks, with TypeScript and Tailwind CSS for predictable,
                maintainable UIs.
              </p>

              <p style={{ color: '#C9C5BD' }}>
                On the systems side, I design scalable APIs and data models, optimise performance, and
                work with deployment and observability tooling to keep things reliable. On the interface
                side, I care about component architecture, accessibility, and the small interaction details
                that make a product feel considered.
              </p>

              <p style={{ color: '#C9C5BD' }}>
                I value readable, well-tested code, clear documentation, and collaborative work. If you'd
                like specific projects highlighted here or in my CV, I'm always happy to update it.
              </p>
            </div>

            {/* divider */}
            <div style={{
              marginTop: '36px', marginBottom: '32px',
              height: '1px', width: '100%',
              background: '#7D8285',
              opacity: 0.3,
            }} />

            {/* CTA same drawn-underline language as the hero, filled here for weight */}
            <motion.button
              onClick={() => setShowModal(true)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '10px',
                padding: '13px 30px',
                background: '#457534',
                border: '1px solid #457534',
                color: '#1A160F',
                fontFamily: "'EB Garamond', Georgia, serif",
                fontSize: '17px',
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'background 0.2s, color 0.2s',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background = 'transparent';
                e.currentTarget.style.color = '#8FBB6E';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = '#457534';
                e.currentTarget.style.color = '#1A160F';
              }}
            >
              <FaDownload size={13} />
              Download my CV
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Modal same paper-and-ink language as the rest of the site */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50 p-4"
          style={{ background: 'rgba(38,34,30,0.7)' }}
        >
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            style={{
              background: '#F7F4EC',
              border: '1px solid #363636',
              padding: '30px',
              maxWidth: '420px',
              width: '100%',
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '18px' }}>
              <h3 style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontSize: '24px', fontWeight: 500, color: '#363636',
              }}>
                Download CV
              </h3>
              <button
                onClick={() => setShowModal(false)}
                aria-label="Close"
                style={{
                  background: 'none', border: 'none', cursor: 'pointer',
                  color: '#7D8285', padding: '4px',
                }}
                onMouseEnter={e => e.currentTarget.style.color = '#363636'}
                onMouseLeave={e => e.currentTarget.style.color = '#7D8285'}
              >
                <FaTimes size={14} />
              </button>
            </div>

            <p style={{
              fontFamily: "'EB Garamond', Georgia, serif",
              color: '#5C5F61', marginBottom: '8px', fontSize: '16px', lineHeight: '1.65',
            }}>
              You're about to download my CV it covers my experience, skills, and background in more detail.
            </p>
            <p style={{
              fontFamily: "'EB Garamond', Georgia, serif",
              fontStyle: 'italic',
              color: '#7D8285', fontSize: '15px', marginBottom: '26px', lineHeight: '1.6',
            }}>
              Please use it only for genuine recruitment purposes.
            </p>

            <div style={{ display: 'flex', gap: '10px' }}>
              <button
                onClick={() => setShowModal(false)}
                style={{
                  flex: 1, padding: '11px 16px',
                  border: '1px solid #7D8285',
                  color: '#5C5F61', background: 'transparent',
                  cursor: 'pointer', fontSize: '15px',
                  fontFamily: "'EB Garamond', Georgia, serif",
                  transition: 'border-color 0.2s',
                }}
                onMouseEnter={e => e.currentTarget.style.borderColor = '#363636'}
                onMouseLeave={e => e.currentTarget.style.borderColor = '#7D8285'}
              >
                Cancel
              </button>
              <button
                onClick={handleDownload}
                style={{
                  flex: 1, padding: '11px 16px',
                  border: '1px solid #457534',
                  color: '#1A160F',
                  background: '#457534',
                  cursor: 'pointer', fontSize: '15px', fontWeight: 600,
                  fontFamily: "'EB Garamond', Georgia, serif",
                  transition: 'opacity 0.2s',
                }}
                onMouseEnter={e => e.currentTarget.style.opacity = '0.85'}
                onMouseLeave={e => e.currentTarget.style.opacity = '1'}
              >
                Confirm
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </>
  );
};

/* ─── Citrus cross-section ──────────────────────────────────────────────
   A halved mandarin, drawn in line the rind ring in leaf green, segment
   membranes in sea grey, one segment picked out faintly in tangerine.
   Placed opposite the hero's branch so the two sections read as a pair:
   whole fruit on the branch, one cut open here.
   ────────────────────────────────────────────────────────────────────── */
const CitrusSlice = () => {
  const segments = 10;
  const cx = 230, cy = 300, rOuter = 210, rInner = 26;

  const segmentPath = (i: number) => {
    const a0 = (Math.PI * 2 * i) / segments - Math.PI / 2;
    const a1 = (Math.PI * 2 * (i + 1)) / segments - Math.PI / 2;
    const x0 = cx + rOuter * Math.cos(a0), y0 = cy + rOuter * Math.sin(a0);
    const x1 = cx + rOuter * Math.cos(a1), y1 = cy + rOuter * Math.sin(a1);
    const ix0 = cx + rInner * Math.cos(a0), iy0 = cy + rInner * Math.sin(a0);
    return `M${ix0},${iy0} L${x0},${y0} A${rOuter},${rOuter} 0 0 1 ${x1},${y1} Z`;
  };

  return (
    <svg
      aria-hidden
      viewBox="0 0 460 600"
      style={{
        position: 'absolute', top: '50%', left: '-8%',
        width: '58%', maxWidth: '520px', height: 'auto',
        transform: 'translateY(-50%)', zIndex: 0,
      }}
    >
      <motion.circle
        cx={cx} cy={cy} r={rOuter}
        fill="none" stroke="#457534" strokeWidth={2}
        initial={{ pathLength: 0, opacity: 0 }}
        whileInView={{ pathLength: 1, opacity: 0.35 }}
        viewport={{ once: true }}
        transition={{ duration: 1.4, ease: 'easeInOut' }}
      />
      {Array.from({ length: segments }).map((_, i) => (
        <motion.path
          key={i}
          d={segmentPath(i)}
          fill={i === 3 ? 'rgba(245,143,31,0.06)' : 'none'}
          stroke={i === 3 ? '#F58F1F' : '#7D8285'}
          strokeWidth={i === 3 ? 1.2 : 0.9}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: i === 3 ? 0.6 : 0.28 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 + i * 0.06, duration: 0.5, ease: 'easeOut' }}
        />
      ))}
      <motion.circle
        cx={cx} cy={cy} r={rInner}
        fill="none" stroke="#7D8285" strokeWidth={0.9}
        initial={{ pathLength: 0, opacity: 0 }}
        whileInView={{ pathLength: 1, opacity: 0.3 }}
        viewport={{ once: true }}
        transition={{ delay: 1, duration: 0.7 }}
      />
    </svg>
  );
};

export default About;