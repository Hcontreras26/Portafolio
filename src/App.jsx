import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  Sun,
  Moon,
  Download,
  Eye,
  Mail,
  MapPin,
  Code2,
  Sparkles,
  Briefcase,
  X,
  Menu,
  Terminal,
  Layers,
  CheckCircle2,
  Calendar,
  MessageCircle,
  ArrowDown
} from 'lucide-react';
import hugoSuitImg from '../assets/hugo-suit.png';
import hugoLaptopImg from '../assets/hugo-laptop.png';
import wsiImg from '../assets/wsi-project.png';
import lakatuarImg from '../assets/lakatuar-project.png';
import reporteImg from '../assets/reporte-latinoamerica-project.png';

const technicalSkills = [
  'Python',
  'TypeScript',
  'JavaScript',
  'React & Vite',
  'Next.js',
  'Django / DRF',
  'PostgreSQL',
  'MySQL',
  'SQL',
  'Node.js',
  'Tailwind CSS',
  'WordPress',
  'Git & GitHub',
  'REST APIs',
  'UI/UX'
];

const projects = [
  {
    image: wsiImg,
    title: 'WSI – Gestión de Flota & Mantenimiento',
    subtitle: 'World Service International',
    description: 'Plataforma web para la gestión centralizada de vehículos, mantenimientos preventivos y correctivos, control documental y reporte de fallas.',
    tags: ['React + Vite', 'Django REST', 'PostgreSQL', 'UI/UX'],
  },
  {
    image: lakatuarImg,
    title: 'La Katuar News',
    subtitle: 'Portal de Medios & Streaming',
    description: 'Plataforma web multimedia construida con TypeScript y Next.js para transmisión en vivo, cobertura de noticias y programación audiovisual interactiva.',
    tags: ['TypeScript', 'Next.js / React', 'Tailwind CSS', 'Streaming & APIs'],
  },
  {
    image: reporteImg,
    title: 'Reporte Latinoamérica',
    subtitle: 'Medio de Comunicación Digital',
    description: 'Portal informativo de alcance internacional con arquitectura escalable de contenidos, estrategias SEO técnico y distribución de noticias en tiempo real.',
    tags: ['WordPress', 'SEO Técnico', 'JavaScript', 'Web Performance'],
  },
];

const jobs = [
  {
    role: 'Community Manager & Digital Operations',
    place: 'Rainbet · 2024 - 2026',
    text: 'Gestión técnica de comunidades digitales y moderación avanzada de plataformas automatizadas. Análisis de métricas de engagement y optimización de flujos estructurales de comunicación corporativa.',
  },
  {
    role: 'Content Engineer / Esp. Publicación Digital',
    place: 'Reportes Latinoamérica · 2022 - 2025',
    text: 'Administré y optimicé sitios WordPress orientados a medios digitales, implementando estrategias SEO y mejoras de rendimiento para aumentar la velocidad de publicación y visibilidad del contenido.',
  },
  {
    role: 'Representante de Ventas',
    place: 'Nelsongalletas · 2023 - 2025',
    text: 'Gestión controlada de cartera de clientes estratégicos y optimización de procesos logísticos de venta directa.',
  },
  {
    role: 'Agente de Call Center & Soluciones',
    place: 'Data Center · 2018 - 2021',
    text: 'Venta consultiva especializada de soluciones y enlace dinámico directo entre los requerimientos de arquitectura del cliente y las capacidades de infraestructura del centro de datos.',
  },
];

const navItems = [
  { name: 'Sobre mí', href: '#sobre-mi' },
  { name: 'Proyectos', href: '#proyectos' },
  { name: 'Experiencia', href: '#experiencia' },
  { name: 'Contacto', href: '#contacto' },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1
    }
  }
};

