'use client'

import { useState, useEffect } from 'react'

export default function Input(
  props: React.InputHTMLAttributes<HTMLInputElement>
) {
  const [valueInput, setValueInput] = useState<string>('')

  function handlerChance(e: React.ChangeEvent<HTMLInputElement>) {
    setValueInput(e.target.value)
  }

  return (
    <input
      className='w-full p-2 border bg-gray-200 rounded outline-none focus:outline-2 focus:outline-app-color focus:outline-offset-0'
      onChange={handlerChance}
      {...props}
    />
  )
}
