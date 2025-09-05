import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'Rumbox',
      subtitle: 'Fundacion Banco Nacion | Fundacion Pescar',
      description: 'Proyecto integrador desarrollado de manera colaborativa y presentado en las oficinas de Valtech. Se trata de un e-commerce orientado a centralizar la compra de productos de viajes, brindando kits personalizados para cada tipo de zona.',
      image: '/imgs/proyectos/rumbox_home.jpg',
      technologies: ['HTML', 'CSS', 'JavaScript', 'React', 'Node', 'Express', 'MongoDB', 'TailwindCSS'],
      github: 'https://github.com/marcosfernandezzz/rumbox_PESCAR',
      demo: 'https://rumbox.netlify.app/'
    },
    {
      id: 2,
      title: 'Punto de Control',
      subtitle: 'Universidad Tecnologica Nacional Avellaneda',
      description: 'Proyecto integrador grupal desarrollado para final de la asignatura. Punto de Control es una pagina web de autogestion diseñada para brindarla a una tienda de videojuegos. Tambien cuenta con un apartado de admin funcional.',
      image: '/imgs/proyectos/punto_de_control.png',
      technologies: ['HTML', 'CSS', 'JavaScript', 'Node', 'Express', 'MySQL', 'BootsTrap'],
      github: 'https://github.com/MarcosPucci/Progra3_Parcial2.git',
      demo: ''
    }
  ];

  return (
    <section id="projects" className="py-20 bg-slate-900">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">
            Proyectos
          </h2>
          <div className="w-24 h-1 bg-cyan-300 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-slate-800 rounded-2xl overflow-hidden border border-slate-700"
            >
              <div className="h-64 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-6">
                <div className="mb-4">
                  <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                  <p className="text-cyan-300 text-sm font-medium italic">{project.subtitle}</p>
                </div>

                <p className="text-gray-300 mb-6">
                  {project.description}
                </p>

                <div className="flex gap-3 mb-4">
                  <a
                    href={project.github}
                    className="flex items-center gap-2 px-4 py-2 bg-slate-700 text-white rounded-lg hover:bg-cyan-500"
                  >
                    <Github size={16} />
                    <span>GitHub</span>
                  </a>
                  <a
                    href={project.demo}
                    className="flex items-center gap-2 px-4 py-2 bg-cyan-500 text-white rounded-lg hover:bg-cyan-600"
                  >
                    <ExternalLink size={16} />
                    <span>Demo</span>
                  </a>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-cyan-500/20 text-cyan-300 text-sm font-medium rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
