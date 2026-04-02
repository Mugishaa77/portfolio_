import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane, FaCheckCircle, FaTimesCircle } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'success' | 'error' | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch('https://formspree.io/f/xvgwdokn', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
    setTimeout(() => setStatus(null), 4000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section
      id="contact"
      className="py-16 md:py-20 px-4 relative overflow-hidden"
      style={{
        background: 'linear-gradient(155deg, #f7f3ee 0%, #efe7dc 45%, #e8ddd0 100%)',
      }}
    >
      {/* Radial mesh blobs */}
      <div aria-hidden style={{
        position: 'absolute', inset: 0, zIndex: 0,
        background: `
          radial-gradient(ellipse at 15% 25%, #86759922 0%, transparent 55%),
          radial-gradient(ellipse at 85% 75%, #679F9E1a 0%, transparent 55%),
          radial-gradient(ellipse at 55% 90%, #E1829818 0%, transparent 60%),
          radial-gradient(ellipse at 70% 10%, #7DADDB18 0%, transparent 50%)
        `,
        pointerEvents: 'none',
      }} />

      {/* Cross-hatch texture */}
      <div aria-hidden style={{
        position: 'absolute', inset: 0, zIndex: 0, pointerEvents: 'none',
        backgroundImage: `
          linear-gradient(#86759912 1px, transparent 1px),
          linear-gradient(90deg, #86759912 1px, transparent 1px)
        `,
        backgroundSize: '48px 48px',
        maskImage: 'radial-gradient(ellipse at 50% 50%, black 35%, transparent 80%)',
      }} />

      {/* Top rainbow hairline — mirrors Projects section */}
      <div aria-hidden style={{
        position: 'absolute', top: 0, left: 0, right: 0, height: '3px', zIndex: 1,
        background: 'linear-gradient(90deg, transparent, #867599, #E18298, #679F9E, transparent)',
        opacity: 0.45,
      }} />

      {/* Large ghost circle accent */}
      <div aria-hidden style={{
        position: 'absolute', right: '-100px', top: '50%',
        transform: 'translateY(-50%)',
        width: '480px', height: '480px', borderRadius: '50%',
        border: '1.5px solid #86759918', pointerEvents: 'none', zIndex: 0,
      }} />
      <div aria-hidden style={{
        position: 'absolute', right: '-40px', top: '50%',
        transform: 'translateY(-50%)',
        width: '340px', height: '340px', borderRadius: '50%',
        border: '1.5px solid #679F9E14', pointerEvents: 'none', zIndex: 0,
      }} />

      {/* Blurred blobs */}
      <div aria-hidden style={{
        position: 'absolute', top: '8%', right: '-80px',
        width: '320px', height: '320px', borderRadius: '50%',
        background: 'radial-gradient(circle, #7DADDB28 0%, transparent 70%)',
        filter: 'blur(60px)', pointerEvents: 'none', zIndex: 0,
      }} />
      <div aria-hidden style={{
        position: 'absolute', bottom: '5%', left: '-80px',
        width: '380px', height: '380px', borderRadius: '50%',
        background: 'radial-gradient(circle, #E6D4BE44 0%, transparent 70%)',
        filter: 'blur(60px)', pointerEvents: 'none', zIndex: 0,
      }} />

      {/* Wavy bottom accent */}
      <div aria-hidden style={{
        position: 'absolute', bottom: 0, left: 0, width: '100%', height: '100px',
        pointerEvents: 'none', zIndex: 0,
      }}>
        <svg viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg"
          style={{ width: '100%', height: '100%', opacity: 0.4 }}>
          <path d="M0,50 C240,80 480,20 720,50 C960,80 1200,20 1440,50 L1440,100 L0,100 Z" fill="url(#waveGrad)" />
          <defs>
            <linearGradient id="waveGrad" x1="0" y1="0" x2="1440" y2="0" gradientUnits="userSpaceOnUse">
              <stop stopColor="#867599" stopOpacity="0.4" />
              <stop offset="0.5" stopColor="#E18298" stopOpacity="0.3" />
              <stop offset="1" stopColor="#679F9E" stopOpacity="0.4" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: '8px',
            marginBottom: '14px', padding: '4px 14px',
            borderRadius: '999px',
            border: '1px solid #86759944',
            background: '#86759910',
          }}>
            <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#E18298', display: 'inline-block' }} />
            <span style={{ fontSize: '11px', letterSpacing: '0.12em', textTransform: 'uppercase', color: '#867599', fontWeight: 500 }}>
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

        {/* Toast notification */}
        <AnimatePresence>
          {status && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              style={{
                position: 'fixed', top: '16px', right: '16px', zIndex: 50,
                padding: '12px 20px', borderRadius: '12px',
                boxShadow: '0 8px 24px rgba(0,0,0,0.2)',
                display: 'flex', alignItems: 'center', gap: '10px',
                color: '#fff',
                background: status === 'success'
                  ? 'linear-gradient(135deg, #679F9E, #4a8584)'
                  : 'linear-gradient(135deg, #E18298, #c4607a)',
              }}
            >
              {status === 'success'
                ? <><FaCheckCircle style={{ fontSize: '18px' }} /><span>Message sent successfully!</span></>
                : <><FaTimesCircle style={{ fontSize: '18px' }} /><span>Oops! Something went wrong.</span></>
              }
            </motion.div>
          )}
        </AnimatePresence>

        <div className="grid md:grid-cols-2 gap-12 items-start">

          {/* Left — contact info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            style={{
              padding: '32px',
              borderRadius: '20px',
              background: 'rgba(255,255,255,0.55)',
              backdropFilter: 'blur(12px)',
              border: '1px solid rgba(134,117,153,0.2)',
              boxShadow: '0 4px 24px rgba(134,117,153,0.08), inset 0 1px 0 rgba(255,255,255,0.8)',
            }}
          >
            {/* Left border accent */}
            <div style={{
              position: 'absolute', left: 0, top: '20%', bottom: '20%',
              width: '3px', borderRadius: '0 3px 3px 0',
              background: 'linear-gradient(to bottom, #867599, #679F9E)',
              opacity: 0.5,
            }} />

            <h3 className="text-2xl font-light mb-3" style={{ color: '#2C4A4A' }}>
              Let's Connect
            </h3>
            <p className="leading-relaxed mb-8" style={{ color: '#6F8F8E', fontSize: '15px' }}>
              I'm always open to discussing new opportunities, innovative projects, and creative ideas.
            </p>

            {/* Divider */}
            <div style={{
              height: '1px', marginBottom: '28px',
              background: 'linear-gradient(to right, #86759933, transparent)',
            }} />

            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              {[
                {
                  icon: FaEnvelope,
                  label: 'Email',
                  value: 'sallywanga2016@gmail.com',
                  href: 'mailto:sallywanga2016@gmail.com',
                  color: '#679F9E',
                },
                {
                  icon: FaPhone,
                  label: 'Phone',
                  value: '+254 707 720 597',
                  href: 'tel:+254707720597',
                  color: '#7DADDB',
                },
                {
                  icon: FaMapMarkerAlt,
                  label: 'Location',
                  value: 'Nairobi, Kenya',
                  href: undefined,
                  color: '#E18298',
                },
              ].map(({ icon: Icon, label, value, href, color }) => {
                const inner = (
                  <div key={label} style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                    <div style={{
                      width: '44px', height: '44px', borderRadius: '12px', flexShrink: 0,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      background: `${color}18`,
                      border: `1px solid ${color}33`,
                      transition: 'all 0.2s',
                    }}>
                      <Icon style={{ color, fontSize: '16px' }} />
                    </div>
                    <div>
                      <div style={{ fontSize: '12px', fontWeight: 600, color: '#867599', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '2px' }}>
                        {label}
                      </div>
                      <div style={{ fontSize: '14px', color: '#4a6a6a', fontWeight: 500 }}>{value}</div>
                    </div>
                  </div>
                );
                return href ? (
                  <a key={label} href={href} style={{ textDecoration: 'none', transition: 'opacity 0.2s' }}
                    onMouseEnter={e => e.currentTarget.style.opacity = '0.75'}
                    onMouseLeave={e => e.currentTarget.style.opacity = '1'}
                  >{inner}</a>
                ) : (
                  <div key={label}>{inner}</div>
                );
              })}
            </div>
          </motion.div>

          {/* Right — sticky-note form (kept as-is, with minor polish) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
          >
            <form
              onSubmit={handleSubmit}
              style={{
                position: 'relative',
                padding: '32px',
                background: '#FEF9E8',
                border: '1px solid #E6D4BE',
                borderRadius: '4px',
                boxShadow: '0 10px 28px -5px rgba(0,0,0,0.12), 0 4px 8px -2px rgba(0,0,0,0.05), inset 0 1px 0 rgba(255,255,240,0.7)',
                transform: 'rotate(0.3deg)',
                transition: 'transform 0.2s ease, box-shadow 0.2s ease',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'rotate(0deg) scale(1.01)';
                e.currentTarget.style.boxShadow = '0 18px 36px -8px rgba(0,0,0,0.18), 0 6px 12px -4px rgba(0,0,0,0.07)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'rotate(0.3deg)';
                e.currentTarget.style.boxShadow = '0 10px 28px -5px rgba(0,0,0,0.12), 0 4px 8px -2px rgba(0,0,0,0.05)';
              }}
            >
              {/* Folded corner */}
              <div aria-hidden style={{
                position: 'absolute', top: 0, right: 0, width: 0, height: 0,
                borderStyle: 'solid', borderWidth: '0 48px 48px 0',
                borderColor: 'transparent #E6D4BE transparent transparent',
                filter: 'drop-shadow(-2px 2px 2px rgba(0,0,0,0.03))',
                pointerEvents: 'none',
              }} />
              <div aria-hidden style={{
                position: 'absolute', top: '6px', right: '6px', width: 0, height: 0,
                borderStyle: 'solid', borderWidth: '0 36px 36px 0',
                borderColor: 'transparent #FEF9E8 transparent transparent',
                pointerEvents: 'none',
              }} />

              {/* Tape accent */}
              <div aria-hidden style={{
                position: 'absolute', top: '-12px', left: '50%',
                transform: 'translateX(-50%)',
                width: '80px', height: '22px',
                background: 'rgba(230,212,190,0.75)',
                borderRadius: '12px',
                filter: 'blur(1px)',
                opacity: 0.65,
                pointerEvents: 'none',
              }} />

              {/* Ruled lines */}
              {[0, 1, 2, 3, 4, 5, 6].map(i => (
                <div key={i} aria-hidden style={{
                  position: 'absolute',
                  left: '32px', right: '32px',
                  top: `${88 + i * 36}px`,
                  height: '1px',
                  background: '#E6D4BE55',
                  pointerEvents: 'none',
                }} />
              ))}

              <div style={{ display: 'flex', flexDirection: 'column', gap: '18px', position: 'relative', zIndex: 1 }}>
                {[
                  { id: 'name', label: 'Name', type: 'text', placeholder: 'Your name' },
                  { id: 'email', label: 'Email', type: 'email', placeholder: 'your.email@example.com' },
                ].map(({ id, label, type, placeholder }) => (
                  <div key={id}>
                    <label htmlFor={id} style={{ display: 'block', fontSize: '12px', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#867599', marginBottom: '8px' }}>
                      {label}
                    </label>
                    <input
                      type={type}
                      id={id}
                      name={id}
                      value={formData[id as keyof typeof formData]}
                      onChange={handleChange}
                      required
                      placeholder={placeholder}
                      style={{
                        width: '100%', padding: '10px 14px',
                        borderRadius: '8px',
                        background: '#FFFEF7',
                        border: '1px solid #E6D4BE',
                        color: '#2C4A4A',
                        fontSize: '14px',
                        outline: 'none',
                        transition: 'all 0.2s',
                        boxSizing: 'border-box',
                      }}
                      onFocus={e => {
                        e.target.style.borderColor = '#679F9E';
                        e.target.style.boxShadow = '0 0 0 3px rgba(103,159,158,0.15)';
                      }}
                      onBlur={e => {
                        e.target.style.borderColor = '#E6D4BE';
                        e.target.style.boxShadow = 'none';
                      }}
                    />
                  </div>
                ))}

                <div>
                  <label htmlFor="message" style={{ display: 'block', fontSize: '12px', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#867599', marginBottom: '8px' }}>
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    placeholder="Tell me about your project..."
                    style={{
                      width: '100%', padding: '10px 14px',
                      borderRadius: '8px',
                      background: '#FFFEF7',
                      border: '1px solid #E6D4BE',
                      color: '#2C4A4A',
                      fontSize: '14px',
                      outline: 'none',
                      resize: 'none',
                      transition: 'all 0.2s',
                      boxSizing: 'border-box',
                    }}
                    onFocus={e => {
                      e.target.style.borderColor = '#679F9E';
                      e.target.style.boxShadow = '0 0 0 3px rgba(103,159,158,0.15)';
                    }}
                    onBlur={e => {
                      e.target.style.borderColor = '#E6D4BE';
                      e.target.style.boxShadow = 'none';
                    }}
                  />
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  style={{
                    width: '100%', padding: '12px 24px',
                    borderRadius: '8px',
                    background: 'linear-gradient(135deg, #E18298, #c96e85)',
                    border: 'none',
                    color: '#fff',
                    fontSize: '15px', fontWeight: 500,
                    cursor: 'pointer',
                    display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px',
                    boxShadow: '0 4px 14px rgba(225,130,152,0.35)',
                    transition: 'all 0.2s',
                    marginTop: '4px',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.boxShadow = '0 6px 20px rgba(225,130,152,0.45)';
                    e.currentTarget.style.background = 'linear-gradient(135deg, #d9758a, #bf5e78)';
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.boxShadow = '0 4px 14px rgba(225,130,152,0.35)';
                    e.currentTarget.style.background = 'linear-gradient(135deg, #E18298, #c96e85)';
                  }}
                >
                  <FaPaperPlane style={{ fontSize: '13px' }} />
                  Send Message
                </motion.button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;