import { ExternalLink } from 'lucide-react';

const Certificates = () => {
  const certificates = [
    {
      id: 1,
      title: 'Desarrollo Web con HTML',
      institution: 'EducacionIT',
      year: '2025',
      image: '/imgs/certificados/Certificado-Desarrollo-Web-con-HTML-EducaciónIT.jpeg',
      url: '/imgs/certificados/Certificado-Desarrollo-Web-con-HTML-EducaciónIT.jpeg'
    },
    {
      id: 2,
      title: 'JavaScript desde Cero',
      institution: 'EducacionIT',
      year: '2025',
      image: '/imgs/certificados/Certificado-Javascript-desde-cero-EducaciónIT.jpeg',
      url: '/imgs/certificados/Certificado-Javascript-desde-cero-EducaciónIT.jpeg'
    },
    {
      id: 3,
      title: 'Maquetador Web Avanzado',
      institution: 'EducacionIT',
      year: '2025',
      image: '/imgs/certificados/Certificado-Maquetador-Web-Avanzado-EducaciónIT.jpeg',
      url: '/imgs/certificados/Certificado-Maquetador-Web-Avanzado-EducaciónIT.jpeg'
    },
    {
      id: 4,
      title: 'Programación orientada a objetos con IA',
      institution: 'EducacionIT',
      year: '2025',
      image: '/imgs/certificados/Certificado-Programación-orientada-a-objetos-con-IA-EducaciónIT.jpeg',
      url: '/imgs/certificados/Certificado-Programación-orientada-a-objetos-con-IA-EducaciónIT.jpeg'
    }
  ];

  return (
    <section id="certificates" className="py-20 bg-slate-800">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">
            Cursos y Certificaciones
          </h2>
          <div className="w-24 h-1 bg-cyan-300 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {certificates.map((cert) => (
            <div
              key={cert.id}
              className="bg-slate-700 rounded-2xl overflow-hidden border border-slate-600"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-6">
                <h3 className="text-lg font-bold text-white mb-2">
                  {cert.title}
                </h3>
                <p className="text-cyan-300 text-sm font-medium mb-4">
                  {cert.institution} | {cert.year}
                </p>

                <button
                  onClick={() => window.open(cert.url, '_blank')}
                  className="w-full flex items-center justify-center gap-2 bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-2 px-4 rounded-lg"
                >
                  <ExternalLink size={16} />
                  <span>Ver Certificado</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;
