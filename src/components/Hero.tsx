import { motion } from 'framer-motion';
import type { CSSProperties } from 'react';
import { FaGithub, FaLinkedin, FaMedium, FaArrowDown } from 'react-icons/fa';

const Hero = () => {
  const styles: {
    section: CSSProperties;
    container: CSSProperties;
    h1: CSSProperties;
    subtitle: CSSProperties;
    description: CSSProperties;
    tagline: CSSProperties;
    socialContainer: CSSProperties;
    socialLink: CSSProperties;
    button: CSSProperties;
    scrollIndicator: CSSProperties;
  } = {
    section: {
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#0f172a',
      padding: '2rem 1.5rem',
    },
    container: {
      textAlign: 'center',
      maxWidth: '800px',
      width: '100%',
      margin: '0 auto',
    },
    h1: {
      fontSize: 'clamp(2.5rem, 8vw, 3.5rem)',
      fontWeight: 'bold',
      marginBottom: '1rem',
      color: '#f8fafc',
      letterSpacing: '-0.025em',
    },
    subtitle: {
      fontSize: 'clamp(1.5rem, 5vw, 2rem)',
      color: '#60a5fa',
      fontWeight: '600',
      marginBottom: '1.5rem',
    },
    description: {
      fontSize: 'clamp(1rem, 3vw, 1.125rem)',
      color: '#cbd5e1',
      lineHeight: '1.7',
      maxWidth: '600px',
      margin: '0 auto 2.5rem auto',
    },
    tagline: {
      fontSize: 'clamp(1rem, 3vw, 1.125rem)',
      color: '#94a3b8',
      marginBottom: '3rem',
      fontWeight: '500',
    },
    socialContainer: {
      display: 'flex',
      justifyContent: 'center',
      gap: '1.5rem',
      marginBottom: '3rem',
    },
    socialLink: {
      fontSize: '1.5rem',
      color: '#94a3b8',
      transition: 'all 0.3s ease',
      cursor: 'pointer',
    },
    button: {
      backgroundColor: 'transparent',
      color: '#60a5fa',
      padding: '1rem 2.5rem',
      borderRadius: '8px',
      fontWeight: '600',
      border: '2px solid rgba(96, 165, 250, 0.3)',
      textDecoration: 'none',
      display: 'inline-flex',
      alignItems: 'center',
      gap: '0.75rem',
      transition: 'all 0.3s ease',
      cursor: 'pointer',
      fontSize: '1.125rem',
    },
    scrollIndicator: {
      position: 'absolute',
      bottom: '2rem',
      left: '50%',
      transform: 'translateX(-50%)',
      color: '#64748b',
      fontSize: '1.5rem',
      animation: 'bounce 2s infinite',
    },
  };

  const handleSocialHover = (e: { currentTarget: { style: { color: string; transform: string; }; }; }, color: string) => {
    e.currentTarget.style.color = color;
    e.currentTarget.style.transform = 'translateY(-3px)';
  };

  const handleSocialLeave = (e: { currentTarget: { style: { color: string; transform: string; }; }; }) => {
    e.currentTarget.style.color = '#94a3b8';
    e.currentTarget.style.transform = 'translateY(0)';
  };

  const handleButtonHover = (e: { currentTarget: { style: { backgroundColor: string; borderColor: string; transform: string; color: string; }; }; }) => {
    e.currentTarget.style.backgroundColor = 'rgba(96, 165, 250, 0.1)';
    e.currentTarget.style.borderColor = 'rgba(96, 165, 250, 0.6)';
    e.currentTarget.style.transform = 'translateY(-2px)';
    e.currentTarget.style.color = '#93c5fd';
  };

  const handleButtonLeave = (e: { currentTarget: { style: { backgroundColor: string; borderColor: string; transform: string; color: string; }; }; }) => {
    e.currentTarget.style.backgroundColor = 'transparent';
    e.currentTarget.style.borderColor = 'rgba(96, 165, 250, 0.3)';
    e.currentTarget.style.transform = 'translateY(0)';
    e.currentTarget.style.color = '#60a5fa';
  };

  return (
    <section style={styles.section}>
      <div style={styles.container}>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          style={styles.h1}
        >
          Sally Wanga
        </motion.h1>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <div style={styles.subtitle}>
            Frontend Developer & SEO Specialist
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          style={styles.description}
        >
          Building performant, search-optimized web applications with React and WordPress. 
          I combine modern development practices with technical SEO to create solutions 
          that drive both user engagement and business growth.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          style={styles.tagline}
        >
          React • TypeScript • WordPress • Technical SEO
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          style={styles.socialContainer}
        >
          <a 
            href="https://github.com/Mugishaa77" 
            target='_blank' 
            rel='noopener noreferrer'
            style={styles.socialLink}
            onMouseEnter={(e) => handleSocialHover(e, '#f1f5f9')}
            onMouseLeave={handleSocialLeave}
          >
            <FaGithub />
          </a>
          <a 
            href="https://www.linkedin.com/in/swugisha/" 
            target='_blank' 
            rel='noopener noreferrer'
            style={styles.socialLink}
            onMouseEnter={(e) => handleSocialHover(e, '#0ea5e9')}
            onMouseLeave={handleSocialLeave}
          >
            <FaLinkedin />
          </a>
          <a 
            href="https://swugisha.medium.com/" 
            target='_blank' 
            rel='noopener noreferrer'
            style={styles.socialLink}
            onMouseEnter={(e) => handleSocialHover(e, '#f8fafc')}
            onMouseLeave={handleSocialLeave}
          >
            <FaMedium />
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <a 
            href="#projects"
            style={styles.button}
            onMouseEnter={handleButtonHover}
            onMouseLeave={handleButtonLeave}
          >
            <span>View My Work</span>
            <FaArrowDown style={{ transition: 'transform 0.3s ease' }} />
          </a>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          style={styles.scrollIndicator}
        >
          <FaArrowDown />
        </motion.div>
      </div>

      {/* Add CSS animation */}
      <style>{`
        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% {
            transform: translateX(-50%) translateY(0);
          }
          40% {
            transform: translateX(-50%) translateY(-10px);
          }
          60% {
            transform: translateX(-50%) translateY(-5px);
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;