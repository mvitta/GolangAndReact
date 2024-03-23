interface PropsListItem {
  list: string[]
}

export default function ListItem({ list }: PropsListItem) {
  return (
    <ul className='list-image-checkmark list-inside'>
      {list.map((item) => (
        <li key={crypto.randomUUID()} className='mb-3'>
          {item}
        </li>
      ))}
    </ul>
  )
}
