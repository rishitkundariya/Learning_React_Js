import { useState, useEffect } from "react";

function useCurrencyInfo(currency) {
  const [data, setData] = useState({});
  const url = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@${new Date().getFullYear()}-${String(
    new Date().getMonth() + 1
  ).padStart(2, "0")}-${String(new Date().getDate()).padStart(
    2,
    "0"
  )}/v1/currencies/${currency}.json`;
  useEffect(() => {
    fetch(url)
      .then((reponse) => reponse.json())
      .then((reponse) => setData(reponse[currency]));
  }, [currency]);
  return data;
}

export default useCurrencyInfo;
