package main

import (
	"fmt"
	"log/slog"
	"net/http"
	"server/routes"

	"github.com/joho/godotenv"
)

func main() {

	if err := godotenv.Load(); err != nil {
		slog.Warn(fmt.Sprintf("Error Env: %v", err.Error()))
	}

	http.HandleFunc("/", routes.Home)
	http.HandleFunc("/images", routes.Images)
	http.HandleFunc("/form", routes.Form)

	errorListenAndServer := http.ListenAndServe(":8080", nil)
	if errorListenAndServer != nil {
		slog.Error(errorListenAndServer.Error())
	}
}
