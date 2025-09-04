import { Mail, MapPin, Github, Linkedin } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-slate-900">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">
            Contacto
          </h2>
          <div className="w-24 h-1 bg-cyan-300 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">¡Hablemos!</h3>
              <p className="text-gray-300 text-lg">
                Estoy siempre abierto a nuevas oportunidades y proyectos interesantes. 
                Si tienes una idea o queres colaborar, no dudes en contactarme.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="flex items-center justify-center w-12 h-12 bg-cyan-500 text-white rounded-lg">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-white font-semibold">Email</p>
                  <a href="mailto:marcosfernandez2033@gmail.com" className="text-cyan-300 hover:text-cyan-400">
                    marcosfernandez2033@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex items-center justify-center w-12 h-12 bg-cyan-500 text-white rounded-lg">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="text-white font-semibold">Ubicación</p>
                  <p className="text-gray-300">Buenos Aires, Argentina</p>
                </div>
              </div>
            </div>

            <div className="flex gap-4 pt-6">
              <a
                href="https://github.com/marcosfernandezzz"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-12 h-12 bg-slate-700 hover:bg-cyan-500 text-white rounded-lg"
              >
                <Github size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/marcos-fernandez-dev-/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-12 h-12 bg-slate-700 hover:bg-cyan-500 text-white rounded-lg"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          <div className="bg-slate-800 rounded-2xl p-8 border border-slate-700">
            <h3 className="text-2xl font-bold text-white mb-6">Enviame un mensaje</h3>
            
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-white font-semibold mb-2">
                  Nombre
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 bg-slate-700 text-white rounded-lg border border-slate-600 focus:border-cyan-300 focus:outline-none"
                  placeholder="Tu nombre"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-white font-semibold mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 bg-slate-700 text-white rounded-lg border border-slate-600 focus:border-cyan-300 focus:outline-none"
                  placeholder="tu@email.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-white font-semibold mb-2">
                  Mensaje
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full px-4 py-3 bg-slate-700 text-white rounded-lg border border-slate-600 focus:border-cyan-300 focus:outline-none resize-none"
                  placeholder="Contame sobre tu proyecto..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-3 px-6 rounded-lg"
              >
                Enviar Mensaje
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;