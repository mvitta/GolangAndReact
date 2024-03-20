import Paragraph from '@/components/Paragraph'
import { IconNextJS } from '@/icons/IconNextJS'
import { IconReactJS } from '@/icons/IconReactJS'
import { IconTailwind } from '@/icons/IconTailwind'
import IconGo from '@/icons/IconGo'
import { Suspense } from 'react'

export default async function Page() {
  await new Promise((resolve) => setTimeout(resolve, 1000))
  return (
    <>
      <section className='min-h-screen h-auto relative p-2 text-black'>
        <div className='absolute right-0 top-0 z-[-1]'>
          <svg
            width='auto'
            height='556'
            viewBox='0 0 450 556'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <circle
              cx='277'
              cy='63'
              r='225'
              fill='url(#paint0_linear_25:217)'
            ></circle>
            <circle
              cx='17.9997'
              cy='182'
              r='18'
              fill='url(#paint1_radial_25:217)'
            ></circle>
            <circle
              cx='76.9997'
              cy='288'
              r='34'
              fill='url(#paint2_radial_25:217)'
            ></circle>
            <circle
              cx='325.486'
              cy='302.87'
              r='180'
              transform='rotate(-37.6852 325.486 302.87)'
              fill='url(#paint3_linear_25:217)'
            ></circle>
            <circle
              opacity='0.8'
              cx='184.521'
              cy='315.521'
              r='132.862'
              transform='rotate(114.874 184.521 315.521)'
              stroke='url(#paint4_linear_25:217)'
            ></circle>
            <circle
              opacity='0.8'
              cx='356'
              cy='290'
              r='179.5'
              transform='rotate(-30 356 290)'
              stroke='url(#paint5_linear_25:217)'
            ></circle>
            <circle
              opacity='0.8'
              cx='191.659'
              cy='302.659'
              r='133.362'
              transform='rotate(133.319 191.659 302.659)'
              fill='url(#paint6_linear_25:217)'
            ></circle>
            <defs>
              <linearGradient
                id='paint0_linear_25:217'
                x1='-54.5003'
                y1='-178'
                x2='222'
                y2='288'
                gradientUnits='userSpaceOnUse'
              >
                <stop stopColor='#4A6CF7'></stop>
                <stop offset='1' stopColor='#4A6CF7' stopOpacity='0'></stop>
              </linearGradient>
              <radialGradient
                id='paint1_radial_25:217'
                cx='0'
                cy='0'
                r='1'
                gradientUnits='userSpaceOnUse'
                gradientTransform='translate(17.9997 182) rotate(90) scale(18)'
              >
                <stop
                  offset='0.145833'
                  stopColor='#4A6CF7'
                  stopOpacity='0'
                ></stop>
                <stop offset='1' stopColor='#4A6CF7' stopOpacity='0.08'></stop>
              </radialGradient>
              <radialGradient
                id='paint2_radial_25:217'
                cx='0'
                cy='0'
                r='1'
                gradientUnits='userSpaceOnUse'
                gradientTransform='translate(76.9997 288) rotate(90) scale(34)'
              >
                <stop
                  offset='0.145833'
                  stopColor='#4A6CF7'
                  stopOpacity='0'
                ></stop>
                <stop offset='1' stopColor='#4A6CF7' stopOpacity='0.08'></stop>
              </radialGradient>
              <linearGradient
                id='paint3_linear_25:217'
                x1='226.775'
                y1='-66.1548'
                x2='292.157'
                y2='351.421'
                gradientUnits='userSpaceOnUse'
              >
                <stop stopColor='#4A6CF7'></stop>
                <stop offset='1' stopColor='#4A6CF7' stopOpacity='0'></stop>
              </linearGradient>
              <linearGradient
                id='paint4_linear_25:217'
                x1='184.521'
                y1='182.159'
                x2='184.521'
                y2='448.882'
                gradientUnits='userSpaceOnUse'
              >
                <stop stopColor='#4A6CF7'></stop>
                <stop offset='1' stopColor='white' stopOpacity='0'></stop>
              </linearGradient>
              <linearGradient
                id='paint5_linear_25:217'
                x1='356'
                y1='110'
                x2='356'
                y2='470'
                gradientUnits='userSpaceOnUse'
              >
                <stop stopColor='#4A6CF7'></stop>
                <stop offset='1' stopColor='white' stopOpacity='0'></stop>
              </linearGradient>
              <linearGradient
                id='paint6_linear_25:217'
                x1='118.524'
                y1='29.2497'
                x2='166.965'
                y2='338.63'
                gradientUnits='userSpaceOnUse'
              >
                <stop stopColor='#4A6CF7'></stop>
                <stop offset='1' stopColor='#4A6CF7' stopOpacity='0'></stop>
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div className='absolute bottom-0 left-0 z-[-1]'>
          <svg
            width='auto'
            height='201'
            viewBox='0 0 364 201'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M5.88928 72.3303C33.6599 66.4798 101.397 64.9086 150.178 105.427C211.155 156.076 229.59 162.093 264.333 166.607C299.076 171.12 337.718 183.657 362.889 212.24'
              stroke='url(#paint0_linear_25:218)'
            ></path>
            <path
              d='M-22.1107 72.3303C5.65989 66.4798 73.3965 64.9086 122.178 105.427C183.155 156.076 201.59 162.093 236.333 166.607C271.076 171.12 309.718 183.657 334.889 212.24'
              stroke='url(#paint1_linear_25:218)'
            ></path>
            <path
              d='M-53.1107 72.3303C-25.3401 66.4798 42.3965 64.9086 91.1783 105.427C152.155 156.076 170.59 162.093 205.333 166.607C240.076 171.12 278.718 183.657 303.889 212.24'
              stroke='url(#paint2_linear_25:218)'
            ></path>
            <path
              d='M-98.1618 65.0889C-68.1416 60.0601 4.73364 60.4882 56.0734 102.431C120.248 154.86 139.905 161.419 177.137 166.956C214.37 172.493 255.575 186.165 281.856 215.481'
              stroke='url(#paint3_linear_25:218)'
            ></path>
            <circle
              opacity='0.8'
              cx='214.505'
              cy='60.5054'
              r='49.7205'
              transform='rotate(-13.421 214.505 60.5054)'
              stroke='url(#paint4_linear_25:218)'
            ></circle>
            <circle
              cx='220'
              cy='63'
              r='43'
              fill='url(#paint5_radial_25:218)'
            ></circle>
            <defs>
              <linearGradient
                id='paint0_linear_25:218'
                x1='184.389'
                y1='69.2405'
                x2='184.389'
                y2='212.24'
                gradientUnits='userSpaceOnUse'
              >
                <stop stopColor='#4A6CF7' stopOpacity='0'></stop>
                <stop offset='1' stopColor='#4A6CF7'></stop>
              </linearGradient>
              <linearGradient
                id='paint1_linear_25:218'
                x1='156.389'
                y1='69.2405'
                x2='156.389'
                y2='212.24'
                gradientUnits='userSpaceOnUse'
              >
                <stop stopColor='#4A6CF7' stopOpacity='0'></stop>
                <stop offset='1' stopColor='#4A6CF7'></stop>
              </linearGradient>
              <linearGradient
                id='paint2_linear_25:218'
                x1='125.389'
                y1='69.2405'
                x2='125.389'
                y2='212.24'
                gradientUnits='userSpaceOnUse'
              >
                <stop stopColor='#4A6CF7' stopOpacity='0'></stop>
                <stop offset='1' stopColor='#4A6CF7'></stop>
              </linearGradient>
              <linearGradient
                id='paint3_linear_25:218'
                x1='93.8507'
                y1='67.2674'
                x2='89.9278'
                y2='210.214'
                gradientUnits='userSpaceOnUse'
              >
                <stop stopColor='#4A6CF7' stopOpacity='0'></stop>
                <stop offset='1' stopColor='#4A6CF7'></stop>
              </linearGradient>
              <linearGradient
                id='paint4_linear_25:218'
                x1='214.505'
                y1='10.2849'
                x2='212.684'
                y2='99.5816'
                gradientUnits='userSpaceOnUse'
              >
                <stop stopColor='#4A6CF7'></stop>
                <stop offset='1' stopColor='#4A6CF7' stopOpacity='0'></stop>
              </linearGradient>
              <radialGradient
                id='paint5_radial_25:218'
                cx='0'
                cy='0'
                r='1'
                gradientUnits='userSpaceOnUse'
                gradientTransform='translate(220 63) rotate(90) scale(43)'
              >
                <stop
                  offset='0.145833'
                  stopColor='white'
                  stopOpacity='0'
                ></stop>
                <stop offset='1' stopColor='white' stopOpacity='0.08'></stop>
              </radialGradient>
            </defs>
          </svg>
        </div>
        <div className='mx-6'>
          <h1 className='text-center text-slate-700 text-5xl text-balance font-bold mb-8 mt-5'>
            Application Con ReactJS, NextJS y Golang + Tailwindcss y CSS Basico
          </h1>
          <Suspense fallback={'cargando parrafo'}>
            <Paragraph />
          </Suspense>
        </div>
        <div className='grid grid-cols-2 justify-items-center sm:flex sm:flex-row  sm:justify-center my-12'>
          <IconTailwind />
          <IconReactJS />
          <IconNextJS />
          <IconGo w={80} h={80} />
        </div>

        <div className='flex flex-row mx-6 space-x-4 justify-center'>
          <a
            className='bg-slate-700 text-white py-3 px-5'
            href='http://'
            target='_blank'
            rel='noopener noreferrer'
          >
            Empezar
          </a>
          <a
            className='bg-gray-600 text-white py-3 px-5'
            href='http://'
            target='_blank'
            rel='noopener noreferrer'
          >
            Github
          </a>
        </div>
      </section>
      <br />
      <section className='columns-1 gap-4 sm:columns-2 mx-6 mb-5'>
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
