type Project = {
  shortTitle: string;
  title: string;
  context: string;
  summary: string;
  details: string[];
  outcome: string;
  technologies: string;
};

type Experience = {
  company: string;
  role: string;
  period: string;
  summary: string;
  details: string[];
  technologies: { area: string; items: string }[];
  current: boolean;
  project?: Project;
};

type PortfolioData = {
  personal: {
    name: string;
    role: string;
    intro: string;
    current: string;
    location: string;
    github: string;
    linkedin: string;
  };
  contact: { title: string; text: string };
  institution: string;
  skills: { name: string; items: string }[];
  education: { degree: string; period: string }[];
  experiences: Experience[];
};

export const portfolioData: PortfolioData = {
  "personal": {
    "name": "Erick Vergara",
    "role": "Desarrollador Full Stack Senior",
    "intro": "Desarrollo aplicaciones web, servicios e integraciones de datos. Trabajo con React, Angular, .NET y Python, desde la interfaz hasta el procesamiento y la persistencia.",
    "current": "Actualmente en CINTE Colombia",
    "location": "Colombia",
    "github": "https://github.com/Galaoox",
    "linkedin": "https://www.linkedin.com/in/erick-avn/"
  },
  "experiences": [
    {
      "company": "CINTE Colombia",
      "role": "Desarrollador Fullstack Senior",
      "period": "Mayo 2026 — actual",
      "summary": "Microservicios, procesamiento de datos e interfaces conectadas al backend.",
      "details": [
        "Desarrollo con Python / FastAPI y C# / .NET, contenedores Docker y flujos de archivos en Google Cloud Storage.",
        "Vistas en Angular 19, consultas Oracle / PL/SQL y pipelines de limpieza, validación y calidad de datos."
      ],
      "technologies": [
        {
          "area": "Desarrollo",
          "items": "C# / .NET · Python / FastAPI · SQLAlchemy · Angular 19"
        },
        {
          "area": "Datos",
          "items": "Oracle / PL/SQL · pandas · Polars"
        },
        {
          "area": "Infraestructura",
          "items": "GCP / Google Cloud Storage · Docker"
        }
      ],
      "current": true
    },
    {
      "company": "Periferia IT Group",
      "role": "Desarrollador Fullstack",
      "period": "Abril 2025 — mayo 2026",
      "summary": "Integración entre filiales, carga masiva y optimización de recursos.",
      "details": [
        "Desarrollo de microservicios de procesamiento masivo con Python, FastAPI y .NET.",
        "Integración de archivos en GCP, carga en Oracle y desarrollo de vistas en Angular 19."
      ],
      "technologies": [
        {
          "area": "Desarrollo",
          "items": "C# / .NET · Python / FastAPI · SQLAlchemy · Angular 19"
        },
        {
          "area": "Datos",
          "items": "Oracle / PL/SQL · pandas → Polars"
        },
        {
          "area": "Infraestructura",
          "items": "GCP / Google Cloud Storage · Docker"
        }
      ],
      "current": false,
      "project": {
        "shortTitle": "Órdenes de compra entre filiales",
        "title": "Desarrollo de un sistema de integración y procesamiento masivo de órdenes de compra entre filiales",
        "context": "Retail de materiales de construcción · Cliente confidencial · A través de Periferia IT Group",
        "summary": "Desarrollo individual de un sistema de aproximadamente diez microservicios. Cada uno procesaba un archivo CSV diferente, con tratamientos específicos, desde su recepción en GCP hasta su carga en Oracle.",
        "details": [
          "Sustituí pandas por Polars por su mejor comportamiento de memoria en este flujo.",
          "Reemplacé la carga mediante el ORM por un mecanismo de inserción masiva en Oracle.",
          "Realicé pruebas incrementales en contenedores con memoria limitada para dimensionar memoria y CPU y ajustar el paralelismo frente a reinicios por agotamiento de memoria."
        ],
        "outcome": "Resultados aproximados: mejora del 60% en procesamiento y reducción del 40% en consumo de recursos.",
        "technologies": "Python · Polars · GCP · Oracle · Docker"
      }
    },
    {
      "company": "R5",
      "role": "Desarrollador Fullstack",
      "period": "Enero 2023 — marzo 2025",
      "summary": "Aplicaciones web, funnels e integración de plataformas de marketing y datos.",
      "details": [
        "Desarrollo con React, Python y FastAPI; integración de APIs y herramientas de seguimiento.",
        "Automatización con HubSpot, CleverTap y Redshift; mejora de tiempos de carga de 3,0 s a 2,1 s."
      ],
      "technologies": [
        {
          "area": "Desarrollo",
          "items": "React · Python / FastAPI"
        },
        {
          "area": "Datos",
          "items": "Redshift · Metabase"
        },
        {
          "area": "Integraciones",
          "items": "HubSpot · CleverTap · Google Analytics · Meta Ads · TikTok Ads"
        }
      ],
      "current": false
    },
    {
      "company": "MVM Ingeniería de Software",
      "role": "Analista de software",
      "period": "Julio 2021 — enero 2023",
      "summary": "Desarrollo Full Stack para el sector energético colombiano.",
      "details": [
        "Módulos con Angular, TypeScript, .NET Core y SQL Server.",
        "Microservicios, interfaces con Syncfusion y pruebas unitarias con Karma."
      ],
      "technologies": [
        {
          "area": "Desarrollo",
          "items": "Angular · TypeScript · .NET Core"
        },
        {
          "area": "Datos",
          "items": "SQL Server"
        },
        {
          "area": "Interfaz y pruebas",
          "items": "Syncfusion · Karma"
        }
      ],
      "current": false
    },
    {
      "company": "Logical Software Factory",
      "role": "Desarrollador de software",
      "period": "Enero 2021 — julio 2021",
      "summary": "Soluciones para el sector asegurador y modernización de sistemas legacy.",
      "details": [
        "Desarrollo y mantenimiento con .NET, ASP.NET, React y SQL Server.",
        "Optimización de procedimientos almacenados con una reducción del 83% en tiempos de consulta."
      ],
      "technologies": [
        {
          "area": "Desarrollo",
          "items": ".NET · ASP.NET · React"
        },
        {
          "area": "Datos",
          "items": "SQL Server"
        }
      ],
      "current": false
    },
    {
      "company": "Tecnologías Sinergia S.A.S",
      "role": "Desarrollador de software",
      "period": "Junio 2019 — enero 2021",
      "summary": "Desarrollo de ERP e interfaces responsivas.",
      "details": [
        "Desarrollo de un ERP con Angular y Laravel.",
        "Interfaces responsivas con Bootstrap y TypeScript; mejoras de flujos y rendimiento."
      ],
      "technologies": [
        {
          "area": "Desarrollo",
          "items": "Angular · TypeScript · Laravel"
        },
        {
          "area": "Interfaz",
          "items": "Bootstrap"
        }
      ],
      "current": false
    }
  ],
  "skills": [
    {
      "name": "Frontend",
      "items": "React, Angular, TypeScript, JavaScript, Syncfusion"
    },
    {
      "name": "Backend",
      "items": "Python / FastAPI, C# / .NET, Node.js / Express, Laravel / PHP"
    },
    {
      "name": "Datos",
      "items": "Oracle / PL/SQL, SQL Server, PostgreSQL, MySQL, Redshift, Polars, Metabase"
    },
    {
      "name": "Infraestructura y calidad",
      "items": "Docker, GCP, Azure, AWS, APIs REST, microservicios, Karma"
    }
  ],
  "education": [
    {
      "degree": "Ingeniería de Software",
      "period": "2018 — 2023"
    },
    {
      "degree": "Tecnólogo en Desarrollo de Sistemas de Información y Redes",
      "period": "2020 — 2021"
    },
    {
      "degree": "Técnico Profesional en Soporte de Sistemas Informáticos y Redes",
      "period": "2018 — 2020"
    }
  ],
  "institution": "Fundación Escuela Tecnológica de Neiva",
  "contact": {
    "title": "Hablemos.",
    "text": "Puedes contactarme por LinkedIn."
  }
};
