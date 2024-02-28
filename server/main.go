package main

import (
	"net/http"
	// "github.com/rs/cors"
	"server/routes"
)

func main() {

	http.HandleFunc("/", routes.Home)
	http.ListenAndServe(":8080", nil)

}
