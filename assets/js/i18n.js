/* ===== INTERNATIONALIZATION (i18n) ===== */
const translations = {
  en: {
    // Nav
    "nav.about": "About",
    "nav.skills": "Skills",
    "nav.experience": "Experience",
    "nav.education": "Education",
    "nav.projects": "Achievements",
    "nav.blog": "Blog",
    "nav.contact": "Contact",
    "hero.badge": "Available for new opportunities",
    "hero.title": 'Building the <span class="gradient-text">Cloud Infrastructure</span> of Tomorrow',
    "hero.subtitle": "Systems Engineer specializing in scalable cloud architecture, automation, and reliable systems using modern infrastructure practices.",
    "hero.cta": "Get in Touch",
    "hero.cta2": "View Projects",
    "hero.cv": "Download CV",

    // About
    "about.label": "About Me",
    "about.title": "Passionate about building<br>reliable systems",
    "about.p1": "Systems engineer with 4 years of hands-on experience in cloud infrastructure, containerization, and automation. I've deployed and maintained EKS/ECS clusters, built CI/CD pipelines in Azure DevOps, and administered hybrid environments combining AWS cloud and on-premise infrastructure.",
    "about.p2": "I started my career in networking and telecom, which gave me a solid foundation in how systems actually communicate. Over time I moved into cloud and DevOps, and I'm continuously learning — currently focused on deepening my skills in Kubernetes, IaC, and cloud architecture.",
    "about.stat1": "Years Experience",
    "about.stat2": "Projects Delivered",
    "about.stat3": "Cloud Migrations",
    "about.stat4": "Pipelines Built",
    "about.terminal.output": "always building, always learning",

    // Skills
    "skills.label": "Tech Stack",
    "skills.title": "Tools & Technologies",
    "skills.desc": "The technologies I use to build, deploy, and manage cloud infrastructure.",
    "skills.cat1": "Cloud Platforms",
    "skills.cat2": "Infrastructure as Code",
    "skills.cat3": "Containers & Orchestration",
    "skills.cat4": "CI/CD & Automation",
    "skills.cat5": "Programming",
    "skills.cat6": "Monitoring & Security",
    "skills.cat7": "Databases",

    // Experience
    "exp.label": "Experience",
    "exp.title": "Professional Journey",
    "exp.desc": "Building and scaling infrastructure across multiple industries.",
    "exp.date1": "2021 — 2026",
    "exp.role1": "IT Infrastructure Assistant",
    "exp.company1": "Gane Cali",
    "exp.desc1": "Managed AWS cloud infrastructure including VPCs, Subnets, and networking. Built and maintained EKS and ECS clusters, designing CI/CD pipelines in Azure DevOps for automated application deployments. Monitored cloud services with CloudWatch. Additionally, administered the Fortinet firewall (network policies, VPN users, SD-WAN rules), provisioned and hardened virtual machine servers monitored with Zabbix, and coordinated with an external SOC provider to block suspicious IPs and remediate security threats.",
    "exp.date2": "2019 — 2021",
    "exp.role2": "Data Technician",
    "exp.company2": "Emcomunitel (Movistar / Telefónica)",
    "exp.desc2": "Installed and configured last-mile networking equipment (routers, switches, firewalls, voice gateways) for corporate clients. Delivered MPLS services including VPN L3, VPN L2, and VPLS, as well as dedicated internet channels and other ISP enterprise solutions.",
    "exp.date3": "2018 — 2019",
    "exp.role3": "Systems Engineer",
    "exp.company3": "Megatecnología y Rehabilitación Colombiana",
    "exp.desc3": "Sole IT engineer managing all systems infrastructure for a 20-person company. Completed the implementation of an Active Directory server on Windows Server, deployed an OpenVPN server enabling remote work capabilities, and provided end-user technical support.",

    // Education
    "edu.label": "Education",
    "edu.title": "Academic Background",
    "edu.date1": "Aug 2022 — Dec 2025",
    "edu.degree1": "Systems Engineering",
    "edu.school1": "Institución Universitaria Antonio José Camacho",
    "edu.date2": "Oct 2019 — Nov 2020",
    "edu.degree2": "Technological Specialization in Network Security",
    "edu.school2": "Servicio Nacional de Aprendizaje — SENA",
    "edu.date3": "Aug 2016 — Feb 2019",
    "edu.degree3": "Technologist in Data Network Management",
    "edu.school3": "Servicio Nacional de Aprendizaje — SENA",
    "edu.date4": "Oct 2010 — Nov 2012",
    "edu.degree4": "Professional Technician in Software Programming",
    "edu.school4": "Servicio Nacional de Aprendizaje — SENA",

    // Projects
    "proj.label": "Achievements",
    "proj.title": "Key Achievements",
    "proj.desc": "Notable accomplishments throughout my career.",
    "proj.name1": "Cloud Migration from Netgroup to AWS",
    "proj.desc1": "Led the migration of virtual machines from Netgroup cloud provider to AWS. Containerizable workloads were deployed on EKS and ECS clusters, while non-containerizable VMs were migrated as EC2 instances, ensuring zero data loss and minimal downtime.",
    "proj.name2": "Chance Bingo — CI/CD Pipeline on EKS",
    "proj.desc2": "Built a full CI/CD pipeline in Azure DevOps for the Chance Bingo application. The pipeline builds the Docker image, pushes it to Amazon ECR, and deploys to an EKS cluster with two isolated namespaces: test (automatic deployment) and prod (approval-gated, restricted to authorized personnel only).",

    // Certifications
    "cert.label": "Certifications",
    "cert.title": "Credentials & Learning",
    "cert.desc": "Foundational cloud certification, continuously expanding knowledge.",
    "cert.name1": "AWS Cloud Practitioner",
    "cert.org1": "Amazon Web Services",

    // Post
    "post.back": "Back to Blog",
    "post.prev": "← Previous",
    "post.next": "Next →",
    "post.minread": "min read",

    // Blog
    "blog.label": "Blog",
    "blog.title": "Thoughts & Articles",
    "blog.desc": "Writing about DevOps, cloud infrastructure, automation, and lessons learned along the way.",
    "blog.empty": "No posts yet. Coming soon! 🚀",

    // Contact
    "contact.label": "Contact",
    "contact.title": "Let's Work Together",
    "contact.desc": "I'm always open to discussing new opportunities, interesting projects, or ways to help your team build better infrastructure.",
    "contact.email": "Send Email",
    "contact.github": "GitHub",
    "contact.linkedin": "LinkedIn",

    // 404
    "404.title": 'Page <span class="gradient-text">Not Found</span>',
    "404.subtitle": "Looks like this page got lost in the cloud. Let's get you back on track.",
    "404.home": "Back to Home",
    "404.blog": "View Blog",

    // Accessibility
    "nav.skip": "Skip to main content",
    "nav.menu": "Toggle menu",
    "nav.top": "Back to top"
  },

  es: {
    // Nav
    "nav.about": "Sobre mí",
    "nav.skills": "Habilidades",
    "nav.experience": "Experiencia",
    "nav.education": "Educación",
    "nav.projects": "Logros",
    "nav.blog": "Blog",
    "nav.contact": "Contacto",

    // Hero
    "hero.badge": "Disponible para nuevas oportunidades",
    "hero.title": 'Construyendo la <span class="gradient-text">Infraestructura Cloud</span> del Mañana',
    "hero.subtitle": "Ingeniero en Sistemas especializado en arquitectura cloud escalable, automatización y sistemas confiables usando prácticas modernas de infraestructura.",
    "hero.cta": "Contáctame",
    "hero.cta2": "Ver Proyectos",
    "hero.cv": "Descargar CV",

    // About
    "about.label": "Sobre Mí",
    "about.title": "Apasionado por construir<br>sistemas confiables",
    "about.p1": "Ingeniero en Sistemas con 4 años de experiencia práctica en infraestructura cloud, contenedores y automatización. He desplegado y mantenido clústeres EKS/ECS, construido pipelines CI/CD en Azure DevOps y administrado entornos híbridos que combinan cloud AWS con infraestructura on-premise.",
    "about.p2": "Comencé mi carrera en redes y telecomunicaciones, lo que me dio una base sólida en cómo los sistemas se comunican. Con el tiempo migré hacia cloud y DevOps, y sigo aprendiendo constantemente — actualmente enfocado en profundizar mis habilidades en Kubernetes, IaC y arquitectura cloud.",
    "about.stat1": "Años de Experiencia",
    "about.stat2": "Proyectos Entregados",
    "about.stat3": "Migraciones Cloud",
    "about.stat4": "Pipelines Construidos",
    "about.terminal.output": "siempre construyendo, siempre aprendiendo",

    // Skills
    "skills.label": "Stack Tecnológico",
    "skills.title": "Herramientas y Tecnologías",
    "skills.desc": "Las tecnologías que uso para construir, desplegar y gestionar infraestructura cloud.",
    "skills.cat1": "Plataformas Cloud",
    "skills.cat2": "Infraestructura como Código",
    "skills.cat3": "Contenedores y Orquestación",
    "skills.cat4": "CI/CD y Automatización",
    "skills.cat5": "Programación",
    "skills.cat6": "Monitoreo y Seguridad",
    "skills.cat7": "Bases de Datos",

    // Experience
    "exp.label": "Experiencia",
    "exp.title": "Trayectoria Profesional",
    "exp.desc": "Construyendo y escalando infraestructura en múltiples industrias.",
    "exp.date1": "2021 — 2026",
    "exp.role1": "Asistente de Infraestructura TI",
    "exp.company1": "Gane Cali",
    "exp.desc1": "Gestioné infraestructura cloud en AWS incluyendo VPCs, Subnets y networking. Construí y mantuve clústeres EKS y ECS, diseñando pipelines CI/CD en Azure DevOps para despliegues automatizados de aplicaciones. Monitoreaba servicios cloud con CloudWatch. Adicionalmente, administraba el firewall Fortinet (políticas de red, usuarios VPN, reglas SD-WAN), aprovisionaba y realizaba hardening de servidores en máquinas virtuales monitoreados con Zabbix, y coordinaba con un proveedor SOC externo para bloquear IPs sospechosas y remediar amenazas de seguridad.",
    "exp.date2": "2019 — 2021",
    "exp.role2": "Técnico de Datos",
    "exp.company2": "Emcomunitel (Movistar / Telefónica)",
    "exp.desc2": "Instalación y configuración de equipos de última milla (routers, switches, firewalls, gateways de voz) para clientes corporativos. Entregaba servicios MPLS incluyendo VPN L3, VPN L2 y VPLS, así como canales de internet dedicados y demás soluciones empresariales de ISP.",
    "exp.date3": "2018 — 2019",
    "exp.role3": "Ingeniero de Sistemas",
    "exp.company3": "Megatecnología y Rehabilitación Colombiana",
    "exp.desc3": "Único ingeniero de sistemas administrando toda la infraestructura tecnológica de una empresa de 20 empleados. Completé la implementación del servidor Active Directory en Windows Server, desplegué un servidor OpenVPN para habilitar el trabajo remoto y brindé soporte técnico a los usuarios.",

    // Education
    "edu.label": "Educación",
    "edu.title": "Formación Académica",
    "edu.date1": "Ago 2022 — Dic 2025",
    "edu.degree1": "Ingeniería de Sistemas",
    "edu.school1": "Institución Universitaria Antonio José Camacho",
    "edu.date2": "Oct 2019 — Nov 2020",
    "edu.degree2": "Especialización Tecnológica en Seguridad de Redes",
    "edu.school2": "Servicio Nacional de Aprendizaje — SENA",
    "edu.date3": "Ago 2016 — Feb 2019",
    "edu.degree3": "Tecnólogo en Gestión de Redes de Datos",
    "edu.school3": "Servicio Nacional de Aprendizaje — SENA",
    "edu.date4": "Oct 2010 — Nov 2012",
    "edu.degree4": "Técnico Profesional en Programación de Software",
    "edu.school4": "Servicio Nacional de Aprendizaje — SENA",

    // Projects
    "proj.label": "Logros",
    "proj.title": "Logros Destacados",
    "proj.desc": "Logros notables a lo largo de mi carrera.",
    "proj.name1": "Migración Cloud de Netgroup a AWS",
    "proj.desc1": "Lideré la migración de máquinas virtuales del proveedor cloud Netgroup a AWS. Las cargas de trabajo containerizables se desplegaron en clústeres EKS y ECS, mientras que las VMs no containerizables se migraron como instancias EC2, asegurando cero pérdida de datos y mínimo tiempo de inactividad.",
    "proj.name2": "Chance Bingo — Pipeline CI/CD en EKS",
    "proj.desc2": "Construí un pipeline CI/CD completo en Azure DevOps para la aplicación Chance Bingo. El pipeline construye la imagen Docker, la sube a Amazon ECR y despliega en un clúster EKS con dos namespaces aislados: test (despliegue automático) y prod (con aprobación requerida, restringido solo al personal autorizado).",

    // Certifications
    "cert.label": "Certificaciones",
    "cert.title": "Credenciales y Formación",
    "cert.desc": "Certificación cloud base, expandiendo conocimientos continuamente.",
    "cert.name1": "AWS Cloud Practitioner",
    "cert.org1": "Amazon Web Services",

    // Post
    "post.back": "Volver al Blog",
    "post.prev": "← Anterior",
    "post.next": "Siguiente →",
    "post.minread": "min de lectura",

    // Blog
    "blog.label": "Blog",
    "blog.title": "Artículos y Reflexiones",
    "blog.desc": "Escribiendo sobre DevOps, infraestructura cloud, automatización y lecciones aprendidas en el camino.",
    "blog.empty": "Aún no hay artículos. ¡Próximamente! 🚀",

    // Contact
    "contact.label": "Contacto",
    "contact.title": "Trabajemos Juntos",
    "contact.desc": "Siempre estoy abierto a discutir nuevas oportunidades, proyectos interesantes o formas de ayudar a tu equipo a construir mejor infraestructura.",
    "contact.email": "Enviar Email",
    "contact.github": "GitHub",
    "contact.linkedin": "LinkedIn",

    // 404
    "404.title": 'Página <span class="gradient-text">No Encontrada</span>',
    "404.subtitle": "Parece que esta página se perdió en la nube. Volvamos al camino.",
    "404.home": "Volver al Inicio",
    "404.blog": "Ver Blog",

    // Accessibility
    "nav.skip": "Ir al contenido principal",
    "nav.menu": "Abrir menú",
    "nav.top": "Volver arriba"
  }
};

