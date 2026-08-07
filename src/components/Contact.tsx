import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaExternalLinkAlt } from 'react-icons/fa';

/* ─── Palette ──────────────────────────────────────────────────────────────
   Basalt Black  #363636   Leaf Green  #457534
   Sea Grey      #7D8285   Tangerine   #F58F1F (single, deliberate mark)
   ────────────────────────────────────────────────────────────────────── */

/* ─── A small sprig, echoing the Hero's citrus branch ────────────────────── */
const Sprig = () => (
  <svg aria-hidden viewBox="0 0 100 60" style={{ width: '72px', height: 'auto', marginBottom: '18px' }}>
    <motion.path
      d="M4,50 C 20,40 34,30 46,10"
      fill="none" stroke="#457534" strokeWidth={1.4} strokeLinecap="round"
      initial={{ pathLength: 0, opacity: 0 }}
      whileInView={{ pathLength: 1, opacity: 0.7 }}
      viewport={{ once: true }}
      transition={{ duration: 0.9, ease: 'easeInOut' }}
    />
    <motion.path
      d="M46,10 C 40,4 30,2 22,8 C 30,10 38,14 46,10 Z"
      fill="none" stroke="#457534" strokeWidth={1.2} strokeLinecap="round" strokeLinejoin="round"
      initial={{ pathLength: 0, opacity: 0 }}
      whileInView={{ pathLength: 1, opacity: 0.7 }}
      viewport={{ once: true }}
      transition={{ delay: 0.3, duration: 0.7, ease: 'easeInOut' }}
    />
    <motion.circle
      cx={50} cy={9} r={4.5} fill="#F58F1F"
      initial={{ opacity: 0, scale: 0.4 }}
      whileInView={{ opacity: 0.9, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: 0.6, duration: 0.4, ease: 'easeOut' }}
    />
  </svg>
);

