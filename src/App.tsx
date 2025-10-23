import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  return (
    <div className="bg-gray-900 text-white">
      <Hero />
      <Skills />
      <Projects />
      <About />
      <Contact />
    </div>
  );
}

export default App;