import { motion } from 'framer-motion';
import { FaExternalLinkAlt, FaGithub, FaVideo, FaStar, FaChevronLeft, FaChevronRight, FaBolt, FaCogs, FaPaintBrush, FaShieldAlt, FaShoppingCart, FaWordpress } from 'react-icons/fa';
import { useRef, useState, useEffect } from 'react';

// Import your images
import AtlasHome from '../media/atlas_home.png';
import EvergreenHome from '../media/evergreen_home.png';
import jawabuOne from '../media/jawabu_one.png';
import DarasaniOne from '../media/darasani_one.png';
import datadrive from '../media/dataarive.png';
import taskManager from '../media/task-manager.png';
import cineseek from '../media/cineseek.png';
import nexus from '../media/nexus.jpg';
import nv from '../media/nv.png';

// Organized projects data
const featuredProjects = [
  {
    title: "Nairobi Verified",
    description: "Online Digital Directory for Verified Nairobi Businesses.",
    tech: ["React", "TypeScript", "WebSockets", "Node.js", "SEO and content"],
    image: nv,
    demoVideo: "https://www.loom.com/share/3408e48b28d04c1cb5a49ed7a7a3f017",
    codeLink: "https://github.com/Sikos-Marketing-Developer-Team",
    featured: true,
    liveLink: "https://nairobiverified.co.ke/",
    role: "FullStack "
  },
  {
    title: "Task Management Platform",
    description: "Real-time collaborative task management with advanced synchronization",
    tech: ["React", "TypeScript", "WebSockets", "Node.js"],
    image: taskManager,
    demoVideo: "https://www.loom.com/share/ccea7350b9ab46129bebdbb19b897dde?sid=73e43d52-004d-437c-aca8-7eee19a5219d",
    codeLink: "https://github.com/Mugishaa77/task-manager",
    featured: true,
    liveLink: "https://task-manager-swart-two.vercel.app/",
    role: "FullStack "
  },
  {
    title: "Datadrive",
    description: "A logistics optimization platform utilizing real-time data for efficient fleet and delivery management.",
    tech: ["React.js", "TypeScript", "Vite", "Tailwind CSS", "Axios", "SCSS"],
    image: datadrive,
    liveLink: "https://datadrive.africa/",
    codeLink: "https://github.com/DataDrive-africa",
    featured: true,
    role: "Frontend"
  },
   {
    title: "Social Media Mobile App", 
    description: "React Native social feed with real-time updates and smooth animations",
    tech: ["React Native", "TypeScript", "Firebase", "Redux"],
    image: nexus,
    demoVideo: "https://www.loom.com/share/7bdb073e614a4301ae46d6e40ec9cf1f?sid=005c2509-7072-43e0-934e-13bc02b79e42",
    codeLink: "https://github.com/Mugishaa77/alx-project-nexus",
    featured: true,
    role: "FullStack"
  },
  {
    title: "Atlas Tea Brokers Ltd",
    description: "A digital platform enhancing tea auction visibility and market insights for brokers and buyers.",
    tech: ["MongoDB", "Express.js", "React.js", "Node.js"],
    image: AtlasHome,
    liveLink: "https://atlas-omega.vercel.app/",
    codeLink: "https://github.com/Mugishaa77/atlas",
    featured: true,
    role: "FullStack"
  },
 
];

