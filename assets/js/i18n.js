/* ===== INTERNATIONALIZATION (i18n) ===== */
const translations = {
  en: {
    // Nav
    "nav.about": "About",
    "nav.skills": "Skills",
    "nav.experience": "Experience",
    "nav.projects": "Projects",
    "nav.blog": "Blog",
    "nav.contact": "Contact",

    // Hero
    "hero.badge": "Available for new opportunities",
    "hero.title": 'Building the <span class="gradient-text">Cloud Infrastructure</span> of Tomorrow',
    "hero.subtitle": "DevOps Engineer specializing in scalable cloud architecture, automation, and reliable systems using modern infrastructure practices.",
    "hero.cta": "Get in Touch",
    "hero.cta2": "View Projects",

    // About
    "about.label": "About Me",
    "about.title": "Passionate about building<br>reliable systems",
    "about.p1": "DevOps engineer with deep expertise in cloud-native technologies, infrastructure as code, and automation. I specialize in designing scalable architectures, optimizing CI/CD workflows, and ensuring high availability across distributed systems.",
    "about.p2": "My focus is on bridging the gap between development and operations, enabling teams to deliver faster with confidence while maintaining security and reliability at scale.",
    "about.stat1": "Years Experience",
    "about.stat2": "Projects Delivered",
    "about.stat3": "Uptime Achieved",
    "about.stat4": "Pipelines Built",
    "about.terminal.output": "always building, always learning",

    // Skills
    "skills.label": "Tech Stack",
    "skills.title": "Tools & Technologies",
    "skills.desc": "The technologies I work with daily to build, deploy, and manage cloud infrastructure at scale.",
    "skills.cat1": "Cloud Platforms",
    "skills.cat2": "Infrastructure as Code",
    "skills.cat3": "Containers & Orchestration",
    "skills.cat4": "CI/CD & Automation",
    "skills.cat5": "Programming",
    "skills.cat6": "Monitoring & Security",

    // Experience
    "exp.label": "Experience",
    "exp.title": "Professional Journey",
    "exp.desc": "Building and scaling infrastructure across multiple industries.",
    "exp.date1": "2024 — Present",
    "exp.role1": "Senior DevOps Engineer",
    "exp.company1": "Cloud Solutions Inc.",
    "exp.desc1": "Leading cloud infrastructure initiatives, designing multi-region architectures, and implementing zero-downtime deployment strategies for mission-critical applications.",
    "exp.date2": "2022 — 2024",
    "exp.role2": "DevOps Engineer",
    "exp.company2": "Tech Startup",
    "exp.desc2": "Designed and maintained CI/CD pipelines, containerized microservices architecture, and automated infrastructure provisioning reducing deployment times by 80%.",
    "exp.date3": "2021 — 2022",
    "exp.role3": "Cloud Engineer",
    "exp.company3": "Enterprise Corp",
    "exp.desc3": "Managed cloud resources, implemented monitoring solutions, and collaborated with development teams to optimize application performance and reliability.",

    // Projects
    "proj.label": "Projects",
    "proj.title": "Featured Work",
    "proj.desc": "Highlights from infrastructure and automation projects I've built.",
    "proj.name1": "Cloud Infrastructure Automation",
    "proj.desc1": "Fully automated AWS infrastructure provisioning using Terraform modules with state management, drift detection, and automated CI/CD pipelines for infrastructure changes.",
    "proj.name2": "Kubernetes Deployment Platform",
    "proj.desc2": "Production-grade Kubernetes platform with Helm charts, automated scaling, service mesh integration, and comprehensive monitoring for microservices architecture.",
    "proj.name3": "CI/CD Pipeline Framework",
    "proj.desc3": "Reusable, modular CI/CD pipeline framework supporting multi-environment deployments, automated testing, security scanning, and rollback capabilities.",

    // Certifications
    "cert.label": "Certifications",
    "cert.title": "Credentials & Learning",
    "cert.desc": "Professional certifications validating cloud and DevOps expertise.",
    "cert.name1": "AWS Solutions Architect",
    "cert.org1": "Amazon Web Services",
    "cert.name2": "Certified Kubernetes Administrator",
    "cert.org2": "CNCF / Linux Foundation",
    "cert.name3": "Terraform Associate",
    "cert.org3": "HashiCorp",
    "cert.name4": "GitHub Actions Certification",
    "cert.org4": "GitHub",

    // Contact
    "contact.label": "Contact",
    "contact.title": "Let's Work Together",
    "contact.desc": "I'm always open to discussing new opportunities, interesting projects, or ways to help your team build better infrastructure.",
    "contact.email": "Send Email",
    "contact.github": "GitHub",
    "contact.linkedin": "LinkedIn"
  },

  es: {
    // Nav
    "nav.about": "Sobre mí",
    "nav.skills": "Habilidades",
    "nav.experience": "Experiencia",
    "nav.projects": "Proyectos",
    "nav.blog": "Blog",
    "nav.contact": "Contacto",

    // Hero
    "hero.badge": "Disponible para nuevas oportunidades",
    "hero.title": 'Construyendo la <span class="gradient-text">Infraestructura Cloud</span> del Mañana',
    "hero.subtitle": "Ingeniero DevOps especializado en arquitectura cloud escalable, automatización y sistemas confiables usando prácticas modernas de infraestructura.",
    "hero.cta": "Contáctame",
    "hero.cta2": "Ver Proyectos",

    // About
    "about.label": "Sobre Mí",
    "about.title": "Apasionado por construir<br>sistemas confiables",
    "about.p1": "Ingeniero DevOps con amplia experiencia en tecnologías cloud-native, infraestructura como código y automatización. Me especializo en diseñar arquitecturas escalables, optimizar flujos CI/CD y garantizar alta disponibilidad en sistemas distribuidos.",
    "about.p2": "Mi enfoque es cerrar la brecha entre desarrollo y operaciones, permitiendo que los equipos entreguen más rápido con confianza, manteniendo la seguridad y confiabilidad a escala.",
    "about.stat1": "Años de Experiencia",
    "about.stat2": "Proyectos Entregados",
    "about.stat3": "Uptime Alcanzado",
    "about.stat4": "Pipelines Construidos",
    "about.terminal.output": "siempre construyendo, siempre aprendiendo",

    // Skills
    "skills.label": "Stack Tecnológico",
    "skills.title": "Herramientas y Tecnologías",
    "skills.desc": "Las tecnologías con las que trabajo diariamente para construir, desplegar y gestionar infraestructura cloud a escala.",
    "skills.cat1": "Plataformas Cloud",
    "skills.cat2": "Infraestructura como Código",
    "skills.cat3": "Contenedores y Orquestación",
    "skills.cat4": "CI/CD y Automatización",
    "skills.cat5": "Programación",
    "skills.cat6": "Monitoreo y Seguridad",

    // Experience
    "exp.label": "Experiencia",
    "exp.title": "Trayectoria Profesional",
    "exp.desc": "Construyendo y escalando infraestructura en múltiples industrias.",
    "exp.date1": "2024 — Presente",
    "exp.role1": "Senior DevOps Engineer",
    "exp.company1": "Cloud Solutions Inc.",
    "exp.desc1": "Liderando iniciativas de infraestructura cloud, diseñando arquitecturas multi-región e implementando estrategias de despliegue sin tiempo de inactividad para aplicaciones críticas.",
    "exp.date2": "2022 — 2024",
    "exp.role2": "DevOps Engineer",
    "exp.company2": "Tech Startup",
    "exp.desc2": "Diseñé y mantuve pipelines CI/CD, arquitectura de microservicios containerizada y aprovisionamiento automatizado de infraestructura, reduciendo los tiempos de despliegue en un 80%.",
    "exp.date3": "2021 — 2022",
    "exp.role3": "Cloud Engineer",
    "exp.company3": "Enterprise Corp",
    "exp.desc3": "Administré recursos cloud, implementé soluciones de monitoreo y colaboré con equipos de desarrollo para optimizar el rendimiento y la confiabilidad de las aplicaciones.",

    // Projects
    "proj.label": "Proyectos",
    "proj.title": "Trabajo Destacado",
    "proj.desc": "Destacados de proyectos de infraestructura y automatización que he construido.",
    "proj.name1": "Automatización de Infraestructura Cloud",
    "proj.desc1": "Aprovisionamiento de infraestructura AWS completamente automatizado usando módulos Terraform con gestión de estado, detección de drift y pipelines CI/CD automatizados para cambios de infraestructura.",
    "proj.name2": "Plataforma de Despliegue Kubernetes",
    "proj.desc2": "Plataforma Kubernetes de grado productivo con Helm charts, escalado automático, integración de service mesh y monitoreo completo para arquitectura de microservicios.",
    "proj.name3": "Framework de Pipelines CI/CD",
    "proj.desc3": "Framework de pipelines CI/CD reutilizable y modular que soporta despliegues multi-ambiente, testing automatizado, escaneo de seguridad y capacidades de rollback.",

    // Certifications
    "cert.label": "Certificaciones",
    "cert.title": "Credenciales y Formación",
    "cert.desc": "Certificaciones profesionales que validan experiencia en cloud y DevOps.",
    "cert.name1": "AWS Solutions Architect",
    "cert.org1": "Amazon Web Services",
    "cert.name2": "Certified Kubernetes Administrator",
    "cert.org2": "CNCF / Linux Foundation",
    "cert.name3": "Terraform Associate",
    "cert.org3": "HashiCorp",
    "cert.name4": "GitHub Actions Certification",
    "cert.org4": "GitHub",

    // Contact
    "contact.label": "Contacto",
    "contact.title": "Trabajemos Juntos",
    "contact.desc": "Siempre estoy abierto a discutir nuevas oportunidades, proyectos interesantes o formas de ayudar a tu equipo a construir mejor infraestructura.",
    "contact.email": "Enviar Email",
    "contact.github": "GitHub",
    "contact.linkedin": "LinkedIn"
  }
};

function setLanguage(lang) {
  const dict = translations[lang];
  if (!dict) return;

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[key]) {
      if (dict[key].includes('<')) {
        el.innerHTML = dict[key];
      } else {
        el.textContent = dict[key];
      }
    }
  });

  // Update html lang attribute
  document.documentElement.lang = lang === 'es' ? 'es' : 'en';

  // Update toggle button text
  const langText = document.getElementById('langText');
  if (langText) {
    langText.textContent = lang.toUpperCase();
  }

  // Save preference
  localStorage.setItem('lang', lang);
}

function toggleLanguage() {
  const current = localStorage.getItem('lang') || 'en';
  const next = current === 'en' ? 'es' : 'en';
  setLanguage(next);
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
  const saved = localStorage.getItem('lang') || 'en';
  setLanguage(saved);
});
