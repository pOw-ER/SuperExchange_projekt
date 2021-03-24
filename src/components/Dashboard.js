import React from "react";
import { useState, useEffect } from "react";
import myApiKey from "../Config";
import DashboardStock from "./dashboard-components/DashboardStock";
import DashboardCryptoStock from "./dashboard-components/DashboardCryptoStock";
import DashboardExchange from "./dashboard-components/DashboardExchange";
import Axios from "axios";
import ForexTest from "./dashboard-components/ForexTest";

const apiList = ["BBFAIK97VXIR92KK", "0RLODS0QNRQX112V"];

function Dashboard(props) {
  const [dataStock, setDataStock] = useState(null);
  const [cryptoStock, setCryptoStock] = useState(null);
  const bitcoin = "BTC";
  const microsoft = "msft";

  useEffect((props) => {
    Axios.get(
      `https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${microsoft}&interval=60min&outputsize=full&apikey=XIMAFP8KCJHEHLNU`
    ).then((response) => {
      setDataStock(response.data);
      console.log(response.data);
    });
  }, []);

  useEffect((props) => {
    Axios.get(
      `https://www.alphavantage.co/query?function=DIGITAL_CURRENCY_DAILY&symbol=${bitcoin}&market=CNY&apikey=XIMAFP8KCJHEHLNU`
    ).then((response) => {
      setCryptoStock(response.data);
      console.log(response.data);
    });
  }, []);
  return (
    <div>
      <h1>hello</h1>
      {dataStock && <DashboardStock info={dataStock} />}
      {cryptoStock && <DashboardCryptoStock info1={cryptoStock} />}
      <DashboardExchange />
      <ForexTest />
    </div>
  );
}

export default Dashboard;
