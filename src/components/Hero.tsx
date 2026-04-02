import { motion, useMotionValue, useSpring, useTransform, MotionValue } from 'framer-motion';
import { FaGithub, FaLinkedin, FaMedium } from 'react-icons/fa';
import { useEffect, useRef } from 'react';

const CHARS = "Sally Wanga".split("");
const ROLE_WORDS = "Software Engineer".split(" ");
const DESC = "Full-stack web applications with Django, React, and REST APIs. Focused on scalable backends, clean frontends, and systems that just work.".split(" ");

const socialLinks = [
  { Icon: FaGithub, href: "https://github.com/Mugishaa77", label: "GitHub" },
  { Icon: FaLinkedin, href: "https://www.linkedin.com/in/swugisha/", label: "LinkedIn" },
  { Icon: FaMedium, href: "https://swugisha.medium.com/", label: "Medium" },
];

// Enhanced bubble (unchanged, still vibrant)
const Bubble = ({ size, top, left, delay, duration, mouseX, mouseY }: {
  size: number; top: number; left: number; delay: number; duration: number;
  mouseX: MotionValue<number>; mouseY: MotionValue<number>;
}) => {
  const dx = useTransform(mouseX, [0, 1], [-(left * 0.03), (1 - left) * 0.03]);
  const dy = useTransform(mouseY, [0, 1], [-(top * 0.03), (1 - top) * 0.03]);
  const springX = useSpring(dx, { stiffness: 35, damping: 18 });
  const springY = useSpring(dy, { stiffness: 35, damping: 18 });

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.6 }}
      animate={{ opacity: [0.45, 0.85, 0.45], scale: [0.92, 1.08, 0.92], y: [-15, 15, -15] }}
      transition={{ duration, delay, repeat: Infinity, ease: 'easeInOut' }}
      style={{
        position: 'absolute',
        top: `${top}%`,
        left: `${left}%`,
        x: springX,
        y: springY,
        width: size,
        height: size,
        borderRadius: '50%',
        background: `
          radial-gradient(circle at 30% 28%, rgba(255,245,240,0.98) 0%, transparent 38%),
          radial-gradient(circle at 68% 18%, rgba(225,130,152,0.55) 0%, transparent 34%),
          radial-gradient(circle at 20% 72%, rgba(103,159,158,0.4) 0%, transparent 44%),
          radial-gradient(circle at 78% 74%, rgba(125,173,219,0.45) 0%, transparent 40%),
          radial-gradient(circle at 50% 50%, rgba(134,117,153,0.12) 0%, transparent 68%)
        `,
        backdropFilter: 'blur(3px) saturate(200%) brightness(1.1)',
        WebkitBackdropFilter: 'blur(3px) saturate(200%) brightness(1.1)',
        border: '1.5px solid rgba(230,212,190,0.85)',
        boxShadow: `
          inset 0 1px 4px rgba(255,255,245,0.95),
          inset -3px -3px 12px rgba(103,159,158,0.25),
          inset 3px 3px 12px rgba(225,130,152,0.22),
          0 10px 28px rgba(134,117,153,0.12)
        `,
        pointerEvents: 'none',
      }}
    />
  );
};

// Slow fade-in from left
const FadeChar = ({ char, index }: { char: string; index: number }) => (
  <motion.span
    initial={{ opacity: 0, x: -24 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ delay: 0.2 + index * 0.045, duration: 0.6, ease: 'easeOut' }}
    whileHover={{ y: -4, color: '#E18298', transition: { duration: 0.15 } }}
    style={{ display: 'inline-block', cursor: 'default' }}
  >
    {char === " " ? "\u00A0" : char}
  </motion.span>
);

