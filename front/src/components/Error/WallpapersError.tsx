interface PropsWallpaperError {
  response: Response
  error_request: string
}

export default function WallpapersError({
  response,
  error_request,
}: PropsWallpaperError) {
  return (
    <div className='text-center'>
      <h3 className='text-red-700 uppercase'>
        No se puedieron cargar las targetas, por favor probar en unos minutos
      </h3>
      <h4> {response.statusText}</h4>
      <br />
      <p>{`${error_request} - `}</p>
      <span className='font-bold underline underline-offset-4'>{`Status: ${response.status}`}</span>
      <hr />
      <p>
        los errores no se deben mandar al client, el objetivo es comprobar como
        llegan los argumentos que se pasan en
        <span className='bg-slate-800 text-white p-1'>
          http.Error(w, errGetImages.Error(), http.StatusInternalServerError)
        </span>
        en la ruta /images del servidor de golang
      </p>
    </div>
  )
}
