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
      <section
        id="about"
        className="py-20 px-6 md:px-12 relative overflow-hidden"
        style={{
          background: 'linear-gradient(160deg, #1a1a2e 0%, #16213e 45%, #1f2b3e 100%)',
        }}
      >
        {/* Mesh gradient blobs */}
        <div aria-hidden style={{
          position: 'absolute', top: '-100px', left: '-80px',
          width: '500px', height: '500px', borderRadius: '50%',
          background: 'radial-gradient(circle at 40% 40%, #86759940 0%, transparent 65%)',
          filter: 'blur(40px)', pointerEvents: 'none',
        }} />
        <div aria-hidden style={{
          position: 'absolute', bottom: '-80px', right: '-60px',
          width: '400px', height: '400px', borderRadius: '50%',
          background: 'radial-gradient(circle at 60% 60%, #679F9E35 0%, transparent 65%)',
          filter: 'blur(40px)', pointerEvents: 'none',
        }} />
        <div aria-hidden style={{
          position: 'absolute', top: '40%', right: '15%',
          width: '260px', height: '260px', borderRadius: '50%',
          background: 'radial-gradient(circle, #E1829820 0%, transparent 70%)',
          filter: 'blur(30px)', pointerEvents: 'none',
        }} />
        <div aria-hidden style={{
          position: 'absolute', top: '10%', right: '25%',
          width: '180px', height: '180px', borderRadius: '50%',
          background: 'radial-gradient(circle, #7DADDB18 0%, transparent 70%)',
          filter: 'blur(25px)', pointerEvents: 'none',
        }} />

        {/* Dot grid */}
        <div aria-hidden style={{
          position: 'absolute', inset: 0,
          backgroundImage: 'radial-gradient(circle, #ffffff08 1px, transparent 1px)',
          backgroundSize: '30px 30px',
          pointerEvents: 'none',
        }} />

        {/* Decorative top-right corner bracket */}
        <div aria-hidden style={{
          position: 'absolute', top: '32px', right: '40px',
          width: '48px', height: '48px',
          borderTop: '2px solid #86759955',
          borderRight: '2px solid #86759955',
          borderRadius: '0 6px 0 0',
        }} />
        <div aria-hidden style={{
          position: 'absolute', bottom: '32px', left: '40px',
          width: '48px', height: '48px',
          borderBottom: '2px solid #679F9E55',
          borderLeft: '2px solid #679F9E55',
          borderRadius: '0 0 0 6px',
        }} />

        <div className="max-w-3xl ml-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Section label */}
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              marginBottom: '20px',
              padding: '4px 14px',
              borderRadius: '999px',
              border: '1px solid #86759955',
              background: '#86759912',
            }}>
              <span style={{
                width: '6px', height: '6px', borderRadius: '50%',
                background: '#E18298', display: 'inline-block',
              }} />
              <span style={{
                fontSize: '11px', letterSpacing: '0.12em',
                textTransform: 'uppercase', color: '#E6D4BE99', fontWeight: 500,
              }}>
                About Me
              </span>
            </div>

            <h2
              className="text-3xl md:text-4xl font-light mb-6"
              style={{ color: '#E6D4BE' }}
            >
              About Me
            </h2>

            <div className="space-y-5 text-base md:text-lg leading-relaxed">
              <p style={{ color: '#E6D4BEcc' }}>
                I'm a{' '}
                <span style={{ color: '#679F9E', fontWeight: 500 }}>Software Engineer</span>{' '}
                with a focus on building full‑stack web applications using{' '}
                <span style={{
                  color: '#7DADDB',
                  background: '#7DADDB12',
                  padding: '1px 6px',
                  borderRadius: '4px',
                }}>Django</span>{' '}
                and{' '}
                <span style={{
                  color: '#7DADDB',
                  background: '#7DADDB12',
                  padding: '1px 6px',
                  borderRadius: '4px',
                }}>React</span>. I enjoy architecting clean REST APIs,
                implementing secure authentication, and creating responsive frontends.
              </p>
              <p style={{ color: '#E6D4BEcc' }}>
                My backend work includes designing scalable database schemas, optimizing queries, and integrating
                third‑party services. On the frontend, I work with TypeScript, Tailwind CSS, and modern React patterns
                to build dashboards and data‑driven interfaces.
              </p>
              <p style={{ color: '#E6D4BEcc' }}>
                I believe in writing maintainable code, documenting thoughtfully, and collaborating effectively.
                Whether it's a complex dashboard or a content‑focused site, I aim to deliver robust, user‑friendly solutions.
              </p>
            </div>

            {/* Divider */}
            <div style={{
              marginTop: '32px', marginBottom: '28px',
              height: '1px',
              background: 'linear-gradient(to right, #86759933, #679F9E44, transparent)',
            }} />

            <motion.button
              onClick={() => setShowModal(true)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              style={{
                display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                padding: '12px 28px',
                borderRadius: '999px',
                border: '1.5px solid #679F9E',
                color: '#679F9E',
                background: 'transparent',
                fontSize: '15px',
                fontWeight: 500,
                cursor: 'pointer',
                transition: 'all 0.25s ease',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background = '#679F9E';
                e.currentTarget.style.color = '#fff';
                e.currentTarget.style.boxShadow = '0 4px 24px #679F9E44';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = 'transparent';
                e.currentTarget.style.color = '#679F9E';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <FaDownload style={{ marginRight: '8px', fontSize: '13px' }} />
              Download CV
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50 p-4"
          style={{ background: 'rgba(10,12,20,0.75)', backdropFilter: 'blur(6px)' }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ type: 'spring', stiffness: 300, damping: 25 }}
            style={{
              background: 'linear-gradient(145deg, #1e2235, #1a1e30)',
              border: '1px solid #86759933',
              borderRadius: '20px',
              padding: '28px',
              maxWidth: '420px',
              width: '100%',
              boxShadow: '0 24px 60px rgba(0,0,0,0.5), 0 0 0 1px #ffffff08',
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
              <h3 style={{ fontSize: '18px', fontWeight: 600, color: '#E6D4BE' }}>Download CV</h3>
              <button
                onClick={() => setShowModal(false)}
                style={{
                  background: '#86759920', border: 'none', borderRadius: '50%',
                  width: '30px', height: '30px', cursor: 'pointer',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: '#867599', transition: 'background 0.2s',
                }}
                onMouseEnter={e => e.currentTarget.style.background = '#86759940'}
                onMouseLeave={e => e.currentTarget.style.background = '#86759920'}
              >
                <FaTimes size={12} />
              </button>
            </div>

            <p style={{ color: '#E6D4BEaa', marginBottom: '10px', fontSize: '14px', lineHeight: '1.6' }}>
              You're about to download my professional CV. It contains my detailed experience, skills, and qualifications.
            </p>
            <p style={{ color: '#E6D4BE66', fontSize: '13px', marginBottom: '24px', lineHeight: '1.6' }}>
              Please use this information responsibly and only for legitimate recruitment purposes.
            </p>

            <div style={{ display: 'flex', gap: '10px' }}>
              <button
                onClick={() => setShowModal(false)}
                style={{
                  flex: 1, padding: '10px 16px',
                  border: '1px solid #86759944', borderRadius: '999px',
                  color: '#E6D4BEaa', background: 'transparent',
                  cursor: 'pointer', fontSize: '14px', transition: 'all 0.2s',
                }}
                onMouseEnter={e => e.currentTarget.style.background = '#86759915'}
                onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
              >
                Cancel
              </button>
              <button
                onClick={handleDownload}
                style={{
                  flex: 1, padding: '10px 16px',
                  border: 'none', borderRadius: '999px',
                  color: '#fff',
                  background: 'linear-gradient(135deg, #679F9E, #7DADDB)',
                  cursor: 'pointer', fontSize: '14px', fontWeight: 500,
                  transition: 'all 0.2s',
                  boxShadow: '0 4px 16px #679F9E33',
                }}
                onMouseEnter={e => e.currentTarget.style.opacity = '0.88'}
                onMouseLeave={e => e.currentTarget.style.opacity = '1'}
              >
                Confirm
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </>
  );
};

export default About;