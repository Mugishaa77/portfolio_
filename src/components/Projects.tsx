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
    return () => {
      if (container) container.removeEventListener('scroll', checkScrollPosition);
    };
  }, []);

  const scroll = (direction: number) => {
    if (scrollContainerRef.current) {
      const scrollAmount = isMobile ? 300 : 400;
      scrollContainerRef.current.scrollLeft += direction * scrollAmount;
    }
  };

  const getCardWidth = () => {
    if (isMobile) return 280;
    return isFeatured ? 330 : 320;
  };

  const getImageHeight = () => {
    if (isMobile) return 140;
    return isFeatured ? 165 : 160;
  };

  const getCardPadding = () => {
    if (isMobile) return '0.75rem';
    return isFeatured ? '1.25rem' : '1rem';
  };

  const cardWidth = getCardWidth();
  const imageHeight = getImageHeight();
  const cardPadding = getCardPadding();

  return (
    <div className="relative max-w-6xl mx-auto">
      <button
        onClick={() => scroll(-1)}
        className={`absolute left-[-12px] md:left-[-24px] top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white border border-heather/30 hover:border-viridian/50 flex items-center justify-center shadow-sm transition-all z-10 ${
          showLeftArrow ? 'opacity-100 pointer-events-auto' : 'opacity-30 pointer-events-none'
        }`}
        aria-label="Scroll left"
      >
        <FaChevronLeft className="text-heather text-sm md:text-base" />
      </button>
      <button
        onClick={() => scroll(1)}
        className={`absolute right-[-12px] md:right-[-24px] top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white border border-heather/30 hover:border-viridian/50 flex items-center justify-center shadow-sm transition-all z-10 ${
          showRightArrow ? 'opacity-100 pointer-events-auto' : 'opacity-30 pointer-events-none'
        }`}
        aria-label="Scroll right"
      >
        <FaChevronRight className="text-heather text-sm md:text-base" />
      </button>

      <div
        ref={scrollContainerRef}
        className="flex gap-5 md:gap-6 overflow-x-auto scrollbar-hide scroll-smooth py-4"
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
              boxShadow: '0 2px 4px rgba(0,0,0,0.02)'
            }}
            whileHover={{ scale: isMobile ? 1 : 1.02 }}
          >
            <div style={{ height: `${imageHeight}px`, position: 'relative', overflow: 'hidden', background: '#faf9f8' }}>
              <img src={project.image} alt={project.title} style={{ width: '100%', height: '100%', objectFit: 'contain', padding: isMobile ? '6px' : '8px' }} />
            </div>
            <div style={{ padding: cardPadding }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: '0.75rem', flexDirection: isMobile ? 'column' : 'row', gap: isMobile ? '0.5rem' : '0' }}>
                <h3 style={{ fontSize: isMobile ? '1.1rem' : (isFeatured ? '1.2rem' : '1.125rem'), fontWeight: '600', color: '#1f2937', margin: 0, lineHeight: '1.3' }}>
                  {project.title}
                </h3>
                {project.role && (
                  <span style={{ background: '#679F9F', padding: '0.25rem 0.5rem', borderRadius: '9999px', fontSize: isMobile ? '0.7rem' : '0.75rem', color: 'white', alignSelf: isMobile ? 'flex-start' : 'center' }}>
                    {project.role}
                  </span>
                )}
              </div>
              <p style={{ color: '#6b7280', marginBottom: '1rem', lineHeight: '1.5', fontSize: isMobile ? '0.8rem' : (isFeatured ? '0.95rem' : '0.875rem'), display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                {project.description}
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: isMobile ? '1rem' : '1.5rem' }}>
                {project.tech.map(tech => (
                  <span key={tech} style={{ background: '#f3f4f6', padding: isMobile ? '0.2rem 0.4rem' : (isFeatured ? '0.3rem 0.6rem' : '0.25rem 0.5rem'), borderRadius: '9999px', fontSize: isMobile ? '0.7rem' : (isFeatured ? '0.8rem' : '0.75rem'), color: '#4b5563' }}>
                    {tech}
                  </span>
                ))}
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div style={{ display: 'flex', gap: isMobile ? '0.75rem' : (isFeatured ? '1.25rem' : '1rem'), flexWrap: isMobile ? 'wrap' : 'nowrap' }}>
                  {project.liveLink && (
                    <a href={project.liveLink} target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', color: '#679F9F', textDecoration: 'none', transition: 'color 0.2s ease', fontSize: isMobile ? '0.8rem' : (isFeatured ? '0.95rem' : '0.875rem') }}
                      onMouseEnter={(e) => e.currentTarget.style.color = '#877499'} onMouseLeave={(e) => e.currentTarget.style.color = '#679F9F'}>
                      <FaExternalLinkAlt style={{ marginRight: '0.5rem' }} /><span>Live</span>
                    </a>
                  )}
                  {project.demoVideo && (
                    <a href={project.demoVideo} target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', color: '#679F9F', textDecoration: 'none', transition: 'color 0.2s ease', fontSize: isMobile ? '0.8rem' : (isFeatured ? '0.95rem' : '0.875rem') }}
                      onMouseEnter={(e) => e.currentTarget.style.color = '#877499'} onMouseLeave={(e) => e.currentTarget.style.color = '#679F9F'}>
                      <FaVideo style={{ marginRight: '0.5rem' }} /><span>Demo</span>
                    </a>
                  )}
                  <a href={project.codeLink} target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', color: '#9ca3af', textDecoration: 'none', transition: 'color 0.2s ease', fontSize: isMobile ? '0.8rem' : (isFeatured ? '0.95rem' : '0.875rem') }}
                    onMouseEnter={(e) => e.currentTarget.style.color = '#4b5563'} onMouseLeave={(e) => e.currentTarget.style.color = '#9ca3af'}>
                    <FaGithub style={{ marginRight: '0.5rem' }} /><span>Code</span>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      {isMobile && <p className="text-center text-gray-400 text-sm mt-4">← Scroll or swipe →</p>}
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
    <section id="projects" className="py-16 md:py-20 px-4 bg-sandstone">
      <div className="max-w-7xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-light text-azur mb-3">Featured Work</h2>
          <p className="text-gray-600">Selected projects showcasing full-stack development</p>
        </motion.div>

        <ProjectCarousel projects={featuredProjects} isFeatured={true} />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-20"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <FaWordpress className="text-viridian text-xl" />
            <h3 className="text-lg font-medium text-gray-700">WordPress & CMS</h3>
          </div>
          <p className="text-gray-500 text-sm max-w-md mx-auto mb-8">
            Client work under NDA – here's a glimpse of the solutions delivered.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {[
              { icon: FaShoppingCart, label: "E‑Commerce", desc: "WooCommerce stores with custom checkout" },
              { icon: FaPaintBrush, label: "Custom Design", desc: "Figma → Elementor implementation" },
              { icon: FaBolt, label: "Performance SEO", desc: "Speed & visibility optimization" },
              { icon: FaCogs, label: "Advanced CMS", desc: "PageLayer & interactive components" },
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-4 rounded-xl border border-heather/20 text-center hover:shadow-sm transition">
                <item.icon className="text-viridian text-2xl mx-auto mb-2" />
                <h4 className="text-sm font-medium text-gray-700 mb-1">{item.label}</h4>
                <p className="text-xs text-gray-500">{item.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;