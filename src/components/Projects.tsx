import { motion } from 'framer-motion';
import { FaExternalLinkAlt, FaGithub, FaVideo, FaChevronLeft, FaChevronRight, FaWordpress, FaShoppingCart, FaPaintBrush, FaBolt, FaCogs } from 'react-icons/fa';
import { useRef, useState, useEffect } from 'react';
import taskManager from '../media/task-manager.png';
import nexus from '../media/nexus.jpg';
import nv from '../media/nv.png';
import discoverGolf from '../media/discover_golf.png';
import vegrid from '../media/Vegrid.png';

// Fix build errors

const featuredProjects = [
  {
    title: "VeGrid",
    description: "A Solar-as-a-Service energy management platform for smart grids, real-time monitoring, predictive analytics, and optimization of energy distribution.",
    tech: ["Django", "Docker", "MicroServices"],
     image: vegrid,
    codeLink: "https://github.com/Vegrid",
    liveLink: "https://www.vegrid.co.ke/",
    role: "FullStack",
    accent: '#a8d8c8',
  

  },
  {
    title: "Discover Golf",
    description: "Online presence for a golf platform for children and other interested parties.",
    tech: ["React", "TypeScript", "SEO and content"],
    image: discoverGolf,
    demoVideo: "https://www.loom.com/share/60a1a812655a4bbdaf563a3087c2d0d6",
    codeLink: "https://github.com/Mugishaa77/discover-golf",
    liveLink: "https://discovergolf.net/",
    role: "FullStack",
    accent: '#a8d8c8',
  },
  {
    title: "Nairobi Verified",
    description: "Online Digital Directory for Verified Nairobi Businesses.",
    tech: ["React", "TypeScript", "WebSockets", "Node.js", "SEO and content"],
    image: nv,
    demoVideo: "https://www.loom.com/share/3408e48b28d04c1cb5a49ed7a7a3f017",
    codeLink: "https://github.com/Sikos-Marketing-Developer-Team",
    liveLink: "https://nairobiverified.co.ke/",
    role: "FullStack",
    accent: '#b8d4f0',
  },
  {
    title: "Task Management Platform",
    description: "Real-time collaborative task management with advanced synchronization",
    tech: ["React", "TypeScript", "WebSockets", "Node.js"],
    image: taskManager,
    demoVideo: "https://www.loom.com/share/ccea7350b9ab46129bebdbb19b897dde?sid=73e43d52-004d-437c-aca8-7eee19a5219d",
    codeLink: "https://github.com/Mugishaa77/task-manager",
    liveLink: "https://task-manager-swart-two.vercel.app/",
    role: "FullStack",
    accent: '#f0b8c8',
  },
  {
    title: "React Native Mobile App",
    description: "React Native social feed with real-time updates and smooth animations",
    tech: ["React Native", "TypeScript", "Firebase", "Redux"],
    image: nexus,
    demoVideo: "https://www.loom.com/share/7bdb073e614a4301ae46d6e40ec9cf1f?sid=005c2509-7072-43e0-934e-13bc02b79e42",
    codeLink: "https://github.com/Mugishaa77/alx-project-nexus",
    role: "FullStack",
    accent: '#c8b8e8',
  },
];

interface Project {
  title: string;
  description: string;
  tech: string[];
  image: string;
  liveLink?: string;
  codeLink?: string;
  demoVideo?: string;
  role?: string;
  accent?: string;
}

