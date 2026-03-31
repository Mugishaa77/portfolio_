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
      setStatus('error');
    }
    setTimeout(() => setStatus(null), 4000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-16 md:py-20 px-4 bg-sandstone">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-light text-azur mb-3">Get In Touch</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Let's build something amazing together
          </p>
        </motion.div>

        <AnimatePresence>
          {status && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className={`fixed top-4 right-4 z-50 px-5 py-3 rounded-lg shadow-lg flex items-center gap-3 text-white ${
                status === 'success' ? 'bg-green-600' : 'bg-red-600'
              }`}
            >
              {status === 'success' ? (
                <>
                  <FaCheckCircle className="text-xl" />
                  <span>Message sent successfully!</span>
                </>
              ) : (
                <>
                  <FaTimesCircle className="text-xl" />
                  <span>Oops! Something went wrong.</span>
                </>
              )}
            </motion.div>
          )}
        </AnimatePresence>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Contact Info - Left Column */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-light text-azur mb-4">Let's Connect</h3>
              <p className="text-gray-600 leading-relaxed">
                I'm always open to discussing new opportunities, innovative projects, and creative ideas.
              </p>
            </div>

            <div className="space-y-6">
              <a href="mailto:sallywanga2016@gmail.com" className="flex items-center gap-4 text-gray-600 hover:text-viridian transition group">
                <div className="bg-white border border-heather/20 p-3 rounded-full group-hover:border-viridian/50 transition">
                  <FaEnvelope className="text-viridian text-lg" />
                </div>
                <div>
                  <div className="font-medium text-gray-700">Email</div>
                  <div className="text-sm text-gray-500">sallywanga2016@gmail.com</div>
                </div>
              </a>

              <a href="tel:+254707720597" className="flex items-center gap-4 text-gray-600 hover:text-viridian transition group">
                <div className="bg-white border border-heather/20 p-3 rounded-full group-hover:border-viridian/50 transition">
                  <FaPhone className="text-viridian text-lg" />
                </div>
                <div>
                  <div className="font-medium text-gray-700">Phone</div>
                  <div className="text-sm text-gray-500">+254 707 720 597</div>
                </div>
              </a>

              <div className="flex items-center gap-4 text-gray-600">
                <div className="bg-white border border-heather/20 p-3 rounded-full">
                  <FaMapMarkerAlt className="text-viridian text-lg" />
                </div>
                <div>
                  <div className="font-medium text-gray-700">Location</div>
                  <div className="text-sm text-gray-500">Nairobi, Kenya</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form - Right Column */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
          >
            <form onSubmit={handleSubmit} className="bg-white p-6 md:p-8 rounded-2xl border border-heather/20 shadow-sm space-y-5">
              <div>
                <label htmlFor="name" className="block text-gray-600 text-sm mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-gray-50 border border-heather/30 rounded-lg px-4 py-3 text-gray-800 focus:outline-none focus:border-viridian focus:ring-1 focus:ring-viridian/20 transition"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-600 text-sm mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-gray-50 border border-heather/30 rounded-lg px-4 py-3 text-gray-800 focus:outline-none focus:border-viridian focus:ring-1 focus:ring-viridian/20 transition"
                  placeholder="your.email@example.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-gray-600 text-sm mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full bg-gray-50 border border-heather/30 rounded-lg px-4 py-3 text-gray-800 focus:outline-none focus:border-viridian focus:ring-1 focus:ring-viridian/20 transition resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-viridian hover:bg-viridian/90 text-white font-medium py-3 px-6 rounded-lg transition flex items-center justify-center gap-2"
              >
                <FaPaperPlane className="text-sm" />
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