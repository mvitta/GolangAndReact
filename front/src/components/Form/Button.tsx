export default function Button() {
  return (
    //por defecto ya es submit al estar dentro del formulario
    <button
      type='submit'
      className='border my-8 py-3 bg-app-color rounded text-white font-bold saturate-50 hover:saturate-100'
    >
      Crear Usuario
    </button>
  )
}
