import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import TechMarquee from './components/TechMarquee/TechMarquee';
import About from './components/About/About';
import Services from './components/Services/Services';
import Skills from './components/Skills/Skills';
import Experience from './components/Experience/Experience';
import ParallaxBand from './components/ParallaxBand/ParallaxBand';
import Projects from './components/Projects/Projects';
import Faq from './components/Faq/Faq';
import Contact from './components/Contact/Contact';
import MobileCTA from './components/MobileCTA/MobileCTA';
import ScrollProgress from './components/ScrollProgress/ScrollProgress';

const App = () => {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main id="main-content" tabIndex={-1}>
        <Hero />
        <TechMarquee />
        <About />
        <Services />
        <Skills />
        <Experience />
        <ParallaxBand />
        <Projects />
        <Faq />
        <Contact />
      </main>
      <MobileCTA />
    </>
  );
};

export default App;
