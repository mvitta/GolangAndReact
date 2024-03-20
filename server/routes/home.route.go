package routes

import (
	"encoding/json"
	"net/http"
	"server/utils"
)

type Response struct {
	Paragraph string `json:"paragraph"`
}

var text = "Esta es una aplicación educativa, el objetivo es abarcar diferentes temas como por ejemplo fetching de datos, paginación, componentes de servidor, componente de cliente, routing optimización de imagen estilos con Tailwind, CSS modules y otros temas relacionados con Golang, Next JS, Tailwind, React. En un futuro se implementarán bases de datos. El código probablemente tenga algunas cosas extrañas, pero con el tiempo se mejorará ya que este proyecto es meramente educativo. El responsive se esta verificando con las herramientas de desarrollo de Google y un teléfono móvil Samsung el cual esta conectado a la misma red del servidor.--Nota: este contenido viene directo del servidor de Golang y se agrega un Delay para probar el fetching de datos de forma más granular."

func Home(w http.ResponseWriter, r *http.Request) {

	if utils.ValidOrigin("Origin", r.Header) {
		if r.Method == http.MethodGet {
			mss := Response{Paragraph: text}
			Paragraphjson, err := json.Marshal(mss)
			if err != nil {
				http.Error(w, err.Error(), http.StatusInternalServerError)
				return
			}

			utils.DefaultHeader(w, func(w http.ResponseWriter) {
				w.WriteHeader(http.StatusOK)
				w.Write(Paragraphjson)
			})
		} else {
			http.Error(w, "Method Not Allowed", http.StatusMethodNotAllowed)
		}
	} else {
		http.Error(w, "The route does not exist", http.StatusNotFound)
	}
}
