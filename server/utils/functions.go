package utils

import (
	"fmt"
	"net/http"
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