const fontVoice = "'EB Garamond', Georgia, serif";
const fontHead = "'Cormorant Garamond', Georgia, serif";

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'success' | 'error' | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch('https://formspree.io/f/xvgwdokn', {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      setStatus(res.ok ? 'success' : 'error');
      if (res.ok) setFormData({ name: '', email: '', message: '' });
    } catch { setStatus('error'); }
    setTimeout(() => setStatus(null), 4000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const fieldStyle: React.CSSProperties = {
    width: '100%', padding: '10px 2px', background: 'transparent',
    border: 'none', borderBottom: '1px solid #7D8285',
    fontFamily: fontVoice, fontSize: '17px', color: '#363636',
    outline: 'none', transition: 'border-color 0.2s',
    boxSizing: 'border-box',
  };

  const contactItems = [
    { icon: FaEnvelope,     label: 'Email',    value: 'sallywanga2016@gmail.com', href: 'mailto:sallywanga2016@gmail.com' },
    { icon: FaPhone,        label: 'Phone',    value: '+254 707 720 597',         href: 'tel:+254707720597' },
    { icon: FaMapMarkerAlt, label: 'Location', value: 'Nairobi, Kenya',           href: undefined },
  ];

  return (
    <section id="contact" className="py-20 md:py-28 px-6 md:px-16 relative" style={{ background: '#F7F4EC' }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;1,400&family=EB+Garamond:ital,wght@0,400;1,500;1,600&display=swap');
      `}</style>

      {/* Toast flat, no glass */}
      <AnimatePresence>
        {status && (
          <motion.div
            initial={{ opacity: 0, y: -16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -16 }}
            style={{
              position: 'fixed', top: '20px', right: '20px', zIndex: 50,
              padding: '12px 22px',
              display: 'flex', alignItems: 'center', gap: '10px',
              fontFamily: fontVoice, fontSize: '15px', fontStyle: 'italic',
              background: status === 'success' ? '#457534' : '#363636',
              color: '#F7F4EC',
              border: `1px solid ${status === 'success' ? '#457534' : '#363636'}`,
            }}
          >
            {status === 'success' ? "Message sent I'll be in touch soon." : "Something went wrong please try again."}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p style={{ fontFamily: fontVoice, fontStyle: 'italic', fontSize: '17px', color: '#457534', marginBottom: '10px' }}>
            Let's talk
          </p>
          <h2 style={{
            fontFamily: fontHead, fontWeight: 500,
            fontSize: 'clamp(2.4rem, 5vw, 3.2rem)', color: '#363636', lineHeight: 1.1,
          }}>
            Get in touch<span style={{ color: '#F58F1F' }}>.</span>
          </h2>
          <p style={{ fontFamily: fontVoice, fontSize: '18px', color: '#7D8285', marginTop: '10px', maxWidth: '32rem' }}>
            I'm always glad to hear about new work, ideas, or projects worth building.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2" style={{ columnGap: '64px', rowGap: '48px' }}>

          {/* Left contact info */}
          <motion.div
            initial={{ opacity: 0, x: -16 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Sprig />
            <div style={{ display: 'flex', flexDirection: 'column', gap: '26px' }}>
              {contactItems.map(({ icon: Icon, label, value, href }) => {
                const inner = (
                  <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                    <div style={{
                      width: '38px', height: '38px', borderRadius: '50%', flexShrink: 0,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      border: '1px solid #7D8285', color: '#7D8285',
                      transition: 'border-color 0.2s, color 0.2s',
                    }}>
                      <Icon size={14} />
                    </div>
                    <div>
                      <div style={{
                        fontFamily: fontVoice, fontStyle: 'italic', fontSize: '13px',
                        color: '#457534', marginBottom: '2px',
                      }}>
                        {label}
                      </div>
                      <div style={{ fontFamily: fontVoice, fontSize: '17px', color: '#363636' }}>
                        {value}
                      </div>
                    </div>
                  </div>
                );
                return href ? (
                  <a key={label} href={href} style={{ textDecoration: 'none' }}
                    onMouseEnter={e => {
                      const circle = e.currentTarget.querySelector('div > div') as HTMLElement;
                      if (circle) { circle.style.borderColor = '#457534'; circle.style.color = '#457534'; }
                    }}
                    onMouseLeave={e => {
                      const circle = e.currentTarget.querySelector('div > div') as HTMLElement;
                      if (circle) { circle.style.borderColor = '#7D8285'; circle.style.color = '#7D8285'; }
                    }}
                  >
                    {inner}
                  </a>
                ) : <div key={label}>{inner}</div>;
              })}
            </div>
          </motion.div>

          {/* Right form */}
          <motion.div
            initial={{ opacity: 0, x: 16 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '26px' }}>
              {[
                { id: 'name', label: 'Your name', type: 'text' },
                { id: 'email', label: 'Your email', type: 'email' },
              ].map(({ id, label, type }) => (
                <div key={id}>
                  <label htmlFor={id} style={{
                    display: 'block', fontFamily: fontVoice, fontStyle: 'italic',
                    fontSize: '14px', color: '#457534', marginBottom: '6px',
                  }}>
                    {label}
                  </label>
                  <input
                    type={type} id={id} name={id}
                    value={formData[id as keyof typeof formData]}
                    onChange={handleChange} required
                    style={fieldStyle}
                    onFocus={e => { e.target.style.borderColor = '#457534'; }}
                    onBlur={e => { e.target.style.borderColor = '#7D8285'; }}
                  />
                </div>
              ))}

              <div>
                <label htmlFor="message" style={{
                  display: 'block', fontFamily: fontVoice, fontStyle: 'italic',
                  fontSize: '14px', color: '#457534', marginBottom: '6px',
                }}>
                  Your message
                </label>
                <textarea
                  id="message" name="message" value={formData.message}
                  onChange={handleChange} required rows={4}
                  style={{ ...fieldStyle, resize: 'none' }}
                  onFocus={e => { e.target.style.borderColor = '#457534'; }}
                  onBlur={e => { e.target.style.borderColor = '#7D8285'; }}
                />
              </div>

              <motion.button type="submit"
                whileHover={{ x: 3 }}
                style={{
                  alignSelf: 'flex-start', marginTop: '8px',
                  padding: '13px 32px',
                  background: '#457534', border: '1px solid #457534',
                  color: '#F7F4EC', fontFamily: fontVoice, fontStyle: 'italic', fontSize: '17px',
                  cursor: 'pointer', transition: 'background 0.15s, color 0.15s',
                }}
                onMouseEnter={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#457534'; }}
                onMouseLeave={e => { e.currentTarget.style.background = '#457534'; e.currentTarget.style.color = '#F7F4EC'; }}
              >
                Send message →
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>

      <div style={{ textAlign: 'center', marginTop: '80px' }}>
        <a href="https://github.com/Mugishaa77/portfolio_" target="_blank" rel="noopener noreferrer"
          style={{
            fontFamily: fontVoice, fontStyle: 'italic', fontSize: '14px',
            color: '#7D8285', textDecoration: 'none',
            display: 'inline-flex', alignItems: 'center', gap: '6px',
            transition: 'color 0.2s',
          }}
          onMouseEnter={e => { e.currentTarget.style.color = '#457534'; }}
          onMouseLeave={e => { e.currentTarget.style.color = '#7D8285'; }}
        >
          <span>Open source</span>
          <FaExternalLinkAlt style={{ fontSize: '9px' }} />
        </a>
      </div>
    </section>
  );
};

export default Contact;