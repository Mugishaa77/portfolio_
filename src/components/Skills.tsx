import { motion } from 'framer-motion';
import {
  SiDjango,
  SiPython,
  SiReact,
  SiTypescript,
  SiTailwindcss,
  SiNextdotjs,
  SiPostgresql,
  SiDocker,
  SiGit,
  SiLinux,
} from 'react-icons/si';
import { FaServer, FaDatabase, FaKey } from 'react-icons/fa';

const skills = [
  // Backend & APIs
  { icon: SiDjango, name: 'Django', level: 88, category: 'backend' },
  { icon: SiPython, name: 'Python', level: 85, category: 'backend' },
  { icon: FaServer, name: 'REST APIs', level: 86, category: 'backend' },
  { icon: SiPostgresql, name: 'PostgreSQL', level: 84, category: 'backend' },
  { icon: SiDocker, name: 'Docker', level: 80, category: 'backend' },

  // Frontend
  { icon: SiReact, name: 'React', level: 90, category: 'frontend' },
  { icon: SiTypescript, name: 'TypeScript', level: 88, category: 'frontend' },
  { icon: SiTailwindcss, name: 'Tailwind CSS', level: 92, category: 'frontend' },
  { icon: SiNextdotjs, name: 'Next.js', level: 85, category: 'frontend' },

  // DevOps & Tools
  { icon: SiGit, name: 'Git/GitHub', level: 88, category: 'devops' },
  { icon: SiLinux, name: 'Linux', level: 82, category: 'devops' },
  { icon: FaKey, name: 'JWT Auth', level: 84, category: 'devops' },
  { icon: FaDatabase, name: 'MySQL', level: 80, category: 'devops' },
];

const Skills = () => {
  const categories = {
    backend: skills.filter((s) => s.category === 'backend'),
    frontend: skills.filter((s) => s.category === 'frontend'),
    devops: skills.filter((s) => s.category === 'devops'),
  };

  return (
    <section className="py-20 px-4 bg-gray-800">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-indigo-400 to-teal-400 bg-clip-text text-transparent">
            Technical Skills
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Full‑stack expertise spanning backend architecture, modern frontends, and deployment workflows
          </p>
        </motion.div>

        {/* Backend & APIs */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mb-12"
        >
          <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2 text-white">
            <span className="w-3 h-3 bg-indigo-500 rounded-full"></span>
            Backend & APIs
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {categories.backend.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="text-center p-4 bg-gray-900/50 rounded-xl border border-gray-700 hover:border-indigo-500/30 transition-all"
              >
                <skill.icon className="text-4xl mx-auto mb-4 text-indigo-400" />
                <h3 className="font-semibold mb-2 text-white">{skill.name}</h3>
                <div className="w-full bg-gray-700 rounded-full h-2.5">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, delay: index * 0.1, ease: 'easeOut' }}
                    className="bg-gradient-to-r from-indigo-500 to-purple-500 h-2.5 rounded-full shadow-lg shadow-indigo-500/50"
                  ></motion.div>
                </div>
                <span className="text-sm text-gray-300 mt-2 block">{skill.level}%</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Frontend */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mb-12"
        >
          <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2 text-white">
            <span className="w-3 h-3 bg-teal-500 rounded-full"></span>
            Frontend
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {categories.frontend.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="text-center p-4 bg-gray-900/50 rounded-xl border border-gray-700 hover:border-teal-500/30 transition-all"
              >
                <skill.icon className="text-4xl mx-auto mb-4 text-teal-400" />
                <h3 className="font-semibold mb-2 text-white">{skill.name}</h3>
                <div className="w-full bg-gray-700 rounded-full h-2.5">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, delay: 0.5 + index * 0.1, ease: 'easeOut' }}
                    className="bg-gradient-to-r from-teal-500 to-cyan-400 h-2.5 rounded-full shadow-lg shadow-teal-500/50"
                  ></motion.div>
                </div>
                <span className="text-sm text-gray-300 mt-2 block">{skill.level}%</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* DevOps & Tools */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2 text-white">
            <span className="w-3 h-3 bg-amber-500 rounded-full"></span>
            DevOps & Tools
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {categories.devops.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="text-center p-4 bg-gray-900/50 rounded-xl border border-gray-700 hover:border-amber-500/30 transition-all"
              >
                <skill.icon className="text-4xl mx-auto mb-4 text-amber-400" />
                <h3 className="font-semibold mb-2 text-white">{skill.name}</h3>
                <div className="w-full bg-gray-700 rounded-full h-2.5">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, delay: 0.7 + index * 0.1, ease: 'easeOut' }}
                    className="bg-gradient-to-r from-amber-500 to-yellow-400 h-2.5 rounded-full shadow-lg shadow-amber-500/50"
                  ></motion.div>
                </div>
                <span className="text-sm text-gray-300 mt-2 block">{skill.level}%</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-12 text-center"
        >
          <div className="inline-block p-4 bg-gradient-to-r from-indigo-500/10 via-teal-500/10 to-amber-500/10 rounded-xl border border-gray-700">
            <p className="text-gray-300">
              <span className="font-semibold text-white">Full‑stack mindset:</span> I design scalable backends with Django, 
              build responsive frontends with React, and manage the entire development lifecycle with modern tools.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;