package main

import (
	"encoding/json"
	"fmt"
	"github.com/zserge/lorca"
	"math"
	"net"
	"strconv"
	"time"
)

var ordersSlice = []OrderStru{
	OrderStru{
		"1", "0", "000001", "0",
		"10.11", "101", "1",
		"1", "100", "0", "200",
		"145900123",
	},
	OrderStru{
		"2", "0", "000001", "0",
		"10.11", "103", "1",
		"1", "100", "0", "0",
		"145901130",
	},
}
var transferCapRecords = []TransferCapStru{
	{"1", "100", "1", "133710123"},
	{"1", "200", "2", "133710123"},
}
var fundTransferRecords = []FundTransferStru{
	{"1", "10", "1", "55002", "1", "133710123"},
	{"1", "100", "2", "55002", "1", "133711023"},
}

func bind(ui lorca.UI, ln net.Listener) {
	ui.Bind("login_counter", func(form string) string {
		var loginFrom = LoginFormStru{}
		err := json.Unmarshal([]byte(form), &loginFrom)
		if err != nil {
			return Restful(400, "请求错误", DataStru{})
		}
		if loginFrom.AccountId != "test" || loginFrom.Password != "test" {
			return Restful(400, "资金账号或密码错误", DataStru{})
		}

		var managerUrl string = loginFrom.ManagerUrl
		var accountId string = loginFrom.AccountId
		var password string = loginFrom.Password
		node, _ := strconv.Atoi(loginFrom.Node)
		var market byte = []byte(loginFrom.Market)[0]
		fmt.Println(managerUrl)
		fmt.Println(accountId)
		fmt.Println(password)
		fmt.Println(node)
		fmt.Println(market)
		ui.Eval(fmt.Sprintf("document.cookie='market=%c'", market))
		ui.Load(fmt.Sprintf("http://%s/index.html", ln.Addr()))
		return Restful(200, "OK", DataStru{})
	})

	ui.Bind("query_account", func() string {
		data := []AccountStru{{"0", "0", "0",
			"10000000000.000", "0", "0", "10000000000.000"}}
		return Restful(200, "OK", DataStru{1, data})
	})

	ui.Bind("query_position", func() string {
		data := []PositionStru{
			{"000001", "100", "100", "500",
				"10000", "8000", "12345"},
			{"000002", "200", "300", "600",
				"11000", "9000", "12346"},
		}
		return Restful(200, "OK", DataStru{1, data})
	})

	ui.Bind("query_order", func(page int, num int) string {
		fmt.Println(ordersSlice)
		start := num * (page - 1)
		end := start + num
		if end > len(ordersSlice) {
			end = len(ordersSlice)
		}
		totalPage := int(math.Ceil(float64(len(ordersSlice)) / float64(num)))
		return Restful(200, "OK", DataStru{totalPage, ordersSlice[start:end]})
	})

	ui.Bind("order_insert", func(form string) string {
		fmt.Println("=========", form)
		var of OrderForm
		err := json.Unmarshal([]byte(form), &of)
		if err != nil {
			fmt.Println("err")
			return Restful(400, "数据格式错误", DataStru{})
		}

		fmt.Println(of)
		fmt.Println(of.Direction)
		fmt.Println([]byte(of.Direction)[0])

		now := time.Now()
		ordersSlice = append(ordersSlice, OrderStru{
			strconv.Itoa(len(ordersSlice) + 1), "0", of.SecuritiesID, "0",
			of.Price, "101", "1",
			of.Direction, of.Volume, "0", of.Volume,
			fmt.Sprintf("%02d%02d%02d%02d", now.Hour(), now.Minute(), now.Second(), now.Nanosecond()),
		})
		return Restful(200, "OK", DataStru{})
	})

	ui.Bind("query_trade", func(page int, num int) string {
		data := []TradeStru{
			{"1", "000001", "10.11", "1", "200",
				"100", "100", "145900123"},
			{"2", "000001", "11.11", "1", "200",
				"100", "100", "145901123"},
		}
		start := num * (page - 1)
		end := start + num
		if end > len(data) {
			end = len(data)
		}
		totalPage := int(math.Ceil(float64(len(data)) / float64(num)))
		return Restful(200, "OK", DataStru{totalPage, data})
	})

	ui.Bind("query_fund_transfer", func() string {

		return Restful(200, "OK", DataStru{1, fundTransferRecords})
	})

	ui.Bind("query_transfer_cap", func() string {
		return Restful(200, "OK", DataStru{1, transferCapRecords})
	})

	ui.Bind("transfer_cap", func(form string) string {
		tc := TransferForm{}
		err := json.Unmarshal([]byte(form), &tc)
		if err != nil {
			return Restful(400, "数据格式错误", DataStru{})
		}
		now := time.Now()
		transferCapRecords = append(transferCapRecords, TransferCapStru{"1", tc.Fund,
			tc.Direction, fmt.Sprintf("%02d%02d%02d%02d", now.Hour(), now.Minute(), now.Second(), now.Nanosecond())})
		return Restful(200, "OK", DataStru{})
	})

	ui.Bind("fund_transfer", func(form string) string {
		tc := TransferForm{}
		err := json.Unmarshal([]byte(form), &tc)
		if err != nil {
			return Restful(400, "数据格式错误", DataStru{})
		}
		now := time.Now()
		fundTransferRecords = append(fundTransferRecords, FundTransferStru{"1", tc.Fund,
			tc.Direction, "55002", "1", fmt.Sprintf("%02d%02d%02d%02d", now.Hour(), now.Minute(), now.Second(), now.Nanosecond())})
		return Restful(200, "OK", DataStru{})
	})
}
