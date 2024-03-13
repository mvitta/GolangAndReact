package utils

import (
	"fmt"
	"io"
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
	request, errCreateRequest := http.NewRequest("GET", urlForRequest, nil)

	if errCreateRequest != nil {
		fmt.Println("Fails to create request", errCreateRequest)
		return nil, errCreateRequest
	}

	request.Header.Add("X-RapidAPI-Key", os.Getenv("API_KEY"))
	request.Header.Add("X-RapidAPI-Host", os.Getenv("API_HOST"))
	return request, nil
}

func GetImages() []byte {
	var data []byte

	r, err := GetRequestToImages(os.Getenv("URL_TO_IMAGES"))
	if err != nil {
		return data
	}

	response, errRequest := http.DefaultClient.Do(r)
	if errRequest != nil {
		fmt.Println(errRequest)
		return data
	}
	defer response.Body.Close()

	if response.StatusCode == 200 {
		images, errToGetImages := io.ReadAll(response.Body)
		if errToGetImages == nil {
			data = images
		}
	}
	return data
}

func DefaultHeader(w http.ResponseWriter, f func(w http.ResponseWriter)) {
	w.Header().Set("Access-Control-Allow-Origin", os.Getenv("URL"))
	w.Header().Set("Content-Type", "application/json")
	f(w)

}
