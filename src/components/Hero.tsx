import { motion } from 'framer-motion';
import type { CSSProperties } from 'react';
import { FaGithub, FaLinkedin, FaMedium } from 'react-icons/fa';

const Hero = () => {
  const styles: {
    section: CSSProperties;
    container: CSSProperties;
    h1: CSSProperties;
    subtitle: CSSProperties;
    techStack: CSSProperties;
    socialContainer: CSSProperties;
    socialLink: CSSProperties;
    button: CSSProperties;
  } = {
    section: {
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'linear-gradient(to bottom right, #0f172a, #1e293b, #134e4a)',
    },
    container: {
      textAlign: 'center',
      padding: '0 1rem',
    },
    h1: {
      fontSize: 'clamp(3rem, 10vw, 4.5rem)',
      fontWeight: 'bold',
      marginBottom: '1.5rem',
      background: 'linear-gradient(to right, #2dd4bf, #67e8f9)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text',
    },
    subtitle: {
      fontSize: 'clamp(1.25rem, 4vw, 1.5rem)',
      color: '#d1d5db',
      marginBottom: '2rem',
    },
    techStack: {
      display: 'block',
      color: '#5eead4',
      fontWeight: '500',
      marginTop: '0.5rem',
    },
    socialContainer: {
      display: 'flex',
      justifyContent: 'center',
      gap: '3rem',
      marginBottom: '2rem',
    },
    socialLink: {
      fontSize: '1.875rem',
      color: '#d1d5db',
      transition: 'all 0.3s ease',
      cursor: 'pointer',
    },
    button: {
      backgroundColor: '#0d9488',
      color: 'white',
      padding: '0.75rem 2rem',
      borderRadius: '0.5rem',
      fontWeight: '600',
      border: '2px solid #5eead4',
      textDecoration: 'none',
      display: 'inline-block',
      transition: 'all 0.3s ease',
      cursor: 'pointer',
    },
  };

  const handleSocialHover = (e: { currentTarget: { style: { color: string; transform: string; }; }; }) => {
    e.currentTarget.style.color = '#5eead4';
    e.currentTarget.style.transform = 'scale(1.25)';
  };

  const handleSocialLeave = (e: { currentTarget: { style: { color: string; transform: string; }; }; }) => {
    e.currentTarget.style.color = '#d1d5db';
    e.currentTarget.style.transform = 'scale(1)';
  };

  const handleButtonHover = (e: { currentTarget: { style: { backgroundColor: string; borderColor: string; boxShadow: string; transform: string; }; }; }) => {
    e.currentTarget.style.backgroundColor = '#14b8a6';
    e.currentTarget.style.borderColor = '#99f6e4';
    e.currentTarget.style.boxShadow = '0 10px 15px -3px rgba(20, 184, 166, 0.5)';
    e.currentTarget.style.transform = 'scale(1.05)';
  };

  const handleButtonLeave = (e: { currentTarget: { style: { backgroundColor: string; borderColor: string; boxShadow: string; transform: string; }; }; }) => {
    e.currentTarget.style.backgroundColor = '#0d9488';
    e.currentTarget.style.borderColor = '#5eead4';
    e.currentTarget.style.boxShadow = 'none';
    e.currentTarget.style.transform = 'scale(1)';
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
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          style={styles.subtitle}
        >
          Frontend Engineer
          <span style={styles.techStack}>React • TypeScript • React Native</span>
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          style={styles.socialContainer}
        >
          <a 
            href="https://github.com/Mugishaa77" 
            target='_blank' 
            rel='noopener noreferrer'
            style={styles.socialLink}
            onMouseEnter={handleSocialHover}
            onMouseLeave={handleSocialLeave}
          >
            <FaGithub />
          </a>
          <a 
            href="https://www.linkedin.com/in/swugisha/" 
            target='_blank' 
            rel='noopener noreferrer'
            style={styles.socialLink}
            onMouseEnter={handleSocialHover}
            onMouseLeave={handleSocialLeave}
          >
            <FaLinkedin />
          </a>
          <a 
            href="https://swugisha.medium.com/" 
            target='_blank' 
            rel='noopener noreferrer'
            style={styles.socialLink}
            onMouseEnter={handleSocialHover}
            onMouseLeave={handleSocialLeave}
          >
            <FaMedium />
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <a 
            href="#projects"
            style={styles.button}
            onMouseEnter={handleButtonHover}
            onMouseLeave={handleButtonLeave}
          >
            View My Work ↓
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;