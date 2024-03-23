interface PropsSVG extends React.SVGProps<SVGSVGElement> {
  w: string
  h: string
}

export function Twitter({ w, h, ...resPropsSVG }: PropsSVG): JSX.Element {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={w}
      height={h}
      viewBox='0 -4 48 48'
      {...resPropsSVG}
    >
      <title>{'Twitter-color'}</title>
      <path
        fill='#00AAEC'
        fillRule='evenodd'
        d='M48 4.735a19.235 19.235 0 0 1-5.655 1.59A10.076 10.076 0 0 0 46.675.74a19.395 19.395 0 0 1-6.257 2.447C38.627 1.225 36.066 0 33.231 0c-5.435 0-9.844 4.521-9.844 10.098 0 .791.085 1.56.254 2.3C15.456 11.974 8.2 7.96 3.34 1.842A10.281 10.281 0 0 0 2.01 6.925c0 3.502 1.738 6.593 4.38 8.405a9.668 9.668 0 0 1-4.462-1.26v.124c0 4.894 3.395 8.977 7.903 9.901a9.39 9.39 0 0 1-2.595.356c-.634 0-1.254-.061-1.854-.18 1.254 4.01 4.888 6.932 9.199 7.01-3.37 2.71-7.618 4.325-12.23 4.325-.795 0-1.58-.047-2.35-.139C4.359 38.327 9.537 40 15.096 40c18.115 0 28.019-15.385 28.019-28.73 0-.439-.009-.878-.026-1.308A20.211 20.211 0 0 0 48 4.735'
      />
    </svg>
  )
}

export function Instagram({ w, h, ...resPropsSVG }: PropsSVG): JSX.Element {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={w}
      height={h}
      fill='none'
      viewBox='0 0 32 32'
      {...resPropsSVG}
    >
      <rect width={28} height={28} x={2} y={2} fill='url(#a)' rx={6} />
      <rect width={28} height={28} x={2} y={2} fill='url(#b)' rx={6} />
      <rect width={28} height={28} x={2} y={2} fill='url(#c)' rx={6} />
      <path fill='#fff' d='M23 10.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z' />
      <path
        fill='#fff'
        fillRule='evenodd'
        d='M16 21a5 5 0 1 0 0-10 5 5 0 0 0 0 10Zm0-2a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z'
        clipRule='evenodd'
      />
      <path
        fill='#fff'
        fillRule='evenodd'
        d='M6 15.6c0-3.36 0-5.04.654-6.324a6 6 0 0 1 2.622-2.622C10.56 6 12.24 6 15.6 6h.8c3.36 0 5.04 0 6.324.654a6 6 0 0 1 2.622 2.622C26 10.56 26 12.24 26 15.6v.8c0 3.36 0 5.04-.654 6.324a6 6 0 0 1-2.622 2.622C21.44 26 19.76 26 16.4 26h-.8c-3.36 0-5.04 0-6.324-.654a6 6 0 0 1-2.622-2.622C6 21.44 6 19.76 6 16.4v-.8ZM15.6 8h.8c1.713 0 2.878.002 3.778.075.877.072 1.325.202 1.638.361a4 4 0 0 1 1.748 1.748c.16.313.29.761.36 1.638.074.9.076 2.065.076 3.778v.8c0 1.713-.002 2.878-.075 3.778-.072.877-.202 1.325-.361 1.638a4 4 0 0 1-1.748 1.748c-.313.16-.761.29-1.638.36-.9.074-2.065.076-3.778.076h-.8c-1.713 0-2.878-.002-3.778-.075-.877-.072-1.325-.202-1.638-.361a4 4 0 0 1-1.748-1.748c-.16-.313-.29-.761-.36-1.638C8.001 19.278 8 18.113 8 16.4v-.8c0-1.713.002-2.878.075-3.778.072-.877.202-1.325.361-1.638a4 4 0 0 1 1.748-1.748c.313-.16.761-.29 1.638-.36.9-.074 2.065-.076 3.778-.076Z'
        clipRule='evenodd'
      />
      <defs>
        <radialGradient
          id='a'
          cx={0}
          cy={0}
          r={1}
          gradientTransform='rotate(-55.376 27.916 .066) scale(25.5196)'
          gradientUnits='userSpaceOnUse'
        >
          <stop stopColor='#B13589' />
          <stop offset={0.793} stopColor='#C62F94' />
          <stop offset={1} stopColor='#8A3AC8' />
        </radialGradient>
        <radialGradient
          id='b'
          cx={0}
          cy={0}
          r={1}
          gradientTransform='rotate(-65.136 29.766 6.89) scale(22.5942)'
          gradientUnits='userSpaceOnUse'
        >
          <stop stopColor='#E0E8B7' />
          <stop offset={0.445} stopColor='#FB8A2E' />
          <stop offset={0.715} stopColor='#E2425C' />
          <stop offset={1} stopColor='#E2425C' stopOpacity={0} />
        </radialGradient>
        <radialGradient
          id='c'
          cx={0}
          cy={0}
          r={1}
          gradientTransform='matrix(38.50003 -5.5 1.1764 8.23476 .5 3)'
          gradientUnits='userSpaceOnUse'
        >
          <stop offset={0.157} stopColor='#406ADC' />
          <stop offset={0.468} stopColor='#6A45BE' />
          <stop offset={1} stopColor='#6A45BE' stopOpacity={0} />
        </radialGradient>
      </defs>
    </svg>
  )
}

