package utils

import (
	"fmt"
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

func SetHeader(w http.ResponseWriter, f func(w http.ResponseWriter)) {
	w.Header().Set("Access-Control-Allow-Origin", os.Getenv("URL"))
	w.Header().Set("Content-Type", "application/json")
	f(w)

}
