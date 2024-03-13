package main

import (
	"log"
	"net/http"
	"server/routes"

	"github.com/joho/godotenv"
)

func main() {

	if err := godotenv.Load(); err != nil {
		log.Println("Error Env:", err.Error())
	}

	http.HandleFunc("/", routes.Home)
	http.HandleFunc("/images", routes.Images)

	errorListenAndServer := http.ListenAndServe(":8080", nil)
	if errorListenAndServer != nil {
		log.Println(errorListenAndServer.Error())
	}
}