function App() {
  const currentYear = new Date().getFullYear();

  // Dark/Light Mode state
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) return savedTheme;
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light';
  });

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <div className="page-shell">
      {/* Navigation Topbar */}
      <header className="topbar">
        <div className="container nav-wrap">
          <a href="#inicio" className="logo">
            <Sparkles size={20} className="logo-sparkle" />
            Hugo<span>Contreras</span>
          </a>

          <div className="nav-right">
            <nav className={`menu ${mobileMenuOpen ? 'mobile-open' : ''}`} aria-label="Navegación principal">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
            </nav>

            {/* Dark Mode Toggle */}
            <motion.button
              whileTap={{ scale: 0.9 }}
              whileHover={{ scale: 1.08 }}
              className="theme-toggle-btn"
              onClick={toggleTheme}
              aria-label={theme === 'dark' ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'}
              title={theme === 'dark' ? 'Modo Claro' : 'Modo Oscuro'}
            >
              {theme === 'dark' ? (
                <Sun size={19} className="theme-icon sun" />
              ) : (
                <Moon size={19} className="theme-icon moon" />
              )}
            </motion.button>

            {/* Mobile Menu Button */}
            <button
              className="mobile-menu-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Abrir menú de navegación"
            >
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section id="inicio" className="hero">
          <div className="container">
            <div className="hero-composition">
              {/* Background Big Typography */}
              <motion.div
                className="hero-background-title"
                initial={{ opacity: 0, y: -25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              >
                <div>
                  I'M A <span className="software-highlight">SOFTWARE</span>
                </div>
                <div>ENGINEER</div>
              </motion.div>

              {/* Foreground Cutout Person Stage with Circular Download CV Badge */}
              <motion.div
                className="hero-person-stage"
                initial={{ opacity: 0, scale: 0.9, y: 35 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              >
                <img
                  className="hero-suit-photo"
                  src={hugoSuitImg}
                  alt="Hugo Santiago Contreras Ortega - Software Engineer"
                />

                {/* Circular Rotating Download CV Badge */}
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.92 }}
                  href="/assets/cv.pdf"
                  download="Hugo_Contreras_CV.pdf"
                  className="scroll-down-badge"
                  title="Descargar Curriculum Vitae en PDF"
                  aria-label="Descargar CV en PDF"
                >
                  <svg viewBox="0 0 100 100" className="scroll-svg-text">
                    <path
                      id="scrollCirclePath"
                      d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                      fill="none"
                    />
                    <text fill="currentColor" fontSize="9.2" fontWeight="800" letterSpacing="2.2">
                      <textPath href="#scrollCirclePath" startOffset="0%">
                        • DESCARGAR CV • DESCARGAR CV
                      </textPath>
                    </text>
                  </svg>
                  <Download size={24} className="download-badge-icon" />
                </motion.a>
              </motion.div>
            </div>
          </div>
        </section>

        {/* About Me Section */}
        <motion.section
          id="sobre-mi"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInUp}
        >
          <div className="container">
            <div className="about-showcase">
              <div className="about-content">
                <span className="about-eyebrow">HOLA</span>
                <h2 className="about-title">Soy Hugo Contreras</h2>

                <p className="about-desc">
                  <strong>Ingeniero en Informática</strong> egresado de la <strong>Universidad Rafael Belloso Chacín (URBE)</strong>. Me especializo en la concepción y desarrollo de ecosistemas digitales completos, uniendo arquitecturas de backend eficientes (<strong>Python / Django, Node.js</strong>) con interfaces de usuario modernas, reactivas y accesibles (<strong>React, TypeScript, JavaScript</strong>).
                </p>

                <p className="about-desc">
                  Me defino como un profesional autodidacta, analítico y disciplinado, enfocado en aportar valor estratégico a través de código limpio, automatización de procesos y arquitecturas altamente escalables.
                </p>

                <div className="skills-divider">Habilidades Técnicas</div>
                <div className="skills">
                  {technicalSkills.map((skill) => (
                    <motion.span
                      whileHover={{ scale: 1.06 }}
                      className="skill-tag"
                      key={skill}
                    >
                      <Code2 size={13} />
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>

              <motion.div
                className="about-photo-wrapper"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="about-photo-card">
                  <img
                    src={hugoLaptopImg}
                    alt="Hugo Santiago Contreras Ortega"
                    className="about-photo-img"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Projects Section */}
        <motion.section
          id="proyectos"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={fadeInUp}
        >
          <div className="container">
            <div className="section-header">
              <span className="eyebrow-badge">
                <Code2 size={14} /> Proyectos Destacados
              </span>
              <h2>Soluciones construidas con impacto</h2>
              <p>Proyectos de software aplicados a la gestión operativa, datos y plataformas digitales.</p>
            </div>

            <div className="projects-grid">
              {projects.map((project, index) => {
                return (
                  <motion.article
                    className="project-card"
                    key={project.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.12 }}
                  >
                    <div className="project-image-box">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="project-img"
                        loading="lazy"
                      />
                      <div className="project-overlay"></div>
                    </div>
                    <div className="project-info">
                      <span style={{ fontSize: '0.8rem', color: 'var(--primary)', fontWeight: 700, marginBottom: '0.2rem' }}>
                        {project.subtitle}
                      </span>
                      <h3>{project.title}</h3>
                      <p>{project.description}</p>
                      <div className="project-tags">
                        {project.tags.map((tag) => (
                          <span key={tag}>{tag}</span>
                        ))}
                      </div>
                    </div>
                  </motion.article>
                );
              })}
            </div>
          </div>
        </motion.section>

        {/* Experience Section */}
        <motion.section
          id="experiencia"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={fadeInUp}
        >
          <div className="container">
            <div className="section-header">
              <span className="eyebrow-badge">
                <Briefcase size={14} /> Experiencia Laboral
              </span>
              <h2>Mi trayectoria y roles desempeñados</h2>
              <p>Experiencia en operaciones digitales, ingeniería de contenidos y soluciones técnicas.</p>
            </div>

            <div className="experience-grid">
              <div className="card timeline">
                {jobs.map((job) => (
                  <div className="job" key={job.role}>
                    <div className="job-bullet"></div>
                    <h3>{job.role}</h3>
                    <div className="meta">{job.place}</div>
                    <p>{job.text}</p>
                  </div>
                ))}
              </div>

              <div className="card">
                <h3>¿Qué valor aporto?</h3>
                <p>
                  Capacidad integral para abordar proyectos desde la concepción y modelado de bases de datos hasta la creación de interfaces interactivas y automatización de procesos.
                </p>
                <ul className="offerings-list">
                  <li>
                    <span className="offering-icon"><CheckCircle2 size={18} /></span>
                    Desarrollo backend robusto en Python (Django / DRF / Scripts)
                  </li>
                  <li>
                    <span className="offering-icon"><CheckCircle2 size={18} /></span>
                    Interfaces web reactivas y accesibles con React + Vite
                  </li>
                  <li>
                    <span className="offering-icon"><CheckCircle2 size={18} /></span>
                    Modelado, consultas y optimización SQL (PostgreSQL & MySQL)
                  </li>
                  <li>
                    <span className="offering-icon"><CheckCircle2 size={18} /></span>
                    Administración, personalización y SEO para WordPress
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Contact Showcase Section */}
        <motion.section
          id="contacto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={fadeInUp}
        >
          <div className="container">
            <div className="contact-showcase">
              <div className="contact-main">
                <span className="contact-year-badge">{currentYear}</span>
                <h2 className="contact-hero-title">
                  ¿Buscas fortalecer <br />
                  <span className="highlight">tu equipo de desarrollo?</span>
                </h2>
                <p className="contact-hero-desc">
                  Estoy en búsqueda activa de oportunidades profesionales donde pueda aportar mi experiencia en arquitecturas escalables, desarrollo backend y desarrollo frontend. Listo para integrarme a tu equipo y generar impacto desde el primer día.
                </p>

                <div className="contact-info-pills">
                  <div className="contact-info-item">
                    <div className="contact-info-icon">
                      <Mail size={20} />
                    </div>
                    <div className="contact-info-text">
                      <span className="contact-info-label">Correo Electrónico</span>
                      <a href="mailto:contrerashug0447@gmail.com" className="contact-info-val">
                        contrerashug0447@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="contact-info-item">
                    <div className="contact-info-icon">
                      <MapPin size={20} />
                    </div>
                    <div className="contact-info-text">
                      <span className="contact-info-label">Ubicación</span>
                      <span className="contact-info-val">Maracaibo, Venezuela</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="contact-actions-side">
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="https://wa.me/584126754787?text=Hola%20Hugo,%20estuve%20revisando%20tu%20portafolio%20y%20me%20gustar%C3%ADa%20agendar%20una%20entrevista."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-schedule"
                >
                  <Calendar size={20} />
                  <span>Agendar Entrevista</span>
                </motion.a>

                <div className="contact-social-row">
                  {/* GitHub */}
                  <motion.a
                    whileHover={{ scale: 1.15, y: -3 }}
                    whileTap={{ scale: 0.9 }}
                    href="https://github.com/Hcontreras26"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-circle-btn"
                    title="GitHub / Hcontreras26"
                    aria-label="GitHub"
                  >
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                    </svg>
                  </motion.a>

                  {/* LinkedIn */}
                  <motion.a
                    whileHover={{ scale: 1.15, y: -3 }}
                    whileTap={{ scale: 0.9 }}
                    href="https://www.linkedin.com/in/hugo-santiago-contreras-ortega-5030033ab/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-circle-btn"
                    title="LinkedIn / Hugo Santiago Contreras"
                    aria-label="LinkedIn"
                  >
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                      <rect x="2" y="9" width="4" height="12" />
                      <circle cx="4" cy="4" r="2" />
                    </svg>
                  </motion.a>

                  {/* WhatsApp */}
                  <motion.a
                    whileHover={{ scale: 1.15, y: -3 }}
                    whileTap={{ scale: 0.9 }}
                    href="https://wa.me/584126754787?text=Hola%20Hugo,%20estuve%20revisando%20tu%20portafolio%20y%20me%20gustar%C3%ADa%20conversar%20contigo."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-circle-btn"
                    title="WhatsApp / +58 412 6754787"
                    aria-label="WhatsApp"
                  >
                    <MessageCircle size={20} />
                  </motion.a>
                </div>
              </div>
            </div>
          </div>
        </motion.section>
      </main>

      {/* Footer */}
      <footer>
        <div className="container">
          © {currentYear} Hugo Santiago Contreras Ortega · Ingeniero en Informática. Todos los derechos reservados.
        </div>
      </footer>
    </div>
  );
}

export default App;
