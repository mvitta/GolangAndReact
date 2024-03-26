export default function RadioButton() {
  return (
    <fieldset className='flex flex-wrap mb-3 gap-x-6 border border-app-color p-4 rounded'>
      <legend className='font-bold uppercase text-app-color '>
        Seleccionar Sexo
      </legend>
      <div>
        <span className='text-app-color font-bold '>Masculino</span>
        <label>
          <input type='radio' name='sex' id='male' />
        </label>
      </div>
      <div>
        <span className='text-app-color font-bold '>Femenino</span>
        <label>
          <input type='radio' name='sex' id='female' />
        </label>
      </div>
    </fieldset>
  )
}
