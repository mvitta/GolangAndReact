package main

import (
	"log"
	"net/http"

	// "github.com/rs/cors"
	"server/routes"

	"github.com/joho/godotenv"
)

func main() {

	if err := godotenv.Load(); err != nil {
		log.Println("Error Env:", err.Error())
	}

	http.HandleFunc("/", routes.Home)

	errorListenAndServer := http.ListenAndServe(":8080", nil)
	if errorListenAndServer != nil {
		log.Println(errorListenAndServer.Error())
	}
}
