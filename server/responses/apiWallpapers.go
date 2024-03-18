package responses

import (
	"encoding/json"
	"fmt"
	"log"
)

type ResponseAPIImages struct {
	Results []Result `json:"results"`
}

type Result struct {
	Image         string   `json:"image"`
	By            string   `json:"by"`
	Download      *string  `json:"download,omitempty"`
	Source        string   `json:"source"`
	DiffrentSizes []string `json:"diffrentSizes"`
	ID            string   `json:"id"`
}

func UnmarshalResponseAPIImages(data []byte) {
	var r ResponseAPIImages
	errUnmarshal := json.Unmarshal(data, &r)
	if errUnmarshal != nil {
		log.Println("Error Unmarshal", errUnmarshal)
	} else {
		fmt.Println(r)
	}
}
