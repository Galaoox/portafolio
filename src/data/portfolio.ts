export type SkillGroup = {
  name: string;
  icon: string;
  items: string[];
};

export type KeyHighlight = {
  metric: string;
  summary: string;
};

export type ExperienceItem = {
  company: string;
  role: string;
  period: string;
  location?: string;
  keyFunctions: string[];
  keyAchievements: string[];
  current?: boolean;
  defaultTab?: 'functions' | 'achievements';
};

export type EducationItem = {
  degree: string;
  institution: string;
  period: string;
};

export type PortfolioData = {
  personal: {
    firstName: string;
    lastName: string;
    fullName: string;
    role: string;
    email: string;
    github: string;
    linkedin: string;
    summary: string;
    openToWork: string;
  };
  keyHighlights: KeyHighlight[];
  skills: SkillGroup[];
  experiences: ExperienceItem[];
  education: EducationItem[];
};

export const portfolioData: PortfolioData = {
  personal: {
    firstName: 'Erick',
    lastName: 'Vergara',
    fullName: 'Erick Andres Vergara Noriega',
    role: 'Desarrollador Full Stack',
    email: 'erickandres30@gmail.com',
    github: 'https://github.com/Galaoox',
    linkedin: 'https://www.linkedin.com/in/erick-avn/',
    summary:
      'Desarrollador Full Stack con experiencia en React, Angular, .NET Core, Node.js y Python. Enfocado en crear soluciones escalables, optimizar el rendimiento de sistemas y desarrollar arquitecturas eficientes.',
    openToWork: 'Disponible para nuevos retos y despliegues.',
  },
  keyHighlights: [
    {
      metric: '+60%',
      summary: 'Aceleracion en tiempos de procesamiento de datos.',
    },
    {
      metric: '-40%',
      summary: 'Reduccion de consumo de recursos en microservicios criticos.',
    },
    {
      metric: '3.0s → 2.1s',
      summary: 'Mejora de tiempos de carga (Core Web Vitals).',
    },
    {
      metric: '-83%',
      summary: 'Reduccion de tiempos de consulta en SQL Server.',
    },
  ],
  skills: [
    {
      name: 'Frontend',
      icon: 'html',
      items: ['React', 'Angular', 'TypeScript', 'JavaScript', 'UI Syncfusion'],
    },
    {
      name: 'Backend',
      icon: 'dns',
      items: [
        'Node.js / Express',
        'Python (FastAPI)',
        'C# .NET Core',
        'Laravel / PHP',
      ],
    },
    {
      name: 'Bases de Datos',
      icon: 'database',
      items: ['MySQL', 'PostgreSQL', 'SQL Server', 'Redshift', 'Metabase'],
    },
    {
      name: 'Testing & DevOps',
      icon: 'cloud',
      items: ['Karma', 'Docker', 'Azure / AWS', 'Microservicios', 'APIs REST'],
    },
  ],
  experiences: [
    {
      company: 'Periferia IT Group',
      role: 'Desarrollador Full Stack',
      period: 'Abril 2025 - Actual',
      location: 'Colombia',
      current: true,
      defaultTab: 'achievements',
      keyFunctions: [
        'Diseno e implementacion de microservicios de procesamiento masivo con Python (FastAPI) y C# / .NET 6-8, contenedorizados con Docker.',
        'Integracion de flujos de ingesta y distribucion de archivos mediante Google Cloud Storage.',
        'Desarrollo de vistas y pantallas en Angular 19.',
        'Modelado y optimizacion de consultas en Oracle (PL/SQL) para cargas batch y procesos near-real-time.',
        'Implementacion de pipelines de limpieza, validacion y Data Quality.',
      ],
      keyAchievements: [
        'Aceleracion de tiempos de procesamiento en ~60% usando pandas y polars.',
        'Optimizacion de consumo de recursos en ~40% en microservicios criticos.',
        'Reduccion de retrabajos y errores mediante automatizacion de validaciones.',
        'APIs REST de alto rendimiento para operaciones masivas.',
        'Documentacion tecnica y handoff para mantenimiento y escalamiento.',
      ],
    },
    {
      company: 'R5',
      role: 'Desarrollador Full Stack',
      period: 'Enero 2023 - Marzo 2025',
      location: 'Colombia',
      defaultTab: 'achievements',
      keyFunctions: [
        'Desarrollo Full Stack con React, Python y FastAPI.',
        'Diseno e implementacion de funnels.',
        'Integracion de APIs y herramientas de seguimiento.',
        'Refactorizacion y optimizacion del codigo.',
        'Automatizacion con HubSpot, CleverTap y Redshift.',
      ],
      keyAchievements: [
        'Mejora del 30% en interaccion de usuarios.',
        'Reduccion de tiempos de carga de 3s a 2.1s (Core Web Vitals).',
        'Reduccion del 20% en deuda tecnica.',
        'Migracion CRM de HubSpot a CleverTap con modelos en Redshift.',
        'Microservicios con Python/FastAPI integrando Google Analytics, Meta Ads y TikTok Ads.',
        'Cambios de marca en UI/UX.',
        'Despliegue rapido y seguro de funcionalidades.',
      ],
    },
    {
      company: 'MVM Ingenieria de Software',
      role: 'Analista de Software',
      period: 'Julio 2021 - Enero 2023',
      location: 'Colombia',
      defaultTab: 'achievements',
      keyFunctions: [
        'Desarrollo Full Stack para sector energetico (Angular, TypeScript, .NET Core, SQL Server).',
        'Implementacion de microservicios.',
        'Optimizacion de UX.',
        'Integracion de herramientas y pruebas automatizadas.',
        'Refactorizacion y optimizacion de codigo.',
      ],
      keyAchievements: [
        'Reduccion del 20% en tiempos de procesamiento.',
        'Mejora de estabilidad y mantenibilidad con pruebas unitarias (Karma).',
        'Optimizacion de UX con UI Syncfusion.',
        'Arquitecturas escalables y modulares.',
      ],
    },
    {
      company: 'Logical Software Factory',
      role: 'Desarrollador de Software',
      period: 'Enero 2021 - Julio 2021',
      location: 'Colombia',
      defaultTab: 'achievements',
      keyFunctions: [
        'Soluciones para sector asegurador con .NET, ASP.NET, React y SQL Server.',
        'Optimizacion y modernizacion de sistemas legacy.',
        'Refactorizacion y optimizacion del codigo.',
        'Optimizacion de bases de datos y procedimientos almacenados.',
      ],
      keyAchievements: [
        'Reduccion del 83% en tiempos de consulta en SQL Server.',
        'Mejora de rendimiento y compatibilidad de sistemas legacy.',
        'Implementacion de arquitecturas escalables.',
      ],
    },
    {
      company: 'Tecnologias Sinergia S.A.S',
      role: 'Desarrollador de Software',
      period: 'Junio 2019 - Enero 2021',
      location: 'Huila, Colombia',
      defaultTab: 'achievements',
      keyFunctions: [
        'Desarrollo de ERP con Angular y Laravel.',
        'Interfaces responsivas con Bootstrap y TypeScript.',
        'Mejores practicas frontend y backend.',
        'Optimizacion de experiencia de usuario.',
      ],
      keyAchievements: [
        'Mejora de eficiencia operativa del ERP.',
        'Interfaces accesibles y responsivas.',
        'Optimizacion del rendimiento del sistema.',
      ],
    },
  ],
  education: [
    {
      degree: 'Ingenieria de Software',
      institution: 'Fundacion Escuela Tecnologica de Neiva',
      period: '2018 - 2023',
    },
    {
      degree: 'Tecnologo en Desarrollo de Sistemas de Informacion y Redes',
      institution: 'Fundacion Escuela Tecnologica de Neiva',
      period: 'Febrero 2020 - Enero 2021',
    },
    {
      degree: 'Tecnico Profesional en Soporte de Sistemas Informaticos y Redes',
      institution: 'Fundacion Escuela Tecnologica de Neiva',
      period: 'Febrero 2018 - Junio 2020',
    },
  ],
};
