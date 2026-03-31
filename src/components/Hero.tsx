import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaMedium } from 'react-icons/fa';

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center px-6 md:px-12 py-20 bg-white">
      <div className="max-w-3xl w-full">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-light text-azur mb-2"
        >
          Sally Wanga
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-viridian text-lg md:text-xl font-medium mb-4"
        >
          Software Engineer
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-gray-700 text-base md:text-lg leading-relaxed max-w-xl mb-6"
        >
          Full‑stack web applications with Django, React, and REST APIs. Focused on scalable backends, clean frontends, and systems that just work.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex gap-4 mb-8"
        >
          <a href="https://github.com/Mugishaa77" target="_blank" rel="noopener noreferrer" className="text-heather hover:text-viridian transition">
            <FaGithub size={20} />
          </a>
          <a href="https://www.linkedin.com/in/swugisha/" target="_blank" rel="noopener noreferrer" className="text-heather hover:text-viridian transition">
            <FaLinkedin size={20} />
          </a>
          <a href="https://swugisha.medium.com/" target="_blank" rel="noopener noreferrer" className="text-heather hover:text-viridian transition">
            <FaMedium size={20} />
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <a
            href="#projects"
            className="inline-block px-6 py-3 border border-viridian/40 rounded-full text-viridian hover:bg-viridian/5 transition"
          >
            View Work
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;