import { motion } from 'framer-motion';
import { 
  SiReact, 
  SiTypescript, 
  SiReactrouter, 
  SiTailwindcss,
  SiWordpress,
  SiGoogle,
  SiNextdotjs,
  SiFigma 
} from 'react-icons/si';
import { FaSearch, FaMobileAlt, FaChartLine } from 'react-icons/fa';

const skills = [
  // Frontend & Development
  { icon: SiReact, name: 'React', level: 95, category: 'development' },
  { icon: SiTypescript, name: 'TypeScript', level: 90, category: 'development' },
  { icon: SiNextdotjs, name: 'Next.js', level: 88, category: 'development' },
  { icon: SiTailwindcss, name: 'Tailwind CSS', level: 88, category: 'development' },
  { icon: SiReactrouter, name: 'React Native', level: 85, category: 'development' },
  { icon: SiFigma, name: 'Figma to Code', level: 92, category: 'development' },
  
  // WordPress & CMS
  { icon: SiWordpress, name: 'WordPress', level: 90, category: 'cms' },
  
  // SEO & Analytics
  { icon: SiGoogle, name: 'Technical SEO', level: 88, category: 'seo' },
  { icon: FaSearch, name: 'On-Page SEO', level: 85, category: 'seo' },
  { icon: FaMobileAlt, name: 'Core Web Vitals', level: 87, category: 'seo' },
  { icon: FaChartLine, name: 'SEO Analytics', level: 86, category: 'seo' },
];

const Skills = () => {
  // Group skills by category for better organization
  const categories = {
    development: skills.filter(skill => skill.category === 'development'),
    cms: skills.filter(skill => skill.category === 'cms'),
    seo: skills.filter(skill => skill.category === 'seo'),
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
          <h2 className="text-4xl text-white font-bold mb-4 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            Technical Expertise
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            A balanced skillset combining modern web development with strategic SEO optimization
          </p>
        </motion.div>

        {/* Development Skills */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mb-12"
        >
          <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2 text-white">
            <span className="w-3 h-3 bg-purple-500 rounded-full"></span>
            Frontend Development
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {categories.development.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="text-center p-4 bg-gray-900/50 rounded-xl border border-gray-700 hover:border-purple-500/30 transition-all"
              >
                <skill.icon className="text-4xl mx-auto mb-4 text-purple-400" />
                <h3 className="font-semibold mb-2 text-white">{skill.name}</h3>
                <div className="w-full bg-gray-700 rounded-full h-2.5">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, delay: index * 0.1, ease: "easeOut" }}
                    className="bg-gradient-to-r from-purple-500 to-pink-500 h-2.5 rounded-full shadow-lg shadow-purple-500/50"
                  ></motion.div>
                </div>
                <span className="text-sm text-gray-300 mt-2 block">{skill.level}%</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* WordPress & SEO Skills Row */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          {/* WordPress CMS */}
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-xl border border-blue-500/20">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-blue-500/10 rounded-lg">
                <SiWordpress className="text-3xl text-blue-400" />
              </div>
              <h3 className="text-2xl font-semibold text-white">WordPress & CMS</h3>
            </div>
            {categories.cms.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 + index * 0.1 }}
                className="mb-4"
              >
                <div className="flex justify-between items-center mb-2">
                  <span className="text-white font-medium">{skill.name}</span>
                  <span className="text-blue-300">{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-3.5">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, delay: 0.6 + index * 0.1, ease: "easeOut" }}
                    className="bg-gradient-to-r from-blue-500 to-cyan-400 h-3.5 rounded-full shadow-lg shadow-blue-500/50"
                  ></motion.div>
                </div>
              </motion.div>
            ))}
            <p className="text-gray-300 text-sm mt-4">
              Custom themes, plugins, WooCommerce, Elementor, and performance optimization
            </p>
          </div>

          {/* SEO & Analytics */}
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-xl border border-green-500/20">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-green-500/10 rounded-lg">
                <SiGoogle className="text-3xl text-green-400" />
              </div>
              <h3 className="text-2xl font-semibold text-white">SEO & Analytics</h3>
            </div>
            {categories.seo.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 + index * 0.1 }}
                className="mb-4"
              >
                <div className="flex justify-between items-center mb-2">
                  <span className="text-white font-medium">{skill.name}</span>
                  <span className="text-green-300">{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-3.5">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, delay: 0.6 + index * 0.1, ease: "easeOut" }}
                    className="bg-gradient-to-r from-green-500 to-emerald-400 h-3.5 rounded-full shadow-lg shadow-green-500/50"
                  ></motion.div>
                </div>
              </motion.div>
            ))}
            <p className="text-gray-300 text-sm mt-4">
              Technical optimization, analytics tracking, performance metrics, and strategy implementation
            </p>
          </div>
        </motion.div>

        {/* Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-12 text-center"
        >
          <div className="inline-block p-4 bg-gradient-to-r from-purple-500/10 via-blue-500/10 to-green-500/10 rounded-xl border border-gray-700">
            <p className="text-gray-300">
              <span className="font-semibold text-white">Integrated Approach:</span> Combining development precision with SEO strategy 
              to build websites that not only look great but perform exceptionally in search results.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;