import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaDownload, FaTimes, FaWordpress, FaSearch, FaCode } from 'react-icons/fa';
import { SiReact} from 'react-icons/si';
import CV from '../cv/Sally Wanga_Seo_specialist.pdf';

const About = () => {
  const [showModal, setShowModal] = useState(false);

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = CV;
    link.download = 'Sally_Wanga_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setShowModal(false);
  };

  return (
    <>
      <section id="about" className="py-16 md:py-20 px-4 bg-gray-900">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 md:mb-8 text-gray-100">
              Professional Profile
            </h2>
            
            <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
              {/* Text Content */}
              <div className="text-left order-2 lg:order-1">
                <p className="text-base md:text-lg text-gray-300 mb-4 md:mb-6 leading-relaxed">
                  <span className="text-gray-100 font-semibold">Frontend Developer</span> with specialized expertise in 
                  <span className="text-indigo-400 font-medium"> SEO strategy</span> and 
                  <span className="text-indigo-400 font-medium"> WordPress development</span>. 
                  I create high-performance websites that balance technical excellence with search engine optimization.
                </p>
                
                <p className="text-base md:text-lg text-gray-300 mb-4 md:mb-6 leading-relaxed">
                  My approach integrates <span className="text-teal-400 font-medium">modern frontend development</span> with 
                  <span className="text-teal-400 font-medium"> SEO best practices</span>, ensuring websites are not only visually 
                  compelling but also optimized for visibility and performance from inception.
                </p>

                <p className="text-base md:text-lg text-gray-300 mb-6 md:mb-8 leading-relaxed">
                  I specialize in translating complex requirements into clean, maintainable solutions that 
                  drive both user engagement and measurable business results.
                </p>

                {/* Download CV Button */}
                <motion.button
                  onClick={() => setShowModal(true)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center justify-center bg-gray-800 hover:bg-gray-700 px-8 py-4 rounded-lg font-medium transition cursor-pointer border border-gray-700 hover:border-gray-600"
                >
                  <FaDownload className="mr-2 text-gray-200" />
                  <span className="text-gray-100 text-base md:text-lg">Download CV</span>
                </motion.button>
              </div>

              {/* Stats / Quick Facts */}
              <div className="grid grid-cols-2 gap-3 md:gap-4 w-full order-1 lg:order-2">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.1 }}
                  whileHover={{ y: -3 }}
                  className="bg-gray-800 p-3 md:p-4 rounded-lg text-center border border-gray-700 group hover:border-indigo-500/30 transition-all"
                >
                  <div className="flex justify-center mb-2">
                    <SiReact className="text-2xl md:text-3xl text-indigo-400" />
                  </div>
                  <div className="text-xl md:text-2xl font-semibold text-indigo-400 mb-1">React</div>
                  <div className="text-gray-400 text-xs md:text-sm">Frontend Development</div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2 }}
                  whileHover={{ y: -3 }}
                  className="bg-gray-800 p-3 md:p-4 rounded-lg text-center border border-gray-700 group hover:border-blue-500/30 transition-all"
                >
                  <div className="flex justify-center mb-2">
                    <FaWordpress className="text-2xl md:text-3xl text-blue-400" />
                  </div>
                  <div className="text-xl md:text-2xl font-semibold text-blue-400 mb-1">WordPress</div>
                  <div className="text-gray-400 text-xs md:text-sm">CMS Solutions</div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3 }}
                  whileHover={{ y: -3 }}
                  className="bg-gray-800 p-3 md:p-4 rounded-lg text-center border border-gray-700 group hover:border-teal-500/30 transition-all"
                >
                  <div className="flex justify-center mb-2">
                    <FaSearch className="text-2xl md:text-3xl text-teal-400" />
                  </div>
                  <div className="text-xl md:text-2xl font-semibold text-teal-400 mb-1">SEO</div>
                  <div className="text-gray-400 text-xs md:text-sm">Technical Strategy</div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.4 }}
                  whileHover={{ y: -3 }}
                  className="bg-gray-800 p-3 md:p-4 rounded-lg text-center border border-gray-700 group hover:border-gray-600 transition-all"
                >
                  <div className="flex justify-center mb-2">
                    <FaCode className="text-2xl md:text-3xl text-gray-300" />
                  </div>
                  <div className="text-xl md:text-2xl font-semibold text-gray-200 mb-1">Integration</div>
                  <div className="text-gray-400 text-xs md:text-sm">End-to-End Solutions</div>
                </motion.div>
              </div>
            </div>

            {/* Skills Tags */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="mt-8 md:mt-12"
            >
              <div className="flex flex-wrap justify-center gap-2 md:gap-3">
                {[
                  'React & TypeScript',
                  'WordPress Development',
                  'Technical SEO',
                  'Figma to Code',
                  'Web Performance',
                  'Mobile Optimization',
                  'SEO Analytics',
                  'Responsive Design',
                  'Core Web Vitals',
                  'Webflow/Shopify',
                  'UI/UX Implementation',
                  'Cross-Browser Testing'
                ].map((skill, index) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.05 }}
                    className="px-3 md:px-4 py-1.5 md:py-2 bg-gray-800 hover:bg-gray-700 text-gray-300 rounded-lg text-xs md:text-sm transition cursor-default border border-gray-700"
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
            className="bg-gray-900 rounded-lg p-5 md:p-6 max-w-md w-full border border-gray-700 mx-4 shadow-xl"
          >
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg md:text-xl font-semibold text-gray-100">Download CV</h3>
              <button
                onClick={() => setShowModal(false)}
                className="text-gray-500 hover:text-gray-300 transition p-1"
                aria-label="Close modal"
              >
                <FaTimes size={18} />
              </button>
            </div>
            
            <div className="mb-6">
              <p className="text-gray-300 mb-3 text-sm md:text-base">
                You're about to download my professional CV. This document contains my detailed 
                experience, skills, and qualifications for recruitment purposes.
              </p>
              <p className="text-gray-500 text-xs md:text-sm">
                Please use this information responsibly and only for legitimate recruitment purposes.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={() => setShowModal(false)}
                className="flex-1 bg-gray-800 hover:bg-gray-700 text-gray-200 py-3 px-4 rounded-lg transition font-medium text-sm md:text-base border border-gray-700"
              >
                Cancel
              </button>
              <button
                onClick={handleDownload}
                className="flex-1 bg-gray-800 hover:bg-gray-700 text-gray-100 py-3 px-4 rounded-lg transition font-medium text-sm md:text-base border border-indigo-500/30 hover:border-indigo-500/50"
              >
                Confirm Download
              </button>
            </div>
          </motion.div>
        </div>
      )}

      <style>{`
        @media (max-width: 640px) {
          #about {
            padding-left: 1rem;
            padding-right: 1rem;
          }
        }
        
        @media (max-width: 480px) {
          #about {
            padding-left: 0.75rem;
            padding-right: 0.75rem;
          }
        }
        
        @media (max-width: 360px) {
          #about {
            padding-left: 0.5rem;
            padding-right: 0.5rem;
          }
        }
      `}</style>
    </>
  );
};

export default About;