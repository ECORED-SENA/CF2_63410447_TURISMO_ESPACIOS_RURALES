export default {
  global: {
    componenteFormativo: 'El turismo en espacios reales',
    descripcionCurso:
      'El componente formativo aborda la evolución del espacio rural, destacando su transición de la agricultura a nuevas funciones como la conservación ambiental y el turismo. Se exploran conceptos clave como la nueva ruralidad, multifuncionalidad y empleo rural no agrícola, subrayando la necesidad de equilibrio territorial y sostenible, así como la relación interdependiente entre lo rural y lo urbano.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/2.png'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/3.png'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'El turismo rural: un turismo alternativo',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Origen del turismo rural',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: '¿Qué es turismo rural?',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Turismo rural en Colombia',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: 'Modalidades de turismo en espacios rurales',
            hash: 't_1_4',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Desarrollo sostenible y turismo rural',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Los cambios en el turismo',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'La sustentabilidad y el turismo rural',
            hash: 't_2_2',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/63410447_CF02_DU.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'El turismo rural: un turismo alternativo',
      referencia:
        'Dirección de Comunicación Institucional – FAUBA (2016). El turismo rural. [Archivo de video] Youtube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=vMo9nhfs1p0',
    },
    {
      tema: '¿Qué es turismo rural?',
      referencia:
        'Canal Trece Colombia (2021). Somos Región: Turismo rural y comunitario [Archivo de video] Youtube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=XRRrBM6Hmug',
    },
    {
      tema: 'Turismo rural en Colombia',
      referencia:
        'Canal Trece Colombia (2023). Turismo rural y agrícola en Consacá y Nariño | Ruta por Colombia [Archivo de video] Youtube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=b48T0783LrQ',
    },
    {
      tema: 'Desarrollo sostenible y turismo rural',
      referencia:
        'CECODES Desarrollo Sostenible (2017). Turismo Rural comunitario para la sostenibilidad de los territorios [Archivo de video] Youtube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=lC-Ad5rdWDE',
    },
    {
      tema: 'Los cambios en el turismo',
      referencia:
        'Martiny, J. (2023, agosto 22). <i>¿Qué cambió en el sector turístico tras la pandemia?</i> Deutsche Welle.',
      tipo: 'Artículo',
      link:
        'https://www.dw.com/es/qu%C3%A9-cambi%C3%B3-en-el-sector-tur%C3%ADstico-tras-la-pandemia/a-66600996',
    },
    {
      tema: 'La sustentabilidad y el turismo rural',
      referencia:
        'Almanza Valdés, Eréndira, Thomé Ortiz, Humberto, Vizcarra Bordi, Ivonne, Caballero Aguilar, Hilda, & Marañón Pimentel, Boris Wolfang. (2023). TURISMO RURAL COMO ALTERNATIVA BIOCÉNTRICA AL CONCEPTO DE SUSTENTABILIDAD, UNA MIRADA DESCOLONIAL. <i>Tendencias, 24</i>(2), 307-331.',
      tipo: 'Artículo',
      link:
        'http://www.scielo.org.co/scielo.php?script=sci_arttext&pid=S0124-86932023000200307',
    },
  ],
  glosario: [
    {
      termino: 'Empleo rural no agrícola',
      significado:
        'actividades económicas en áreas rurales no relacionadas con la agricultura, como la manufactura, el comercio y los servicios turísticos.',
    },
    {
      termino: 'Equilibrio territorial',
      significado:
        'estrategia para distribuir equitativamente actividades y población entre zonas rurales y urbanas, previniendo el despoblamiento rural y promoviendo el desarrollo sostenible.',
    },
    {
      termino: 'Espacio natural virgen',
      significado:
        'áreas rurales que no han sido alteradas por la actividad humana, manteniendo sus características y condiciones naturales originales.',
    },
    {
      termino: 'Espacio rural',
      significado:
        'áreas con baja densidad poblacional, predominadas por actividades como la agricultura, la ganadería y la conservación de espacios naturales.',
    },
    {
      termino: 'Interdependencia urbano-rural',
      significado:
        'relación de dependencia mutua entre áreas urbanas y rurales, donde ambas se benefician de sus recursos y servicios, contribuyendo al desarrollo regional y bienestar común.',
    },
    {
      termino: 'Multifuncionalidad',
      significado:
        'uso diversificado del suelo en áreas rurales, incluyendo actividades agrícolas, recreativas, turísticas y de conservación, promoviendo un desarrollo sostenible.',
    },
    {
      termino: 'Nueva ruralidad',
      significado:
        'concepto que redefine el espacio rural, ampliando sus funciones más allá de la agricultura para incluir la conservación ambiental, el turismo y otros servicios.',
    },
    {
      termino: 'Pluriactividad',
      significado:
        'diversificación de actividades económicas en el medio rural, como el turismo, la artesanía y la producción de energía, más allá de la agricultura.',
    },
    {
      termino: 'Sostenibilidad',
      significado:
        'capacidad de preservar los recursos naturales y el medio ambiente para futuras generaciones, equilibrando el desarrollo económico con la conservación.',
    },
    {
      termino: 'Turismo rural',
      significado:
        'actividad turística en el medio rural que aprovecha el entorno natural, cultural y paisajístico para ofrecer experiencias de recreación y aprendizaje.',
    },
  ],
  referencias: [
    {
      referencia:
        'Boullon, R. (1985). Planificación del Espacio Turístico. México: Editorial Trillas.',
    },
    {
      referencia:
        'Lozato, J. P. (1991). Geografía del Turismo: Del espacio contemplado al espacio consumido. Barcelona: Editorial Masson.',
    },
    {
      referencia:
        'Pérez, E. (2001). Hacia una nueva visión de lo rural. Artículo parte I del libro: ¿Una nueva ruralidad en América Latina? Buenos Aires: CLACSO.',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Responsable del ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Olga Constanza Bermúdez Jaimes',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Julio Hernán Beltrán Peñuela',
          cargo: 'Experto temático',
          centro:
            '- Centro de Desarrollo Agroempresarial - Regional Cundinamarca',
        },
        {
          nombre: 'Paola Alexandra Moya',
          cargo: 'Evaluadora instruccional',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Andrés Felipe Herrera Roldan',
          cargo: 'Diseñador de contenidos',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Edward Leonardo Pico Cabra',
          cargo: 'Desarrollador <i>full stack</i>',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Wilson Andrés Arenales Cáceres',
          cargo: '<i>Storyboard</i> e ilustración',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Cristhian Giovanni Gordillo Segura',
          cargo: 'Intérprete lenguaje de señas',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Daniela Muñoz Bedoya',
          cargo: 'Animador y productor multimedia',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'María Carolina Tamayo López',
          cargo: 'Locución',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Jaime Hernán Tejada Llano',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Daniel Ricardo Mutis Gómez',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Margarita Marcela Medrano Gómez',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
