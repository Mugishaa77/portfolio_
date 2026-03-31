import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const sections = [
  { id: 'hero', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
];

const RightSidebar = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // Update scroll progress (0 to 1)
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? scrollTop / docHeight : 0;
      setScrollProgress(progress);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.4 } // Adjust threshold as needed
    );

    sections.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // initial call

    return () => {
      sections.forEach(({ id }) => {
        const element = document.getElementById(id);
        if (element) observer.unobserve(element);
      });
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id);
    }
  };

  // Calculate the Y position of the active indicator (for a moving dot)
  const activeIndex = sections.findIndex((s) => s.id === activeSection);
  const indicatorTop = activeIndex * 44; // 44px per link (approx)

  return (
    <aside className="fixed right-8 top-1/2 -translate-y-1/2 hidden lg:block z-40">
      <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-sm border border-heather/20">
        <nav className="relative">
          {/* Vertical line that fills with scroll */}
          <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-heather/30">
            <motion.div
              className="absolute left-0 top-0 w-full bg-viridian"
              style={{ height: `${scrollProgress * 100}%` }}
              transition={{ ease: 'linear' }}
            />
          </div>

          {/* Section links */}
          <ul className="space-y-6 pl-5">
            {sections.map((section, idx) => (
              <li key={section.id}>
                <button
                  onClick={() => scrollToSection(section.id)}
                  className={`text-sm font-medium transition-colors ${
                    activeSection === section.id
                      ? 'text-viridian'
                      : 'text-azur/70 hover:text-viridian'
                  }`}
                >
                  {section.label}
                </button>
              </li>
            ))}
          </ul>

          {/* Optional moving dot (alternative indicator) */}
          {/* <motion.div
            className="absolute left-0 w-1 h-1 bg-viridian rounded-full"
            style={{ top: indicatorTop + 20 }}
            animate={{ top: indicatorTop + 20 }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          /> */}
        </nav>
      </div>
    </aside>
  );
};

export default RightSidebar;