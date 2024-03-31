import { InputFields } from '@/types.d.ts/definitions'

export const inputFields: InputFields[] = [
  {
    idKey: 1,
    label: 'Nombres',
    placeholder: 'nombres separados por un espacio',
    name: 'names',
    type: 'text',
    autoComplete: 'username',
    pattern: '^(^$|^[A-Za-z]+(?:\\s+[A-Za-z]+)?)$',
  },
  {
    idKey: 2,
    label: 'Apellidos',
    placeholder: 'apellidKeyos separados por un espacio',
    name: 'surnames',
    type: 'text',
    autoComplete: 'username',
    pattern: '^(^$|^[A-Za-z]+(?:\\s+[A-Za-z]+)?)$',
  },
  {
    idKey: 3,
    label: 'Edad',
    placeholder: 'ingresa tu edad',
    name: 'age',
    type: 'number',
    min: 18,
  },

  {
    idKey: 4,
    label: 'Fecha de nacimiento',
    name: 'birthDate',
    type: 'date',
  },
  {
    idKey: 5,
    label: 'Correo Electronico',
    name: 'email',
    type: 'email',
    placeholder: 'ingresa tu correo electronico',
    autoComplete: 'email',
    pattern:
      '[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*@[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*[.][a-zA-Z]{2,5}',
  },
  {
    id: 'password-1',
    idKey: 6,
    label: 'Contraseña',
    name: 'password',
    type: 'password',
    autoComplete: 'new-password',
    pattern:
      '^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[$@$!%*?&])[A-Za-z\\d$@$!%*?&]{8,15}$',
  },
  {
    id: 'password-2',
    idKey: 7,
    label: 'Confirmar Contraseña',
    name: 'password',
    type: 'password',
    autoComplete: 'new-password',
  },
]
