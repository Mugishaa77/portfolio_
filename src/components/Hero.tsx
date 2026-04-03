import { motion, useMotionValue } from 'framer-motion';
import { FaGithub, FaLinkedin, FaMedium } from 'react-icons/fa';
import { useEffect, useRef } from 'react';

const CHARS = "Sally Wanga".split("");
const ROLE_WORDS = "Software Engineer".split(" ");
const DESC = "Full-stack web applications with Django, React, and REST APIs. Focused on scalable backends, clean frontends, and systems that just work.".split(" ");

const socialLinks = [
  { Icon: FaGithub,   href: "https://github.com/Mugishaa77",            label: "GitHub"   },
  { Icon: FaLinkedin, href: "https://www.linkedin.com/in/swugisha/",    label: "LinkedIn" },
  { Icon: FaMedium,   href: "https://swugisha.medium.com/",             label: "Medium"   },
];

/* ─── Prismatic star canvas ──────────────────────────────────────────────── */
const CrystalStarField = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const resize = () => { canvas.width = canvas.offsetWidth; canvas.height = canvas.offsetHeight; };
    resize();
    window.addEventListener('resize', resize);

    type Star = { x:number; y:number; r:number; phase:number; speed:number; hue:number };
    const stars: Star[] = Array.from({ length: 140 }, () => ({
      x: Math.random() * (canvas.width  || 1200),
      y: Math.random() * (canvas.height || 900),
      r: Math.random() * 1.6 + 0.3,
      phase: Math.random() * Math.PI * 2,
      speed: Math.random() * 0.007 + 0.003,
      hue: Math.random() * 60 + 180, // cyan→violet spectrum
    }));

    let raf: number, t = 0;
    const draw = () => {
      const ctx = canvas.getContext('2d'); if (!ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      t += 0.012;
      stars.forEach(s => {
        const tw = 0.2 + 0.8 * Math.abs(Math.sin(t * s.speed * 50 + s.phase));
        // Prismatic color — shifts hue over time
        const dynHue = (s.hue + t * 18) % 360;
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${dynHue},55%,85%,${tw * 0.5})`;
        ctx.fill();
        if (s.r > 1.1) {
          const len = s.r * 5 * tw;
          ctx.strokeStyle = `hsla(${dynHue},60%,90%,${tw * 0.35})`;
          ctx.lineWidth = 0.7;
          ctx.beginPath();
          ctx.moveTo(s.x - len, s.y); ctx.lineTo(s.x + len, s.y);
          ctx.moveTo(s.x, s.y - len); ctx.lineTo(s.x, s.y + len);
          // Diagonal cross for diamond sparkle
          const d = len * 0.55;
          ctx.moveTo(s.x - d, s.y - d); ctx.lineTo(s.x + d, s.y + d);
          ctx.moveTo(s.x + d, s.y - d); ctx.lineTo(s.x - d, s.y + d);
          ctx.stroke();
        }
      });
      raf = requestAnimationFrame(draw);
    };
    draw();
    return () => { cancelAnimationFrame(raf); window.removeEventListener('resize', resize); };
  }, []);

  return (
    <canvas ref={canvasRef} aria-hidden style={{
      position:'absolute', inset:0, width:'100%', height:'100%',
      pointerEvents:'none', zIndex:0, opacity: 0.75,
    }} />
  );
};

/* ─── Liquid glass lens ──────────────────────────────────────────────────── */
const GlassLens = ({ top, left, w, h, rotate, delay }: {
  top:string; left:string; w:number; h:number; rotate:number; delay:number;
}) => (
  <motion.div
    aria-hidden
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: [0.18, 0.45, 0.18], scale: [0.95, 1.04, 0.95], rotate: [rotate, rotate + 4, rotate] }}
    transition={{ duration: 10 + delay, delay, repeat: Infinity, ease: 'easeInOut' }}
    style={{
      position:'absolute', top, left,
      width: w, height: h,
      borderRadius: '50%',
      // True liquid glass: layered cone refraction
      background: `
        radial-gradient(ellipse at 30% 28%, rgba(255,255,255,0.72) 0%, transparent 35%),
        radial-gradient(ellipse at 70% 20%, rgba(180,220,255,0.35) 0%, transparent 40%),
        radial-gradient(ellipse at 20% 72%, rgba(210,180,255,0.28) 0%, transparent 42%),
        radial-gradient(ellipse at 78% 76%, rgba(255,200,220,0.22) 0%, transparent 38%),
        conic-gradient(from ${rotate}deg at 50% 50%,
          rgba(255,255,255,0.06) 0deg,
          rgba(180,220,255,0.12) 60deg,
          rgba(210,180,255,0.1) 120deg,
          rgba(255,220,200,0.08) 180deg,
          rgba(200,255,220,0.07) 240deg,
          rgba(255,255,255,0.06) 300deg,
          rgba(255,255,255,0.06) 360deg
        )
      `,
      backdropFilter: 'blur(12px) saturate(200%) brightness(1.12)',
      WebkitBackdropFilter: 'blur(12px) saturate(200%) brightness(1.12)',
      border: '1px solid rgba(255,255,255,0.55)',
      boxShadow: `
        inset 0 1px 3px rgba(255,255,255,0.9),
        inset -6px -6px 20px rgba(180,200,255,0.2),
        inset  6px  6px 20px rgba(255,200,220,0.15),
        0 16px 48px rgba(150,150,200,0.12),
        0  4px 12px rgba(200,180,255,0.08)
      `,
      pointerEvents:'none', zIndex:1,
    }}
  />
);

/* ─── Prismatic light streak ─────────────────────────────────────────────── */
const PrismStreak = ({ top, delay, duration, colors }: {
  top: string; delay: number; duration: number; colors: string;
}) => (
  <motion.div
    aria-hidden
    initial={{ x: '-8%', opacity: 0 }}
    animate={{ x: '108%', y: '15%', opacity: [0, 0.7, 0.7, 0] }}
    transition={{ duration, delay, repeat: Infinity, repeatDelay: 11 + delay, ease: 'easeIn' }}
    style={{
      position:'absolute', top, left:0, zIndex:3,
      width:'140px', height:'2px', pointerEvents:'none',
      background: `linear-gradient(to right, transparent, ${colors}, transparent)`,
      borderRadius:'2px', filter:'blur(0.8px)',
      boxShadow:`0 0 10px ${colors.split(',')[1] ?? 'rgba(200,180,255,0.8)'}`,
    }}
  />
);

/* ─── Slow left-fade character ───────────────────────────────────────────── */
const FadeChar = ({ char, index }: { char:string; index:number }) => (
  <motion.span
    initial={{ opacity: 0, x: -24 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ delay: 0.2 + index * 0.045, duration: 0.65, ease: 'easeOut' }}
    whileHover={{ y: -5, scale: 1.08, transition: { duration: 0.14 } }}
    style={{ display:'inline-block', cursor:'default' }}
  >
    {char === " " ? "\u00A0" : char}
  </motion.span>
);

/* ─── Main component ─────────────────────────────────────────────────────── */
const Hero = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const rawMouseX = useMotionValue<number>(0.5);
  const rawMouseY = useMotionValue<number>(0.5);

  useEffect(() => {
    const el = sectionRef.current; if (!el) return;
    const onMove = (e: MouseEvent) => {
      const { left, top, width, height } = el.getBoundingClientRect();
      rawMouseX.set((e.clientX - left) / width);
      rawMouseY.set((e.clientY - top) / height);
    };
    el.addEventListener('mousemove', onMove);
    return () => el.removeEventListener('mousemove', onMove);
  }, [rawMouseX, rawMouseY]);

  // Absolute glass style — crystal-clear with prismatic edge
  const crystal = (alphaFill = 0.18, blur = 20): React.CSSProperties => ({
    background: `
      linear-gradient(135deg,
        rgba(255,255,255,${alphaFill + 0.12}) 0%,
        rgba(255,255,255,${alphaFill}) 40%,
        rgba(200,210,255,${alphaFill * 0.6}) 100%
      )
    `,
    backdropFilter: `blur(${blur}px) saturate(220%) brightness(1.06)`,
    WebkitBackdropFilter: `blur(${blur}px) saturate(220%) brightness(1.06)`,
    border: '1px solid rgba(255,255,255,0.55)',
    boxShadow: `
      inset 0 1px 2px rgba(255,255,255,0.95),
      inset 0 -1px 1px rgba(200,200,255,0.2),
      0 8px 32px rgba(150,150,220,0.1),
      0 2px  8px rgba(200,180,255,0.08)
    `,
  });

  return (
    <section
      id="hero"
      ref={sectionRef}
      className="min-h-screen flex items-center px-6 md:px-12 py-20 relative overflow-hidden"
      style={{
        // Expensive base: deep pearl white with subtle spectral tinting
        background: `
          radial-gradient(ellipse at 12% 10%, rgba(210,200,255,0.32) 0%, rgba(180,210,255,0.15) 38%, transparent 62%),
          radial-gradient(ellipse at 88% 88%, rgba(255,210,230,0.28) 0%, rgba(200,230,255,0.18) 42%, transparent 65%),
          radial-gradient(ellipse at 55%  3%, rgba(180,230,255,0.2)  0%, transparent 45%),
          radial-gradient(ellipse at  5% 80%, rgba(255,200,230,0.16) 0%, transparent 50%),
          linear-gradient(160deg, #f8f6ff 0%, #fafcff 35%, #f6f8ff 65%, #fdf8ff 100%)
        `,
      }}
    >
      {/* Prismatic star field */}
      <CrystalStarField />

      {/* Liquid glass lenses */}
      <GlassLens top="-8%"  left="60%"  w={380} h={380} rotate={0}   delay={0}   />
      <GlassLens top="55%"  left="-5%"  w={280} h={280} rotate={45}  delay={2}   />
      <GlassLens top="22%"  left="80%"  w={200} h={200} rotate={-20} delay={4}   />
      <GlassLens top="72%"  left="68%"  w={160} h={160} rotate={30}  delay={1.5} />

      {/* Prismatic shooting streaks */}
      <PrismStreak top="10%" delay={2.5}  duration={1.6} colors="rgba(180,210,255,0.9)" />
      <PrismStreak top="35%" delay={8}    duration={1.3} colors="rgba(220,180,255,0.75)" />
      <PrismStreak top="62%" delay={14}   duration={1.5} colors="rgba(255,200,220,0.65)" />

      {/* Top prismatic hairline */}
      <div aria-hidden style={{
        position:'absolute', top:0, left:0, right:0, height:'2px', zIndex:4,
        background:'linear-gradient(90deg, transparent, rgba(200,180,255,0.8), rgba(180,220,255,0.7), rgba(255,200,220,0.65), transparent)',
        opacity: 0.85,
        boxShadow: '0 0 12px rgba(200,180,255,0.3)',
      }} />

      {/* Frosted glass layer */}
      <div aria-hidden style={{
        position:'absolute', inset:0, pointerEvents:'none',
        backdropFilter: 'blur(25px) saturate(160%)',
        WebkitBackdropFilter: 'blur(25px) saturate(160%)',
        background:'rgba(248,246,255,0.04)',
      }} />

      {/* Spectral light diagonal */}
      <div aria-hidden style={{
        position:'absolute', inset:0, pointerEvents:'none',
        background:'linear-gradient(120deg, rgba(200,190,255,0.14) 0%, rgba(180,220,255,0.09) 30%, transparent 58%)',
      }} />

      {/* Dot grid — crystal fine */}
      <div aria-hidden style={{
        position:'absolute', inset:0, pointerEvents:'none',
        backgroundImage: 'radial-gradient(circle, rgba(160,140,200,0.16) 1px, transparent 1px)',
        backgroundSize: '26px 26px',
        maskImage: 'radial-gradient(ellipse at 22% 30%, black 18%, transparent 70%)',
        WebkitMaskImage: 'radial-gradient(ellipse at 22% 30%, black 18%, transparent 70%)',
      }} />

      {/* Vertical prismatic accent line */}
      <motion.div
        initial={{ scaleY:0, opacity:0 }}
        animate={{ scaleY:1, opacity:1 }}
        transition={{ duration:1, ease:'easeOut' }}
        style={{
          position:'absolute', left:'2.2rem', top:'8%', height:'84%',
          width:'2px', borderRadius:'2px',
          background:'linear-gradient(to bottom, transparent, rgba(200,180,255,0.9) 20%, rgba(180,220,255,0.8) 50%, rgba(255,200,220,0.7) 80%, transparent)',
          transformOrigin:'top',
          boxShadow:'0 0 12px rgba(200,180,255,0.4), 0 0 24px rgba(180,220,255,0.2)',
          opacity:0.8,
        }}
      />

      {/* ── Content ── */}
      <div className="max-w-3xl w-full relative z-10" style={{ paddingLeft:'2.5rem' }}>

        {/* Status pill — crystal glass */}
        <motion.div
          initial={{ opacity:0, x:-14 }}
          animate={{ opacity:1, x:0 }}
          transition={{ delay:0.1, duration:0.5 }}
          style={{
            display:'inline-flex', alignItems:'center', gap:'8px',
            marginBottom:'20px', padding:'6px 18px',
            borderRadius:'999px',
            ...crystal(0.22, 14),
            border:'1px solid rgba(255,255,255,0.65)',
          }}
        >
          <motion.span
            animate={{ scale:[1,1.5,1], opacity:[1,0.35,1] }}
            transition={{ duration:2.2, repeat:Infinity, ease:'easeInOut' }}
            style={{
              width:'7px', height:'7px', borderRadius:'50%',
              background:'linear-gradient(135deg, rgba(200,180,255,1), rgba(180,220,255,1))',
              display:'inline-block', flexShrink:0,
              boxShadow:'0 0 8px rgba(200,180,255,0.9), 0 0 16px rgba(180,220,255,0.5)',
            }}
          />
          <span style={{ fontSize:'11px', letterSpacing:'0.16em', textTransform:'uppercase', color:'rgba(110,90,160,0.9)', fontWeight:600 }}>
            Available for work
          </span>
        </motion.div>

        {/* Name */}
        <h1 style={{
          display:'flex', flexWrap:'wrap',
          color:'#1a1530',
          fontSize:'clamp(2.6rem, 6vw, 3.8rem)',
          fontWeight:300, lineHeight:1.1, marginBottom:'16px',
          letterSpacing:'-0.02em',
          // Subtle text refraction
          textShadow:'0 1px 0 rgba(255,255,255,0.8), 0 -1px 0 rgba(200,180,255,0.15)',
        }}>
          {CHARS.map((char, i) => <FadeChar key={i} char={char} index={i} />)}
        </h1>

        {/* Role */}
        <div style={{ display:'flex', gap:'10px', marginBottom:'24px', alignItems:'center', flexWrap:'wrap' }}>
          <motion.div
            initial={{ scaleX:0, opacity:0 }}
            animate={{ scaleX:1, opacity:1 }}
            transition={{ delay:1.0, duration:0.5 }}
            style={{
              width:'32px', height:'2px', flexShrink:0,
              background:'linear-gradient(to right, rgba(200,180,255,0.9), rgba(180,220,255,0.7))',
              borderRadius:'2px', transformOrigin:'left',
              boxShadow:'0 0 8px rgba(200,180,255,0.5)',
            }}
          />
          {ROLE_WORDS.map((word, i) => (
            <motion.span key={i}
              initial={{ opacity:0, y:14 }}
              animate={{ opacity:1, y:0 }}
              transition={{ delay:1.0 + i * 0.12, duration:0.5, ease:'easeOut' }}
              style={{ fontSize:'17px', fontWeight:600, color:'rgba(120,100,180,0.85)', letterSpacing:'0.14em', textTransform:'uppercase' }}
            >
              {word}
            </motion.span>
          ))}
        </div>

        {/* Description */}
        <p className="text-base md:text-lg max-w-xl mb-8" style={{
          paddingLeft:'18px',
          borderLeft:'2px solid',
          borderImageSlice:1,
          borderImageSource:'linear-gradient(to bottom, rgba(200,180,255,0.6), rgba(180,220,255,0.3))',
          color:'rgba(30,20,60,0.75)',
          lineHeight:1.8,
        }}>
          {DESC.map((word, i) => (
            <motion.span key={i}
              initial={{ opacity:0, y:5 }}
              animate={{ opacity:1, y:0 }}
              transition={{ delay:1.25 + i * 0.03, duration:0.4, ease:'easeOut' }}
              style={{ marginRight:'5px', display:'inline-block' }}
            >
              {word}
            </motion.span>
          ))}
        </p>

        {/* Social icons */}
        <motion.div
          initial={{ opacity:0, y:12 }}
          animate={{ opacity:1, y:0 }}
          transition={{ delay:1.55 }}
          style={{ display:'flex', gap:'12px', marginBottom:'28px' }}
        >
          {socialLinks.map(({ Icon, href, label }, i) => (
            <motion.a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
              initial={{ opacity:0, scale:0.4 }}
              animate={{ opacity:1, scale:1 }}
              transition={{ delay:1.6 + i * 0.09, type:'spring', stiffness:220 }}
              whileHover={{ y:-5, scale:1.12 }}
              whileTap={{ scale:0.92 }}
              style={{
                width:'44px', height:'44px', borderRadius:'50%',
                display:'flex', alignItems:'center', justifyContent:'center',
                ...crystal(0.2, 18),
                color:'rgba(120,100,180,0.8)', textDecoration:'none', transition:'color 0.2s',
              }}
              onMouseEnter={e => { e.currentTarget.style.color = 'rgba(100,160,220,1)'; }}
              onMouseLeave={e => { e.currentTarget.style.color = 'rgba(120,100,180,0.8)'; }}
            >
              <Icon size={17} />
            </motion.a>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.a href="#projects"
          initial={{ opacity:0, y:12 }}
          animate={{ opacity:1, y:0 }}
          transition={{ delay:1.78, duration:0.5 }}
          whileHover={{ scale:1.04, y:-2 }}
          whileTap={{ scale:0.97 }}
          style={{
            display:'inline-flex', alignItems:'center', gap:'10px',
            padding:'13px 32px', borderRadius:'999px',
            ...crystal(0.22, 22),
            border:'1px solid rgba(255,255,255,0.6)',
            color:'rgba(100,80,180,0.9)', fontSize:'15px', fontWeight:500,
            textDecoration:'none', transition:'all 0.25s',
          }}
          onMouseEnter={e => {
            e.currentTarget.style.boxShadow = 'inset 0 1px 2px rgba(255,255,255,0.95), 0 12px 36px rgba(180,160,255,0.25), 0 0 0 1px rgba(200,180,255,0.4)';
            e.currentTarget.style.color = 'rgba(80,140,220,1)';
          }}
          onMouseLeave={e => {
            e.currentTarget.style.boxShadow = 'inset 0 1px 2px rgba(255,255,255,0.95), inset 0 -1px 1px rgba(200,200,255,0.2), 0 8px 32px rgba(150,150,220,0.1), 0 2px 8px rgba(200,180,255,0.08)';
            e.currentTarget.style.color = 'rgba(100,80,180,0.9)';
          }}
        >
          View Work
          <motion.svg width="14" height="14" viewBox="0 0 14 14" fill="none"
            animate={{ x:[0,4,0] }}
            transition={{ duration:1.6, repeat:Infinity, ease:'easeInOut' }}
          >
            <path d="M2 7h10M7 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </motion.svg>
        </motion.a>

      </div>

      {/* Shimmer keyframe for any inherited sweep animations */}
      <style>{`
        @keyframes prismShift {
          0%   { filter: hue-rotate(0deg)   brightness(1);    }
          50%  { filter: hue-rotate(30deg)  brightness(1.06); }
          100% { filter: hue-rotate(0deg)   brightness(1);    }
        }
      `}</style>
    </section>
  );
};

export default Hero;