function setLanguage(lang) {
  const dict = translations[lang];
  if (!dict) return;

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[key]) {
      if (el.hasAttribute('data-i18n-html')) {
        el.innerHTML = dict[key];
      } else {
        el.textContent = dict[key];
      }
    }
  });

  // Translate aria-label attributes
  document.querySelectorAll('[data-i18n-aria]').forEach(el => {
    const key = el.getAttribute('data-i18n-aria');
    if (dict[key]) el.setAttribute('aria-label', dict[key]);
  });

  // Update html lang attribute (skip if page has fixed content language)
  if (!document.documentElement.getAttribute('data-page-lang')) {
    document.documentElement.lang = lang;
  }

  // Update toggle button text and aria-label
  const langText = document.getElementById('langText');
  if (langText) {
    langText.textContent = lang.toUpperCase();
  }
  const langToggle = document.getElementById('langToggle');
  if (langToggle) {
    langToggle.setAttribute('aria-label', lang === 'es' ? 'Switch to English' : 'Cambiar a español');
  }

  // Save preference
  try { localStorage.setItem('lang', lang); } catch (e) {}
}

function toggleLanguage() {
  try { var current = localStorage.getItem('lang') || 'en'; } catch (e) { var current = 'en'; }
  const next = current === 'en' ? 'es' : 'en';
  setLanguage(next);
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
  try { var saved = localStorage.getItem('lang') || 'en'; } catch (e) { var saved = 'en'; }
  setLanguage(saved);
});
