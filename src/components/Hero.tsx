import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaMedium } from 'react-icons/fa';

const Hero = () => {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center px-6 md:px-12 py-20 relative overflow-hidden"
      style={{ background: 'transparent' }}
    >
      {/* Main glass panel (translucent & blurred) */}
      <div
        aria-hidden
        style={{
          position: 'absolute',
          inset: 0,
          background: 'rgba(246, 246, 244, 0.65)',
          backdropFilter: 'blur(10px)',
          WebkitBackdropFilter: 'blur(10px)',
          zIndex: 0,
        }}
      />

      {/* Baby pink water ripples – soft, diffused, moving gently */}
      <div
        aria-hidden
        style={{
          position: 'absolute',
          inset: 0,
          background: `radial-gradient(circle at 30% 40%, rgba(184, 114, 119, 0.18) 0%, transparent 60%),
                       radial-gradient(circle at 70% 65%, rgba(184, 114, 119, 0.12) 0%, transparent 65%),
                       radial-gradient(circle at 45% 20%, rgba(184, 114, 119, 0.1) 0%, transparent 70%)`,
          filter: 'blur(30px)',
          animation: 'softRipple 18s ease-in-out infinite alternate',
          mixBlendMode: 'normal',
          pointerEvents: 'none',
          zIndex: 1,
        }}
      />

      {/* Delicate water lines – static but add texture */}
      <div
        aria-hidden
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `repeating-linear-gradient(
            to right,
            rgba(184, 114, 119, 0.08) 0px,
            rgba(184, 114, 119, 0.08) 1px,
            transparent 1px,
            transparent 100px
          )`,
          backgroundSize: '100px 100%',
          pointerEvents: 'none',
          zIndex: 1,
        }}
      />
      <div
        aria-hidden
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `repeating-linear-gradient(
            to bottom,
            rgba(184, 114, 119, 0.05) 0px,
            rgba(184, 114, 119, 0.05) 1px,
            transparent 1px,
            transparent 100px
          )`,
          backgroundSize: '100% 100px',
          pointerEvents: 'none',
          zIndex: 1,
        }}
      />

      {/* Tiny sparkling droplets (static) */}
      <div
        aria-hidden
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `radial-gradient(circle at 15% 45%, rgba(184, 114, 119, 0.15) 1px, transparent 1px),
                            radial-gradient(circle at 85% 70%, rgba(184, 114, 119, 0.12) 1px, transparent 1px)`,
          backgroundSize: '60px 60px, 80px 80px',
          backgroundPosition: '0 0, 30px 30px',
          opacity: 0.7,
          pointerEvents: 'none',
          zIndex: 1,
        }}
      />

      {/* Thin vertical accent line (pink) */}
      <motion.div
        initial={{ scaleY: 0, opacity: 0 }}
        animate={{ scaleY: 1, opacity: 0.4 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        style={{
          position: 'absolute',
          left: '2.5rem',
          top: '15%',
          height: '60%',
          width: '2px',
          background: 'linear-gradient(to bottom, #B87277, #B87277, #B87277)',
          borderRadius: '2px',
          transformOrigin: 'top',
          zIndex: 2,
        }}
      />

      {/* Content container – no extra background, relies on glass behind */}
      <div
        className="max-w-3xl w-full relative z-10"
        style={{
          paddingLeft: '1.5rem',
        }}
      >
        {/* Tag */}
        <motion.div
          initial={{ opacity: 0, x: -12 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.0, duration: 0.5 }}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
            marginBottom: '16px',
            padding: '4px 12px',
            borderRadius: '999px',
            border: '1px solid rgba(184, 114, 119, 0.5)',
            background: 'rgba(246, 246, 244, 0.4)',
            backdropFilter: 'blur(4px)',
          }}
        >
          <span
            style={{
              width: '6px',
              height: '6px',
              borderRadius: '50%',
              background: '#B87277',
              display: 'inline-block',
            }}
          />
          <span
            style={{
              fontSize: '11px',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: '#7E5C5F',
              fontWeight: 500,
            }}
          >
            Available for work
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-5xl font-light mb-2"
          style={{
            lineHeight: 1.15,
            color: '#2C4A4A',
          }}
        >
          Sally Wanga
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-lg md:text-xl font-medium mb-4"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            color: '#6F8F8E',
          }}
        >
          <span
            style={{
              display: 'inline-block',
              width: '28px',
              height: '2px',
              background: '#B87277',
              borderRadius: '2px',
              flexShrink: 0,
            }}
          />
          Software Engineer
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-base md:text-lg leading-relaxed max-w-xl mb-6"
          style={{
            borderLeft: '3px solid rgba(184, 114, 119, 0.6)',
            paddingLeft: '16px',
            color: '#4A6A68',
          }}
        >
          Full‑stack web applications with Django, React, and REST APIs. Focused on scalable backends, clean frontends, and systems that just work.
        </motion.p>

        {/* Social icons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="flex gap-4 mb-8"
        >
          {[
            { href: 'https://github.com/Mugishaa77', icon: <FaGithub size={20} />, label: 'GitHub' },
            { href: 'https://www.linkedin.com/in/swugisha/', icon: <FaLinkedin size={20} />, label: 'LinkedIn' },
            { href: 'https://swugisha.medium.com/', icon: <FaMedium size={20} />, label: 'Medium' },
          ].map(({ href, icon, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '38px',
                height: '38px',
                borderRadius: '50%',
                border: '1.5px solid rgba(184, 114, 119, 0.5)',
                color: '#7E5C5F',
                transition: 'all 0.2s ease',
                background: 'rgba(246, 246, 244, 0.3)',
                backdropFilter: 'blur(4px)',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background = '#B87277';
                e.currentTarget.style.borderColor = '#B87277';
                e.currentTarget.style.color = '#F6F6F4';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = 'rgba(246, 246, 244, 0.3)';
                e.currentTarget.style.borderColor = 'rgba(184, 114, 119, 0.5)';
                e.currentTarget.style.color = '#7E5C5F';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              {icon}
            </a>
          ))}
        </motion.div>

        {/* CTA button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <a
            href="#projects"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              padding: '12px 28px',
              borderRadius: '999px',
              border: '1.5px solid #B87277',
              color: '#B87277',
              fontSize: '15px',
              fontWeight: 500,
              textDecoration: 'none',
              transition: 'all 0.25s ease',
              background: 'rgba(246, 246, 244, 0.3)',
              backdropFilter: 'blur(4px)',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.background = '#B87277';
              e.currentTarget.style.color = '#F6F6F4';
              e.currentTarget.style.boxShadow = '0 4px 12px rgba(184, 114, 119, 0.3)';
              e.currentTarget.style.transform = 'translateY(-1px)';
              e.currentTarget.style.borderColor = '#B87277';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = 'rgba(246, 246, 244, 0.3)';
              e.currentTarget.style.color = '#B87277';
              e.currentTarget.style.boxShadow = 'none';
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.borderColor = '#B87277';
            }}
          >
            View Work
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" style={{ transition: 'transform 0.2s' }}>
              <path d="M2 7h10M7 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </motion.div>
      </div>

      {/* Animation keyframes (very gentle) */}
      <style>{`
        @keyframes softRipple {
          0% {
            transform: scale(1);
            opacity: 0.6;
          }
          100% {
            transform: scale(1.03);
            opacity: 0.9;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;