package routes

import (
	"encoding/json"
	"net/http"
	"server/alltypes"
	"server/content"
	"server/utils"
)

func Home(w http.ResponseWriter, r *http.Request) {

	if utils.ValidOrigin("Origin", r.Header) {
		if r.Method == http.MethodGet {
			mss := alltypes.Response{Response: content.Paragraph}
			datajson, err := json.Marshal(mss)
			if err != nil {
				http.Error(w, err.Error(), http.StatusInternalServerError)
				return
			}

			utils.SetHeader(w, func(w http.ResponseWriter) {
				w.WriteHeader(http.StatusOK)
				w.Write(datajson)
			})
		}
	}
}
