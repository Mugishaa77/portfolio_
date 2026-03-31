import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaDownload, FaTimes } from 'react-icons/fa';


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
      <section id="about" className="py-20 px-6 md:px-12 bg-sandstone">
        <div className="max-w-3xl ml-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-light text-azur mb-6">About Me</h2>

            <div className="space-y-4 text-gray-700 text-base md:text-lg leading-relaxed">
              <p>
                I'm a <span className="text-viridian font-medium">Software Engineer</span> with a focus on building 
                full‑stack web applications using <span className="text-viridian">Django</span> and 
                <span className="text-viridian"> React</span>. I enjoy architecting clean REST APIs, 
                implementing secure authentication, and creating responsive frontends.
              </p>
              <p>
                My backend work includes designing scalable database schemas, optimizing queries, and integrating 
                third‑party services. On the frontend, I work with TypeScript, Tailwind CSS, and modern React patterns 
                to build dashboards and data‑driven interfaces.
              </p>
              <p>
                I believe in writing maintainable code, documenting thoughtfully, and collaborating effectively. 
                Whether it's a complex dashboard or a content‑focused site, I aim to deliver robust, user‑friendly solutions.
              </p>
            </div>

            <motion.button
              onClick={() => setShowModal(true)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="mt-8 inline-flex items-center justify-center px-6 py-3 border border-viridian/40 rounded-full text-viridian hover:bg-viridian/5 transition"
            >
              <FaDownload className="mr-2" />
              Download CV
            </motion.button>
          </motion.div>
        </div>
      </section>

      {showModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-2xl p-6 max-w-md w-full shadow-xl"
          >
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-semibold text-gray-800">Download CV</h3>
              <button onClick={() => setShowModal(false)} className="text-gray-400 hover:text-gray-600">
                <FaTimes />
              </button>
            </div>
            <p className="text-gray-600 mb-3">You're about to download my professional CV. It contains my detailed experience, skills, and qualifications.</p>
            <p className="text-gray-500 text-sm mb-6">Please use this information responsibly and only for legitimate recruitment purposes.</p>
            <div className="flex gap-3">
              <button onClick={() => setShowModal(false)} className="flex-1 py-2 px-4 border border-gray-300 rounded-full text-gray-600 hover:bg-gray-50">Cancel</button>
              <button onClick={handleDownload} className="flex-1 py-2 px-4 bg-viridian text-white rounded-full hover:bg-viridian/90">Confirm</button>
            </div>
          </motion.div>
        </div>
      )}
    </>
  );
};

export default About;