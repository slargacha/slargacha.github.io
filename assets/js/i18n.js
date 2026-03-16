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
    "exp.date1": "2021 — 2026",
    "exp.role1": "DevOps & Infrastructure Engineer",
    "exp.company1": "Gane Cali",
    "exp.desc1": "Managed AWS cloud infrastructure including VPCs, Subnets, and networking. Built and maintained EKS and ECS clusters, designing CI/CD pipelines in Azure DevOps for automated application deployments. Monitored cloud services with CloudWatch. Additionally, administered the Fortinet firewall (network policies, VPN users, SD-WAN rules), provisioned and hardened virtual machine servers monitored with Zabbix, and coordinated with an external SOC provider to block suspicious IPs and remediate security threats.",
    "exp.date2": "2019 — 2021",
    "exp.role2": "Data Technician",
    "exp.company2": "Emcomunitel (Movistar / Telefónica)",
    "exp.desc2": "Installed and configured last-mile networking equipment (routers, switches, firewalls, voice gateways) for corporate clients. Delivered MPLS services including VPN L3, VPN L2, and VPLS, as well as dedicated internet channels and other ISP enterprise solutions.",
    "exp.date3": "",
    "exp.role3": "",
    "exp.company3": "",
    "exp.desc3": "",

    // Projects
    "proj.label": "Achievements",
    "proj.title": "Key Achievements",
    "proj.desc": "Notable accomplishments throughout my career.",
    "proj.name1": "Cloud Migration from Netgroup to AWS",
    "proj.desc1": "Led the migration of virtual machines from Netgroup cloud provider to AWS. Containerizable workloads were deployed on EKS and ECS clusters, while non-containerizable VMs were migrated as EC2 instances, ensuring zero data loss and minimal downtime.",
    "proj.name2": "Data Center Rack Reorganization",
    "proj.desc2": "Reorganized Racks 6 through 11 at the Telefónica/Movistar Cali Centro node, including full cable management and proper equipment placement. All work was performed during night shifts to ensure minimal service disruption for corporate clients.",

    // Certifications
    "cert.label": "Certifications",
    "cert.title": "Credentials & Learning",
    "cert.desc": "Professional certifications validating cloud and DevOps expertise.",
    "cert.name1": "AWS Cloud Practitioner",
    "cert.org1": "Amazon Web Services",

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
    "exp.date1": "2021 — 2026",
    "exp.role1": "Ingeniero DevOps e Infraestructura",
    "exp.company1": "Gane Cali",
    "exp.desc1": "Gestioné infraestructura cloud en AWS incluyendo VPCs, Subnets y networking. Construí y mantuve clústeres EKS y ECS, diseñando pipelines CI/CD en Azure DevOps para despliegues automatizados de aplicaciones. Monitoreaba servicios cloud con CloudWatch. Adicionalmente, administraba el firewall Fortinet (políticas de red, usuarios VPN, reglas SD-WAN), aprovisionaba y realizaba hardening de servidores en máquinas virtuales monitoreados con Zabbix, y coordinaba con un proveedor SOC externo para bloquear IPs sospechosas y remediar amenazas de seguridad.",
    "exp.date2": "2019 — 2021",
    "exp.role2": "Técnico de Datos",
    "exp.company2": "Emcomunitel (Movistar / Telefónica)",
    "exp.desc2": "Instalación y configuración de equipos de última milla (routers, switches, firewalls, gateways de voz) para clientes corporativos. Entregaba servicios MPLS incluyendo VPN L3, VPN L2 y VPLS, así como canales de internet dedicados y demás soluciones empresariales de ISP.",
    "exp.date3": "",
    "exp.role3": "",
    "exp.company3": "",
    "exp.desc3": "",

    // Projects
    "proj.label": "Logros",
    "proj.title": "Logros Destacados",
    "proj.desc": "Logros notables a lo largo de mi carrera.",
    "proj.name1": "Migración Cloud de Netgroup a AWS",
    "proj.desc1": "Lideré la migración de máquinas virtuales del proveedor cloud Netgroup a AWS. Las cargas de trabajo containerizables se desplegaron en clústeres EKS y ECS, mientras que las VMs no containerizables se migraron como instancias EC2, asegurando cero pérdida de datos y mínimo tiempo de inactividad.",
    "proj.name2": "Reorganización de Racks en Data Center",
    "proj.desc2": "Reorganicé los Racks 6 al 11 en el nodo Cali Centro de Telefónica/Movistar, incluyendo gestión completa de cableado y ubicación adecuada de equipos. Todos los trabajos se realizaron en turnos nocturnos para garantizar la mínima indisponibilidad del servicio para los clientes corporativos.",

    // Certifications
    "cert.label": "Certificaciones",
    "cert.title": "Credenciales y Formación",
    "cert.desc": "Certificaciones profesionales que validan experiencia en cloud y DevOps.",
    "cert.name1": "AWS Cloud Practitioner",
    "cert.org1": "Amazon Web Services",

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
