export default {
  global: {
    componenteFormativo: 'Conceptos básicos de redes y networking',
    descripcionCurso:
      'Las redes de datos son aquellas que permiten interconectar diferentes dispositivos con el propósito de compartir recursos e información. Para que la comunicación se de, requiere de una serie de elementos y componentes que la faciliten entre estos, dispositivos y otras redes, para que incremente la productividad y facilite el acceso a los recursos.',
    imagenBannerPrincipal: require('@/assets/curso/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.png'),
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
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Definición y generalidades de redes de datos',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Modelos de referencia',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Protocolos de comunicación',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Puertos de comunicación',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema5',
        icono: 'far fa-file-alt',
        numero: '5',
        titulo: 'Medios de Transmisión',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema6',
        icono: 'far fa-file-alt',
        numero: '6',
        titulo: 'Recursos compartidos',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
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
  referencias: [
    {
      referencia: 'Agm Electrica, s.f. Disponible en:',
      link:
        'https://agmelectrical.com.au/images/thumbnails/120/90/detailed/4/rg6coaxial_5pf3-5w.jpg',
    },
    {
      referencia: 'De caldas, f. j. medios de transmisión.',
      link: '',
    },
    {
      referencia: 'Dell, s.f. Disponible en:',
      link: ' https://i.dell.com/images/global/learnmore/wireless_diag.jpg',
    },
    {
      referencia: 'Fernández Barcell, M. (2014). Medios de transmisión. ',
      link: 'http://iboo.szm.sk/antenna.png',
    },
    {
      referencia: 'Iboo electro web, s.f. Disponible en',
      link: '',
    },
    {
      referencia: 'Modelo OSI,nivel del modelo (s.f.) ',
      link:
        'https://sites.google.com/site/redeslocalescc/3-transmision-de-datos-en-las-redes/modelo-osi-niveles-del-modelo-comunicacion-entre-niveles?tmpl=%2Fsystem%2Fapp%2Ftemplates%2Fprint%2F&showPrintDialog=1 ',
    },
    {
      referencia:
        'Pérez, E. H. (2003). Tecnologías y redes de transmisión de datos. Editorial Limusa. ',
    },
    {
      referencia:
        'Stallings, W., Stallings, W., Tanenbaum, A., Fall, K. R., & Stevens, W. R. (2000). Comunicaciones y Redes de Computadores, 6a edición. Prentice-Hall.',
    },
    {
      referencia:
        'Ternero, M. D. C. R., & Mondéjar, J. B. El Modelo de referencia OSI (ISO 7498).',
    },
    {
      referencia: 'Wikimedia, s.f. Disponible en:',
      link:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/UTP_cable.jpg/180px-UTP_cable.jpg',
    },
  ],
  glosario: [
    {
      termino: 'ISO',
      significado: 'organización de estándares internacional',
    },
    {
      termino: 'Medio de transmisión',
      significado:
        'para que la comunicación entre un emisor y un receptor se realice se requiere de un medio que facilite la conexión entre ambos extremos el cual es conocido como el medio de transmisión, este constituye el soporte físico a través del cual emisor y receptor pueden comunicarse en un sistema de transmisión de datos.',
    },
    {
      termino: 'Networking',
      significado:
        'trabajo en equipo, colaborativo y la integración entre los diferentes recursos tecnológicos que permiten potenciar y maximizar el potencial de las redes de datos.',
    },
    {
      termino: 'OSI',
      significado: 'interconexión de sistemas abiertos ',
    },
    {
      termino: 'Protocolo',
      significado:
        'estándar o lenguaje común, el cual es un conjunto de normas que están obligadas a cumplir todos los dispositivos, hardware y software que intervienen en una comunicación de datos entre computadoras y demás dispositivos, sin estas reglas o estándares la comunicación resultaría caótica y por tanto imposible.',
    },
    {
      termino: 'Redes de datos',
      significado:
        'conjunto equipos (computadoras y dispositivos), conectados por medio de cables, señales, ondas o cualquier otro método de transporte de datos, para compartir información (archivos), recursos (discos, impresoras, programas, etc.) y servicios (acceso a una base de datos, internet, correo electrónico, chat, juegos, etc.).',
    },
    {
      termino: 'Puerto de comunicación',
      significado:
        'un puerto de comunicaciones es una interfaz a través de la cual los diferentes dispositivos que intervienen en una comunicación de red pueden enviar y recibir diferentes tipos de datos, los puertos pueden ser de tipo físico(hardware) o lógicos (Software).',
    },
    {
      termino: 'TCP/IP',
      significado: 'protocolo de control de transmisión/ Protocolo IP',
    },
  ],
  complementario: [
    {
      texto: 'M. (2011a, marzo 1). cómo funciona la red ',
      tipo: 'Video',
      link: 'https://youtu.be/D8YG2zfdag0 ',
    },
    {
      texto:
        'It, M. (2020, 10 mayo). Un resumen completo del modelo #TCPIP (Todas sus capas en menos de 7 minutos)',
      tipo: 'Video',
      link: 'https://youtu.be/1pB2kan_AFk ',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Jonathan Guerrero Astaiza',
        cargo: 'Experto temátic',
        centro: 'Centro de teleinformática y producción industrial',
        regional: 'Regional Cauca',
      },
      {
        nombre: 'Paula Andrea Taborda Ortiz',
        cargo: 'Diseñadora instruccional',
        centro: 'Centro de diseño y metrología',
        regional: 'Regional distrito capital',
      },
      {
        nombre: 'Alix Cecilia Chinchilla Rueda',
        cargo: 'Evaluadora instruccional',
        centro: 'Centro de Gestión Industrial.',
        regional: 'Regional distrito capital',
      },
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
        regional: 'Regional Santander',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: ['Yuly Andrea Rey Quiñonez'],
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Camilo Andres Bolaño Rey',
        cargo: 'Desarrollo Front-End',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
    ],
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
