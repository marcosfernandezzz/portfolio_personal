const About = () => {
  return (
    <section id="about" className="py-16 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-8">Sobre Mí</h2>
        <div className="max-w-3xl mx-auto text-lg leading-relaxed">
          <p className="mb-4">
            ¡Hola! Soy Marcos, un desarrollador web fullstack apasionado por crear experiencias digitales atractivas y funcionales.
            
          </p>
          <p className="mb-5">
            He trabajado en diversos proyectos, siempre buscando aprender y aplicar las últimas tecnologías. Me especializo en el desarrollo
            backend con NodeJS y Express asi como tambien bases de datos Relacionales y No Relacionales, pero aun asi tengo experiencia con bibliotecas y frameworks frontend, lo que me permite
            abordar proyectos de manera integral.
          </p>
          <p>
            ¡Me encanta el desafío de transformar ideas complejas en soluciones elegantes y eficientes!
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