export function Github({ w, h, ...resPropsSVG }: PropsSVG): JSX.Element {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={w}
      height={h}
      viewBox='0 -0.5 48 48'
      {...resPropsSVG}
    >
      <title>{'Github-color'}</title>
      <path
        fill='#3E75C3'
        fillRule='evenodd'
        d='M23.999 0C10.746 0 0 10.787 0 24.097 0 34.74 6.876 43.772 16.414 46.958c1.2.222 1.639-.522 1.639-1.16 0-.573-.021-2.088-.034-4.098-6.676 1.456-8.085-3.23-8.085-3.23-1.09-2.784-2.664-3.525-2.664-3.525-2.179-1.495.166-1.465.166-1.465 2.407.17 3.675 2.483 3.675 2.483 2.142 3.683 5.617 2.62 6.985 2.002.217-1.557.838-2.619 1.524-3.221-5.33-.609-10.932-2.675-10.932-11.908 0-2.63.934-4.781 2.47-6.466-.247-.61-1.07-3.059.235-6.377 0 0 2.016-.647 6.6 2.47 1.915-.534 3.967-.801 6.008-.811 2.039.01 4.092.277 6.01.811 4.58-3.117 6.592-2.47 6.592-2.47 1.31 3.318.486 5.767.238 6.377 1.54 1.685 2.468 3.835 2.468 6.466 0 9.256-5.612 11.293-10.958 11.89.861.744 1.63 2.213 1.63 4.462 0 3.22-.03 5.819-.03 6.61 0 .644.432 1.394 1.65 1.157C41.13 43.763 48 34.738 48 24.097 48 10.787 37.254 0 23.999 0'
      />
    </svg>
  )
}

export function Linkedin({ w, h, ...resPropsSVG }: PropsSVG): JSX.Element {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={w}
      height={h}
      fill='none'
      viewBox='0 0 16 16'
      {...resPropsSVG}
    >
      <path
        fill='#0A66C2'
        d='M12.225 12.225h-1.778V9.44c0-.664-.012-1.519-.925-1.519-.926 0-1.068.724-1.068 1.47v2.834H6.676V6.498h1.707v.783h.024c.348-.594.996-.95 1.684-.925 1.802 0 2.135 1.185 2.135 2.728l-.001 3.14zM4.67 5.715a1.037 1.037 0 0 1-1.032-1.031c0-.566.466-1.032 1.032-1.032.566 0 1.031.466 1.032 1.032 0 .566-.466 1.032-1.032 1.032zm.889 6.51h-1.78V6.498h1.78v5.727zM13.11 2H2.885A.88.88 0 0 0 2 2.866v10.268a.88.88 0 0 0 .885.866h10.226a.882.882 0 0 0 .889-.866V2.865a.88.88 0 0 0-.889-.864z'
      />
    </svg>
  )
}

interface ToLink {
  ComponentIcon: ({ w, h, ...resPropsSVG }: PropsSVG) => JSX.Element
  url: string
}

export const socialMedia: ToLink[] = [
  { ComponentIcon: Twitter, url: 'https://twitter.com/MIKEVITTA1' },
  { ComponentIcon: Instagram, url: 'https://www.instagram.com/mike_vitta/' },
  { ComponentIcon: Github, url: 'https://github.com/mvitta' },
  { ComponentIcon: Linkedin, url: 'https://www.linkedin.com/in/maikoldevjs/' },
]
