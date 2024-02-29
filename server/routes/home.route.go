package routes

import (
	"encoding/json"
	"net/http"
	"server/alltypes"
	"server/content"
	"server/utils"
)

func SetHeader(w http.ResponseWriter, f func(w http.ResponseWriter)) {
	w.Header().Set("Access-Control-Allow-Origin", "http://localhost:3000")
	w.Header().Set("Content-Type", "application/json")
	f(w)

}

func Home(w http.ResponseWriter, r *http.Request) {

	if utils.ValidOrigin("Origin", r.Header) {
		if r.Method == http.MethodGet {
			mss := alltypes.Response{Response: content.Paragraph}
			datajson, err := json.Marshal(mss)
			if err != nil {
				http.Error(w, err.Error(), http.StatusInternalServerError)
				return
			}
			SetHeader(w, func(w http.ResponseWriter) {
				w.WriteHeader(http.StatusOK)
				w.Write(datajson)
			})
		}
	}
}
