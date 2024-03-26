'use client'

import Input from '@/components/Form/Input'
import Label from '@/components/Form/Label'
import Title from '@/components/Title'
import { inputFields } from '@/components/Form/inputsFields'
import Button from '@/components/Form/Button'
import RadioButton from '@/components/Form/RadioButton'

export default function FormPage() {
  function handlerSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
  }

  return (
    <>
      <Title contentTitle='Formulario de Registro' />
      <form
        onSubmit={handlerSubmit}
        action=''
        className='flex flex-col my-8
     w-[100%] mx-auto px-5 sm:w-[60%] lg:w-[40%]'
      >
        {inputFields.map((inputField) => {
          const { id, label, name, placeholder, type, autoCapitalize } =
            inputField
          return (
            <Label label={label} key={id}>
              <Input
                placeholder={placeholder}
                name={name}
                type={type}
                {...(autoCapitalize && { autoCapitalize: 'none' })}
                {...(type === 'password' && { autoComplete: 'new-password' })}
                {...(type === 'text' && { autoComplete: 'username' })}
                {...(type === 'email' && { autoComplete: 'username' })}
              />
            </Label>
          )
        })}
        <RadioButton />
        <Button />
      </form>
    </>
  )
}
