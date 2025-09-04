import Header from './components/Header.tsx';
import Hero from './components/Hero.tsx';
import Technologies from './components/Technologies.tsx';
import About from './components/About.tsx';
import Projects from './components/Projects.tsx';
import Certificates from './components/Certificates.tsx';
import Contact from './components/Contact.tsx';

function App() {
  return (
    <div className="min-h-screen bg-slate-900">
      <Header />
      <Hero />
      <About />
      <Technologies />
      <Projects />
      <Certificates />
      <Contact />
    </div>
  );
}

export default App;
