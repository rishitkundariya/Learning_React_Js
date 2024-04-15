import { useState, useEffect } from "react";

function useCurrencyInfo(currency) {
  const date = new Date();
  const [data, setData] = useState({});
  useEffect(() => {
    fetch(
      `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@${date.getFullYear()}-${String(
        date.getMonth() + 1
      ).padStart(2, "0")}-${String(date.getDate()).padStart(
        2,
        "0"
      )}/v1/currencies/${currency}.json`
    )
      .then((reponse) => reponse.json())
      .then((reponse) => setData(reponse[currency]));
  }, [currency, date]);
  return data;
}

export default useCurrencyInfo;
