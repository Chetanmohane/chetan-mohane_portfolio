import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import Loader from './components/Loader';
import { useEffect } from 'react';

const App: React.FC = () => {
  useEffect(() => {
    // Reveal animation on load
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show-3d');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('section').forEach((section) => observer.observe(section));

    const moveGlow = (e: MouseEvent) => {
      const glow = document.getElementById('mouse-glow');
      if (glow) {
        glow.style.left = `${e.clientX}px`;
        glow.style.top = `${e.clientY}px`;
      }
    };
    window.addEventListener('mousemove', moveGlow);
    return () => window.removeEventListener('mousemove', moveGlow);
  }, []);

  return (
    <>
      <Loader />
      <CustomCursor />
      {/* Background Elements */}
      <div className="bg-grid" aria-hidden="true" />
      <div className="mouse-glow" id="mouse-glow" aria-hidden="true" />
      <div className="bg-noise" aria-hidden="true" />

      {/* App Content */}
      <div style={{ position: 'relative', zIndex: 1 }}>
        <Navbar />
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default App;
