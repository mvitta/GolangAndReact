package routes

import (
	"encoding/json"
	"errors"
	"net/http"
	"server/utils"
)

type responseForm struct {
	Response string `json:"response"`
}

func (r *responseForm) JSON() []byte {
	json, _ := json.Marshal(*r)
	return json
}

// type dataFrontend struct {
// 	Names     string `json:"name"`
// 	Surnames  string `json:"surnames"`
// 	Age       int    `json:"age"`
// 	BirthDate string `json:"birtDate"`
// 	Email     string `json:"email"`
// 	Password  string `json:"password"`
// 	Sex       string `json:"sex"`
// }

// var keys = []string{"names", "surnames", "age", "birthDate", "email", "password", "sex"}

func Form(w http.ResponseWriter, r *http.Request) {

	if !utils.ValidOrigin("Origin", r.Header) {
		http.Error(w, errors.New("the route does not exist").Error(), http.StatusNotFound)
		return
	}

	if r.Method != http.MethodPost {
		http.Error(w, errors.New("status method not allowed").Error(), http.StatusMethodNotAllowed)
		return
	}

	if r.FormValue("names") == "" {
		errorName := responseForm{Response: "el campo nombre no puede estar en blanco"}
		utils.DefaultHeader(w, func(w http.ResponseWriter) {
			w.Write(errorName.JSON())
		})
		return
	}

	user := responseForm{Response: "Usuario Creado"}

	utils.DefaultHeader(w, func(w http.ResponseWriter) {
		w.WriteHeader(http.StatusCreated)
		w.Write(user.JSON())
	})

}
