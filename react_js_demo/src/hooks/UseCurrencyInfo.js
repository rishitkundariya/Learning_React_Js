import { useState, useEffect } from "react";

function useCurrencyInfo(currency) {
  const date = new Date();
  const [data, setData] = useState({});
  useEffect(() => {
    fetch(
      `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@${date.getFullYear()}-${date.getMonth()}-${date.getDay()}/v1/currencies/${currency}.json`
    )
      .then((reponse) => reponse.json)
      .then((reponse) => setData(reponse));
  }, [currency]);
  return data;
}

export default useCurrencyInfo;
