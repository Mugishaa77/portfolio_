import { useEffect } from 'react';
import RightSidebar from './components/RightSidebar';
import Nav from './components/Nav'; // hamburger (will be hidden on desktop)
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  // Scroll indicator left border (using candy color)
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;
      const intensity = Math.min(100, scrollPercent);
      document.body.style.borderLeftColor = `rgba(225, 130, 153, ${intensity / 100})`;
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-sandstone min-h-screen">
      {/* Hamburger – visible only on mobile, hidden on desktop */}
      <div className="lg:hidden">
        <Nav />
      </div>

      {/* Main layout: flex row */}
      <div className="flex">
        {/* Main content area with left margin */}
        <main className="flex-1 pl-8 md:pl-12 lg:pl-20 xl:pl-32 py-8">
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Contact />
        </main>

        {/* Right sidebar – only visible on desktop */}
        <div className="hidden lg:block">
          <RightSidebar />
        </div>
      </div>
    </div>
  );
}

export default App;