import { useState, useEffect, useRef } from 'react'

interface PropsInput extends React.InputHTMLAttributes<HTMLInputElement> {}

export default function Input(props: PropsInput) {
  const [valueInput, setValueInput] = useState<string>('')
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (!inputRef.current) throw Error('divRef is not assigned')
    //

    //
  }, [valueInput])

  useEffect(() => {
    const new_classes = [
      'valid:bg-green-200',
      'valid:focus:outline-green-400',
      'invalid:bg-red-200',
      'invalid:focus:outline-red-400',
    ]

    if (valueInput !== '' && inputRef.current)
      inputRef.current.classList.add(...new_classes)
  }, [valueInput])

  function handlerChance(e: React.ChangeEvent<HTMLInputElement>) {
    setValueInput(e.target.value)
  }

  return (
    <input
      type=''
      required
      ref={inputRef}
      className='w-full p-2 border bg-gray-200 rounded outline-none focus:outline-2 focus:outline-app-color focus:outline-offset-0 caret-app-color'
      onChange={handlerChance}
      {...props}
    />
  )
}
