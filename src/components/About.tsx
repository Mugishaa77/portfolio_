import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaDownload, FaTimes } from 'react-icons/fa';
import CV from '../cv/Sally Wanga.pdf';

const About = () => {
  const [showModal, setShowModal] = useState(false);

  const handleDownload = () => {
    // Create a temporary link to trigger download
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
      <section id="about" className="py-16 md:py-20 px-4 bg-gray-800">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 md:mb-8 text-white">About Me</h2>
            
            <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
              {/* Text Content */}
              <div className="text-left order-2 lg:order-1">
                <p className="text-base md:text-lg text-gray-300 mb-4 md:mb-6 leading-relaxed">
                  Frontend Developer specializing in <span className="text-purple-400 font-medium">React</span>, 
                  <span className="text-purple-400 font-medium"> TypeScript</span>, and <span className="text-purple-400 font-medium">React Native</span>. 
                  I build scalable, performant applications with exceptional user experiences.
                </p>
                
                <p className="text-base md:text-lg text-gray-300 mb-4 md:mb-6 leading-relaxed">
                  With expertise in modern frontend architecture, I've led development of real-time collaborative 
                  platforms, cross-platform mobile apps, and progressive web applications.
                </p>

                <p className="text-base md:text-lg text-gray-300 mb-6 md:mb-8 leading-relaxed">
                  Currently focused on building innovative solutions that combine cutting-edge technology 
                  with practical business value.
                </p>

                {/* Download CV Button */}
              <motion.button
  onClick={() => setShowModal(true)}
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
  className="inline-flex items-center justify-center bg-purple-600 hover:bg-purple-700 px-8 py-4 rounded-xl font-semibold transition cursor-pointer"
>
  <FaDownload className="mr-2 text-white" />
  <span className="text-white text-base md:text-lg">Download CV</span>
</motion.button>

              </div>

              {/* Stats / Quick Facts */}
              <div className="grid grid-cols-2 gap-3 md:gap-4 w-full order-1 lg:order-2">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.1 }}
                  className="bg-gray-700 p-3 md:p-4 rounded-xl text-center"
                >
                  <div className="text-xl md:text-2xl font-bold text-purple-400 mb-1">React</div>
                  <div className="text-gray-300 text-xs md:text-sm">Specialization</div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2 }}
                  className="bg-gray-700 p-3 md:p-4 rounded-xl text-center"
                >
                  <div className="text-xl md:text-2xl font-bold text-purple-400 mb-1">TypeScript</div>
                  <div className="text-gray-300 text-xs md:text-sm">Expert Level</div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3 }}
                  className="bg-gray-700 p-3 md:p-4 rounded-xl text-center"
                >
                  <div className="text-xl md:text-2xl font-bold text-purple-400 mb-1">Frontend</div>
                  <div className="text-gray-300 text-xs md:text-sm">Architecture</div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.4 }}
                  className="bg-gray-700 p-3 md:p-4 rounded-xl text-center"
                >
                  <div className="text-xl md:text-2xl font-bold text-purple-400 mb-1">Mobile</div>
                  <div className="text-gray-300 text-xs md:text-sm">React Native</div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Confirmation Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-gray-800 rounded-xl p-5 md:p-6 max-w-md w-full border border-gray-700 mx-4"
          >
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg md:text-xl font-bold text-white">Download CV</h3>
              <button
                onClick={() => setShowModal(false)}
                className="text-gray-400 hover:text-white transition p-1"
                aria-label="Close modal"
              >
                <FaTimes size={18} />
              </button>
            </div>
            
            <div className="mb-6">
              <p className="text-gray-300 mb-3 text-sm md:text-base">
                You're about to download my CV. Please use this information responsibly 
                and only for legitimate recruitment purposes.
              </p>
              <p className="text-gray-400 text-xs md:text-sm">
                By downloading, you agree to use my contact information appropriately.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={() => setShowModal(false)}
                className="flex-1 bg-gray-600 hover:bg-gray-700 text-white py-3 px-4 rounded-lg transition font-medium text-sm md:text-base order-2 sm:order-1"
              >
                Cancel
              </button>
              <button
                onClick={handleDownload}
                className="flex-1 bg-purple-600 hover:bg-purple-700 text-white py-3 px-4 rounded-lg transition font-medium text-sm md:text-base order-1 sm:order-2"
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