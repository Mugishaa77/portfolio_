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
import { FaServer, FaDatabase, FaKey, FaUsers } from 'react-icons/fa';

const skills = [
  { icon: SiDjango, name: 'Django', category: 'backend' },
  { icon: SiPython, name: 'Python', category: 'backend' },
  { icon: FaServer, name: 'REST APIs', category: 'backend' },
  { icon: SiPostgresql, name: 'PostgreSQL', category: 'backend' },
  { icon: SiDocker, name: 'Docker', category: 'backend' },
  { icon: SiReact, name: 'React', category: 'frontend' },
  { icon: SiTypescript, name: 'TypeScript', category: 'frontend' },
  { icon: SiTailwindcss, name: 'Tailwind', category: 'frontend' },
  { icon: SiNextdotjs, name: 'Next.js', category: 'frontend' },
  { icon: SiGit, name: 'Git/GitHub', category: 'devops' },
  { icon: SiLinux, name: 'Linux', category: 'devops' },
  { icon: FaKey, name: 'JWT Auth', category: 'devops' },
  { icon: FaDatabase, name: 'MySQL', category: 'devops' },
  { icon: FaUsers, name: 'Agile', category: 'devops' },
];

const Skills = () => {
  const groupedSkills = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) acc[skill.category] = [];
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<string, typeof skills>);

  return (
    <section id="skills" className="py-20 px-6 md:px-12 bg-sandstone">
      <div className="max-w-4xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-light text-azur mb-3">Tech Stack</h2>
          <p className="text-gray-600">Tools and technologies I work with daily</p>
        </motion.div>

        <div className="space-y-10">
          {Object.entries(groupedSkills).map(([category, items]) => (
            <div key={category}>
              <div className="flex items-center gap-2 mb-4">
                <span className="w-2 h-2 bg-viridian rounded-full"></span>
                <h3 className="text-sm font-medium uppercase tracking-wide text-heather">
                  {category === 'backend' && 'Backend & APIs'}
                  {category === 'frontend' && 'Frontend'}
                  {category === 'devops' && 'DevOps & Tools'}
                </h3>
              </div>

              <div className="overflow-x-auto scrollbar-hide pb-4 -mx-2 px-2">
                <div className="flex gap-3 md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:overflow-visible">
                  {items.map((skill, idx) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: idx * 0.03 }}
                      whileHover={{ scale: 1.02 }}
                      className="flex-shrink-0 w-28 md:w-auto"
                    >
                      <div className="bg-white/80 backdrop-blur-sm rounded-xl border border-heather/20 p-3 text-center transition hover:border-viridian/30 hover:bg-white">
                        <skill.icon className="text-3xl mx-auto mb-2 text-viridian" />
                        <span className="text-gray-700 text-xs font-medium block">
                          {skill.name}
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-12"
        >
          <div className="inline-flex items-center gap-2 px-5 py-2 bg-white/80 rounded-full border border-heather/20 shadow-sm">
            <span className="text-candy text-sm">⚡</span>
            <p className="text-gray-600 text-xs">
              Full‑stack engineer • Django + React • Agile practitioner
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;