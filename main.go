//go:generate go run -tags generate gen.go

package main

import "C"
import (
	"fmt"
	"log"
	"net"
	"net/http"
	"os"
	"os/signal"
	"runtime"

	"github.com/zserge/lorca"
)

func main() {
	args := []string{}
	//args = append(args, "--start-maximized")
	if runtime.GOOS == "linux" {
		args = append(args, "--class=Lorca")
	}
	args = append(args, fmt.Sprintf("--window-position=%d,%d", 450, 150))
	ui, err := lorca.New("", "", 980, 720, args...)
	if err != nil {
		log.Fatal(err)
	}
	defer ui.Close()

	ln, err := net.Listen("tcp", "127.0.0.1:0")
	if err != nil {
		log.Fatal(err)
	}
	defer ln.Close()
	go http.Serve(ln, http.FileServer(FS))
	ui.Load(fmt.Sprintf("http://%s/login.html", ln.Addr()))
	fmt.Println("Addr: ", ln.Addr())

	bind(ui, ln)
	// Wait until the interrupt signal arrives or browser window is closed
	sigc := make(chan os.Signal)
	signal.Notify(sigc, os.Interrupt)
	select {
	case <-sigc:
	case <-ui.Done():
	}

	log.Println("exiting...")
}
