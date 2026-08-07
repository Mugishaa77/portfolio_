import { motion } from 'framer-motion';
import {
  SiDjango, SiPython, SiReact, SiTypescript, SiTailwindcss,
  SiNextdotjs, SiPostgresql, SiDocker, SiGit, SiLinux, SiVite,
  SiNodedotjs, SiPrisma,
} from 'react-icons/si';
import { FaServer, FaDatabase, FaKey, FaUsers, FaTachometerAlt, FaBook, FaProjectDiagram, FaTerminal } from 'react-icons/fa';

const skills = [
  { icon: SiDjango, name: 'Django', category: 'backend' },
  { icon: SiPython, name: 'Python', category: 'backend' },
  { icon: FaServer, name: 'REST APIs', category: 'backend' },
  { icon: SiPostgresql, name: 'PostgreSQL', category: 'backend' },
  { icon: SiDocker, name: 'Docker', category: 'backend' },
  { icon: SiNodedotjs, name: 'Node.js', category: 'backend' },
  { icon: SiPrisma, name: 'Prisma', category: 'backend' },
  { icon: FaProjectDiagram, name: 'Data Structures & Algorithms', category: 'backend' },
  { icon: SiReact, name: 'React', category: 'frontend' },
  { icon: SiTypescript, name: 'TypeScript', category: 'frontend' },
  { icon: SiVite, name: 'Vite', category: 'frontend' },
  { icon: SiTailwindcss, name: 'Tailwind', category: 'frontend' },
  { icon: SiNextdotjs, name: 'Next.js', category: 'frontend' },
  { icon: FaTachometerAlt, name: 'LCP / Web Vitals', category: 'frontend' },
  { icon: SiGit, name: 'Git/GitHub', category: 'devops' },
  { icon: SiLinux, name: 'Linux', category: 'devops' },
  { icon: FaKey, name: 'JWT Auth', category: 'devops' },
  { icon: FaDatabase, name: 'MySQL', category: 'devops' },
  { icon: FaUsers, name: 'Atlassian', category: 'devops' },
  { icon: FaBook, name: 'Documentation', category: 'devops' },
  { icon: FaTerminal, name: 'Scripting', category: 'devops' },
];

const categoryMeta = {
  backend: { label: 'Backend & APIs', accent: '#457534' },
  frontend: { label: 'Frontend', accent: '#F58F1F' },
  devops: { label: 'DevOps & Tools', accent: '#7D8285' },
};

