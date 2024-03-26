import { InputFields } from '@/types.d.ts/definitions'

export const inputFields: InputFields[] = [
  {
    id: 1,
    label: 'Nombres',
    placeholder: 'nombres separados por un espacio',
    name: 'firstName',
    type: 'text',
    autoCapitalize: true,
  },
  {
    id: 2,
    label: 'Apellidos',
    placeholder: 'apellidos separados por un espacio',
    name: 'lastName',
    type: 'text',
    autoCapitalize: true,
  },
  {
    id: 3,
    label: 'Edad',
    placeholder: 'ingresa tu edad',
    name: 'age',
    type: 'number',
  },

  {
    id: 4,
    label: 'Fecha de nacimiento',
    name: 'birthDate',
    type: 'date',
  },
  {
    id: 5,
    label: 'Correo Electronico',
    name: 'email',
    type: 'email',
    placeholder: 'ingresa tu correo electronico',
  },
  {
    id: 6,
    label: 'Contraseña',
    name: 'password',
    type: 'password',
  },
  {
    id: 7,
    label: 'Confirmar Contraseña',
    name: 'password',
    type: 'password',
  },
]
