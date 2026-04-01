import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaMedium } from 'react-icons/fa';

const Hero = () => {
  const name = "Sally Wanga";

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center px-6 md:px-12 py-20 relative overflow-hidden"
      style={{
        background: `
          radial-gradient(circle at 20% 20%, rgba(255, 182, 193, 0.25), transparent 50%),
          radial-gradient(circle at 80% 80%, rgba(173, 216, 230, 0.25), transparent 50%),
          radial-gradient(circle at 50% 10%, rgba(255, 255, 255, 0.4), transparent 40%),
          linear-gradient(180deg, #fdfaf7 0%, #f6efe8 60%, #f3ebe3 100%)
        `,
      paddingLeft: '3rem', // To align with the accent line
      }}
    >
      {/* Glass overlay */}
      <div
        aria-hidden
        style={{
          position: 'absolute',
          inset: 0,
          backdropFilter: 'blur(40px) saturate(160%)',
          background: 'rgba(255,255,255,0.12)',
          
        }}
      />

      {/* Light streak */}
      <div
        aria-hidden
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'linear-gradient(120deg, rgba(255,255,255,0.5), transparent 40%)',
          opacity: 0.5,
        }}
      />

      {/* IRIDESCENT BUBBLES */}
      {[...Array(7)].map((_, i) => (
        <motion.div
          key={i}
          initial={{ y: 0, opacity: 0 }}
          animate={{
            y: [-30, 30, -30],
            x: [-10, 10, -10],
            opacity: [0.3, 0.7, 0.3],
          }}
          transition={{
            duration: 8 + i,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          style={{
            position: 'absolute',
            top: `${15 + i * 10}%`,
            left: `${10 + i * 12}%`,
            width: `${70 + i * 12}px`,
            height: `${70 + i * 12}px`,
            borderRadius: '50%',

            // SOAP BUBBLE EFFECT
            background: `
              radial-gradient(circle at 30% 30%, rgba(255,255,255,0.9), transparent 40%),
              radial-gradient(circle at 70% 70%, rgba(255,192,203,0.3), transparent 60%),
              radial-gradient(circle at 40% 80%, rgba(173,216,230,0.3), transparent 60%)
            `,
            backdropFilter: 'blur(10px)',

            boxShadow: `
              inset 0 0 18px rgba(255,255,255,0.7),
              inset -6px -6px 20px rgba(173,216,230,0.3),
              inset 6px 6px 20px rgba(255,182,193,0.3),
              0 10px 40px rgba(134,117,153,0.15)
            `,
          }}
        />
      ))}

      {/* Accent line */}
      <motion.div
        initial={{ scaleY: 0, opacity: 0 }}
        animate={{ scaleY: 1, opacity: 0.4 }}
        transition={{ duration: 0.8 }}
        style={{
    position: 'absolute',
    left: '6px',
    top: '10%',
    height: '80%',
    width: '3px',
    borderRadius: '3px',
    background: '#E18298',
    opacity: 0.5,
    marginLeft: '2rem', // To align with the accent line
  }}
      />

      <div className="max-w-3xl w-full relative z-10 pl-6">

        {/* Tag */}
        <motion.div
          initial={{ opacity: 0, x: -12 }}
          animate={{ opacity: 1, x: 0 }}
          style={{
            marginBottom: '16px',
            padding: '4px 14px',
            borderRadius: '999px',
            border: '1px solid #E18298',
            background: 'rgba(255,255,255,0.3)',
            backdropFilter: 'blur(10px)',
            display: 'inline-flex',
            gap: '8px',
            marginLeft: '2rem', // To align with the accent line
          }}
        >
          <span style={{
            width: '6px',
            height: '6px',
            borderRadius: '50%',
            background: '#ffb6c1'
          }} />
          <span style={{
            fontSize: '11px',
            letterSpacing: '0.12em',
            color: '#8a7ca8'
          }}>
            Available for work
          </span>
        </motion.div>

        {/* KINETIC NAME */}
        <motion.h1
          className="text-5xl md:text-5xl font-light mb-2 ml-4"
          style={{ color: '#2C4A4A', display: 'flex', flexWrap: 'wrap' }}
        >
          {name.split("").map((char, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: i * 0.05,
                type: 'spring',
                stiffness: 100
              }}
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </motion.h1>

        {/* Role */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-xl md:text-xl font-medium mb-4 ml-4"
          style={{ color: '#6F8F8E', textTransform: 'uppercase'}}
        >
          Software Engineer
        </motion.p>

        {/* DESCRIPTION (word-by-word reveal) */}
        <motion.p
          className="text-lg md:text-lg max-w-xl mb-6"
          style={{
            borderLeft: '3px solid #e6d4be',
            paddingLeft: '16px',
            color: '#4A6A68',
            lineHeight: 1.6,
          }}
        >
          {"Full-stack web applications with Django, React, and REST APIs. Focused on scalable backends, clean frontends, and systems that just work."
            .split(" ")
            .map((word, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 + i * 0.04 }}
                style={{ marginRight: '6px' }}
              >
                {word}
              </motion.span>
            ))}
        </motion.p>

        {/* Socials */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="flex gap-4 mb-8 ml-8"
        >
          {[FaGithub, FaLinkedin, FaMedium].map((Icon, i) => (
            <a
              key={i}
              href="#"
              style={{
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                background: '#fff',
                backdropFilter: 'blur(12px)',
                border: '1px solid #E18298',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginLeft: '10px',
              }}
            >
              <Icon size={18} />
            </a>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.a
          href="#projects"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          style={{
            padding: '12px 28px',
            borderRadius: '999px',
            background: '#fff',
            backdropFilter: 'blur(12px)',
            border: '1px solid #679F9E',
            color: '#679F9E',
            display: 'inline-block',
            marginLeft: '12px!important',
            fontWeight: 500,
          }}
        >
          View Work
        </motion.a>
      </div>
    </section>
  );
};

export default Hero;