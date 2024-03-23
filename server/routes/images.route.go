package routes

import (
	"net/http"

	"server/utils"
)

func Images(w http.ResponseWriter, r *http.Request) {

	if utils.ValidOrigin("Origin", r.Header) {
		if r.Method == http.MethodGet {
			images, errGetImages := utils.GetImages()
			if errGetImages != nil {
				http.Error(w, errGetImages.Error(), http.StatusInternalServerError)
				return
			}

			utils.DefaultHeader(w, func(w http.ResponseWriter) {
				w.WriteHeader(http.StatusOK)
				w.Write(images)
			})
		} else {
			http.Error(w, "Method Not Allowed", http.StatusMethodNotAllowed)
		}
	} else {
		http.Error(w, "The route does not exist", http.StatusNotFound)
	}
}
