import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane, FaCheckCircle, FaTimesCircle } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [status, setStatus] = useState<'success' | 'error' | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch('https://formspree.io/f/xvgwdokn', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setStatus('error');
    }

    // Auto-hide alert after 4 seconds
    setTimeout(() => setStatus(null), 4000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section className="py-12 md:py-20 px-4 sm:px-6 bg-gray-900 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Get In Touch</h2>
          <p className="text-gray-400 text-lg sm:text-xl max-w-2xl mx-auto px-4">
            Let's build something amazing together
          </p>
        </motion.div>

        {/* Animated Alerts - Mobile Responsive */}
        <AnimatePresence>
          {status && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className={`fixed top-4 left-4 right-4 sm:top-6 sm:right-6 sm:left-auto z-50 px-4 py-3 sm:px-6 sm:py-3 rounded-lg shadow-lg flex items-center gap-3 text-white 
                ${status === 'success' ? 'bg-green-600' : 'bg-red-600'} max-w-sm sm:max-w-md mx-auto sm:mx-0`}
            >
              {status === 'success' ? (
                <>
                  <FaCheckCircle className="text-xl sm:text-2xl flex-shrink-0" />
                  <span className="text-sm sm:text-base">Message sent successfully!</span>
                </>
              ) : (
                <>
                  <FaTimesCircle className="text-xl sm:text-2xl flex-shrink-0" />
                  <span className="text-sm sm:text-base">Oops! Something went wrong.</span>
                </>
              )}
            </motion.div>
          )}
        </AnimatePresence>

        <div className="grid lg:grid-cols-2 gap-8 md:gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="space-y-6 md:space-y-8"
          >
            <div className="text-center md:text-left px-4 sm:px-0">
              <h3 className="text-2xl font-bold mb-4 md:mb-6">Let's Connect</h3>
              <p className="text-gray-400 mb-6 md:mb-8 text-base md:text-lg leading-relaxed">
                I'm always open to discussing new opportunities, innovative projects, 
                and creative ideas. Feel free to reach out!
              </p>
            </div>

            {/* Contact Icons - Vertical on mobile, Horizontal on desktop (lg breakpoint) */}
            <div className="flex flex-col lg:flex-row justify-between gap-6 md:gap-4 px-4 sm:px-0">
              <motion.a
                href="mailto:sallywanga2016@gmail.com"
                whileHover={{ scale: 1.05 }}
                className="flex flex-row lg:flex-col items-center lg:items-center text-gray-300 hover:text-purple-400 transition group flex-1 min-w-0 gap-4 lg:gap-0"
              >
                <div className="bg-gray-800 p-3 lg:p-4 rounded-lg group-hover:bg-purple-600 transition w-12 h-12 lg:w-16 lg:h-16 flex items-center justify-center flex-shrink-0">
                  <FaEnvelope className="text-lg lg:text-xl" />
                </div>
                <div className="text-left lg:text-center w-full">
                  <div className="font-semibold text-sm lg:text-base">Email</div>
                  <div className="text-gray-400 text-xs lg:text-sm mt-1 break-words">
                    sallywanga2016@gmail.com
                  </div>
                </div>
              </motion.a>

              <motion.a
                href="tel:+254707720597"
                whileHover={{ scale: 1.05 }}
                className="flex flex-row lg:flex-col items-center lg:items-center text-gray-300 hover:text-purple-400 transition group flex-1 min-w-0 gap-4 lg:gap-0"
              >
                <div className="bg-gray-800 p-3 lg:p-4 rounded-lg group-hover:bg-purple-600 transition w-12 h-12 lg:w-16 lg:h-16 flex items-center justify-center flex-shrink-0">
                  <FaPhone className="text-lg lg:text-xl" />
                </div>
                <div className="text-left lg:text-center w-full">
                  <div className="font-semibold text-sm lg:text-base">Phone</div>
                  <div className="text-gray-400 text-xs lg:text-sm mt-1">
                    +254 707 720 597
                  </div>
                </div>
              </motion.a>

              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex flex-row lg:flex-col items-center lg:items-center text-gray-300 transition group flex-1 min-w-0 gap-4 lg:gap-0"
              >
                <div className="bg-gray-800 p-3 lg:p-4 rounded-lg group-hover:bg-purple-600 transition w-12 h-12 lg:w-16 lg:h-16 flex items-center justify-center flex-shrink-0">
                  <FaMapMarkerAlt className="text-lg lg:text-xl" />
                </div>
                <div className="text-left lg:text-center w-full">
                  <div className="font-semibold text-sm lg:text-base">Location</div>
                  <div className="text-gray-400 text-xs lg:text-sm mt-1">
                    Nairobi, Kenya
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="px-4 sm:px-0"
          >
            <form 
              onSubmit={handleSubmit} 
              className="bg-gray-800 p-6 sm:p-8 rounded-xl space-y-4 md:space-y-6"
            >
              <div>
                <label htmlFor="name" className="block text-gray-300 mb-2 text-sm sm:text-base">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-gray-100 border border-gray-400 rounded-lg px-4 py-3 text-black focus:outline-none focus:border-purple-500 transition text-sm sm:text-base"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-gray-300 mb-2 text-sm sm:text-base">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-gray-100 border border-gray-400 rounded-lg px-4 py-3 text-black focus:outline-none focus:border-purple-500 transition text-sm sm:text-base"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-gray-300 mb-2 text-sm sm:text-base">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full bg-gray-100 border border-gray-400 rounded-lg px-4 py-3 text-black focus:outline-none focus:border-purple-500 transition resize-none text-sm sm:text-base"
                  placeholder="Tell me about your project..."
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-6 rounded-lg transition flex items-center justify-center text-sm sm:text-base"
              >
                <FaPaperPlane className="mr-2 text-sm sm:text-base" />
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;