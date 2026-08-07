import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaMedium } from 'react-icons/fa';

const NAME = "Sally Wanga";
const DESC_A = "I build systems and user interfaces, websites and apps using Next.js, React, TypeScript, and Tailwind delivering scalable backends, observable systems, ";
const DESC_B = "and";
const DESC_C = " frontends that feel as good to use as they are to build.";

const socialLinks = [
  { Icon: FaGithub,   href: "https://github.com/Mugishaa77",         label: "GitHub",   hover: "#457534" },
  { Icon: FaLinkedin, href: "https://www.linkedin.com/in/swugisha/", label: "LinkedIn", hover: "#7D8285" },
  { Icon: FaMedium,   href: "https://swugisha.medium.com/",          label: "Medium",   hover: "#F58F1F" },
];

/* ─── Palette ──────────────────────────────────────────────────────────────
   Basalt Black  #363636
   Leaf Green    #457534
   Sea Grey      #7D8285
   Tangerine     #F58F1F
   All four now appear with intention, not just green + neutral.
   ────────────────────────────────────────────────────────────────────── */

/* ─── Palette ribbon ──────────────────────────────────────────────────────
   A small folded strip of the four swatches, set in the margin like a
   bookmark or a wax-ribbon a quiet nod to the palette card itself,
   rendered as a piece of stationery rather than a UI element.
   ────────────────────────────────────────────────────────────────────── */
const PaletteRibbon = () => {
  const swatches = [
    { color: '#363636', label: 'Basalt' },
    { color: '#F58F1F', label: 'Tangerine' },
    { color: '#457534', label: 'Leaf' },
    { color: '#7D8285', label: 'Sea grey' },
  ];
  return (
    <motion.div
      initial={{ opacity: 0, x: -8 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 1.9, duration: 0.7, ease: 'easeOut' }}
      style={{
        position: 'absolute', left: '1%', top: '5%',
        height: '90%', width: '10px',
        display: 'flex', flexDirection: 'column',
        boxShadow: '2px 2px 0 rgba(54,54,54,0.08)',
        zIndex: 1,
        marginRight: '12px',
      }}
    >
      {swatches.map((s, i) => (
        <motion.div
          key={s.label}
          title={s.label}
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ delay: 1.95 + i * 0.12, duration: 0.6, ease: 'easeOut' }}
          style={{
            flex: 1,
            width: '100%',
            background: s.color,
            marginTop: i === 0 ? 0 : '-1px',
            marginRight: '12px',
            transformOrigin: 'top',
          }}
        />
      ))}
    </motion.div>
  );
};

/* ─── Citrus branch resting among basalt pebbles ─────────────────────────── */
const CitrusBranch = () => {
  const leaf = (transform: string, delay: number) => (
    <motion.path
      d="M0,0 C 10,-18 34,-22 50,-8 C 34,-4 14,4 0,0 Z"
      transform={transform}
      fill="none"
      stroke="#457534"
      strokeWidth={1.3}
      strokeLinecap="round"
      strokeLinejoin="round"
      initial={{ pathLength: 0, opacity: 0 }}
      animate={{ pathLength: 1, opacity: 0.75 }}
      transition={{ delay, duration: 1.1, ease: 'easeInOut' }}
    />
  );

  // pebbles the branch settles among basalt black and sea grey, flat, irregular
  const pebbles = [
    { cx: 55,  cy: 600, rx: 22, ry: 13, fill: '#363636', rotate: -8,  delay: 2.0 },
    { cx: 100, cy: 612, rx: 16, ry: 10, fill: '#7D8285', rotate: 6,   delay: 2.1 },
    { cx: 20,  cy: 615, rx: 13, ry: 9,  fill: '#7D8285', rotate: -14, delay: 2.2 },
    { cx: 130, cy: 605, rx: 11, ry: 8,  fill: '#363636', rotate: 10,  delay: 2.25 },
  ];

  return (
    <svg
      aria-hidden
      viewBox="0 0 420 640"
      style={{
        position: 'absolute', top: '-4%', right: '-2%',
        width: '52%', maxWidth: '480px', height: 'auto', zIndex: 0,
      }}
    >
      <motion.path
        d="M300,0 C 260,90 230,160 210,230 C 190,300 200,380 170,460 C 145,525 110,570 60,610"
        fill="none"
        stroke="#457534"
        strokeWidth={1.6}
        strokeLinecap="round"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 0.6 }}
        transition={{ duration: 1.8, ease: 'easeInOut' }}
      />
      {leaf('translate(214,150) rotate(20)', 0.9)}
      {leaf('translate(196,260) rotate(-155) scale(1,-1)', 1.05)}
      {leaf('translate(180,340) rotate(35)', 1.2)}
      {leaf('translate(145,455) rotate(-140) scale(1,-1)', 1.35)}
      {leaf('translate(95,545) rotate(30)', 1.5)}

      <motion.circle
        cx={78} cy={598} r={13}
        fill="#F58F1F"
        initial={{ opacity: 0, scale: 0.4 }}
        animate={{ opacity: 0.92, scale: 1 }}
        transition={{ delay: 1.9, duration: 0.6, ease: 'easeOut' }}
      />
      <motion.path
        d="M78,585 q 4,-6 9,-4"
        fill="none" stroke="#457534" strokeWidth={1.3} strokeLinecap="round"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 0.8 }}
        transition={{ delay: 2.1, duration: 0.4 }}
      />

      {pebbles.map((p, i) => (
        <motion.ellipse
          key={i}
          cx={p.cx} cy={p.cy} rx={p.rx} ry={p.ry}
          fill={p.fill}
          opacity={0.85}
          transform={`rotate(${p.rotate} ${p.cx} ${p.cy})`}
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 0.85, scale: 1 }}
          transition={{ delay: p.delay, duration: 0.5, ease: 'easeOut' }}
        />
      ))}
    </svg>
  );
};

