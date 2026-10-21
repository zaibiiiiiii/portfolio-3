import { lazy, Suspense } from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Services from './components/Services/Services';
import Skills from './components/Skills/Skills';
import Experience from './components/Experience/Experience';
import Projects from './components/Projects/Projects';
import Faq from './components/Faq/Faq';
import Contact from './components/Contact/Contact';
import MobileCTA from './components/MobileCTA/MobileCTA';

const SectionDivider = () => <div className="section-divider" aria-hidden="true" />;

const App = () => {
  return (
    <>
      <Navbar />
      <main id="main-content" tabIndex={-1}>
        <Hero />
        <About />
        <Services />
        <Skills />
        <Experience />
        <Projects />
        <Faq />
        <Contact />
      </main>
      <MobileCTA />
    </>
  );
};

export default App;
