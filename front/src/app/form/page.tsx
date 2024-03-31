'use client'

import Input from '@/components/Form/Input'
import Label from '@/components/Form/Label'
import Title from '@/components/Title'
import { inputFields } from '@/components/Form/inputsFields'
import Button from '@/components/Form/Button'
import RadioButtons from '@/components/Form/RadioButton'

export default function FormPage() {
  function handlerSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()

    const formData = new FormData(e.currentTarget)
    // const data = Object.fromEntries(formData)
    // console.log(data)

    fetch('http://localhost:8080/form', {
      method: 'POST',
      headers: {
        Origin: 'http://localhost:3000',
      },
      body: formData,
    })
      .then((response) => {
        if (response.ok) return response.json()
      })
      .then((message) => {
        console.log(message)
      })
      .catch((error) => console.error(error))
  }

  return (
    <>
      <Title contentTitle='Formulario de Registro' />
      <p className='text-center'>
        Los campos con <span className='text-red-500 font-bold'>*</span> son
        obligatorios
      </p>
      <form
        onSubmit={handlerSubmit}
        action=''
        className='form flex flex-col my-8
     w-[100%] mx-auto px-5 sm:w-[60%] lg:w-[40%]'
      >
        {inputFields.map((inputField) => {
          const { label, idKey, ...resInputField } = inputField
          return (
            <Label label={label} key={idKey}>
              <Input {...resInputField} />
            </Label>
          )
        })}
        <div className='mb-8'>
          <ul className='list-disc list-inside capitalize font-semibold'>
            <li className='list-image-checkmark'>minimo 8 caracteres</li>
            <li className='list-image-checkmark'>al menos una mayuscula</li>
            <li className='list-image-checkmark'>maximo 15 caracteres</li>
            <li className='list-image-checkmark'>al menos una minuscula</li>
            <li className='list-image-checkmark'>al menos un numero</li>
            <li className='list-image-checkmark'>
              al menos un caracter especial
            </li>
            <li className='list-image-checkmark'>
              no se permiten espacios en blanco
            </li>
          </ul>
        </div>
        <RadioButtons />
        <Button />
      </form>
    </>
  )
}
