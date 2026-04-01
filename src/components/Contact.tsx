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
    <section id="contact" className="py-16 md:py-20 px-4 relative overflow-hidden">
      {/* Soft gradient mesh background – vibrant palette */}
      <div
        aria-hidden
        style={{
          position: 'absolute',
          inset: 0,
          background: `
            radial-gradient(ellipse at 20% 30%, #E6D4BE60 0%, transparent 60%),
            radial-gradient(ellipse at 80% 70%, #7DADDB40 0%, transparent 55%),
            radial-gradient(ellipse at 40% 80%, #E1829830 0%, transparent 70%),
            radial-gradient(ellipse at 60% 20%, #86759930 0%, transparent 65%),
            linear-gradient(145deg, #FEFAF5 0%, #FDF5E8 100%)
          `,
          zIndex: 0,
        }}
      />
      {/* Subtle cross‑hatch pattern */}
      <div
        aria-hidden
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `
            linear-gradient(#86759910 1px, transparent 1px),
            linear-gradient(90deg, #86759910 1px, transparent 1px)
          `,
          backgroundSize: '48px 48px',
          maskImage: 'radial-gradient(ellipse at 50% 50%, black 40%, transparent 85%)',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />
      {/* Decorative wavy accent at bottom */}
      <div
        aria-hidden
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          width: '100%',
          height: '120px',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      >
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ width: '100%', height: '100%', opacity: 0.5 }}
        >
          <path
            d="M0,64 C240,96 480,32 720,64 C960,96 1200,32 1440,64 L1440,120 L0,120 Z"
            fill="url(#gradientWave)"
          />
          <defs>
            <linearGradient id="gradientWave" x1="0" y1="0" x2="1440" y2="0" gradientUnits="userSpaceOnUse">
              <stop stopColor="#867599" stopOpacity="0.4" />
              <stop offset="0.5" stopColor="#E18298" stopOpacity="0.3" />
              <stop offset="1" stopColor="#679F9E" stopOpacity="0.4" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      {/* Soft blurred blobs for depth */}
      <div
        aria-hidden
        style={{
          position: 'absolute',
          top: '10%',
          right: '-80px',
          width: '320px',
          height: '320px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, #7DADDB30 0%, transparent 70%)',
          filter: 'blur(60px)',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />
      <div
        aria-hidden
        style={{
          position: 'absolute',
          bottom: '5%',
          left: '-100px',
          width: '400px',
          height: '400px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, #E6D4BE40 0%, transparent 70%)',
          filter: 'blur(70px)',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          {/* Tag line */}
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              marginBottom: '12px',
              padding: '4px 14px',
              borderRadius: '999px',
              border: `1px solid #86759944`,
            }}
          >
            <span
              style={{
                width: '6px',
                height: '6px',
                borderRadius: '50%',
                background: '#E18298',
                display: 'inline-block',
              }}
            />
            <span
              style={{
                fontSize: '11px',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: '#867599',
                fontWeight: 500,
              }}
            >
              Let's Connect
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-light mb-3" style={{ color: '#2C4A4A' }}>
            Get In Touch
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: '#6F8F8E' }}>
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
          {/* Contact Info - Left Column (paper-like background) */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="space-y-8 p-6 rounded-2xl"
            style={{ borderLeft: '1px solid #679F9E', paddingBlockStart: '4px' }}
          >
            <div>
              <h3 className="text-2xl font-light mb-4" style={{ color: '#2C4A4A' }}>
                Let's Connect
              </h3>
              <p className="leading-relaxed" style={{ color: '#6F8F8E' }}>
                I'm always open to discussing new opportunities, innovative projects, and creative ideas.
              </p>
            </div>

            <div className="space-y-6">
              <a
                href="mailto:sallywanga2016@gmail.com"
                className="flex items-center gap-4 group transition-all duration-300"
                style={{ color: '#6F8F8E' }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#679F9E')}
                onMouseLeave={(e) => (e.currentTarget.style.color = '#6F8F8E')}
              >
                <div
                  className="p-3 rounded-full transition-all duration-300 group-hover:shadow-md"
                  style={{
                    background: 'linear-gradient(135deg, #fff, #FEFAF5)',
                    border: '1px solid rgba(134, 117, 153, 0.25)',
                    boxShadow: '0 2px 6px rgba(0,0,0,0.02)',
                  }}
                >
                  <FaEnvelope className="text-lg" style={{ color: '#679F9E' }} />
                </div>
                <div>
                  <div className="font-medium" style={{ color: '#2C4A4A' }}>
                    Email
                  </div>
                  <div className="text-sm" style={{ color: '#6F8F8E' }}>
                    sallywanga2016@gmail.com
                  </div>
                </div>
              </a>

              <a
                href="tel:+254707720597"
                className="flex items-center gap-4 group transition-all duration-300"
                style={{ color: '#6F8F8E' }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#679F9E')}
                onMouseLeave={(e) => (e.currentTarget.style.color = '#6F8F8E')}
              >
                <div
                  className="p-3 rounded-full transition-all duration-300 group-hover:shadow-md"
                  style={{
                    background: 'linear-gradient(135deg, #fff, #FEFAF5)',
                    border: '1px solid rgba(134, 117, 153, 0.25)',
                  }}
                >
                  <FaPhone className="text-lg" style={{ color: '#679F9E' }} />
                </div>
                <div>
                  <div className="font-medium" style={{ color: '#2C4A4A' }}>
                    Phone
                  </div>
                  <div className="text-sm" style={{ color: '#6F8F8E' }}>
                    +254 707 720 597
                  </div>
                </div>
              </a>

              <div className="flex items-center gap-4">
                <div
                  className="p-3 rounded-full"
                  style={{
                    background: 'linear-gradient(135deg, #fff, #FEFAF5)',
                    border: '1px solid rgba(134, 117, 153, 0.25)',
                  }}
                >
                  <FaMapMarkerAlt className="text-lg" style={{ color: '#679F9E' }} />
                </div>
                <div>
                  <div className="font-medium" style={{ color: '#2C4A4A' }}>
                    Location
                  </div>
                  <div className="text-sm" style={{ color: '#6F8F8E' }}>
                    Nairobi, Kenya
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form - Right Column (sticky note) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
          >
            <form
              onSubmit={handleSubmit}
              className="relative p-6 md:p-8 space-y-5"
              style={{
                background: '#FEF9E8', // warm sticky note base
                border: '1px solid #E6D4BE',
                borderRadius: '5', // sticky notes are usually straight edges
                boxShadow: '0 10px 20px -5px rgba(0,0,0,0.15), 0 4px 8px -2px rgba(0,0,0,0.05), inset 0 1px 0 rgba(255,255,240,0.6)',
                transform: 'rotate(0.3deg)', // subtle tilt for authenticity
                transition: 'transform 0.2s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'rotate(0deg) scale(1.01)';
                e.currentTarget.style.boxShadow = '0 16px 28px -8px rgba(0,0,0,0.2), 0 6px 12px -4px rgba(0,0,0,0.08)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'rotate(0.3deg)';
                e.currentTarget.style.boxShadow = '0 10px 20px -5px rgba(0,0,0,0.15), 0 4px 8px -2px rgba(0,0,0,0.05)';
              }}
            >
              {/* Folded corner effect (top right) */}
              <div
                aria-hidden
                style={{
                  position: 'absolute',
                  top: 0,
                  right: 0,
                  width: '0',
                  height: '0',
                  borderStyle: 'solid',
                  borderWidth: '0 48px 48px 0',
                  borderColor: 'transparent #E6D4BE transparent transparent',
                  filter: 'drop-shadow(-2px 2px 2px rgba(0,0,0,0.03))',
                  pointerEvents: 'none',
                }}
              />
              <div
                aria-hidden
                style={{
                  position: 'absolute',
                  top: '6px',
                  right: '6px',
                  width: '0',
                  height: '0',
                  borderStyle: 'solid',
                  borderWidth: '0 36px 36px 0',
                  borderColor: 'transparent #FEF9E8 transparent transparent',
                  pointerEvents: 'none',
                }}
              />

              {/* Subtle tape accent at top */}
              <div
                aria-hidden
                style={{
                  position: 'absolute',
                  top: '-12px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  width: '80px',
                  height: '24px',
                  background: 'rgba(230, 212, 190, 0.7)',
                  borderRadius: '12px',
                  filter: 'blur(1px)',
                  opacity: 0.6,
                  pointerEvents: 'none',
                }}
              />

              <div>
                <label htmlFor="name" className="block text-sm mb-2" style={{ color: '#2C4A4A' }}>
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full rounded-lg px-4 py-3 text-gray-800 focus:outline-none transition-all duration-200"
                  style={{
                    background: '#FFFEF7',
                    border: '1px solid #E6D4BE',
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = '#679F9E';
                    e.target.style.boxShadow = '0 0 0 3px rgba(103, 159, 158, 0.15)';
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = '#E6D4BE';
                    e.target.style.boxShadow = 'none';
                  }}
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm mb-2" style={{ color: '#2C4A4A' }}>
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full rounded-lg px-4 py-3 text-gray-800 focus:outline-none transition-all duration-200"
                  style={{
                    background: '#FFFEF7',
                    border: '1px solid #E6D4BE',
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = '#679F9E';
                    e.target.style.boxShadow = '0 0 0 3px rgba(103, 159, 158, 0.15)';
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = '#E6D4BE';
                    e.target.style.boxShadow = 'none';
                  }}
                  placeholder="your.email@example.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm mb-2" style={{ color: '#2C4A4A' }}>
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full rounded-lg px-4 py-3 text-gray-800 focus:outline-none transition-all duration-200 resize-none"
                  style={{
                    background: '#FFFEF7',
                    border: '1px solid #E6D4BE',
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = '#679F9E';
                    e.target.style.boxShadow = '0 0 0 3px rgba(103, 159, 158, 0.15)';
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = '#E6D4BE';
                    e.target.style.boxShadow = 'none';
                  }}
                  placeholder="Tell me about your project..."
                />
              </div>
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full font-medium py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center gap-2"
                style={{
                  background: '#E18298',
                  border: '1px solid #E18298',
                  color: '#fff',
                  boxShadow: '0 4px 12px rgba(225, 130, 152, 0.3)',
                  marginTop: '8px',
                  
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = '#D6768B';
                  e.currentTarget.style.borderColor = '#D6768B';
                  e.currentTarget.style.boxShadow = '0 6px 16px rgba(225, 130, 152, 0.3)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = '#E18298';
                  e.currentTarget.style.borderColor = '#E18298';
                  e.currentTarget.style.boxShadow = '0 4px 12px rgba(225, 130, 152, 0.3)';
                }}
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