// Animated star canvas
const StarField = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const starsRef = useRef<Array<{ x: number; y: number; r: number; alpha: number; speed: number; twinkleOffset: number }>>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    // Generate stars with random positions, sizes, speeds
    starsRef.current = Array.from({ length: 180 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 1.5 + 0.3,
      alpha: Math.random(),
      speed: Math.random() * 0.008 + 0.003,
      twinkleOffset: Math.random() * Math.PI * 2,
    }));

    let frame: number;
    let t = 0;
    const draw = () => {
      const ctx = canvas.getContext('2d');
      if (!ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      t += 0.012;
      starsRef.current.forEach(star => {
        const twinkle = 0.35 + 0.65 * Math.abs(Math.sin(t * star.speed * 60 + star.twinkleOffset));
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 248, 240, ${twinkle * 0.85})`;
        ctx.fill();
        // 4-point sparkle cross for larger stars
        if (star.r > 1.2) {
          const len = star.r * 3.5 * twinkle;
          ctx.strokeStyle = `rgba(255, 240, 220, ${twinkle * 0.5})`;
          ctx.lineWidth = 0.5;
          ctx.beginPath();
          ctx.moveTo(star.x - len, star.y);
          ctx.lineTo(star.x + len, star.y);
          ctx.moveTo(star.x, star.y - len);
          ctx.lineTo(star.x, star.y + len);
          ctx.stroke();
        }
      });
      frame = requestAnimationFrame(draw);
    };
    draw();
    return () => { cancelAnimationFrame(frame); window.removeEventListener('resize', resize); };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden
      style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', pointerEvents: 'none', zIndex: 0 }}
    />
  );
};

// Floating shimmer orb
const ShimmerOrb = ({ top, left, size, color, delay }: { top: string; left: string; size: number; color: string; delay: number }) => (
  <motion.div
    aria-hidden
    initial={{ opacity: 0, scale: 0.7 }}
    animate={{ opacity: [0.12, 0.35, 0.12], scale: [0.9, 1.08, 0.9] }}
    transition={{ duration: 7 + delay, delay, repeat: Infinity, ease: 'easeInOut' }}
    style={{
      position: 'absolute', top, left,
      width: size, height: size, borderRadius: '50%',
      background: `radial-gradient(circle at 38% 38%, ${color}cc 0%, ${color}44 45%, transparent 70%)`,
      filter: 'blur(18px)',
      pointerEvents: 'none', zIndex: 1,
    }}
  />
);

const ProjectCarousel = ({ projects, isFeatured = true }: { projects: Project[]; isFeatured?: boolean }) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const checkScrollPosition = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setShowLeftArrow(scrollLeft > 0);
      setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener('scroll', checkScrollPosition);
      checkScrollPosition();
    }
    return () => { if (container) container.removeEventListener('scroll', checkScrollPosition); };
  }, []);

  const scroll = (direction: number) => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollLeft += direction * (isMobile ? 300 : 400);
    }
  };

  const cardWidth = isMobile ? 280 : (isFeatured ? 330 : 320);
  const cardPadding = isMobile ? '0.85rem' : (isFeatured ? '1.25rem' : '1rem');

  const arrowStyle = (show: boolean, side: 'left' | 'right'): React.CSSProperties => ({
    position: 'absolute',
    [side]: isMobile ? '-12px' : '-24px',
    top: '50%', transform: 'translateY(-50%)',
    width: isMobile ? '40px' : '48px', height: isMobile ? '40px' : '48px',
    borderRadius: '50%',
    background: 'rgba(255,248,240,0.06)',
    backdropFilter: 'blur(10px)',
    border: '1px solid rgba(255,240,200,0.2)',
    boxShadow: '0 0 12px rgba(255,220,180,0.1)',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    cursor: 'pointer', zIndex: 10, transition: 'all 0.2s',
    opacity: show ? 1 : 0.25,
    pointerEvents: show ? 'auto' : 'none',
    color: '#f0e0c8',
  });

  return (
    <div className="relative max-w-6xl mx-auto">
      <button onClick={() => scroll(-1)} style={arrowStyle(showLeftArrow, 'left')} aria-label="Scroll left"
        onMouseEnter={e => { e.currentTarget.style.background = 'rgba(168,216,200,0.15)'; e.currentTarget.style.borderColor = 'rgba(168,216,200,0.4)'; }}
        onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,248,240,0.06)'; e.currentTarget.style.borderColor = 'rgba(255,240,200,0.2)'; }}>
        <FaChevronLeft style={{ fontSize: isMobile ? '14px' : '16px' }} />
      </button>
      <button onClick={() => scroll(1)} style={arrowStyle(showRightArrow, 'right')} aria-label="Scroll right"
        onMouseEnter={e => { e.currentTarget.style.background = 'rgba(168,216,200,0.15)'; e.currentTarget.style.borderColor = 'rgba(168,216,200,0.4)'; }}
        onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,248,240,0.06)'; e.currentTarget.style.borderColor = 'rgba(255,240,200,0.2)'; }}>
        <FaChevronRight style={{ fontSize: isMobile ? '14px' : '16px' }} />
      </button>

      <div ref={scrollContainerRef} style={{
        display: 'flex', gap: isMobile ? '20px' : '24px',
        overflowX: 'auto', scrollBehavior: 'smooth',
        padding: '16px 8px', scrollbarWidth: 'none',
      }} onScroll={checkScrollPosition}>
        {projects.map((project, index) => {
          const accent = project.accent || '#a8d8c8';
          return (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              style={{
                borderRadius: '18px', overflow: 'hidden',
                width: `${cardWidth}px`, flexShrink: 0,
                marginTop: '4px', marginBottom: '4px',
                // Starry glass card: dark with shimmer border
                background: 'linear-gradient(150deg, rgba(255,248,240,0.06) 0%, rgba(200,184,232,0.04) 50%, rgba(168,216,200,0.04) 100%)',
                backdropFilter: 'blur(14px)',
                border: `1px solid ${accent}40`,
                boxShadow: `0 4px 28px rgba(0,0,0,0.35), inset 0 1px 0 rgba(255,248,240,0.1), 0 0 0 0px ${accent}00`,
                transition: 'all 0.35s ease',
                position: 'relative',
              }}
              whileHover={{
                scale: isMobile ? 1 : 1.02,
                boxShadow: `0 20px 50px rgba(0,0,0,0.45), 0 0 30px ${accent}22, inset 0 1px 0 rgba(255,248,240,0.14)`,
              }}
            >
              {/* Shimmer sweep on hover — CSS keyframe via inline style */}
              <div aria-hidden style={{
                position: 'absolute', inset: 0, zIndex: 3, pointerEvents: 'none', borderRadius: '18px',
                background: `linear-gradient(135deg, transparent 30%, ${accent}18 50%, transparent 70%)`,
                backgroundSize: '200% 200%',
                animation: 'shimmerSweep 4s ease-in-out infinite',
              }} />

              {/* Image area */}
              <div style={{
                position: 'relative', overflow: 'hidden',
                background: `linear-gradient(135deg, #14111e 0%, #0d1018 100%)`,
                borderBottom: `1px solid ${accent}22`,
              }}>
                {/* Star scatter behind image */}
                <div aria-hidden style={{
                  position: 'absolute', inset: 0, pointerEvents: 'none',
                  backgroundImage: `
                    radial-gradient(circle, rgba(255,248,240,0.7) 1px, transparent 1px),
                    radial-gradient(circle, rgba(255,248,240,0.4) 1px, transparent 1px)
                  `,
                  backgroundSize: '40px 40px, 20px 20px',
                  backgroundPosition: '0 0, 10px 10px',
                  opacity: 0.25,
                }} />
                <div aria-hidden style={{
                  position: 'absolute', inset: 0,
                  background: `radial-gradient(ellipse at 50% 90%, ${accent}28 0%, transparent 65%)`,
                  pointerEvents: 'none',
                }} />
                <img src={project.image} alt={project.title} style={{
                  display: 'block', width: '100%', height: 'auto',
                  maxHeight: isMobile ? '160px' : '190px',
                  objectFit: 'contain', objectPosition: 'center',
                  padding: isMobile ? '16px' : '20px',
                  position: 'relative', zIndex: 1,
                }} />
                <div aria-hidden style={{
                  position: 'absolute', bottom: 0, left: 0, right: 0, height: '40px',
                  background: 'linear-gradient(to bottom, transparent, rgba(10,8,18,0.6))',
                  pointerEvents: 'none', zIndex: 2,
                }} />
              </div>

              {/* Card body */}
              <div style={{ padding: cardPadding, position: 'relative', zIndex: 4 }}>
                <div style={{
                  display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between',
                  marginBottom: '0.6rem',
                  flexDirection: isMobile ? 'column' : 'row',
                  gap: '0.5rem',
                }}>
                  <h3 style={{
                    fontSize: isMobile ? '1.05rem' : (isFeatured ? '1.15rem' : '1.1rem'),
                    fontWeight: 600, color: '#f0e8d8', margin: 0, lineHeight: 1.3,
                  }}>
                    {project.title}
                  </h3>
                  {project.role && (
                    <span style={{
                      background: `${accent}18`,
                      border: `1px solid ${accent}55`,
                      padding: '0.2rem 0.55rem', borderRadius: '9999px',
                      fontSize: isMobile ? '0.65rem' : '0.7rem',
                      color: accent, alignSelf: isMobile ? 'flex-start' : 'center',
                      whiteSpace: 'nowrap', flexShrink: 0,
                    }}>
                      {project.role}
                    </span>
                  )}
                </div>

                <p style={{
                  color: 'rgba(240,232,216,0.6)', marginBottom: '0.875rem', lineHeight: 1.55,
                  fontSize: isMobile ? '0.8rem' : (isFeatured ? '0.875rem' : '0.85rem'),
                  display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', overflow: 'hidden',
                }}>
                  {project.description}
                </p>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: isMobile ? '0.875rem' : '1.1rem' }}>
                  {project.tech.map(tech => (
                    <span key={tech} style={{
                      background: 'rgba(255,248,240,0.05)',
                      border: '1px solid rgba(255,248,240,0.12)',
                      padding: isMobile ? '0.15rem 0.4rem' : '0.25rem 0.55rem',
                      borderRadius: '9999px',
                      fontSize: isMobile ? '0.68rem' : '0.75rem',
                      color: 'rgba(240,232,216,0.65)',
                    }}>
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Shimmer hairline */}
                <div style={{
                  height: '1px', marginBottom: isMobile ? '0.75rem' : '0.9rem',
                  background: `linear-gradient(to right, transparent, ${accent}66, transparent)`,
                }} />

                <div style={{ display: 'flex', gap: isMobile ? '0.75rem' : '1.1rem', flexWrap: isMobile ? 'wrap' : 'nowrap', alignItems: 'center' }}>
                  {project.liveLink && (
                    <a href={project.liveLink} target="_blank" rel="noopener noreferrer"
                      style={{ display: 'flex', alignItems: 'center', gap: '5px', color: accent, textDecoration: 'none', transition: 'opacity 0.2s', fontSize: isMobile ? '0.78rem' : '0.875rem' }}
                      onMouseEnter={e => e.currentTarget.style.opacity = '0.65'}
                      onMouseLeave={e => e.currentTarget.style.opacity = '1'}>
                      <FaExternalLinkAlt style={{ fontSize: '10px' }} /><span>Live</span>
                    </a>
                  )}
                  {project.demoVideo && (
                    <a href={project.demoVideo} target="_blank" rel="noopener noreferrer"
                      style={{ display: 'flex', alignItems: 'center', gap: '5px', color: accent, textDecoration: 'none', transition: 'opacity 0.2s', fontSize: isMobile ? '0.78rem' : '0.875rem' }}
                      onMouseEnter={e => e.currentTarget.style.opacity = '0.65'}
                      onMouseLeave={e => e.currentTarget.style.opacity = '1'}>
                      <FaVideo style={{ fontSize: '11px' }} /><span>Demo</span>
                    </a>
                  )}
                  <a href={project.codeLink} target="_blank" rel="noopener noreferrer"
                    style={{ display: 'flex', alignItems: 'center', gap: '5px', color: 'rgba(240,232,216,0.35)', textDecoration: 'none', transition: 'color 0.2s', fontSize: isMobile ? '0.78rem' : '0.875rem' }}
                    onMouseEnter={e => e.currentTarget.style.color = 'rgba(240,232,216,0.85)'}
                    onMouseLeave={e => e.currentTarget.style.color = 'rgba(240,232,216,0.35)'}>
                    <FaGithub style={{ fontSize: '13px' }} /><span>Code</span>
                  </a>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {isMobile && (
        <p style={{ textAlign: 'center', color: 'rgba(240,232,216,0.25)', fontSize: '13px', marginTop: '12px' }}>← Scroll or swipe →</p>
      )}

      {/* Shimmer keyframe */}
      <style>{`
        @keyframes shimmerSweep {
          0%   { background-position: 200% 200%; }
          50%  { background-position: -200% -200%; }
          100% { background-position: 200% 200%; }
        }
      `}</style>
    </div>
  );
};