const additionalProjects = [
  {
    title: "Movie Discovery PWA",
    description: "Progressive Web App with offline functionality and advanced caching",
    tech: ["React", "PWA", "Service Workers", "TMDB API"],
    image: cineseek, 
    demoVideo: "https://www.loom.com/share/8b94e8d8e4ee4f3898f943aa55c4e121?sid=b52f828a-5897-4a6d-97dc-f460ce9986ec",
    codeLink: "https://github.com/Mugishaa77/alx-project-0x14",
    role: "Frontend"
  },  
  {
    title: "Jawabu Events",
    description: "An events booking website providing seamless service reservations and location-based listings.",
    tech: ["React.js", "Bootstrap", "HTML", "CSS"],
    image: jawabuOne,
    liveLink: "https://jawabu-kappa.vercel.app/",
    codeLink: "https://github.com/Mugishaa77/jawabu",
    role: "FullStack"
  },
  {
    title: "Darasani Hub",
    description: "A tutoring platform connecting students with qualified tutors for personalized learning experiences.",
    tech: ["React.js", "Tailwind CSS", "Bootstrap", "HTML/CSS"],
    image: DarasaniOne,
    liveLink: "https://sal-darasani.vercel.app/",
    codeLink: "https://github.com/Darasani-Hub",
    role: "Frontend"
  },
  {
    title: "Evergreen Shopping Basket",
    description: "An online shopping platform for fresh market produce with an integrated shopping cart system.",
    tech: ["React.js", "Node.js", "MongoDB", "Express.js", "JWT", "Bootstrap"],
    image: EvergreenHome,
    liveLink: "https://new-evergreen.vercel.app/",
    codeLink: "https://github.com/Mugishaa77/new-evergreen",
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
  featured?: boolean;
  role?: string;
}

const ProjectCarousel = ({ projects, isFeatured = false }: { projects: Project[]; isFeatured?: boolean }) => {
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);

  // Check if mobile on mount and resize
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Check scroll position to show/hide arrows
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
      checkScrollPosition(); // Initial check
    }
    return () => {
      if (container) {
        container.removeEventListener('scroll', checkScrollPosition);
      }
    };
  }, [projects.length]);

  const scroll = (direction: number) => {
    if (scrollContainerRef.current) {
      const scrollAmount = isMobile ? 300 : 400;
      scrollContainerRef.current.scrollLeft += direction * scrollAmount;
    }
  };

  // Responsive card sizing
  const getCardWidth = () => {
    if (isMobile) return 280;
    if (isFeatured) return 330;
    return 320;
  };

  const getImageHeight = () => {
    if (isMobile) return 140;
    if (isFeatured) return 165;
    return 160;
  };

  const getCardPadding = () => {
    if (isMobile) return '0.75rem';
    if (isFeatured) return '1.25rem';
    return '1rem';
  };

  const cardWidth = getCardWidth();
  const imageHeight = getImageHeight();
  const cardPadding = getCardPadding();

  return (
    <div style={{ position: 'relative' }}>
      {/* Left Arrow - Always visible but with conditional opacity */}
      <button
        onClick={() => scroll(-1)}
        style={{
          position: 'absolute',
          left: isMobile ? '-10px' : '-20px',
          top: '50%',
          transform: 'translateY(-50%)',
          background: '#374151',
          border: 'none',
          borderRadius: '50%',
          width: isMobile ? '40px' : '50px',
          height: isMobile ? '40px' : '50px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          cursor: 'pointer',
          zIndex: 10,
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)',
          opacity: showLeftArrow ? 1 : 0.5,
          transition: 'all 0.3s ease',
          pointerEvents: showLeftArrow ? 'auto' : 'none'
        }}
        onMouseEnter={(e) => { 
          if (showLeftArrow) {
            e.currentTarget.style.background = '#4B5563'; 
            e.currentTarget.style.transform = 'translateY(-50%) scale(1.1)';
          }
        }}
        onMouseLeave={(e) => { 
          if (showLeftArrow) {
            e.currentTarget.style.background = '#374151'; 
            e.currentTarget.style.transform = 'translateY(-50%) scale(1)';
          }
        }}
        aria-label="Scroll left"
      >
        <FaChevronLeft size={isMobile ? 16 : 18} />
      </button>

      {/* Right Arrow - Always visible but with conditional opacity */}
      <button
        onClick={() => scroll(1)}
        style={{
          position: 'absolute',
          right: isMobile ? '-10px' : '-20px',
          top: '50%',
          transform: 'translateY(-50%)',
          background: '#374151',
          border: 'none',
          borderRadius: '50%',
          width: isMobile ? '40px' : '50px',
          height: isMobile ? '40px' : '50px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          cursor: 'pointer',
          zIndex: 10,
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)',
          opacity: showRightArrow ? 1 : 0.5,
          transition: 'all 0.3s ease',
          pointerEvents: showRightArrow ? 'auto' : 'none'
        }}
        onMouseEnter={(e) => { 
          if (showRightArrow) {
            e.currentTarget.style.background = '#4B5563'; 
            e.currentTarget.style.transform = 'translateY(-50%) scale(1.1)';
          }
        }}
        onMouseLeave={(e) => { 
          if (showRightArrow) {
            e.currentTarget.style.background = '#374151'; 
            e.currentTarget.style.transform = 'translateY(-50%) scale(1)';
          }
        }}
        aria-label="Scroll right"
      >
        <FaChevronRight size={isMobile ? 16 : 18} />
      </button>

      {/* Scrollable Container */}
      <div
        ref={scrollContainerRef}
        style={{
          display: 'flex',
          gap: isMobile ? '1rem' : (isFeatured ? '2.5rem' : '2rem'),
          overflowX: 'auto',
          scrollBehavior: 'smooth',
          padding: isMobile ? '1rem 0.5rem' : '1rem',
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
          scrollSnapType: isMobile ? 'x mandatory' : 'none',
          cursor: 'grab'
        }}
        className="hide-scrollbar"
        onScroll={checkScrollPosition}
      >
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            style={{
              background: '#1F2937',
              borderRadius: '12px',
              overflow: 'hidden',
              width: `${cardWidth}px`,
              flexShrink: 0,
              transition: 'all 0.3s ease',
              scrollSnapAlign: isMobile ? 'start' : 'none',
              border: '1px solid #374151'
            }}
            whileHover={{ scale: isMobile ? 1 : 1.02 }}
          >
            {/* Project Image */}
            <div style={{ 
              height: `${imageHeight}px`,
              position: 'relative',
              overflow: 'hidden',
              background: '#374151'
            }}>
              <img 
                src={project.image} 
                alt={project.title}
                style={{ 
                  width: '100%', 
                  height: '100%', 
                  objectFit: 'contain',
                  backgroundColor: '#ffffff',
                  padding: isMobile ? '6px' : '8px'
                }}
              />
            </div>
            
            {/* Project Content */}
            <div style={{ padding: cardPadding }}>
              {/* Title and Role */}
              <div style={{ 
                display: 'flex', 
                alignItems: 'flex-start',
                justifyContent: 'space-between',
                marginBottom: '0.75rem',
                flexDirection: isMobile ? 'column' : 'row',
                gap: isMobile ? '0.5rem' : '0'
              }}>
                <h3 style={{ 
                  fontSize: isMobile ? '1.1rem' : (isFeatured ? '1.2rem' : '1.125rem'),
                  fontWeight: 'bold', 
                  color: 'white',
                  margin: 0,
                  lineHeight: '1.3'
                }}>
                  {project.title}
                </h3>
                {project.role && (
                  <span style={{
                    background: '#7C3AED',
                    padding: '0.25rem 0.5rem',
                    borderRadius: '9999px',
                    fontSize: isMobile ? '0.7rem' : '0.75rem',
                    color: 'white',
                    alignSelf: isMobile ? 'flex-start' : 'center'
                  }}>
                    {project.role}
                  </span>
                )}
              </div>
              
              {/* Description */}
              <p style={{ 
                color: '#9CA3AF', 
                marginBottom: '1rem',
                lineHeight: '1.5',
                fontSize: isMobile ? '0.8rem' : (isFeatured ? '0.95rem' : '0.875rem'),
                display: '-webkit-box',
                WebkitLineClamp: 3,
                WebkitBoxOrient: 'vertical',
                overflow: 'hidden'
              }}>
                {project.description}
              </p>
              
              {/* Tech Stack */}
              <div style={{ 
                display: 'flex', 
                flexWrap: 'wrap', 
                gap: '0.5rem',
                marginBottom: isMobile ? '1rem' : '1.5rem'
              }}>
                {project.tech.map(tech => (
                  <span key={tech} style={{
                    background: '#374151',
                    padding: isMobile ? '0.2rem 0.4rem' : (isFeatured ? '0.3rem 0.6rem' : '0.25rem 0.5rem'),
                    borderRadius: '9999px',
                    fontSize: isMobile ? '0.7rem' : (isFeatured ? '0.8rem' : '0.75rem'),
                    color: '#D1D5DB'
                  }}>
                    {tech}
                  </span>
                ))}
              </div>
              
              {/* Links */}
              <div style={{ 
                display: 'flex', 
                justifyContent: 'space-between',
                alignItems: 'center'
              }}>
                <div style={{ 
                  display: 'flex', 
                  gap: isMobile ? '0.75rem' : (isFeatured ? '1.25rem' : '1rem'),
                  flexWrap: isMobile ? 'wrap' : 'nowrap'
                }}>
                  {/* Live Link */}
                  {project.liveLink && (
                    <a 
                      href={project.liveLink} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        color: '#A78BFA',
                        textDecoration: 'none',
                        transition: 'color 0.2s ease',
                        fontSize: isMobile ? '0.8rem' : (isFeatured ? '0.95rem' : '0.875rem')
                      }}
                      onMouseEnter={(e) => { e.currentTarget.style.color = '#C4B5FD'; }}
                      onMouseLeave={(e) => { e.currentTarget.style.color = '#A78BFA'; }}
                    >
                      <FaExternalLinkAlt style={{ marginRight: '0.5rem' }} /> 
                      <span>Live</span>
                    </a>
                  )}
                  
                  {/* Demo Video */}
                  {project.demoVideo && (
                    <a 
                      href={project.demoVideo} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        color: '#A78BFA',
                        textDecoration: 'none',
                        transition: 'color 0.2s ease',
                        fontSize: isMobile ? '0.8rem' : (isFeatured ? '0.95rem' : '0.875rem')
                      }}
                      onMouseEnter={(e) => { e.currentTarget.style.color = '#C4B5FD'; }}
                      onMouseLeave={(e) => { e.currentTarget.style.color = '#A78BFA'; }}
                    >
                      <FaVideo style={{ marginRight: '0.5rem' }} /> 
                      <span>Demo</span>
                    </a>
                  )}
                  
                  {/* Code Link */}
                  <a 
                    href={project.codeLink} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      color: '#9CA3AF',
                      textDecoration: 'none',
                      transition: 'color 0.2s ease',
                      fontSize: isMobile ? '0.8rem' : (isFeatured ? '0.95rem' : '0.875rem')
                    }}
                    onMouseEnter={(e) => { e.currentTarget.style.color = 'white'; }}
                    onMouseLeave={(e) => { e.currentTarget.style.color = '#9CA3AF'; }}
                  >
                    <FaGithub style={{ marginRight: '0.5rem' }} /> 
                    <span>Code</span>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Mobile Scroll Indicator */}
      {isMobile && (
        <div style={{
          textAlign: 'center',
          marginTop: '1rem',
          color: '#6B7280',
          fontSize: '0.8rem'
        }}>
          ← Scroll or swipe to see more projects →
        </div>
      )}
    </div>
  );
};

