import IconGo from '@/icons/IconGo'
import { IconNextJS } from '@/icons/IconNextJS'
import { IconReactJS } from '@/icons/IconReactJS'
import { IconTailwind } from '@/icons/IconTailwind'

export interface Tech {
  id: number
  icon: JSX.Element
  title: string
  paragraphs: string[]
  list?: string[]
  url: string
}

export const technologiesData: Tech[] = [
  {
    icon: <IconNextJS />,
    title: 'Next JS',
    url: 'https://nextjs.org/',
    id: 1,
    paragraphs: [
      'Next.js es un marco web de desarrollo front-end de React de código abierto creado por Vercel que habilita funcionalidades como la representación del lado del servidor y la generación de sitios web estáticos para aplicaciones web basadas en React. Es un marco listo para producción que permite a los desarrolladores crear rápidamente sitios JAMstack estáticos y dinámicos y es ampliamente utilizado por muchas grandes empresas',
    ],
  },
  {
    icon: <IconReactJS />,
    title: 'React JS',
    url: 'https://react.dev/',
    paragraphs: [
      ' React (también llamada React.js o ReactJS) es una biblioteca Javascript de código abierto diseñada para crear interfaces de usuario con el objetivo de facilitar el desarrollo de aplicaciones en una sola página. Es mantenido por Facebook y la comunidad de software libre. En el proyecto hay más de mil desarrolladores libres.',

      ' React intenta ayudar a los desarrolladores a construir aplicaciones que usan datos que cambian todo el tiempo. Su objetivo es ser sencillo, declarativo y fácil de combinar. React sólo maneja la interfaz de usuario en una aplicación; React es la Vista en un contexto en el que se use el patrón MVC (Modelo-Vista-Controlador) o MVVM (Modelo-vista-modelo de vista). También puede ser utilizado con las extensiones de React-based que se encargan de las partes no-UI (que no forman parte de la interfaz de usuario) de una aplicación web.',
    ],
    list: [
      'Un lenguaje de programación de código abierto respaldado por Google',
      'Fácil de aprender y excelente para equipos.',
      'Simultaneidad integrada y una biblioteca estándar sólida',
      'Gran ecosistema de socios, comunidades y herramientas',
    ],
    id: 2,
  },
  {
    icon: <IconGo h={80} w={80} />,
    title: 'Golang',
    url: 'https://go.dev/',
    paragraphs: [
      'Go es un lenguaje de programación concurrente y compilado con tipado estático inspirado en la sintaxis de C, pero con seguridad de memoria y recolección de basura. Ha sido desarrollado por Google9​ y sus diseñadores iniciales fueron Robert Griesemer, Rob Pike y Ken Thompson.10​ Actualmente está disponible en formato binario para los sistemas operativos Windows, GNU/Linux, FreeBSD y Mac OS X, pudiendo también ser instalado en estos y en otros sistemas mediante el código fuente.11​12​ Go es un lenguaje de programación compilado, concurrente, imperativo, estructurado y orientado a objetos que de momento está disponible para diferentes tipos de sistemas Unix-like, incluidos Linux, FreeBSD, Mac OS X y Plan 9 (puesto que parte del compilador está basado en un trabajo previo sobre el sistema operativo Inferno). Las arquitecturas soportadas son i386,   amd64 y ARM.',
    ],
    id: 3,
  },
  {
    icon: <IconTailwind />,
    title: 'Tailwind',
    url: 'https://tailwindcss.com/',
    paragraphs: [
      'Tailwind CSS es un framework de CSS de código abierto2​ para el diseño de páginas web. La principal característica de esta biblioteca es que, a diferencia de otras como Bootstrap, no genera una serie de clases predefinidas para elementos como botones o tablas. En su lugar, crea una lista de clases CSS que se pueden usar para dar estilos individuales a cada elemento.3​',
    ],
    id: 4,
  },
]
