@echo off
:: windres -o counter1.syso counter1.rc
go generate
go build -ldflags "-H windowsgui" -o lorca-example.exe
