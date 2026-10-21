import { ThemeProvider } from './components/Theme/ThemeContext';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Experience from './components/Experience/Experience';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import Services from './components/Services/Services';
import Testimonials from './components/Testimonials/Testimonials';
import ParallaxBand from './components/ParallaxBand/ParallaxBand';
import Faq from './components/Faq/Faq';
import Contact from './components/Contact/Contact';
import MobileCTA from './components/MobileCTA/MobileCTA';
import ScrollProgress from './components/ScrollProgress/ScrollProgress';

const App = () => {
  return (
    <>
      <ScrollProgress />
      <ThemeProvider>
        <Navbar />
        <main id="main-content" tabIndex={-1}>
          <Hero />
          <About />
          <Experience />
          <Skills />
          <Projects />
          <Services />
          <Testimonials />
          <ParallaxBand />
          <Faq />
          <Contact />
        </main>
      </ThemeProvider>
      <MobileCTA />
    </>
  );
};

export default App;