const Projects = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
   <section
  id="projects"
  style={{
    padding: isMobile ? '3rem 1rem' : '5rem 1rem',
    background: '#111827',
  }}
>
  <div
    style={{
      maxWidth: '1200px',
      margin: '0 auto',
      padding: isMobile ? '0 0.5rem' : '0',
    }}
  >
    {/* Featured Projects */}
    <div style={{ marginBottom: isMobile ? '3rem' : '4rem' }}>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: '1rem',
          flexDirection: isMobile ? 'column' : 'row',
          gap: isMobile ? '0.5rem' : '0',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <FaStar style={{ color: '#fbbf24', marginRight: '0.5rem' }} />
          <h2
            style={{
              fontSize: isMobile ? '1.75rem' : '2.25rem',
              fontWeight: 'bold',
              textAlign: 'center',
              color: 'white',
              margin: 0,
            }}
          >
            Featured Projects
          </h2>
          <FaStar style={{ color: '#fbbf24', marginLeft: '0.5rem' }} />
        </div>
      </div>
      <p
        style={{
          color: '#9CA3AF',
          textAlign: 'center',
          marginBottom: isMobile ? '2rem' : '3rem',
          fontSize: isMobile ? '0.9rem' : '1rem',
          padding: isMobile ? '0 0.5rem' : '0',
        }}
      >
        In-depth solutions showcasing technical proficiency
      </p>

      <ProjectCarousel projects={featuredProjects} isFeatured={true} />
    </div>

    {/* WordPress & CMS Projects (NDA) */}
    <div 
      style={{ 
        marginBottom: isMobile ? '3rem' : '4rem',
        position: 'relative',
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: '1rem',
          flexDirection: isMobile ? 'column' : 'row',
          gap: isMobile ? '0.5rem' : '1rem',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <FaWordpress style={{ color: '#21759b', marginRight: '0.75rem', fontSize: '1.5rem' }} />
          <h2
            style={{
              fontSize: isMobile ? '1.75rem' : '2rem',
              fontWeight: 'bold',
              textAlign: 'center',
              color: 'white',
              margin: 0,
              background: 'linear-gradient(90deg, #21759b, #00a0d2)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            WordPress & CMS Projects
          </h2>
          <FaShieldAlt style={{ color: '#60a5fa', marginLeft: '0.75rem', fontSize: '1.5rem' }} />
        </div>
      </div>
      <p
        style={{
          color: '#9CA3AF',
          textAlign: 'center',
          marginBottom: isMobile ? '2rem' : '3rem',
          fontSize: isMobile ? '0.9rem' : '1rem',
          padding: isMobile ? '0 0.5rem' : '0',
          fontStyle: 'italic',
          maxWidth: '700px',
          margin: '0 auto 2rem auto',
          lineHeight: '1.6',
        }}
      >
        Due to client confidentiality agreements, detailed project information is protected. 
        Below is a snapshot of the work I've delivered:
      </p>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)',
          gap: isMobile ? '1.5rem' : '2rem',
          maxWidth: '1000px',
          margin: '0 auto',
        }}
      >
        {[
          {
            icon: <FaShoppingCart />,
            title: "E-Commerce Solutions",
            description: "Built responsive WooCommerce stores with custom product displays, seamless checkout processes, and integrated payment systems.",
            color: "#10b981"
          },
          {
            icon: <FaPaintBrush />,
            title: "Custom Design Implementation",
            description: "Translated Figma and Canva designs into fully functional Elementor websites, focusing on visual fidelity and user experience.",
            color: "#8b5cf6"
          },
          {
            icon: <FaBolt />,
            title: "Performance & SEO",
            description: "Optimized sites for speed and search visibility through clean code, proper structure, and mobile-first approaches.",
            color: "#f59e0b"
          },
          {
            icon: <FaCogs />,
            title: "Advanced CMS Work",
            description: "Developed PageLayer websites with modern layouts and interactive components while maintaining brand consistency.",
            color: "#3b82f6"
          }
        ].map((item, index) => (
          <div
            key={index}
            style={{
              background: 'linear-gradient(145deg, #1f2937, #111827)',
              borderRadius: '12px',
              padding: isMobile ? '1.5rem' : '2rem',
              border: '1px solid #374151',
              transition: 'all 0.3s ease',
              boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.3)',
              height: '100%',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-4px)';
              e.currentTarget.style.boxShadow = '0 10px 25px -5px rgba(0, 0, 0, 0.4)';
              e.currentTarget.style.borderColor = item.color;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.3)';
              e.currentTarget.style.borderColor = '#374151';
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
              <div style={{
                background: `rgba(${parseInt(item.color.slice(1, 3), 16)}, ${parseInt(item.color.slice(3, 5), 16)}, ${parseInt(item.color.slice(5, 7), 16)}, 0.1)`,
                borderRadius: '10px',
                padding: '0.75rem',
                marginRight: '1rem',
                border: `1px solid ${item.color}40`
              }}>
                <div style={{ color: item.color, fontSize: '1.25rem' }}>
                  {item.icon}
                </div>
              </div>
              <h3 style={{
                color: 'white',
                fontSize: isMobile ? '1.1rem' : '1.25rem',
                fontWeight: '600',
                margin: 0
              }}>
                {item.title}
              </h3>
            </div>
            <p style={{
              color: '#D1D5DB',
              lineHeight: '1.6',
              fontSize: isMobile ? '0.9rem' : '1rem',
              margin: 0
            }}>
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </div>

    {/* Additional Projects */}
    <div>
      <h2
        style={{
          fontSize: isMobile ? '1.5rem' : '1.875rem',
          fontWeight: 'bold',
          textAlign: 'center',
          color: 'white',
          marginBottom: '1rem',
        }}
      >
        Other Projects
      </h2>
      <p
        style={{
          color: '#9CA3AF',
          textAlign: 'center',
          marginBottom: isMobile ? '2rem' : '3rem',
          fontSize: isMobile ? '0.9rem' : '1rem',
          padding: isMobile ? '0 0.5rem' : '0',
        }}
      >
        Additional projects demonstrating diverse skills
      </p>

      <ProjectCarousel projects={additionalProjects} isFeatured={false} />
    </div>
  </div>

  <style>{`
    .hide-scrollbar::-webkit-scrollbar {
      display: none;
    }
    
    @media (max-width: 480px) {
      #projects {
        padding-left: 0.5rem;
        padding-right: 0.5rem;
      }
    }
    
    @media (max-width: 360px) {
      #projects {
        padding-left: 0.25rem;
        padding-right: 0.25rem;
      }
    }
  `}</style>
</section>
  );
};

export default Projects;