// ALL skills as ghosted icons, distributed to fill the right side vertically
const ghostIcons = [
  { Icon: SiDjango,         color: '#457534', top: '3%',  left: '82%', size: 58, delay: 0,   duration: 14, xOffset: 8,   yOffset: -6 },
  { Icon: SiPython,         color: '#457534', top: '8%',  left: '88%', size: 62, delay: 0.3, duration: 12, xOffset: -10, yOffset: 8  },
  { Icon: FaServer,         color: '#457534', top: '13%', left: '78%', size: 54, delay: 0.6, duration: 15, xOffset: 6,   yOffset: -4 },
  { Icon: SiPostgresql,     color: '#457534', top: '18%', left: '86%', size: 66, delay: 0.9, duration: 13, xOffset: -8,  yOffset: 10 },
  { Icon: SiDocker,         color: '#457534', top: '23%', left: '80%', size: 60, delay: 1.2, duration: 11, xOffset: 10,  yOffset: -8 },
  { Icon: SiNodedotjs,      color: '#457534', top: '28%', left: '89%', size: 56, delay: 1.5, duration: 16, xOffset: -6,  yOffset: 6  },
  { Icon: SiPrisma,         color: '#457534', top: '33%', left: '84%', size: 52, delay: 1.8, duration: 14, xOffset: 8,   yOffset: -5 },
  { Icon: FaProjectDiagram, color: '#457534', top: '38%', left: '91%', size: 60, delay: 2.1, duration: 12, xOffset: -12, yOffset: 9  },

  { Icon: SiReact,          color: '#F58F1F', top: '43%', left: '79%', size: 68, delay: 2.4, duration: 15, xOffset: 7,   yOffset: -7 },
    { Icon: SiVite,           color: '#F58F1F', top: '50%', left: '75%', size: 56, delay: 2.5, duration: 13, xOffset: 6,   yOffset: -6 },
  { Icon: SiTypescript,     color: '#F58F1F', top: '48%', left: '87%', size: 56, delay: 2.7, duration: 13, xOffset: -9,  yOffset: 8  },
  { Icon: SiTailwindcss,    color: '#F58F1F', top: '53%', left: '81%', size: 52, delay: 3,   duration: 11, xOffset: 6,   yOffset: -6 },
  { Icon: SiNextdotjs,      color: '#F58F1F', top: '58%', left: '90%', size: 64, delay: 0.4, duration: 14, xOffset: -7,  yOffset: 5  },
  { Icon: FaTachometerAlt,  color: '#F58F1F', top: '63%', left: '83%', size: 54, delay: 0.7, duration: 12, xOffset: 8,   yOffset: -4 },

  { Icon: SiGit,            color: '#7D8285', top: '68%', left: '77%', size: 58, delay: 1,   duration: 15, xOffset: -5,  yOffset: 6  },
  { Icon: SiLinux,          color: '#7D8285', top: '73%', left: '85%', size: 60, delay: 1.3, duration: 13, xOffset: 9,   yOffset: -8 },
  { Icon: FaKey,            color: '#7D8285', top: '78%', left: '90%', size: 54, delay: 1.6, duration: 11, xOffset: -6,  yOffset: 7  },
  { Icon: FaDatabase,       color: '#7D8285', top: '83%', left: '80%', size: 56, delay: 1.9, duration: 14, xOffset: 7,   yOffset: -5 },
  { Icon: FaUsers,          color: '#7D8285', top: '88%', left: '88%', size: 52, delay: 2.2, duration: 12, xOffset: -8,  yOffset: 6  },
  { Icon: FaBook,           color: '#7D8285', top: '93%', left: '82%', size: 58, delay: 2.5, duration: 16, xOffset: 6,   yOffset: -6 },
  { Icon: FaTerminal,       color: '#7D8285', top: '98%', left: '86%', size: 54, delay: 2.8, duration: 13, xOffset: -7,  yOffset: 8  },
];

