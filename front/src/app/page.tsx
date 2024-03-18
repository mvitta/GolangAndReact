import Paragraph from '@/components/Paragraph'
import { Suspense } from 'react'

export default async function Page() {
  await new Promise((resolve) => setTimeout(resolve, 1000))
  return (
    <>
      <h1>Application Con ReactJS, NextJS y Golang</h1>
      <section className='parag'>
        <Suspense fallback={'cargando parrafo'}>
          <Paragraph />
        </Suspense>
      </section>
      <section className='columns-1 gap-4 sm:columns-2'>
        <div>
          <h2>React JS</h2>
          <br />
          <p>
            React (también llamada React.js o ReactJS) es una biblioteca
            Javascript de código abierto diseñada para crear interfaces de
            usuario con el objetivo de facilitar el desarrollo de aplicaciones
            en una sola página. Es mantenido por Facebook y la comunidad de
            software libre. En el proyecto hay más de mil desarrolladores
            libres.
          </p>
          <p>
            React intenta ayudar a los desarrolladores a construir aplicaciones
            que usan datos que cambian todo el tiempo. Su objetivo es ser
            sencillo, declarativo y fácil de combinar. React sólo maneja la
            interfaz de usuario en una aplicación; React es la Vista en un
            contexto en el que se use el patrón MVC (Modelo-Vista-Controlador) o
            MVVM (Modelo-vista-modelo de vista). También puede ser utilizado con
            las extensiones de React-based que se encargan de las partes no-UI
            (que no forman parte de la interfaz de usuario) de una aplicación
            web.
          </p>
        </div>
        <hr />
        <div>
          <h2>NextJS</h2>
          <br />
          <p>
            Next.js es un marco web de desarrollo front-end de React de código
            abierto creado por Vercel que habilita funcionalidades como la
            representación del lado del servidor y la generación de sitios web
            estáticos para aplicaciones web basadas en React. Es un marco listo
            para producción que permite a los desarrolladores crear rápidamente
            sitios JAMstack estáticos y dinámicos y es ampliamente utilizado por
            muchas grandes empresas.2​
          </p>
        </div>
        <hr />
        <div>
          <h2>Golang</h2>
          <br />
          <p>
            Go es un lenguaje de programación concurrente y compilado con tipado
            estático inspirado en la sintaxis de C, pero con seguridad de
            memoria y recolección de basura. Ha sido desarrollado por Google9​ y
            sus diseñadores iniciales fueron Robert Griesemer, Rob Pike y Ken
            Thompson.10​ Actualmente está disponible en formato binario para los
            sistemas operativos Windows, GNU/Linux, FreeBSD y Mac OS X, pudiendo
            también ser instalado en estos y en otros sistemas mediante el
            código fuente.11​12​ Go es un lenguaje de programación compilado,
            concurrente, imperativo, estructurado y orientado a objetos que de
            momento está disponible para diferentes tipos de sistemas Unix-like,
            incluidos Linux, FreeBSD, Mac OS X y Plan 9 (puesto que parte del
            compilador está basado en un trabajo previo sobre el sistema
            operativo Inferno). Las arquitecturas soportadas son i386, amd64 y
            ARM.
          </p>
          <br />
          <ul className='list-disc list-inside list'>
            <li>
              Un lenguaje de programación de código abierto respaldado por
              Google
            </li>
            <li>Fácil de aprender y excelente para equipos.</li>
            <li>Simultaneidad integrada y una biblioteca estándar sólida</li>
            <li>Gran ecosistema de socios, comunidades y herramientas</li>
          </ul>
        </div>
      </section>
    </>
  )
}
