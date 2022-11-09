//go:build generate1
// +build generate1

package main

import "github.com/zserge/lorca"
import "fmt"

func main() {
	// You can also run "npm build" or webpack here, or compress assets, or
	// generate manifests, or do other preparations for your assets.
	fmt.Println(22222222222)
	lorca.Embed("main", "assets.go", "www")
}
