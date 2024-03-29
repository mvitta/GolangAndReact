export default function RadioButton() {
  return (
    <fieldset className='flex flex-wrap mb-3 gap-x-6 border border-app-color p-4 rounded'>
      <legend className='font-bold uppercase text-app-color '>
        Seleccionar Sexo
      </legend>
      <div>
        <label className='inline-block'>
          <span className='text-app-color font-bold '>Masculino</span>
          <input type='radio' name='sex' id='male' className='mx-4' />
        </label>
      </div>
      <div>
        <label className='inline-block'>
          <span className='text-app-color font-bold '>Femenino</span>
          <input type='radio' name='sex' id='female' className='mx-4' />
        </label>
      </div>
    </fieldset>
  )
}
