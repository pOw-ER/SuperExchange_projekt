import React from "react";
import { useState, useEffect } from "react";
import Axios from "axios";

function DashboardExchange(props) {
  const usdShort = "USD";
  const eurShort = "EUR";
  const cnyShort = "CNY";

  const [usd, setUsd] = useState(null);
  const [eur, setEur] = useState(null);
  const [cny, setCny] = useState(null);

  useEffect((props) => {
    const test = [];

    Axios.get(
      `https://www.alphavantage.co/query?function=FX_DAILY&from_symbol=${usdShort}&to_symbol=${eurShort}&apikey=XIMAFP8KCJHEHLNU`
    ).then((response) => {
      // setUsd(response.data["Time Series FX (Daily)"]["2021-23-04"]["4. close"]);
      console.log(response.data);
    });
  }, []);

  useEffect((props) => {
    Axios.get(
      `https://www.alphavantage.co/query?function=FX_DAILY&from_symbol=${usdShort}&to_symbol=${cnyShort}&apikey=XIMAFP8KCJHEHLNU`
    ).then((response) => {
      console.log(response.data);
      // setCny(response.data["Time Series FX (Daily)"]["2020-10-26"]["4. close"]);
    });
  }, []);

  return (
    <div>
      <table>
        <tr>
          <th>USD</th>
          <th>EUR</th>
          <th>CNY</th>
        </tr>
        <tr>
          <td>1$</td>
          <td>{usd}€ </td>
          <td>{cny}¥ </td>

          <td></td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td></td>

          <td></td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td></td>

          <td></td>
        </tr>
      </table>
    </div>
  );
}

export default DashboardExchange;
