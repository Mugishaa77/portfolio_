import { motion } from 'framer-motion';
import { SiReact, SiTypescript, SiReactrouter, SiTailwindcss } from 'react-icons/si';

const skills = [
  { icon: SiReact, name: 'React', level: 95 },
  { icon: SiTypescript, name: 'TypeScript', level: 90 },
  { icon: SiReactrouter, name: 'React Native', level: 85 },
  { icon: SiTailwindcss, name: 'Tailwind CSS', level: 88 },
];

const Skills = () => {
  return (
    <section className="py-20 px-4 bg-gray-800">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">Technical Expertise</h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <skill.icon className="text-4xl mx-auto mb-4 text-purple-400" />
              <h3 className="font-semibold mb-2">{skill.name}</h3>
              <div className="w-full bg-gray-700 rounded-full h-2">
                <div 
                  className="bg-purple-500 h-2 rounded-full transition-all duration-1000"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;