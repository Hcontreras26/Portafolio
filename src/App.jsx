import hugPhoto from '../assets/Hug.jpg';

const skills = ['HTML5', 'CSS3', 'JavaScript', 'React', 'Responsive Design', 'UI/UX', 'Git', 'Figma'];

const projects = [
  {
    icon: '📱',
    title: 'App de Gestión',
    description: 'Plataforma web para administrar tareas, clientes y reportes con una interfaz intuitiva.',
    tags: ['React', 'CSS', 'API'],
  },
  {
    icon: '🛒',
    title: 'E-commerce',
    description: 'Tienda digital con diseño atractivo, carrito de compras y optimización para móviles.',
    tags: ['HTML', 'JS', 'UX'],
  },
  {
    icon: '📊',
    title: 'Dashboard Analítico',
    description: 'Panel de métricas con visualización clara de KPIs para toma de decisiones rápidas.',
    tags: ['Charts', 'UI', 'Performance'],
  },
];

const jobs = [
  {
    role: 'Frontend Developer',
    place: 'Empresa X · 2023 - Actual',
    text: 'Desarrollo interfaces responsivas, optimización de rendimiento y colaboración con equipos de diseño.',
  },
  {
    role: 'Diseñador Web',
    place: 'Agencia Y · 2021 - 2023',
    text: 'Diseño visual y prototipado para proyectos corporativos, landing pages y campañas digitales.',
  },
  {
    role: 'Freelance',
    place: '2020 - 2021',
    text: 'Atención a clientes para la creación de sitios web, branding y piezas digitales.',
  },
];

const navItems = ['Sobre mí', 'Proyectos', 'Experiencia', 'Contacto'];

function App() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="page-shell">
      <header className="topbar">
        <div className="container nav-wrap">
          <a href="#inicio" className="logo">
            Hugo<span>Contreras</span>
          </a>
          <nav className="menu" aria-label="Navegación principal">
            {navItems.map((item) => {
              const id = item.toLowerCase().replace(/\s+/g, '-');
              return (
                <a key={item} href={`#${id}`}>
                  {item}
                </a>
              );
            })}
          </nav>
        </div>
      </header>

      <main>
        <section id="inicio" className="hero">
          <div className="container hero-banner">
            <div className="hero-text">
              <p className="eyebrow">Software Engineer</p>
              <h1>
                <span className="name-line">Hugo Contreras</span>
                <br />
                I'M A <span>SOFTWARE</span>
                <br />
                ENGINEER
              </h1>
            </div>

            <div className="photo-wrap">
                <img
                  className="profile-photo"
                  src={hugPhoto}
                  alt="Hugo Contreras"
                />
            </div>

            <div className="actions hero-actions">
              <a href="/assets/cv.pdf" className="btn btn-primary" download>
                Descargar CV
              </a>
              <a href="#proyectos" className="btn btn-secondary">
                Ver proyectos
              </a>
            </div>
          </div>
        </section>

        <section id="sobre-mi">
          <div className="container">
            <div className="section-header">
              <span className="eyebrow">Sobre mí</span>
              <h2>Diseño soluciones con enfoque en resultados</h2>
            </div>

            <div className="about-grid">
              <div className="about-box">
                <p>
                  Soy un desarrollador web con experiencia en la creación de interfaces modernas, rápidas y accesibles.
                  Me encanta transformar ideas en productos digitales que conecten con las personas y generen valor real
                  para negocios y usuarios.
                </p>
                <p>
                  Mi trabajo combina diseño visual, experiencia de usuario y desarrollo frontend para construir proyectos
                  funcionales, escalables y con una excelente estética.
                </p>
              </div>

              <div className="about-box">
                <h3>Habilidades principales</h3>
                <div className="skills">
                  {skills.map((skill) => (
                    <span key={skill}>{skill}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="proyectos">
          <div className="container">
            <div className="section-header">
              <span className="eyebrow">Proyectos</span>
              <h2>Trabajos que destacan mi enfoque</h2>
            </div>

            <div className="projects-grid">
              {projects.map((project) => (
                <article className="project-card" key={project.title}>
                  <div className="project-image">{project.icon}</div>
                  <div className="project-info">
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    <div className="project-tags">
                      {project.tags.map((tag) => (
                        <span key={tag}>{tag}</span>
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="experiencia">
          <div className="container">
            <div className="section-header">
              <span className="eyebrow">Experiencia</span>
              <h2>Mi trayectoria profesional</h2>
            </div>

            <div className="experience-grid">
              <div className="card timeline">
                {jobs.map((job) => (
                  <div className="job" key={job.role}>
                    <h3>{job.role}</h3>
                    <div className="meta">{job.place}</div>
                    <p>{job.text}</p>
                  </div>
                ))}
              </div>

              <div className="card">
                <h3>¿Qué ofrezco?</h3>
                <p>
                  Desarrollo de soluciones web modernas, interfaces amigables, experiencia de usuario cuidada y atención a
                  cada detalle visual para mejorar la percepción de tu marca.
                </p>
                <ul className="contact-list">
                  <li><span className="icon">✅</span> Sitios web modernos</li>
                  <li><span className="icon">✅</span> Diseño responsive</li>
                  <li><span className="icon">✅</span> Optimización UX/UI</li>
                  <li><span className="icon">✅</span> Mantenimiento y mejoras</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="contacto">
          <div className="container">
            <div className="section-header">
              <span className="eyebrow">Contacto</span>
              <h2>Hablemos de tu próximo proyecto</h2>
            </div>

            <div className="contact-grid">
              <div className="contact-card">
                <p>Estoy disponible para proyectos freelance, colaboraciones y oportunidades profesionales.</p>
                <ul className="contact-list">
                  <li><span className="icon">📧</span> tuemail@email.com</li>
                  <li><span className="icon">📞</span> +52 555 123 4567</li>
                  <li><span className="icon">📍</span> Ciudad, País</li>
                  <li><span className="icon">💼</span> linkedin.com/in/tuusuario</li>
                </ul>
              </div>

              <div className="contact-card">
                <form
                  onSubmit={(event) => {
                    event.preventDefault();
                  }}
                >
                  <input type="text" placeholder="Tu nombre" />
                  <input type="email" placeholder="Tu correo" />
                  <textarea placeholder="Escribe tu mensaje..."></textarea>
                  <button type="submit" className="btn btn-primary">
                    Enviar mensaje
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="container">© {currentYear} Mi Portafolio. Todos los derechos reservados.</div>
      </footer>
    </div>
  );
}

export default App;