const Hero = () => {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center px-6 md:px-16 py-24 relative overflow-hidden"
      style={{ background: '#F7F4EC' }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;1,400&family=EB+Garamond:ital,wght@0,400;1,500;1,600&display=swap');
      `}</style>

      <CitrusBranch />
      <PaletteRibbon />

      <div className="max-w-xl w-full relative z-10" style={{ paddingLeft: '2.2rem' }}>

        {/* eyebrow */}
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          style={{
            fontFamily: "'EB Garamond', Georgia, serif",
            fontStyle: 'italic',
            fontSize: '17px',
            color: '#457534',
            marginBottom: '18px',
            letterSpacing: '0.01em',
          }}
        >
          Currently open to new opportunities: Website Development, Product Design, and Full-stack Engineering.
        </motion.p>

        {/* name basalt black with a tangerine period, a small deliberate mark */}
        <motion.h1
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.7, ease: 'easeOut' }}
          style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontWeight: 500,
            fontSize: 'clamp(3.2rem, 7vw, 5rem)',
            lineHeight: 1.05,
            color: '#363636',
            marginBottom: '6px',
            letterSpacing: '-0.01em',
          }}
        >
          {NAME}<span style={{ color: '#F58F1F' }}>.</span>
        </motion.h1>

        {/* role set on a soft sea-grey rule instead of floating alone */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55, duration: 0.6 }}
          style={{
            fontFamily: "'EB Garamond', Georgia, serif",
            fontStyle: 'italic',
            fontSize: '22px',
            color: '#457534',
            marginBottom: '10px',
          }}
        >
          Software engineer & designer
        </motion.p>
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.85, duration: 0.6, ease: 'easeOut' }}
          style={{
            width: '64px', height: '1px', background: '#7D8285',
            transformOrigin: 'left', marginBottom: '28px', opacity: 0.7,
          }}
        />

        {/* description "and" set in tangerine italic, a single warm word */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.7 }}
          className="max-w-md mb-12"
          style={{
            fontFamily: "'EB Garamond', Georgia, serif",
            fontSize: '19px',
            lineHeight: 1.7,
            color: '#5C5F61',
          }}
        >
          {DESC_A}
          <span style={{ fontStyle: 'italic', color: '#F58F1F' }}>{DESC_B}</span>
          {DESC_C}
        </motion.p>

        {/* socials each borrows one palette color on hover */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.15, duration: 0.6 }}
          style={{ display: 'flex', gap: '18px', marginBottom: '40px' }}
        >
          {socialLinks.map(({ Icon, href, label, hover }) => (
            <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
              style={{
                width: '38px', height: '38px', borderRadius: '50%',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                border: '1px solid #7D8285',
                color: '#7D8285', textDecoration: 'none',
                transition: 'border-color 0.2s, color 0.2s',
              }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = hover; e.currentTarget.style.color = hover; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = '#7D8285'; e.currentTarget.style.color = '#7D8285'; }}
            >
              <Icon size={15} />
            </a>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.a href="#projects"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.35, duration: 0.5 }}
          style={{
            display: 'inline-flex', alignItems: 'baseline', gap: '8px',
            fontFamily: "'EB Garamond', Georgia, serif",
            fontStyle: 'italic',
            fontSize: '20px',
            color: '#363636',
            textDecoration: 'none',
            position: 'relative',
          }}
        >
          <span style={{ position: 'relative' }}>
            View my work
            <svg
              viewBox="0 0 100 8" preserveAspectRatio="none" aria-hidden
              style={{ position: 'absolute', left: 0, bottom: '-4px', width: '100%', height: '8px' }}
            >
              <motion.path
                d="M1,4 C 25,7 75,1 99,4"
                fill="none" stroke="#457534" strokeWidth={1.4} strokeLinecap="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ delay: 1.7, duration: 0.7, ease: 'easeInOut' }}
              />
            </svg>
          </span>
          <span aria-hidden style={{ color: '#F58F1F' }}>→</span>
        </motion.a>

      </div>
    </section>
  );
};

export default Hero;