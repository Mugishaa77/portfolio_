import { motion } from 'framer-motion';
import {
  SiDjango, SiPython, SiReact, SiTypescript, SiTailwindcss,
  SiNextdotjs, SiPostgresql, SiDocker, SiGit, SiLinux,
} from 'react-icons/si';
import { FaServer, FaDatabase, FaKey, FaUsers } from 'react-icons/fa';

const skills = [
  { icon: SiDjango, name: 'Django', category: 'backend' },
  { icon: SiPython, name: 'Python', category: 'backend' },
  { icon: FaServer, name: 'REST APIs', category: 'backend' },
  { icon: SiPostgresql, name: 'PostgreSQL', category: 'backend' },
  { icon: SiDocker, name: 'Docker', category: 'backend' },
  { icon: SiReact, name: 'React', category: 'frontend' },
  { icon: SiTypescript, name: 'TypeScript', category: 'frontend' },
  { icon: SiTailwindcss, name: 'Tailwind', category: 'frontend' },
  { icon: SiNextdotjs, name: 'Next.js', category: 'frontend' },
  { icon: SiGit, name: 'Git/GitHub', category: 'devops' },
  { icon: SiLinux, name: 'Linux', category: 'devops' },
  { icon: FaKey, name: 'JWT Auth', category: 'devops' },
  { icon: FaDatabase, name: 'MySQL', category: 'devops' },
  { icon: FaUsers, name: 'Agile', category: 'devops' },
];

const categoryMeta = {
  backend: { label: 'Backend & APIs', accent: '#679F9E', glow: '#679F9E22' },
  frontend: { label: 'Frontend', accent: '#7DADDB', glow: '#7DADDB22' },
  devops: { label: 'DevOps & Tools', accent: '#E18298', glow: '#E1829822' },
};

const Skills = () => {
  const groupedSkills = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) acc[skill.category] = [];
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<string, typeof skills>);

  return (
    <section
      id="skills"
      className="py-20 px-6 md:px-12 relative overflow-hidden"
      style={{
        background: `
          radial-gradient(ellipse at 0% 0%, #E6D4BE18 0%, transparent 55%),
          radial-gradient(ellipse at 100% 100%, #86759918 0%, transparent 55%),
          radial-gradient(ellipse at 80% 10%, #679F9E12 0%, transparent 45%),
          linear-gradient(175deg, #faf8f5 0%, #f3ede6 50%, #eee6dc 100%)
        `,
      }}
    >
      {/* Wavy SVG divider top */}
      <div aria-hidden style={{ position: 'absolute', top: 0, left: 0, right: 0, lineHeight: 0 }}>
        <svg viewBox="0 0 1440 48" xmlns="http://www.w3.org/2000/svg" style={{ display: 'block', width: '100%' }}>
          <path d="M0,24 C240,48 480,0 720,24 C960,48 1200,0 1440,24 L1440,0 L0,0 Z" fill="#16213e" fillOpacity="0.06" />
        </svg>
      </div>

      {/* Subtle cross-hatch pattern */}
      <div aria-hidden style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        backgroundImage: `
          linear-gradient(#86759910 1px, transparent 1px),
          linear-gradient(90deg, #86759910 1px, transparent 1px)
        `,
        backgroundSize: '48px 48px',
        maskImage: 'radial-gradient(ellipse at 50% 50%, black 30%, transparent 80%)',
      }} />

      {/* Large faint circle accent */}
      <div aria-hidden style={{
        position: 'absolute', right: '-120px', top: '50%',
        transform: 'translateY(-50%)',
        width: '500px', height: '500px', borderRadius: '50%',
        border: '1.5px solid #86759920',
        pointerEvents: 'none',
      }} />
      <div aria-hidden style={{
        position: 'absolute', right: '-60px', top: '50%',
        transform: 'translateY(-50%)',
        width: '360px', height: '360px', borderRadius: '50%',
        border: '1.5px solid #679F9E15',
        pointerEvents: 'none',
      }} />

      <div className="max-w-4xl w-full relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: '8px',
            marginBottom: '16px', padding: '4px 14px',
            borderRadius: '999px',
            border: '1px solid #86759944',
            background: '#86759910',
          }}>
            <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#E18298', display: 'inline-block' }} />
            <span style={{ fontSize: '11px', letterSpacing: '0.12em', textTransform: 'uppercase', color: '#867599', fontWeight: 500 }}>
              Tech Stack
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-light text-azur mb-3">Tech Stack</h2>
          <p style={{ color: '#6b7280' }}>Tools and technologies I work with daily</p>
        </motion.div>

        {/* Skill groups */}
        <div className="space-y-10">
          {Object.entries(groupedSkills).map(([category, items]) => {
            const meta = categoryMeta[category as keyof typeof categoryMeta];
            return (
              <div key={category}>
                {/* Category label */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
                  <span style={{
                    display: 'inline-block', width: '10px', height: '10px',
                    borderRadius: '50%', background: meta.accent,
                    boxShadow: `0 0 8px ${meta.accent}88`,
                  }} />
                  <h3 style={{
                    fontSize: '11px', fontWeight: 600,
                    letterSpacing: '0.13em', textTransform: 'uppercase',
                    color: meta.accent,
                  }}>
                    {meta.label}
                  </h3>
                  <div style={{ flex: 1, height: '1px', background: `linear-gradient(to right, ${meta.accent}33, transparent)` }} />
                </div>

                {/* Skill cards — wrapping grid with generous spacing */}
                <div style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '12px',
                }}>
                  {items.map((skill, idx) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: idx * 0.04 }}
                      whileHover={{ y: -3, scale: 1.03 }}
                      style={{
                        minWidth: '100px',
                        flex: '0 0 auto',
                      }}
                    >
                      <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '8px',
                        padding: '16px 20px',
                        borderRadius: '14px',
                        border: `1px solid ${meta.accent}28`,
                        background: `linear-gradient(145deg, #ffffff, #faf8f5)`,
                        boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
                        transition: 'all 0.2s ease',
                        cursor: 'default',
                      }}
                        onMouseEnter={e => {
                          (e.currentTarget as HTMLDivElement).style.borderColor = `${meta.accent}66`;
                          (e.currentTarget as HTMLDivElement).style.boxShadow = `0 6px 20px ${meta.accent}22`;
                          (e.currentTarget as HTMLDivElement).style.background = `linear-gradient(145deg, #fff, ${meta.glow})`;
                        }}
                        onMouseLeave={e => {
                          (e.currentTarget as HTMLDivElement).style.borderColor = `${meta.accent}28`;
                          (e.currentTarget as HTMLDivElement).style.boxShadow = '0 2px 8px rgba(0,0,0,0.05)';
                          (e.currentTarget as HTMLDivElement).style.background = 'linear-gradient(145deg, #ffffff, #faf8f5)';
                        }}
                      >
                        <skill.icon style={{ fontSize: '26px', color: meta.accent }} />
                        <span style={{ fontSize: '12px', fontWeight: 500, color: '#4b5563', whiteSpace: 'nowrap' }}>
                          {skill.name}
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer tag */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          style={{ marginTop: '48px' }}
        >
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: '10px',
            padding: '10px 20px',
            borderRadius: '999px',
            border: '1px solid #86759933',
            background: 'rgba(255,255,255,0.7)',
            backdropFilter: 'blur(8px)',
            boxShadow: '0 2px 12px rgba(134,117,153,0.08)',
          }}>
            <span style={{ fontSize: '14px' }}>⚡</span>
            <p style={{ fontSize: '12px', color: '#6b7280' }}>
              Full‑stack engineer • Django + React • Agile practitioner
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;