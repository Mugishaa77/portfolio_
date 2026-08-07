import { motion } from 'framer-motion';
import { FaExternalLinkAlt, FaGithub, FaVideo, FaChevronLeft, FaChevronRight, FaWordpress, FaShoppingCart, FaPaintBrush, FaBolt, FaCogs } from 'react-icons/fa';
import { useRef, useState, useEffect } from 'react';
import taskManager from '../media/task-manager.png';
import nexus from '../media/nexus.jpg';
import nv from '../media/nv.png';
import discoverGolf from '../media/discover_golf.png';
import vegrid from '../media/Vegrid.png';
import rafiki from '../media/RafikiMarine.png';

/* ─── Palette ──────────────────────────────────────────────────────────────
   Basalt Black  #363636   Leaf Green  #457534
   Sea Grey      #7D8285   Tangerine   #F58F1F
   ────────────────────────────────────────────────────────────────────── */
const ACCENTS = ['#457534', '#F58F1F', '#7D8285', '#363636'];

const featuredProjects = [
  {
    title: "Rafiki Marine Life Ltd",
    description: "Built a responsive Next.js website for Rafiki Marine, featuring a premium marine life showcase, species catalog, inquiry system, multilingual translation support, and conservation-focused storytelling experience.",
    tech: ["Next.js", "TypeScript", "TailwindCSS", "SEO and content", "LCP Web Vitals"],
    codeLink: "https://github.com/Mugishaa77/rafiki-marine",
    image: rafiki,
    liveLink: "https://rafikimarinelife.com/",
    role: "Full stack",
  },
  {
    title: "VeGrid",
    description: "A Solar-as-a-Service energy management platform for smart grids, real-time monitoring, predictive analytics, and optimization of energy distribution.",
    tech: ["Django", "Docker", "Microservices", "JWT Authentication", "Multi-user Interfaces", "PostgreSQL", "Celery", "Redis", "WebSockets"],
    image: vegrid,
    codeLink: "https://github.com/Vegrid",
    liveLink: "https://www.vegrid.co.ke/",
    role: "Full stack",
  },
  {
    title: "Discover Golf",
    description: "Online presence for a golf platform for children and other interested parties.",
    tech: ["React", "TypeScript", "SEO and content"],
    image: discoverGolf,
    demoVideo: "https://www.loom.com/share/60a1a812655a4bbdaf563a3087c2d0d6",
    codeLink: "https://github.com/Mugishaa77/discover-golf",
    liveLink: "https://discovergolf.net/",
    role: "Full stack",
  },
  {
    title: "Nairobi Verified",
    description: "Online digital directory for verified Nairobi businesses.",
    tech: ["React", "TypeScript", "WebSockets", "Node.js", "SEO and content"],
    image: nv,
    demoVideo: "https://www.loom.com/share/3408e48b28d04c1cb5a49ed7a7a3f017",
    codeLink: "https://github.com/Sikos-Marketing-Developer-Team",
    liveLink: "https://nairobiverified.co.ke/",
    role: "Full stack",
  },
  {
    title: "Task Management Platform",
    description: "Real-time collaborative task management with advanced synchronization.",
    tech: ["React", "TypeScript", "WebSockets", "Node.js"],
    image: taskManager,
    demoVideo: "https://www.loom.com/share/ccea7350b9ab46129bebdbb19b897dde?sid=73e43d52-004d-437c-aca8-7eee19a5219d",
    codeLink: "https://github.com/Mugishaa77/task-manager",
    liveLink: "https://task-manager-swart-two.vercel.app/",
    role: "Full stack",
  },
  {
    title: "React Native Mobile App",
    description: "React Native social feed with real-time updates and smooth animations.",
    tech: ["React Native", "TypeScript", "Firebase", "Redux"],
    image: nexus,
    demoVideo: "https://www.loom.com/share/7bdb073e614a4301ae46d6e40ec9cf1f?sid=005c2509-7072-43e0-934e-13bc02b79e42",
    codeLink: "https://github.com/Mugishaa77/alx-project-nexus",
    role: "Full stack",
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
}

/* ─── Trailing leaf sprig ────────────────────────────────────────────── */
const LeafBorder = () => {
  const leaves = Array.from({ length: 9 });
  return (
    <svg
      aria-hidden
      viewBox="0 0 1400 60"
      preserveAspectRatio="none"
      style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '60px', zIndex: 0 }}
    >
      <motion.path
        d="M0,2 C 200,30 400,-10 600,10 C 800,28 1000,-6 1200,12 C 1300,20 1350,4 1400,10"
        fill="none" stroke="#457534" strokeWidth={1.2}
        initial={{ pathLength: 0, opacity: 0 }}
        whileInView={{ pathLength: 1, opacity: 0.4 }}
        viewport={{ once: true }}
        transition={{ duration: 1.6, ease: 'easeInOut' }}
      />
      {leaves.map((_, i) => {
        const x = 90 + i * 150;
        const up = i % 2 === 0;
        return (
          <motion.path
            key={i}
            d={up ? `M${x},14 C ${x + 8},2 ${x + 22},2 ${x + 26},10 C ${x + 16},12 ${x + 6},14 ${x},14 Z`
                  : `M${x},8 C ${x + 8},20 ${x + 22},20 ${x + 26},12 C ${x + 16},10 ${x + 6},8 ${x},8 Z`}
            fill="none" stroke="#457534" strokeWidth={1}
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 0.5 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 + i * 0.06, duration: 0.6 }}
          />
        );
      })}
    </svg>
  );
};

