import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaDownload, FaTimes, FaServer, FaDatabase, FaCode } from 'react-icons/fa';
import { SiDjango, SiReact, SiTailwindcss } from 'react-icons/si';

const About = () => {
  const [showModal, setShowModal] = useState(false);

  const handleDownload = () => {
    const link = document.createElement('a');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setShowModal(false);
  };

  return (
    <>
      <section id="about" className="py-20 px-4 bg-gradient-to-b from-gray-900 to-gray-800">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-indigo-400 to-teal-400 bg-clip-text text-transparent">
              About Me
            </h2>

            <div className="flex flex-col lg:grid lg:grid-cols-2 gap-12 items-center">
              {/* Text Content */}
              <div className="text-left order-2 lg:order-1 space-y-4">
                <p className="text-lg text-gray-300 leading-relaxed">
                  I'm a <span className="text-indigo-400 font-semibold">Software Engineer</span> with a focus on building 
                  full‑stack web applications using <span className="text-teal-400">Django</span> and 
                  <span className="text-indigo-400"> React</span>. I enjoy architecting clean REST APIs, 
                  implementing secure authentication (JWT, sessions), and creating responsive frontends 
                  that deliver great user experiences.
                </p>
                <p className="text-lg text-gray-300 leading-relaxed">
                  My backend work includes designing scalable database schemas (PostgreSQL, MySQL), 
                  optimizing queries, and integrating third‑party services. On the frontend, I work with 
                  TypeScript, Tailwind CSS, and modern React patterns to build dashboards and data‑driven 
                  interfaces.
                </p>
                <p className="text-lg text-gray-300 leading-relaxed">
                  I believe in writing maintainable code, documenting thoughtfully, and collaborating 
                  effectively. Whether it's a complex dashboard or a content‑focused site, I aim to 
                  deliver solutions that are both robust and a pleasure to use.
                </p>

                {/* Download CV Button */}
                <motion.button
                  onClick={() => setShowModal(true)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center justify-center bg-gray-800 hover:bg-gray-700 px-8 py-4 rounded-xl font-medium transition-all border border-gray-700 hover:border-indigo-500/50 shadow-lg hover:shadow-indigo-500/10"
                >
                  <FaDownload className="mr-2 text-indigo-400" />
                  <span className="text-gray-100">Download CV</span>
                </motion.button>
              </div>

              {/* Stats / Quick Facts */}
              <div className="grid grid-cols-2 gap-4 w-full order-1 lg:order-2">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.1 }}
                  whileHover={{ y: -3 }}
                  className="bg-gray-800 p-4 rounded-xl text-center border border-gray-700 group hover:border-indigo-500/30 transition-all"
                >
                  <div className="flex justify-center mb-2">
                    <SiDjango className="text-3xl text-teal-400" />
                  </div>
                  <div className="text-xl font-semibold text-teal-400 mb-1">Django</div>
                  <div className="text-gray-400 text-sm">Backend Framework</div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2 }}
                  whileHover={{ y: -3 }}
                  className="bg-gray-800 p-4 rounded-xl text-center border border-gray-700 group hover:border-indigo-500/30 transition-all"
                >
                  <div className="flex justify-center mb-2">
                    <SiReact className="text-3xl text-indigo-400" />
                  </div>
                  <div className="text-xl font-semibold text-indigo-400 mb-1">React</div>
                  <div className="text-gray-400 text-sm">Frontend Library</div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3 }}
                  whileHover={{ y: -3 }}
                  className="bg-gray-800 p-4 rounded-xl text-center border border-gray-700 group hover:border-indigo-500/30 transition-all"
                >
                  <div className="flex justify-center mb-2">
                    <FaServer className="text-3xl text-blue-400" />
                  </div>
                  <div className="text-xl font-semibold text-blue-400 mb-1">REST APIs</div>
                  <div className="text-gray-400 text-sm">API Design</div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.4 }}
                  whileHover={{ y: -3 }}
                  className="bg-gray-800 p-4 rounded-xl text-center border border-gray-700 group hover:border-indigo-500/30 transition-all"
                >
                  <div className="flex justify-center mb-2">
                    <FaDatabase className="text-3xl text-green-400" />
                  </div>
                  <div className="text-xl font-semibold text-green-400 mb-1">PostgreSQL</div>
                  <div className="text-gray-400 text-sm">Database</div>
                </motion.div>
              </div>
            </div>

            {/* Skills Tags */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="mt-12"
            >
              <div className="flex flex-wrap justify-center gap-3">
                {[
                  'Django', 'Python', 'React', 'TypeScript', 'PostgreSQL', 'REST APIs',
                  'JWT Authentication', 'Docker', 'Git/GitHub', 'Tailwind CSS', 'Node.js',
                  'REST API Integration', 'Responsive Design', 'Technical SEO', 'WordPress'
                ].map((skill, index) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.03 }}
                    className="px-4 py-2 bg-gray-800 hover:bg-gray-700 text-gray-300 rounded-lg text-sm transition cursor-default border border-gray-700"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Confirmation Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-gray-900 rounded-xl p-6 max-w-md w-full border border-gray-700 shadow-xl"
          >
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-semibold text-gray-100">Download CV</h3>
              <button
                onClick={() => setShowModal(false)}
                className="text-gray-500 hover:text-gray-300 transition p-1"
                aria-label="Close modal"
              >
                <FaTimes size={18} />
              </button>
            </div>
            <div className="mb-6">
              <p className="text-gray-300 mb-3">
                You're about to download my professional CV. It contains my detailed experience,
                skills, and qualifications.
              </p>
              <p className="text-gray-500 text-sm">
                Please use this information responsibly and only for legitimate recruitment purposes.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={() => setShowModal(false)}
                className="flex-1 bg-gray-800 hover:bg-gray-700 text-gray-200 py-3 px-4 rounded-lg transition font-medium border border-gray-700"
              >
                Cancel
              </button>
              <button
                onClick={handleDownload}
                className="flex-1 bg-indigo-600 hover:bg-indigo-700 text-white py-3 px-4 rounded-lg transition font-medium"
              >
                Confirm Download
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </>
  );
};

export default About;