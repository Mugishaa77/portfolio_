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

// Enhanced, more visible iridescent bubble
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
          radial-gradient(circle at 68% 18%, rgba(217,167,176,0.6) 0%, transparent 34%),
          radial-gradient(circle at 20% 72%, rgba(155,182,165,0.45) 0%, transparent 44%),
          radial-gradient(circle at 78% 74%, rgba(200,150,160,0.5) 0%, transparent 40%),
          radial-gradient(circle at 50% 50%, rgba(110,90,110,0.12) 0%, transparent 68%)
        `,
        backdropFilter: 'blur(3px) saturate(200%) brightness(1.1)',
        WebkitBackdropFilter: 'blur(3px) saturate(200%) brightness(1.1)',
        border: '1.5px solid rgba(255,240,235,0.85)',
        boxShadow: `
          inset 0 1px 4px rgba(255,255,245,0.95),
          inset -3px -3px 12px rgba(155,182,165,0.25),
          inset 3px 3px 12px rgba(217,167,176,0.22),
          0 10px 28px rgba(80,60,70,0.12)
        `,
        pointerEvents: 'none',
      }}
    />
  );
};

// Slow fade-in from left for each character
const FadeChar = ({ char, index }: { char: string; index: number }) => (
  <motion.span
    initial={{ opacity: 0, x: -24 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ delay: 0.2 + index * 0.045, duration: 0.6, ease: 'easeOut' }}
    whileHover={{ y: -4, color: '#D9A7B0', transition: { duration: 0.15 } }}
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

  const glass = (alpha = 0.5, blur = 16, borderColor = 'rgba(217,167,176,0.5)') => ({
    background: `rgba(253,249,242,${alpha})`,
    backdropFilter: `blur(${blur}px) saturate(180%)`,
    WebkitBackdropFilter: `blur(${blur}px) saturate(180%)`,
    border: `1px solid ${borderColor}`,
    boxShadow: `inset 0 1px 2px rgba(255,245,240,0.9), 0 4px 20px rgba(80,60,70,0.08)`,
  });

  return (
    <section
      id="hero"
      ref={sectionRef}
      className="min-h-screen flex items-center px-6 md:px-12 py-20 relative overflow-hidden"
      style={{
        background: `
          radial-gradient(ellipse at 20% 20%, rgba(217,167,176,0.25) 0%, transparent 55%),
          radial-gradient(ellipse at 85% 80%, rgba(155,182,165,0.2) 0%, transparent 55%),
          radial-gradient(ellipse at 60% 5%, rgba(255,245,240,0.7) 0%, transparent 40%),
          radial-gradient(ellipse at 10% 78%, rgba(200,150,160,0.18) 0%, transparent 50%),
          linear-gradient(145deg, #FDF9F2 0%, #F5E6E8 45%, #EDD9DF 100%)
        `,
      }}
    >
      {/* Frosted overlay */}
      <div aria-hidden style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        backdropFilter: 'blur(40px) saturate(140%)',
        WebkitBackdropFilter: 'blur(40px) saturate(140%)',
        background: 'rgba(253,249,242,0.05)',
      }} />

      {/* Soft light streak */}
      <div aria-hidden style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        background: 'linear-gradient(105deg, rgba(255,250,245,0.55) 0%, transparent 45%)',
        opacity: 0.7,
      }} />

      {/* Delicate dot pattern */}
      <div aria-hidden style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        backgroundImage: 'radial-gradient(circle, rgba(110,90,110,0.08) 1.2px, transparent 1.2px)',
        backgroundSize: '32px 32px',
        maskImage: 'radial-gradient(ellipse at 25% 50%, black 20%, transparent 70%)',
      }} />

      {/* Bubbles */}
      {bubbles.map((b, i) => (
        <Bubble key={i} {...b} mouseX={rawMouseX} mouseY={rawMouseY} />
      ))}

      {/* Elegant vertical accent line */}
      <motion.div
        initial={{ scaleY: 0, opacity: 0 }}
        animate={{ scaleY: 1, opacity: 0.55 }}
        transition={{ duration: 1, ease: 'easeOut' }}
        style={{
          position: 'absolute', left: '2.2rem', top: '10%', height: '80%',
          width: '2.5px', borderRadius: '3px',
          background: 'linear-gradient(to bottom, transparent, #D9A7B0 25%, #9BB6A5 65%, transparent)',
          transformOrigin: 'top',
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
            marginBottom: '20px', padding: '5px 16px',
            borderRadius: '999px',
            ...glass(0.5, 16, 'rgba(217,167,176,0.55)'),
          }}
        >
          <motion.span
            animate={{ scale: [1, 1.4, 1], opacity: [1, 0.5, 1] }}
            transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
            style={{ width: '7px', height: '7px', borderRadius: '50%', background: '#D9A7B0', display: 'inline-block', flexShrink: 0 }}
          />
          <span style={{ fontSize: '11px', letterSpacing: '0.14em', textTransform: 'uppercase', color: '#8B6B7A', fontWeight: 500 }}>
            Available for work
          </span>
        </motion.div>

        {/* Name - slow fade from left */}
        <h1
          style={{
            display: 'flex', flexWrap: 'wrap',
            color: '#4A3B47',
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

        {/* Role - slide-up words */}
        <div style={{ display: 'flex', gap: '10px', marginBottom: '22px', alignItems: 'center', flexWrap: 'wrap' }}>
          <motion.span
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: 1 }}
            transition={{ delay: 1.05, duration: 0.4 }}
            style={{
              display: 'inline-block', width: '32px', height: '2px', flexShrink: 0,
              background: 'linear-gradient(to right, #D9A7B0, #9BB6A5)',
              borderRadius: '2px', transformOrigin: 'left',
            }}
          />
          {ROLE_WORDS.map((word, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.0 + i * 0.12, duration: 0.5, ease: 'easeOut' }}
              style={{ fontSize: '17px', fontWeight: 550, color: '#9B7B8A', letterSpacing: '0.12em', textTransform: 'uppercase' }}
            >
              {word}
            </motion.span>
          ))}
        </div>

        {/* Description - word-by-word fade-up */}
        <p
          className="text-base md:text-lg max-w-xl mb-8"
          style={{
            paddingLeft: '18px',
            borderLeft: '3px solid',
            borderImageSlice: 1,
            borderImageSource: 'linear-gradient(to bottom, #E6D4BE, rgba(155,182,165,0.4))',
            color: '#6B5A62',
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
                ...glass(0.6, 18, 'rgba(217,167,176,0.45)'),
                color: '#9B7B8A', textDecoration: 'none', transition: 'color 0.2s',
              }}
              onMouseEnter={e => { e.currentTarget.style.color = '#9BB6A5'; }}
              onMouseLeave={e => { e.currentTarget.style.color = '#9B7B8A'; }}
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
            ...glass(0.55, 22, 'rgba(155,182,165,0.55)'),
            color: '#9BB6A5', fontSize: '15px', fontWeight: 500,
            textDecoration: 'none', transition: 'box-shadow 0.2s, border-color 0.2s',
          }}
          onMouseEnter={e => {
            e.currentTarget.style.boxShadow = 'inset 0 1px 2px rgba(255,245,240,0.95), 0 8px 28px rgba(155,182,165,0.3)';
            e.currentTarget.style.borderColor = 'rgba(155,182,165,0.8)';
          }}
          onMouseLeave={e => {
            e.currentTarget.style.boxShadow = 'inset 0 1px 2px rgba(255,245,240,0.9), 0 4px 20px rgba(80,60,70,0.08)';
            e.currentTarget.style.borderColor = 'rgba(155,182,165,0.55)';
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