const Hero = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const rawMouseX = useMotionValue<number>(0.5);
  const rawMouseY = useMotionValue<number>(0.5);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const onMove = (e: MouseEvent) => {
      const { left, top, width, height } = el.getBoundingClientRect();
      rawMouseX.set((e.clientX - left) / width);
      rawMouseY.set((e.clientY - top) / height);
    };
    el.addEventListener('mousemove', onMove);
    return () => el.removeEventListener('mousemove', onMove);
  }, [rawMouseX, rawMouseY]);

  const bubbles = [
    { size: 125, top: 8,  left: 68, delay: 0,   duration: 9  },
    { size: 85,  top: 52, left: 88, delay: 1.5, duration: 11 },
    { size: 68,  top: 74, left: 55, delay: 0.8, duration: 8  },
    { size: 155, top: 4,  left: 40, delay: 2,   duration: 13 },
    { size: 58,  top: 34, left: 82, delay: 3,   duration: 10 },
    { size: 98,  top: 80, left: 22, delay: 1,   duration: 12 },
    { size: 50,  top: 18, left: 92, delay: 2.5, duration: 7  },
  ];

  const glass = (alpha = 0.55, blur = 16, borderColor = 'rgba(225,130,152,0.55)') => ({
    background: `rgba(230,212,190,${alpha})`,
    backdropFilter: `blur(${blur}px) saturate(180%)`,
    WebkitBackdropFilter: `blur(${blur}px) saturate(180%)`,
    border: `1px solid ${borderColor}`,
    boxShadow: `inset 0 1px 2px rgba(255,245,240,0.9), 0 4px 20px rgba(134,117,153,0.12)`,
  });

  return (
    <section
      id="hero"
      ref={sectionRef}
      className="min-h-screen flex items-center px-6 md:px-12 py-20 relative overflow-hidden"
      style={{
        background: `
          /* Top-left rich glow */
          radial-gradient(ellipse at 8% 12%, rgba(134,117,153,0.4) 0%, rgba(125,173,219,0.2) 35%, transparent 70%),
          /* Bottom-right replaced with soft lavender-mauve (no green, no rust) */
          radial-gradient(ellipse at 85% 85%, rgba(217,197,210,0.45) 0%, rgba(201,184,212,0.25) 40%, transparent 70%),
          radial-gradient(ellipse at 60% 5%, rgba(125,173,219,0.18) 0%, transparent 45%),
          radial-gradient(ellipse at 10% 78%, rgba(225,130,152,0.15) 0%, transparent 55%),
          linear-gradient(145deg, #E6D4BE 0%, #F2EAE0 40%, #E6D4BE 100%)
        `,
      }}
    >
      {/* Enhanced top-left corner decoration */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 0.35, scale: 1 }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
        style={{
          position: 'absolute',
          top: '-8%',
          left: '-5%',
          width: '280px',
          height: '280px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(225,130,152,0.4) 0%, rgba(125,173,219,0.2) 50%, transparent 80%)',
          filter: 'blur(40px)',
          pointerEvents: 'none',
        }}
      />

      {/* Soft bottom-right glow (new - no green) */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 0.3, scale: 1 }}
        transition={{ duration: 1.5, ease: 'easeOut', delay: 0.3 }}
        style={{
          position: 'absolute',
          bottom: '-5%',
          right: '-5%',
          width: '350px',
          height: '350px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(217,197,210,0.45) 0%, rgba(201,184,212,0.2) 50%, transparent 80%)',
          filter: 'blur(50px)',
          pointerEvents: 'none',
        }}
      />

      {/* Frosted overlay */}
      <div aria-hidden style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        backdropFilter: 'blur(35px) saturate(150%)',
        WebkitBackdropFilter: 'blur(35px) saturate(150%)',
        background: 'rgba(230,212,190,0.04)',
      }} />

      {/* Light streak */}
      <div aria-hidden style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        background: 'linear-gradient(125deg, rgba(125,173,219,0.28) 0%, rgba(225,130,152,0.12) 30%, transparent 60%)',
        opacity: 0.8,
      }} />

      {/* Dot pattern */}
      <div aria-hidden style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        backgroundImage: 'radial-gradient(circle, rgba(134,117,153,0.14) 1.2px, transparent 1.2px)',
        backgroundSize: '28px 28px',
        maskImage: 'radial-gradient(ellipse at 20% 30%, black 25%, transparent 75%)',
        WebkitMaskImage: 'radial-gradient(ellipse at 20% 30%, black 25%, transparent 75%)',
      }} />

      {/* Bubbles */}
      {bubbles.map((b, i) => (
        <Bubble key={i} {...b} mouseX={rawMouseX} mouseY={rawMouseY} />
      ))}

      {/* Vertical accent line */}
      <motion.div
        initial={{ scaleY: 0, opacity: 0 }}
        animate={{ scaleY: 1, opacity: 0.8 }}
        transition={{ duration: 0.9, ease: 'easeOut' }}
        style={{
          position: 'absolute', left: '2.2rem', top: '8%', height: '84%',
          width: '3px', borderRadius: '3px',
          background: 'linear-gradient(to bottom, transparent, #E18298 20%, #7DADDB 50%, #867599 80%, transparent)',
          transformOrigin: 'top',
          boxShadow: '0 0 8px rgba(225,130,152,0.5)',
        }}
      />

      {/* Main content */}
      <div className="max-w-3xl w-full relative z-10" style={{ paddingLeft: '2.5rem' }}>

        {/* Status pill */}
        <motion.div
          initial={{ opacity: 0, x: -14 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          style={{
            display: 'inline-flex', alignItems: 'center', gap: '8px',
            marginBottom: '20px', padding: '6px 18px',
            borderRadius: '999px',
            ...glass(0.7, 12, 'rgba(225,130,152,0.65)'),
            boxShadow: 'inset 0 1px 3px rgba(255,255,245,0.8), 0 2px 8px rgba(134,117,153,0.15)',
          }}
        >
          <motion.span
            animate={{ scale: [1, 1.4, 1], opacity: [1, 0.5, 1] }}
            transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
            style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#E18298', display: 'inline-block', flexShrink: 0 }}
          />
          <span style={{ fontSize: '11px', letterSpacing: '0.14em', textTransform: 'uppercase', color: '#867599', fontWeight: 600 }}>
            Available for work
          </span>
        </motion.div>

        {/* Name */}
        <h1
          style={{
            display: 'flex', flexWrap: 'wrap',
            color: '#10214D',
            fontSize: 'clamp(2.6rem, 6vw, 3.8rem)',
            fontWeight: 350,
            lineHeight: 1.1,
            marginBottom: '14px',
            letterSpacing: '-0.01em',
          }}
        >
          {CHARS.map((char, i) => (
            <FadeChar key={i} char={char} index={i} />
          ))}
        </h1>

        {/* Role */}
        <div style={{ display: 'flex', gap: '10px', marginBottom: '22px', alignItems: 'center', flexWrap: 'wrap' }}>
          <motion.span
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: 1 }}
            transition={{ delay: 1.05, duration: 0.4 }}
            style={{
              display: 'inline-block', width: '36px', height: '2px', flexShrink: 0,
              background: 'linear-gradient(to right, #E18298, #679F9E)',
              borderRadius: '2px', transformOrigin: 'left',
            }}
          />
          {ROLE_WORDS.map((word, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.0 + i * 0.12, duration: 0.5, ease: 'easeOut' }}
              style={{ fontSize: '18px', fontWeight: 600, color: '#867599', letterSpacing: '0.12em', textTransform: 'uppercase' }}
            >
              {word}
            </motion.span>
          ))}
        </div>

        {/* Description */}
        <p
          className="text-base md:text-lg max-w-xl mb-8"
          style={{
            paddingLeft: '18px',
            borderLeft: '3px solid',
            borderImageSlice: 1,
            borderImageSource: 'linear-gradient(to bottom, #E6D4BE, rgba(103,159,158,0.4))',
            color: '#10214D',
            lineHeight: 1.75,
          }}
        >
          {DESC.map((word, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.25 + i * 0.03, duration: 0.4, ease: 'easeOut' }}
              style={{ marginRight: '5px', display: 'inline-block' }}
            >
              {word}
            </motion.span>
          ))}
        </p>

        {/* Social icons */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.55 }}
          style={{ display: 'flex', gap: '12px', marginBottom: '28px' }}
        >
          {socialLinks.map(({ Icon, href, label }, i) => (
            <motion.a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              initial={{ opacity: 0, scale: 0.4 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.6 + i * 0.09, type: 'spring', stiffness: 220 }}
              whileHover={{ y: -5, scale: 1.12 }}
              whileTap={{ scale: 0.92 }}
              style={{
                width: '44px', height: '44px', borderRadius: '50%',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                ...glass(0.65, 18, 'rgba(225,130,152,0.5)'),
                color: '#867599', textDecoration: 'none', transition: 'color 0.2s',
              }}
              onMouseEnter={e => { e.currentTarget.style.color = '#679F9E'; }}
              onMouseLeave={e => { e.currentTarget.style.color = '#867599'; }}
            >
              <Icon size={17} />
            </motion.a>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.a
          href="#projects"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.78, duration: 0.5 }}
          whileHover={{ scale: 1.04, y: -2 }}
          whileTap={{ scale: 0.97 }}
          style={{
            display: 'inline-flex', alignItems: 'center', gap: '10px',
            padding: '13px 32px', borderRadius: '999px',
            ...glass(0.6, 22, 'rgba(103,159,158,0.6)'),
            color: '#679F9E', fontSize: '15px', fontWeight: 500,
            textDecoration: 'none', transition: 'box-shadow 0.2s, border-color 0.2s',
          }}
          onMouseEnter={e => {
            e.currentTarget.style.boxShadow = 'inset 0 1px 2px rgba(230,212,190,0.95), 0 8px 28px rgba(103,159,158,0.35)';
            e.currentTarget.style.borderColor = 'rgba(103,159,158,0.85)';
          }}
          onMouseLeave={e => {
            e.currentTarget.style.boxShadow = 'inset 0 1px 2px rgba(230,212,190,0.9), 0 4px 20px rgba(134,117,153,0.12)';
            e.currentTarget.style.borderColor = 'rgba(103,159,158,0.6)';
          }}
        >
          View Work
          <motion.svg
            width="14" height="14" viewBox="0 0 14 14" fill="none"
            animate={{ x: [0, 4, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
          >
            <path d="M2 7h10M7 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </motion.svg>
        </motion.a>
      </div>
    </section>
  );
};

export default Hero;