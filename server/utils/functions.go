package utils

import (
	"fmt"
	"io"
	"log/slog"
	"net/http"
	"os"
)

var URL_HOST = "http://localhost:3000"

func ShowHeaders(h http.Header, show bool) {
	if show {
		for k, v := range h {
			fmt.Println(k, " - ", v)
		}
	}
}

func ValidOrigin(key string, h http.Header) bool {
	return h.Get(key) != ""
}

func GetRequestToImages(urlForRequest string) (*http.Request, error) {
	request, errRequest := http.NewRequest("GET", urlForRequest, nil)
	if errRequest != nil {
		slog.Info("Error to create request")
		return nil, errRequest

	}
	request.Header.Add("X-RapidAPI-Key", os.Getenv("API_KEY"))
	request.Header.Add("X-RapidAPI-Host", os.Getenv("API_HOST"))
	return request, nil
}

func GetImages() ([]byte, error) {
	var data []byte
	req, err := GetRequestToImages(os.Getenv("URL_TO_IMAGES"))
	//error si falla al momento de crear la peticion
	if err != nil {
		return nil, err
	}
	response, errRequest := http.DefaultClient.Do(req)
	// error si la peticion no se hace de forma correcta
	if errRequest != nil {
		slog.Info(errRequest.Error())
		return nil, errRequest
	}
	defer response.Body.Close()
	// si la api response con un status 200
	if response.StatusCode == 200 {
		images, errBody := io.ReadAll(response.Body)
		// error si tiene problema para leer el Body de la peticion
		if errBody != nil {
			slog.Info(errBody.Error())
		} else {
			data = images
		}
	}
	return data, nil
}

func DefaultHeader(w http.ResponseWriter, f func(w http.ResponseWriter)) {
	w.Header().Set("Access-Control-Allow-Origin", os.Getenv("URL"))
	w.Header().Set("Content-Type", "application/json")
	f(w)

}
