import { motion } from 'framer-motion';
import { FaExternalLinkAlt, FaGithub, FaVideo, FaChevronLeft, FaChevronRight, FaWordpress, FaShoppingCart, FaPaintBrush, FaBolt, FaCogs } from 'react-icons/fa';
import { useRef, useState, useEffect } from 'react';
import taskManager from '../media/task-manager.png';
import nexus from '../media/nexus.jpg';
import nv from '../media/nv.png';
import discoverGolf from '../media/discover_golf.png';

const featuredProjects = [
  {
    title: "Discover Golf",
    description: "Online presence for a golf platform for children and other interested parties.",
    tech: ["React", "TypeScript", "SEO and content"],
    image: discoverGolf,
    demoVideo: "https://www.loom.com/share/60a1a812655a4bbdaf563a3087c2d0d6",
    codeLink: "https://github.com/Mugishaa77/discover-golf",
    liveLink: "https://discovergolf.net/",
    role: "FullStack"
  },
  {
    title: "Nairobi Verified",
    description: "Online Digital Directory for Verified Nairobi Businesses.",
    tech: ["React", "TypeScript", "WebSockets", "Node.js", "SEO and content"],
    image: nv,
    demoVideo: "https://www.loom.com/share/3408e48b28d04c1cb5a49ed7a7a3f017",
    codeLink: "https://github.com/Sikos-Marketing-Developer-Team",
    liveLink: "https://nairobiverified.co.ke/",
    role: "FullStack"
  },
  {
    title: "Task Management Platform",
    description: "Real-time collaborative task management with advanced synchronization",
    tech: ["React", "TypeScript", "WebSockets", "Node.js"],
    image: taskManager,
    demoVideo: "https://www.loom.com/share/ccea7350b9ab46129bebdbb19b897dde?sid=73e43d52-004d-437c-aca8-7eee19a5219d",
    codeLink: "https://github.com/Mugishaa77/task-manager",
    liveLink: "https://task-manager-swart-two.vercel.app/",
    role: "FullStack"
  },
  {
    title: "React Native Mobile App",
    description: "React Native social feed with real-time updates and smooth animations",
    tech: ["React Native", "TypeScript", "Firebase", "Redux"],
    image: nexus,
    demoVideo: "https://www.loom.com/share/7bdb073e614a4301ae46d6e40ec9cf1f?sid=005c2509-7072-43e0-934e-13bc02b79e42",
    codeLink: "https://github.com/Mugishaa77/alx-project-nexus",
    role: "FullStack"
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
      const scrollAmount = isMobile ? 300 : 400;
      scrollContainerRef.current.scrollLeft += direction * scrollAmount;
    }
  };

  const getCardWidth = () => isMobile ? 280 : (isFeatured ? 330 : 320);
  const getImageHeight = () => isMobile ? 140 : (isFeatured ? 165 : 160);
  const getCardPadding = () => isMobile ? '0.75rem' : (isFeatured ? '1.25rem' : '1rem');

  const cardWidth = getCardWidth();
  const imageHeight = getImageHeight();
  const cardPadding = getCardPadding();

  return (
    <div className="relative max-w-6xl mx-auto">
      {/* Nav arrows */}
      <button
        onClick={() => scroll(-1)}
        style={{
          position: 'absolute', left: isMobile ? '-12px' : '-24px', top: '50%',
          transform: 'translateY(-50%)',
          width: isMobile ? '40px' : '48px', height: isMobile ? '40px' : '48px',
          borderRadius: '50%',
          background: 'rgba(255,255,255,0.15)',
          backdropFilter: 'blur(8px)',
          border: '1px solid rgba(134,117,153,0.3)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          cursor: 'pointer', zIndex: 10, transition: 'all 0.2s',
          opacity: showLeftArrow ? 1 : 0.3,
          pointerEvents: showLeftArrow ? 'auto' : 'none',
          color: '#E6D4BE',
        }}
        aria-label="Scroll left"
        onMouseEnter={e => (e.currentTarget.style.background = 'rgba(103,159,158,0.25)')}
        onMouseLeave={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.15)')}
      >
        <FaChevronLeft style={{ fontSize: isMobile ? '14px' : '16px' }} />
      </button>

      <button
        onClick={() => scroll(1)}
        style={{
          position: 'absolute', right: isMobile ? '-12px' : '-24px', top: '50%',
          transform: 'translateY(-50%)',
          width: isMobile ? '40px' : '48px', height: isMobile ? '40px' : '48px',
          borderRadius: '50%',
          background: 'rgba(255,255,255,0.15)',
          backdropFilter: 'blur(8px)',
          border: '1px solid rgba(134,117,153,0.3)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          cursor: 'pointer', zIndex: 10, transition: 'all 0.2s',
          opacity: showRightArrow ? 1 : 0.3,
          pointerEvents: showRightArrow ? 'auto' : 'none',
          color: '#E6D4BE',
        }}
        aria-label="Scroll right"
        onMouseEnter={e => (e.currentTarget.style.background = 'rgba(103,159,158,0.25)')}
        onMouseLeave={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.15)')}
      >
        <FaChevronRight style={{ fontSize: isMobile ? '14px' : '16px' }} />
      </button>

      {/* Scrollable row */}
      <div
        ref={scrollContainerRef}
        style={{
          display: 'flex',
          gap: isMobile ? '20px' : '24px',
          overflowX: 'auto',
          scrollBehavior: 'smooth',
          paddingTop: '16px',
          paddingBottom: '16px',
          paddingLeft: '8px',
          paddingRight: '8px',
          scrollbarWidth: 'none',
        }}
        onScroll={checkScrollPosition}
      >
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            style={{
              background: '#FFFFFF',
              borderRadius: '16px',
              overflow: 'hidden',
              width: `${cardWidth}px`,
              flexShrink: 0,
              transition: 'all 0.3s ease',
              border: '1px solid #f0f0f0',
              boxShadow: '0 2px 4px rgba(0,0,0,0.02)',
              /* Added outer margin so cards don't touch each other */
              marginTop: '4px',
              marginBottom: '4px',
            }}
            whileHover={{ scale: isMobile ? 1 : 1.02, boxShadow: '0 12px 32px rgba(103,159,158,0.15)' }}
          >
            <div style={{ height: `${imageHeight}px`, position: 'relative', overflow: 'hidden', background: '#faf9f8' }}>
              <img
                src={project.image}
                alt={project.title}
                style={{ width: '100%', height: '100%', objectFit: 'contain', padding: isMobile ? '6px' : '8px' }}
              />
            </div>

            <div style={{ padding: cardPadding }}>
              <div style={{
                display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between',
                marginBottom: '0.75rem',
                flexDirection: isMobile ? 'column' : 'row',
                gap: isMobile ? '0.5rem' : '0',
              }}>
                <h3 style={{
                  fontSize: isMobile ? '1.1rem' : (isFeatured ? '1.2rem' : '1.125rem'),
                  fontWeight: '600', color: '#1f2937', margin: 0, lineHeight: '1.3',
                }}>
                  {project.title}
                </h3>
                {project.role && (
                  <span style={{
                    background: '#679F9F', padding: '0.25rem 0.5rem',
                    borderRadius: '9999px',
                    fontSize: isMobile ? '0.7rem' : '0.75rem',
                    color: 'white', alignSelf: isMobile ? 'flex-start' : 'center',
                  }}>
                    {project.role}
                  </span>
                )}
              </div>

              <p style={{
                color: '#6b7280', marginBottom: '1rem', lineHeight: '1.5',
                fontSize: isMobile ? '0.8rem' : (isFeatured ? '0.95rem' : '0.875rem'),
                display: '-webkit-box', WebkitLineClamp: 3,
                WebkitBoxOrient: 'vertical', overflow: 'hidden',
              }}>
                {project.description}
              </p>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: isMobile ? '1rem' : '1.5rem' }}>
                {project.tech.map(tech => (
                  <span key={tech} style={{
                    background: '#f3f4f6',
                    padding: isMobile ? '0.2rem 0.4rem' : (isFeatured ? '0.3rem 0.6rem' : '0.25rem 0.5rem'),
                    borderRadius: '9999px',
                    fontSize: isMobile ? '0.7rem' : (isFeatured ? '0.8rem' : '0.75rem'),
                    color: '#4b5563',
                  }}>
                    {tech}
                  </span>
                ))}
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div style={{ display: 'flex', gap: isMobile ? '0.75rem' : (isFeatured ? '1.25rem' : '1rem'), flexWrap: isMobile ? 'wrap' : 'nowrap' }}>
                  {project.liveLink && (
                    <a href={project.liveLink} target="_blank" rel="noopener noreferrer"
                      style={{ display: 'flex', alignItems: 'center', color: '#679F9F', textDecoration: 'none', transition: 'color 0.2s', fontSize: isMobile ? '0.8rem' : (isFeatured ? '0.95rem' : '0.875rem') }}
                      onMouseEnter={e => e.currentTarget.style.color = '#877499'}
                      onMouseLeave={e => e.currentTarget.style.color = '#679F9F'}>
                      <FaExternalLinkAlt style={{ marginRight: '0.5rem' }} /><span>Live</span>
                    </a>
                  )}
                  {project.demoVideo && (
                    <a href={project.demoVideo} target="_blank" rel="noopener noreferrer"
                      style={{ display: 'flex', alignItems: 'center', color: '#679F9F', textDecoration: 'none', transition: 'color 0.2s', fontSize: isMobile ? '0.8rem' : (isFeatured ? '0.95rem' : '0.875rem') }}
                      onMouseEnter={e => e.currentTarget.style.color = '#877499'}
                      onMouseLeave={e => e.currentTarget.style.color = '#679F9F'}>
                      <FaVideo style={{ marginRight: '0.5rem' }} /><span>Demo</span>
                    </a>
                  )}
                  <a href={project.codeLink} target="_blank" rel="noopener noreferrer"
                    style={{ display: 'flex', alignItems: 'center', color: '#9ca3af', textDecoration: 'none', transition: 'color 0.2s', fontSize: isMobile ? '0.8rem' : (isFeatured ? '0.95rem' : '0.875rem') }}
                    onMouseEnter={e => e.currentTarget.style.color = '#4b5563'}
                    onMouseLeave={e => e.currentTarget.style.color = '#9ca3af'}>
                    <FaGithub style={{ marginRight: '0.5rem' }} /><span>Code</span>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {isMobile && <p style={{ textAlign: 'center', color: '#E6D4BE88', fontSize: '14px', marginTop: '16px' }}>← Scroll or swipe →</p>}
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
        background: 'linear-gradient(160deg, #0f1923 0%, #152028 40%, #1a2535 75%, #1c1f2e 100%)',
      }}
    >
      {/* Ambient blobs */}
      <div aria-hidden style={{
        position: 'absolute', top: '-120px', right: '-100px',
        width: '560px', height: '560px', borderRadius: '50%',
        background: 'radial-gradient(circle at 50% 50%, #7DADDB18 0%, transparent 65%)',
        filter: 'blur(50px)', pointerEvents: 'none',
      }} />
      <div aria-hidden style={{
        position: 'absolute', bottom: '-80px', left: '-80px',
        width: '420px', height: '420px', borderRadius: '50%',
        background: 'radial-gradient(circle at 50% 50%, #E1829820 0%, transparent 65%)',
        filter: 'blur(40px)', pointerEvents: 'none',
      }} />
      <div aria-hidden style={{
        position: 'absolute', top: '45%', left: '30%',
        width: '300px', height: '300px', borderRadius: '50%',
        background: 'radial-gradient(circle, #679F9E14 0%, transparent 70%)',
        filter: 'blur(35px)', pointerEvents: 'none',
      }} />

      {/* Noise/grain overlay */}
      <div aria-hidden style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        backgroundImage: 'radial-gradient(circle, #ffffff06 1px, transparent 1px)',
        backgroundSize: '32px 32px',
      }} />

      {/* Diagonal stripe accent */}
      <div aria-hidden style={{
        position: 'absolute', top: 0, left: 0, right: 0, height: '3px',
        background: 'linear-gradient(90deg, transparent, #867599, #679F9E, #7DADDB, transparent)',
        opacity: 0.5,
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
            marginBottom: '16px', padding: '4px 14px',
            borderRadius: '999px',
            border: '1px solid #7DADDB44',
            background: '#7DADDB10',
          }}>
            <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#7DADDB', display: 'inline-block' }} />
            <span style={{ fontSize: '11px', letterSpacing: '0.12em', textTransform: 'uppercase', color: '#7DADDB99', fontWeight: 500 }}>
              Featured Work
            </span>
          </div>
          <h2 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', fontWeight: 300, color: '#E6D4BE', marginBottom: '12px' }}>
            Featured Work
          </h2>
          <p style={{ color: '#E6D4BE66' }}>Selected projects showcasing full-stack development</p>
        </motion.div>

        <ProjectCarousel projects={featuredProjects} isFeatured={true} />

        {/* WordPress section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          style={{ marginTop: '80px' }}
        >
          {/* Divider */}
          <div style={{
            height: '1px', maxWidth: '400px', margin: '0 auto 40px',
            background: 'linear-gradient(to right, transparent, #86759955, transparent)',
          }} />

          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', marginBottom: '12px' }}>
            <FaWordpress style={{ color: '#7DADDB', fontSize: '20px' }} />
            <h3 style={{ fontSize: '18px', fontWeight: 500, color: '#E6D4BE' }}>WordPress & CMS</h3>
          </div>
          <p style={{ color: '#E6D4BE55', fontSize: '14px', maxWidth: '420px', margin: '0 auto 32px' }}>
            Client work under NDA – here's a glimpse of the solutions delivered.
          </p>

          <div style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr 1fr' : 'repeat(4, 1fr)',
            gap: '16px',
            maxWidth: '900px',
            margin: '0 auto',
          }}>
            {[
              { icon: FaShoppingCart, label: "E‑Commerce", desc: "WooCommerce stores with custom checkout", color: '#679F9E' },
              { icon: FaPaintBrush, label: "Custom Design", desc: "Figma → Elementor implementation", color: '#E18298' },
              { icon: FaBolt, label: "Performance SEO", desc: "Speed & visibility optimization", color: '#7DADDB' },
              { icon: FaCogs, label: "Advanced CMS", desc: "PageLayer & interactive components", color: '#867599' },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.08 }}
                whileHover={{ y: -3 }}
                style={{
                  padding: '20px 16px',
                  borderRadius: '14px',
                  border: `1px solid ${item.color}28`,
                  background: 'rgba(255,255,255,0.04)',
                  backdropFilter: 'blur(8px)',
                  textAlign: 'center',
                  transition: 'all 0.2s ease',
                  cursor: 'default',
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLDivElement).style.background = `${item.color}12`;
                  (e.currentTarget as HTMLDivElement).style.borderColor = `${item.color}55`;
                  (e.currentTarget as HTMLDivElement).style.boxShadow = `0 8px 24px ${item.color}18`;
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLDivElement).style.background = 'rgba(255,255,255,0.04)';
                  (e.currentTarget as HTMLDivElement).style.borderColor = `${item.color}28`;
                  (e.currentTarget as HTMLDivElement).style.boxShadow = 'none';
                }}
              >
                <item.icon style={{ color: item.color, fontSize: '22px', margin: '0 auto 10px', display: 'block' }} />
                <h4 style={{ fontSize: '13px', fontWeight: 600, color: '#E6D4BE', marginBottom: '6px' }}>{item.label}</h4>
                <p style={{ fontSize: '12px', color: '#E6D4BE55', lineHeight: '1.5' }}>{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;