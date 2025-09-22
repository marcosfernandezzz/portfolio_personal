import { Github, Linkedin, Download } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 pb-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          <div className="flex-shrink-0">
            <div className="w-80 h-80 rounded-full overflow-hidden border-2 border-cyan-300">
              <img
                src="/imgs/foto-marcos.jpg"
                alt="Marcos Fernandez"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="flex-1 text-center lg:text-left">
            <div className="mb-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
                Hola, soy
              </h1>
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-cyan-300 mb-6">
                Marcos Fernandez
              </h2>
            </div>

            <div className="mb-8">
              <p className="text-xl md:text-2xl text-gray-300 font-medium">
                <span className="text-white font-semibold">FullStack Developer</span> y<br />
                Estudiante de{' '}
                <span className="text-cyan-300 font-semibold">Tecnicatura en Programación</span>
              </p>
            </div>

            <div className="flex items-center justify-center lg:justify-start gap-6">
              <a
                href="https://github.com/marcosfernandezzz"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-12 h-12 bg-slate-700 hover:bg-cyan-500 text-white rounded-full"
              >
                <Github size={20} />
              </a>

              <a
                href="https://www.linkedin.com/in/marcos-fernandez-dev-/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-12 h-12 bg-slate-700 hover:bg-cyan-500 text-white rounded-full"
              >
                <Linkedin size={20} />
              </a>

              <a
                href="/public/CV-Marcos-Fernandez.pdf"
                download
                className="flex items-center gap-3 bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-3 rounded-full font-semibold"
              >
                <Download size={18} />
                <span>Descargar CV</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