const ProjectCarousel = ({ projects, isFeatured = true }: { projects: Project[]; isFeatured?: boolean }) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
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

  const cardWidth = isMobile ? 280 : (isFeatured ? 340 : 320);
  const cardPadding = isMobile ? '1rem' : (isFeatured ? '1.25rem' : '1rem');

  const arrowStyle = (show: boolean, side: 'left' | 'right'): React.CSSProperties => ({
    position: 'absolute',
    [side]: isMobile ? '-12px' : '-24px',
    top: '50%', transform: 'translateY(-50%)',
    width: isMobile ? '38px' : '44px', height: isMobile ? '38px' : '44px',
    borderRadius: '50%',
    background: '#26221E',
    border: '1px solid #7D8285',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    cursor: 'pointer', zIndex: 10, transition: 'border-color 0.2s, color 0.2s',
    opacity: show ? 1 : 0.25,
    pointerEvents: show ? 'auto' : 'none',
    color: '#F2EFE9',
  });

  return (
    <div className="relative max-w-6xl mx-auto">
      <button onClick={() => scroll(-1)} style={arrowStyle(showLeftArrow, 'left')} aria-label="Scroll left"
        onMouseEnter={e => { e.currentTarget.style.borderColor = '#457534'; e.currentTarget.style.color = '#457534'; }}
        onMouseLeave={e => { e.currentTarget.style.borderColor = '#7D8285'; e.currentTarget.style.color = '#F2EFE9'; }}>
        <FaChevronLeft style={{ fontSize: isMobile ? '13px' : '15px' }} />
      </button>
      <button onClick={() => scroll(1)} style={arrowStyle(showRightArrow, 'right')} aria-label="Scroll right"
        onMouseEnter={e => { e.currentTarget.style.borderColor = '#457534'; e.currentTarget.style.color = '#457534'; }}
        onMouseLeave={e => { e.currentTarget.style.borderColor = '#7D8285'; e.currentTarget.style.color = '#F2EFE9'; }}>
        <FaChevronRight style={{ fontSize: isMobile ? '13px' : '15px' }} />
      </button>

      <div ref={scrollContainerRef} style={{
        display: 'flex', gap: isMobile ? '20px' : '28px',
        overflowX: 'auto', scrollBehavior: 'smooth',
        padding: '20px 8px', scrollbarWidth: 'none',
      }} onScroll={checkScrollPosition}>
        {projects.map((project, index) => {
          const accent = ACCENTS[index % ACCENTS.length];
          return (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              style={{
                width: `${cardWidth}px`, flexShrink: 0,
                background: '#FFFDF8',
                borderRadius: '12px',
                border: '1px solid #363636',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                position: 'relative',
                overflow: 'hidden',
              }}
              whileHover={{
                y: isMobile ? 0 : -6,
                boxShadow: `6px 6px 0 ${accent}`,
                transition: { duration: 0.2 },
              }}
            >
              {/* Image area - no padding */}
              <div style={{
                position: 'relative',
                overflow: 'hidden',
                background: '#EFEAE0',
                borderBottom: '1px solid #363636',
              }}>
                <img src={project.image} alt={project.title} style={{
                  display: 'block', 
                  width: '100%', 
                  height: 'auto',
                  maxHeight: isMobile ? '200px' : '240px',
                  objectFit: 'cover',
                  objectPosition: 'center',
                  transition: 'transform 0.4s ease',
                }} />
                {/* Subtle accent stripe */}
                <div style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  height: '3px',
                  background: accent,
                  opacity: 0.6,
                }} />
              </div>

              {/* Card body */}
              <div style={{ padding: cardPadding }}>
                <div style={{
                  display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between',
                  marginBottom: '0.6rem',
                  flexDirection: isMobile ? 'column' : 'row',
                  gap: '0.5rem',
                }}>
                  <h3 style={{
                    fontFamily: "'Cormorant Garamond', Georgia, serif",
                    fontSize: isMobile ? '1.15rem' : (isFeatured ? '1.35rem' : '1.25rem'),
                    fontWeight: 600, color: '#363636', margin: 0, lineHeight: 1.25,
                  }}>
                    {project.title}
                  </h3>
                  {project.role && (
                    <span style={{
                      background: `${accent}15`,
                      border: `1px solid ${accent}`,
                      color: accent,
                      padding: '0.2rem 0.8rem',
                      borderRadius: '20px',
                      fontSize: isMobile ? '0.65rem' : '0.7rem',
                      fontFamily: "'EB Garamond', Georgia, serif",
                      fontStyle: 'italic',
                      alignSelf: isMobile ? 'flex-start' : 'center',
                      whiteSpace: 'nowrap', flexShrink: 0,
                    }}>
                      {project.role}
                    </span>
                  )}
                </div>

                <div style={{ position: 'relative', marginBottom: '1rem' }}>
                  <p style={{
                    fontFamily: "'EB Garamond', Georgia, serif",
                    color: '#5C5F61', lineHeight: 1.65,
                    fontSize: isMobile ? '0.85rem' : (isFeatured ? '0.92rem' : '0.9rem'),
                    display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', overflow: 'hidden',
                    margin: 0,
                  }}>
                    {project.description}
                  </p>
                  <button onClick={() => setSelectedProject(project)}
                    style={{
                      marginTop: '6px',
                      background: 'none', border: 'none', padding: 0, cursor: 'pointer',
                      fontFamily: "'EB Garamond', Georgia, serif",
                      fontStyle: 'italic',
                      color: accent,
                      fontSize: isMobile ? '0.8rem' : '0.85rem',
                      transition: 'opacity 0.2s',
                    }}
                    onMouseEnter={e => e.currentTarget.style.opacity = '0.7'}
                    onMouseLeave={e => e.currentTarget.style.opacity = '1'}
                  >
                    Read more →
                  </button>
                </div>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: isMobile ? '1rem' : '1.2rem' }}>
                  {project.tech.map(tech => (
                    <span key={tech} style={{
                      background: '#F7F4EC',
                      border: '1px solid #7D8285',
                      padding: isMobile ? '0.15rem 0.6rem' : '0.2rem 0.7rem',
                      borderRadius: '4px',
                      fontSize: isMobile ? '0.65rem' : '0.7rem',
                      fontFamily: "'EB Garamond', Georgia, serif",
                      color: '#7D8285',
                    }}>
                      {tech}
                    </span>
                  ))}
                </div>

                <div style={{ height: '1px', background: '#363636', opacity: 0.1, marginBottom: isMobile ? '0.8rem' : '1rem' }} />

                <div style={{ display: 'flex', gap: isMobile ? '0.85rem' : '1.25rem', flexWrap: isMobile ? 'wrap' : 'nowrap', alignItems: 'center' }}>
                  {project.liveLink && (
                    <a href={project.liveLink} target="_blank" rel="noopener noreferrer"
                      style={{ 
                        display: 'flex', alignItems: 'center', gap: '6px', 
                        color: accent, textDecoration: 'none', 
                        fontFamily: "'EB Garamond', Georgia, serif", 
                        fontSize: isMobile ? '0.82rem' : '0.9rem',
                        transition: 'opacity 0.2s',
                      }}
                      onMouseEnter={e => e.currentTarget.style.opacity = '0.7'}
                      onMouseLeave={e => e.currentTarget.style.opacity = '1'}
                    >
                      <FaExternalLinkAlt style={{ fontSize: '10px' }} /><span>Live</span>
                    </a>
                  )}
                  {project.demoVideo && (
                    <a href={project.demoVideo} target="_blank" rel="noopener noreferrer"
                      style={{ 
                        display: 'flex', alignItems: 'center', gap: '6px', 
                        color: accent, textDecoration: 'none', 
                        fontFamily: "'EB Garamond', Georgia, serif", 
                        fontSize: isMobile ? '0.82rem' : '0.9rem',
                        transition: 'opacity 0.2s',
                      }}
                      onMouseEnter={e => e.currentTarget.style.opacity = '0.7'}
                      onMouseLeave={e => e.currentTarget.style.opacity = '1'}
                    >
                      <FaVideo style={{ fontSize: '11px' }} /><span>Demo</span>
                    </a>
                  )}
                  <a href={project.codeLink} target="_blank" rel="noopener noreferrer"
                    style={{ 
                      display: 'flex', alignItems: 'center', gap: '6px', 
                      color: '#7D8285', textDecoration: 'none', 
                      fontFamily: "'EB Garamond', Georgia, serif", 
                      fontSize: isMobile ? '0.82rem' : '0.9rem',
                      transition: 'opacity 0.2s',
                    }}
                    onMouseEnter={e => e.currentTarget.style.opacity = '0.7'}
                    onMouseLeave={e => e.currentTarget.style.opacity = '1'}
                  >
                    <FaGithub style={{ fontSize: '13px' }} /><span>Code</span>
                  </a>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Project detail modal */}
      {selectedProject && (
        <div className="fixed inset-0 flex items-center justify-center z-50 p-4"
          style={{ background: 'rgba(38,34,30,0.85)' }}
          onClick={() => setSelectedProject(null)}
        >
          <div onClick={e => e.stopPropagation()} style={{
            width: '100%', maxWidth: '760px', padding: '32px',
            background: '#F7F4EC', border: '1px solid #363636',
            maxHeight: '86vh', overflowY: 'auto',
            borderRadius: '12px',
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '16px', marginBottom: '16px' }}>
              <div style={{ display: 'flex', gap: '18px', alignItems: 'center' }}>
                <img src={selectedProject.image} alt={selectedProject.title} style={{ width: 100, height: 68, objectFit: 'cover', border: '1px solid #363636', borderRadius: '4px' }} />
                <div>
                  <h3 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", margin: 0, fontSize: '1.6rem', fontWeight: 600, color: '#363636' }}>
                    {selectedProject.title}
                  </h3>
                  <div style={{ fontFamily: "'EB Garamond', Georgia, serif", fontStyle: 'italic', fontSize: '0.95rem', color: '#7D8285', marginTop: 6 }}>
                    {selectedProject.tech.join(' · ')}
                  </div>
                </div>
              </div>
              <button onClick={() => setSelectedProject(null)} style={{ background: 'transparent', border: 'none', color: '#7D8285', cursor: 'pointer', fontSize: 16, fontFamily: "'EB Garamond', Georgia, serif" }}>
                Close
              </button>
            </div>

            <p style={{ fontFamily: "'EB Garamond', Georgia, serif", color: '#5C5F61', lineHeight: 1.75, fontSize: '17px', marginBottom: 22 }}>
              {selectedProject.description}
            </p>

            <div style={{ display: 'flex', gap: 20, flexWrap: 'wrap', fontFamily: "'EB Garamond', Georgia, serif", fontStyle: 'italic' }}>
              {selectedProject.liveLink && (
                <a href={selectedProject.liveLink} target="_blank" rel="noopener noreferrer" style={{ color: '#457534', textDecoration: 'none' }}>Visit live →</a>
              )}
              {selectedProject.demoVideo && (
                <a href={selectedProject.demoVideo} target="_blank" rel="noopener noreferrer" style={{ color: '#F58F1F', textDecoration: 'none' }}>Watch demo →</a>
              )}
              {selectedProject.codeLink && (
                <a href={selectedProject.codeLink} target="_blank" rel="noopener noreferrer" style={{ color: '#7D8285', textDecoration: 'none' }}>View code →</a>
              )}
            </div>
          </div>
        </div>
      )}

      {isMobile && (
        <p style={{ textAlign: 'center', color: '#7D8285', fontFamily: "'EB Garamond', Georgia, serif", fontStyle: 'italic', fontSize: '14px', marginTop: '14px' }}>
          ← Scroll or swipe →
        </p>
      )}
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

  const wpItems = [
    { icon: FaShoppingCart, label: "E-commerce", desc: "WooCommerce stores with custom checkout" },
    { icon: FaPaintBrush,   label: "Custom design", desc: "Figma to Elementor implementation" },
    { icon: FaBolt,         label: "Performance & SEO", desc: "Speed and visibility optimisation" },
    { icon: FaCogs,         label: "Advanced CMS", desc: "PageLayer and interactive components" },
  ];

  return (
    <section
      id="projects"
      className="py-20 md:py-24 px-4 relative overflow-hidden"
      style={{ background: '#26221E' }}
    >
      <LeafBorder />

      <div className="max-w-7xl mx-auto text-center relative z-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{ marginBottom: '52px' }}
        >
          <p style={{
            fontFamily: "'EB Garamond', Georgia, serif",
            fontStyle: 'italic', fontSize: '17px', color: '#8FBB6E', marginBottom: '10px',
          }}>
            A selection of the work
          </p>
          <h2 style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontSize: 'clamp(2.2rem, 4.5vw, 3.2rem)', fontWeight: 500,
            color: '#F2EFE9', marginBottom: '10px', letterSpacing: '-0.01em',
          }}>
            Featured work<span style={{ color: '#F58F1F' }}>.</span>
          </h2>
          <p style={{ fontFamily: "'EB Garamond', Georgia, serif", fontSize: '18px', color: '#7D8285' }}>
            Full-stack projects, built end to end
          </p>
        </motion.div>

        <ProjectCarousel projects={featuredProjects} isFeatured={true} />

        {/* WordPress section */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          style={{ marginTop: '88px' }}
        >
          <div style={{ height: '1px', maxWidth: '340px', margin: '0 auto 40px', background: '#7D8285', opacity: 0.3 }} />

          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', marginBottom: '10px' }}>
            <FaWordpress style={{ color: '#8FBB6E', fontSize: '19px' }} />
            <h3 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: '22px', fontWeight: 600, color: '#F2EFE9' }}>
              WordPress and CMS
            </h3>
          </div>
          <p style={{ fontFamily: "'EB Garamond', Georgia, serif", fontStyle: 'italic', color: '#7D8285', fontSize: '16px', maxWidth: '420px', margin: '0 auto 36px' }}>
            Client work under NDA here's a glimpse of the solutions delivered.
          </p>

          <div style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr 1fr' : 'repeat(4, 1fr)',
            gap: '16px', maxWidth: '900px', margin: '0 auto',
          }}>
            {wpItems.map((item, idx) => {
              const accent = ACCENTS[idx % ACCENTS.length];
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.08 }}
                  whileHover={{ y: -3 }}
                  style={{
                    padding: '22px 16px',
                    border: '1px solid #7D8285',
                    borderRadius: '8px',
                    background: 'rgba(247,244,236,0.05)',
                    textAlign: 'center',
                    transition: 'box-shadow 0.2s ease, background 0.2s ease',
                  }}
                  onMouseEnter={e => { 
                    e.currentTarget.style.boxShadow = `4px 4px 0 ${accent}`;
                    e.currentTarget.style.background = 'rgba(247,244,236,0.12)';
                  }}
                  onMouseLeave={e => { 
                    e.currentTarget.style.boxShadow = 'none';
                    e.currentTarget.style.background = 'rgba(247,244,236,0.05)';
                  }}
                >
                  <item.icon style={{ color: accent, fontSize: '21px', margin: '0 auto 12px', display: 'block' }} />
                  <h4 style={{
                    fontFamily: "'Cormorant Garamond', Georgia, serif",
                    fontSize: '15px', fontWeight: 600, color: '#F2EFE9', marginBottom: '6px',
                  }}>
                    {item.label}
                  </h4>
                  <p style={{ fontFamily: "'EB Garamond', Georgia, serif", fontSize: '13px', color: '#C9C5BD', lineHeight: '1.55' }}>
                    {item.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;