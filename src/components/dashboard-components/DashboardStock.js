import React from "react";

const stockList = [];

function DashboardStock(props) {
  return (
    <div>
      <table>
        <tr>
          <th>Symbol</th>
          <br />
          <th>Stock</th>
          <br />
          <th>Market Share</th>
        </tr>
        <tr>
          <td>{props.info["Meta Data"]["2. Symbol"]} </td>
          <br />
          <td>
            {
              props.info["Time Series (60min)"]["2021-01-26 05:00:00"][
                "4. close"
              ]
            }
          </td>
          <td></td>
        </tr>
        <tr>
          <td> </td>
          <td></td>
          <td></td>
        </tr>
      </table>
    </div>
  );
}

export default DashboardStock;
