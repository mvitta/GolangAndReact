package routes

import (
	"encoding/json"
	"net/http"
	"server/utils"
)

type Response struct {
	Response string `json:"response"`
}

var Paragraph = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci assumenda qui dicta, nesciunt deserunt quia numquam eum unde porro quis quidem eius iste mollitia illo facilis modi, incidunt a minima."

func Home(w http.ResponseWriter, r *http.Request) {

	if utils.ValidOrigin("Origin", r.Header) {
		if r.Method == http.MethodGet {
			mss := Response{Response: Paragraph}
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