const Skills = () => {
  const groupedSkills = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) acc[skill.category] = [];
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<string, typeof skills>);

  // Dots arc (unchanged, stays in the middle-right area)
  const dotCount = 8;
  const centerX = 88;
  const centerY = 50;
  const radiusX = 14;
  const radiusY = 22;
  const startAngle = -50;
  const endAngle = 230;

  const dots = Array.from({ length: dotCount }).map((_, i) => {
    const angle = startAngle + (i / (dotCount - 1)) * (endAngle - startAngle);
    const rad = (angle * Math.PI) / 180;
    const left = centerX + radiusX * Math.cos(rad);
    const top = centerY + radiusY * Math.sin(rad);
    return { left, top };
  });

  return (
    <section
      id="skills"
      className="py-20 px-6 md:px-12 relative overflow-hidden"
      style={{ background: '#F7F4EC' }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;1,400&family=EB+Garamond:ital,wght@0,400;1,500;1,600&display=swap');
      `}</style>

      {/* Wavy SVG divider top */}
      <div aria-hidden style={{ position: 'absolute', top: 0, left: 0, right: 0, lineHeight: 0 }}>
        <svg viewBox="0 0 1440 48" xmlns="http://www.w3.org/2000/svg" style={{ display: 'block', width: '100%' }}>
          <path d="M0,24 C240,48 480,0 720,24 C960,48 1200,0 1440,24 L1440,0 L0,0 Z" fill="#26221E" fillOpacity="0.06" />
        </svg>
      </div>

      {/* Subtle cross-hatch pattern */}
      <div aria-hidden style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        backgroundImage: `
          linear-gradient(#7D828510 1px, transparent 1px),
          linear-gradient(90deg, #7D828510 1px, transparent 1px)
        `,
        backgroundSize: '48px 48px',
        maskImage: 'radial-gradient(ellipse at 50% 50%, black 30%, transparent 80%)',
      }} />

      {/* === ALL GHOSTED ICONS (20 icons, filling the right side from top to bottom) === */}
      {ghostIcons.map(({ Icon, color, top, left, size, delay, duration, xOffset, yOffset }, idx) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{
            opacity: [0.35, 0.55, 0.35],
            y: [0, yOffset, 0],
            x: [0, xOffset, 0],
            scale: [0.95, 1.05, 0.95],
          }}
          transition={{ duration, delay, repeat: Infinity, ease: 'easeInOut' }}
          style={{
            position: 'absolute',
            top,
            left,
            pointerEvents: 'none',
            zIndex: 0,
          }}
        >
          <Icon style={{ fontSize: size, color, opacity: 0.45, filter: 'blur(0.8px)' }} />
        </motion.div>
      ))}

      {/* === DELICATE PARTICLE RING (dots + dashed line) - unchanged === */}
      <svg
        aria-hidden
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      >
        <path
          d={`
            M ${dots[0].left}% ${dots[0].top}%
            A ${radiusX} ${radiusY} 0 0 1 ${dots[dots.length - 1].left}% ${dots[dots.length - 1].top}%
          `}
          fill="none"
          stroke="#457534"
          strokeWidth="1.2"
          strokeDasharray="3 6"
          opacity="0.4"
        />
      </svg>

      {dots.map((dot, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: [0.5, 0.85, 0.5],
            scale: [0.9, 1.2, 0.9],
            x: [0, (i % 2 === 0 ? 6 : -6), 0],
            y: [0, (i % 3 === 0 ? -8 : 5), 0],
          }}
          transition={{
            duration: 6 + i,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: i * 0.4,
          }}
          style={{
            position: 'absolute',
            left: `${dot.left}%`,
            top: `${dot.top}%`,
            width: '6px',
            height: '6px',
            borderRadius: '50%',
            background: i % 3 === 0 ? '#457534' : (i % 3 === 1 ? '#F58F1F' : '#7D8285'),
            boxShadow: `0 0 8px ${i % 3 === 0 ? '#457534' : (i % 3 === 1 ? '#F58F1F' : '#7D8285')}`,
            pointerEvents: 'none',
            zIndex: 0,
          }}
        />
      ))}

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
            marginBottom: '16px',
          }}>
            <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#457534', display: 'inline-block' }} />
            <p style={{
              fontFamily: "'EB Garamond', Georgia, serif",
              fontStyle: 'italic', fontSize: '17px', color: '#457534',
            }}>
              My tech stack
            </p>
          </div>
          <h2 style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontWeight: 500,
            fontSize: 'clamp(2.2rem, 4.5vw, 3.2rem)',
            color: '#363636',
            marginBottom: '10px',
            letterSpacing: '-0.01em',
          }}>
            Skills & tools<span style={{ color: '#F58F1F' }}>.</span>
          </h2>
          <p style={{
            fontFamily: "'EB Garamond', Georgia, serif",
            fontSize: '18px', color: '#7D8285',
          }}>
            Tools and technologies I use for systems, UIs, and modern React frameworks
          </p>
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
                    fontFamily: "'EB Garamond', Georgia, serif",
                    fontStyle: 'italic',
                    fontSize: '17px',
                    color: meta.accent,
                  }}>
                    {meta.label}
                  </h3>
                  <div style={{ flex: 1, height: '1px', background: `linear-gradient(to right, ${meta.accent}33, transparent)` }} />
                </div>

                {/* Skill cards */}
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
                        borderRadius: '8px',
                        border: `1px solid #363636`,
                        background: '#FFFDF8',
                        transition: 'all 0.2s ease',
                        cursor: 'default',
                      }}
                        onMouseEnter={e => {
                          (e.currentTarget as HTMLDivElement).style.borderColor = `${meta.accent}`;
                          (e.currentTarget as HTMLDivElement).style.boxShadow = `4px 4px 0 ${meta.accent}`;
                        }}
                        onMouseLeave={e => {
                          (e.currentTarget as HTMLDivElement).style.borderColor = '#363636';
                          (e.currentTarget as HTMLDivElement).style.boxShadow = 'none';
                        }}
                      >
                        <skill.icon style={{ fontSize: '26px', color: meta.accent }} />
                        <span style={{
                          fontFamily: "'EB Garamond', Georgia, serif",
                          fontSize: '13px', color: '#5C5F61', whiteSpace: 'nowrap',
                        }}>
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
            borderRadius: '8px',
            border: '1px solid #363636',
            background: '#FFFDF8',
          }}>
            <span style={{ fontSize: '14px' }}>⚡</span>
            <p style={{
              fontFamily: "'EB Garamond', Georgia, serif",
              fontStyle: 'italic',
              fontSize: '14px', color: '#457534',
            }}>
              Full-stack engineer · Systems & UI · Next.js · Django
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;