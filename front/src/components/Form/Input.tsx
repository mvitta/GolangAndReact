import React, { useState, useEffect, useRef } from 'react'

interface PropsInput extends React.InputHTMLAttributes<HTMLInputElement> {}

export default function Input(props: PropsInput) {
  const [valueInput, setValueInput] = useState<string>('')
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (!inputRef.current) throw Error('divRef is not assigned')

    if (props.id == 'password-2') {
      const inputPassword1 = document.getElementById(
        'password-1'
      ) as HTMLInputElement
      const valuePassword1 = inputPassword1?.value

      if (valueInput === valuePassword1 && valueInput !== '') {
        inputRef.current.classList.add(
          'outline-green-400',
          'focus:outline-green-400'
        )
        inputRef.current.classList.remove(
          'outline-red-400',
          'focus:outline-red-400'
        )
      } else if (valueInput !== '') {
        inputRef.current.classList.remove(
          'outline-green-400',
          'focus:outline-green-400'
        )
        inputRef.current.classList.add(
          'outline-red-400',
          'focus:outline-red-400'
        )
      }
    }
  }, [props.id, valueInput])

  useEffect(() => {
    const new_classes = [
      'valid:outline-green-400',
      'valid:focus:outline-green-400',
      'invalid:outline-red-400',
      'invalid:focus:outline-red-400',
    ]

    if (
      valueInput !== '' &&
      inputRef.current &&
      inputRef.current.id !== 'password-2'
    )
      inputRef.current.classList.add(...new_classes)
  }, [valueInput])

  function handlerChance(e: React.ChangeEvent<HTMLInputElement>) {
    setValueInput(e.target.value)
  }

  return (
    <input
      // required
      ref={inputRef}
      className='w-full p-2 border bg-gray-200 rounded outline-none focus:outline-2 focus:outline-app-color focus:outline-offset-0 caret-app-color'
      onChange={handlerChance}
      {...props}
    />
  )
}
