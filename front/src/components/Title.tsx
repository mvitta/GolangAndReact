interface PropsTitle {
  contentTitle: string
}

export default function Title({ contentTitle }: PropsTitle) {
  return (
    <h1 className='font-bold py-8 text-center text-balance text-4xl text-app-color uppercase'>
      {contentTitle}
    </h1>
  )
}