const Projects = () => {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <section
      id="projects"
      className="py-16 md:py-20 px-4 relative overflow-hidden"
      style={{
        // Deep midnight — richer than before, slightly purple-shifted for a starry night feel
        background: 'linear-gradient(160deg, #080b14 0%, #0d1020 35%, #111528 65%, #0e0c1c 100%)',
      }}
    >
      {/* Animated star canvas */}
      <StarField />

      {/* Shimmer orbs */}
      <ShimmerOrb top="-80px" left="65%" size={400} color="#b8d4f0" delay={0} />
      <ShimmerOrb top="55%" left="-60px" size={320} color="#f0b8c8" delay={2} />
      <ShimmerOrb top="30%" left="40%" size={260} color="#a8d8c8" delay={4} />
      <ShimmerOrb top="80%" left="75%" size={200} color="#c8b8e8" delay={1.5} />

      {/* Shooting star */}
      <motion.div
        aria-hidden
        initial={{ x: '-10%', y: '0%', opacity: 0 }}
        animate={{ x: '110%', y: '30%', opacity: [0, 0.8, 0.8, 0] }}
        transition={{ duration: 1.8, delay: 2, repeat: Infinity, repeatDelay: 9, ease: 'easeIn' }}
        style={{
          position: 'absolute', top: '12%', left: 0, zIndex: 2,
          width: '120px', height: '1.5px', pointerEvents: 'none',
          background: 'linear-gradient(to right, transparent, rgba(255,240,200,0.9), transparent)',
          borderRadius: '2px',
          filter: 'blur(0.5px)',
          boxShadow: '0 0 8px rgba(255,240,200,0.6)',
        }}
      />
      {/* Second shooting star */}
      <motion.div
        aria-hidden
        initial={{ x: '-10%', y: '0%', opacity: 0 }}
        animate={{ x: '110%', y: '20%', opacity: [0, 0.6, 0.6, 0] }}
        transition={{ duration: 1.4, delay: 6.5, repeat: Infinity, repeatDelay: 11, ease: 'easeIn' }}
        style={{
          position: 'absolute', top: '35%', left: 0, zIndex: 2,
          width: '80px', height: '1px', pointerEvents: 'none',
          background: 'linear-gradient(to right, transparent, rgba(200,184,232,0.8), transparent)',
          borderRadius: '2px', filter: 'blur(0.5px)',
        }}
      />

      {/* Top shimmer hairline */}
      <div aria-hidden style={{
        position: 'absolute', top: 0, left: 0, right: 0, height: '2px', zIndex: 3,
        background: 'linear-gradient(90deg, transparent, #c8b8e8, #a8d8c8, #b8d4f0, transparent)',
        opacity: 0.55,
      }} />

      <div className="max-w-7xl mx-auto text-center relative z-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          style={{ marginBottom: '48px' }}
        >
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: '8px',
            marginBottom: '16px', padding: '4px 16px',
            borderRadius: '999px',
            border: '1px solid rgba(184,212,240,0.3)',
            background: 'rgba(184,212,240,0.06)',
            boxShadow: '0 0 12px rgba(184,212,240,0.08)',
          }}>
            {/* Twinkling dot */}
            <motion.span
              animate={{ opacity: [1, 0.3, 1], scale: [1, 1.4, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              style={{ width: '5px', height: '5px', borderRadius: '50%', background: '#b8d4f0', display: 'inline-block', flexShrink: 0 }}
            />
            <span style={{ fontSize: '11px', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(184,212,240,0.7)', fontWeight: 500 }}>
              Featured Work
            </span>
          </div>
          <h2 style={{
            fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', fontWeight: 300,
            color: '#f0e8d8',
            marginBottom: '12px',
            // Subtle text shimmer
            textShadow: '0 0 30px rgba(200,184,232,0.3)',
          }}>
            Featured Work
          </h2>
          <p style={{ color: 'rgba(240,232,216,0.45)' }}>Selected projects showcasing full-stack development</p>
        </motion.div>

        <ProjectCarousel projects={featuredProjects} isFeatured={true} />

        {/* WordPress section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          style={{ marginTop: '80px' }}
        >
          <div style={{
            height: '1px', maxWidth: '400px', margin: '0 auto 40px',
            background: 'linear-gradient(to right, transparent, rgba(200,184,232,0.4), transparent)',
          }} />

          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', marginBottom: '12px' }}>
            <FaWordpress style={{ color: '#b8d4f0', fontSize: '20px' }} />
            <h3 style={{ fontSize: '18px', fontWeight: 500, color: '#f0e8d8' }}>WordPress & CMS</h3>
          </div>
          <p style={{ color: 'rgba(240,232,216,0.38)', fontSize: '14px', maxWidth: '420px', margin: '0 auto 32px' }}>
            Client work under NDA – here's a glimpse of the solutions delivered.
          </p>

          <div style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr 1fr' : 'repeat(4, 1fr)',
            gap: '16px', maxWidth: '900px', margin: '0 auto',
          }}>
            {[
              { icon: FaShoppingCart, label: "E‑Commerce", desc: "WooCommerce stores with custom checkout", color: '#a8d8c8' },
              { icon: FaPaintBrush, label: "Custom Design", desc: "Figma → Elementor implementation", color: '#f0b8c8' },
              { icon: FaBolt, label: "Performance SEO", desc: "Speed & visibility optimization", color: '#b8d4f0' },
              { icon: FaCogs, label: "Advanced CMS", desc: "PageLayer & interactive components", color: '#c8b8e8' },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.08 }}
                whileHover={{ y: -4 }}
                style={{
                  padding: '20px 16px', borderRadius: '14px',
                  border: `1px solid ${item.color}22`,
                  background: 'rgba(255,248,240,0.03)',
                  backdropFilter: 'blur(10px)',
                  textAlign: 'center', transition: 'all 0.25s ease', cursor: 'default',
                  position: 'relative', overflow: 'hidden',
                }}
                onMouseEnter={e => {
                  const el = e.currentTarget as HTMLDivElement;
                  el.style.background = `${item.color}0e`;
                  el.style.borderColor = `${item.color}44`;
                  el.style.boxShadow = `0 8px 28px ${item.color}1a, 0 0 0 1px ${item.color}22`;
                }}
                onMouseLeave={e => {
                  const el = e.currentTarget as HTMLDivElement;
                  el.style.background = 'rgba(255,248,240,0.03)';
                  el.style.borderColor = `${item.color}22`;
                  el.style.boxShadow = 'none';
                }}
              >
                {/* Corner sparkle */}
                <div aria-hidden style={{
                  position: 'absolute', top: '8px', right: '10px',
                  width: '4px', height: '4px', borderRadius: '50%',
                  background: item.color, opacity: 0.5,
                  boxShadow: `0 0 6px ${item.color}`,
                }} />
                <item.icon style={{ color: item.color, fontSize: '22px', margin: '0 auto 10px', display: 'block' }} />
                <h4 style={{ fontSize: '13px', fontWeight: 600, color: '#f0e8d8', marginBottom: '6px' }}>{item.label}</h4>
                <p style={{ fontSize: '12px', color: 'rgba(240,232,216,0.42)', lineHeight: '1.5' }}>{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;