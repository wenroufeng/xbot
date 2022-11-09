package main

import (
	"encoding/json"
	"fmt"
)

type Response struct {
	Code    int      `json:"code"`
	Message string   `json:"message"`
	Data    DataStru `json:"data"`
}

type DataStru struct {
	TotalPage int `json:"total_page"`
	Data      any `json:"data"`
}

func Restful(code int, message string, data DataStru) string {
	var resp Response
	resp.Code = code
	resp.Message = message
	resp.Data = data
	r, err := json.Marshal(resp)
	if err != nil {
		fmt.Println("err")
		r, _ = json.Marshal(Response{400, "数据解析错误", DataStru{}})
	}
	return string(r)
}

type LoginFormStru struct {
	ManagerUrl string `json:"manager_url"`
	AccountId  string `json:"account_id"`
	Password   string `json:"password"`
	Node       string `json:"node"`
	Market     string `json:"market"`
}

type OrderStru struct {
	OrderSysID     string `json:"OrderSysID"`
	SubClientIndex string `json:"SubClientIndex"`
	SecuritiesID   string `json:"SecuritiesID"`
	ErrorId        string `json:"ErrorId"`
	LimitPrice     string `json:"LimitPrice"`
	OrderMessageId string `json:"OrderMessageId"`
	OrderStatus    string `json:"OrderStatus"`
	Direction      string `json:"Direction"`
	Volume         string `json:"Volume"`
	TradeVolume    string `json:"TradeVolume"`
	LeavesVolume   string `json:"LeavesVolume"`
	TransactTime   string `json:"TransactTime"`
}

type AccountStru struct {
	FrozeCapital  string `json:"FrozeCapital"`
	FrozenFee     string `json:"FrozenFee"`
	UsedFee       string `json:"UsedFee"`
	TotalFund     string `json:"TotalFund"`
	SellFund      string `json:"SellFund"`
	BuyFund       string `json:"BuyFund"`
	AvailableFund string `json:"AvailableFund"`
}

type PositionStru struct {
	SecuritiesID      string `json:"SecuritiesID"`
	TdBuyPosition     string `json:"TdBuyPosition"`
	TdSellPosition    string `json:"TdSellPosition"`
	YdPosition        string `json:"YdPosition"`
	TotalPosition     string `json:"TotalPosition"`
	AvailablePosition string `json:"AvailablePosition"`
	TotalCost         string `json:"TotalCost"`
}

type OrderForm struct {
	SecuritiesID string `json:"SecuritiesID"`
	Price        string `json:"price"`
	Volume       string `json:"volume"`
	Direction    string `json:"direction"`
}

type TradeStru struct {
	OrderSysID   string `json:"OrderSysID"`
	SecuritiesID string `json:"SecuritiesID"`
	LimitPrice   string `json:"LimitPrice"`
	Direction    string `json:"Direction"`
	Volume       string `json:"Volume"`
	TradeVolume  string `json:"TradeVolume"`
	LeavesVolume string `json:"LeavesVolume"`
	TradeTime    string `json:"TradeTime"`
}

type FundTransferStru struct {
	OrgID     string `json:"OrgID"`
	Fund      string `json:"Fund"`
	Direction string `json:"Direction"`
	ErrorID   string `json:"ErrorID"`
	Status    string `json:"Status"`
	Time      string `json:"Time"`
}

type TransferCapStru struct {
	OrgID     string `json:"OrgID"`
	Fundamt   string `json:"Fundamt"`
	Direction string `json:"Direction"`
	Time      string `json:"Time"`
}

type TransferForm struct {
	Fund      string `json:"fund"`
	Direction string `json:"direction"`
}
