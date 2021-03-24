import React from "react";

function DashboardCryptoStock(props) {
  // console.log(props.info1);

  let color = "";
  let percentage = (
    Number(
      props.info1["Time Series (Digital Currency Daily)"]["2021-03-23"][
        "4b. close (USD)"
      ]
    ) /
      Number(
        props.info1["Time Series (Digital Currency Daily)"]["2021-03-22"][
          "1b. open (USD)"
        ]
      ) -
    1
  ).toFixed(2);

  if (percentage >= 0) {
    color = "green";
  } else {
    color = "red";
  }

  return (
    <div>
      <table>
        <tr>
          <th>Name</th>
          <th>Price</th>
          <th>Change(24h)</th>
        </tr>

        <tr>
          <td>{props.info1["Meta Data"]["2. Digital Currency Code"]} </td>
          <td>
            {
              props.info1["Time Series (Digital Currency Daily)"]["2021-03-22"][
                "4b. close (USD)"
              ]
            }
          </td>
          <td style={{ color: `${color}` }}>
            {" "}
            {(
              Number(
                props.info1["Time Series (Digital Currency Daily)"][
                  "2021-03-22"
                ]["4b. close (USD)"]
              ) /
                Number(
                  props.info1["Time Series (Digital Currency Daily)"][
                    "2021-03-22"
                  ]["1b. open (USD)"]
                ) -
              1
            ).toFixed(2)}
            %
          </td>
        </tr>
      </table>
    </div>
  );
}

export default DashboardCryptoStock;
