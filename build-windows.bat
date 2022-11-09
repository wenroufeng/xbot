@echo off
:: windres -o main.syso main.rc
go generate
go build -ldflags "-H windowsgui" -o xbot.exe
