import { lazy, Suspense } from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Experience from './components/Experience/Experience';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';

// The 3D background pulls in three.js, so it loads in its own chunk
// and never blocks the first paint of the portfolio content.
const ScrollScene = lazy(() => import('./components/ScrollScene'));

const SectionDivider = () => <div className="section-divider" aria-hidden="true" />;

const App = () => {
  return (
    <>
      <Suspense fallback={null}>
        <ScrollScene />
      </Suspense>
      <Navbar />
      <main id="main-content" tabIndex={-1}>
        <Hero />
        <SectionDivider />
        <About />
        <SectionDivider />
        <Skills />
        <SectionDivider />
        <Experience />
        <SectionDivider />
        <Projects />
        <SectionDivider />
        <Contact />
      </main>
    </>
  );
};

export default App;
