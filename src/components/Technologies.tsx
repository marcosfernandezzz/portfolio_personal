import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNodeJs, FaGitAlt, FaJava, FaPython } from 'react-icons/fa';
import { SiMongodb, SiExpress, SiTailwindcss, SiMysql, SiVite } from 'react-icons/si';
import { BsBootstrap } from 'react-icons/bs';

const Technologies = () => {
  const technologies = [
    { name: 'HTML5', icon: <FaHtml5 /> },
    { name: 'CSS3', icon: <FaCss3Alt /> },
    { name: 'JavaScript', icon: <FaJsSquare /> },
    { name: 'React', icon: <FaReact /> },
    { name: 'Node.js', icon: <FaNodeJs /> },
    { name: 'Git', icon: <FaGitAlt /> },
    { name: 'Vite', icon: <SiVite /> },
    { name: 'Bootstrap', icon: <BsBootstrap /> },
    { name: 'MongoDB', icon: <SiMongodb /> },
    { name: 'Express', icon: <SiExpress /> }, 
    { name: 'Tailwind', icon: <SiTailwindcss />},
    { name: 'MySQL', icon: <SiMysql />},
    { name: 'empty-left', icon: null }, // Espacio a la izq
    { name: 'Java', icon: <FaJava />},
    { name: 'Python', icon: <FaPython />},
    { name: 'empty-right', icon: null }, // Espacio a la derecha
  ];

  return (
    <section id="technologies" className="py-20 bg-slate-800">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">
            Tecnologías
          </h2>
          <div className="w-24 h-1 bg-cyan-300 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {technologies.map((tech, index) => (
            tech.icon === null ? (
              <div key={index} className="hidden md:block"></div>
            ) : (
              <div
                key={index}
                className="flex flex-col items-center justify-center p-6 bg-slate-700 rounded-xl hover:bg-slate-600"
              >
                <div className="text-4xl mb-3 text-cyan-300">{tech.icon}</div>
                <h3 className="text-white font-semibold text-lg">{tech.name}</h3>
              </div>
            )
          ))}
        </div>
      </div>
    </section>
  );
};

export default Technologies;
