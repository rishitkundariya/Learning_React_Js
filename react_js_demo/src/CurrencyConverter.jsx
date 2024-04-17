import { useEffect, useState } from "react";
import useCurrencyInfo from "./hooks/UseCurrencyInfo";
import InputBox from "./components/InputBox";
import { Button } from "@mui/base";

function CurrencyConverter() {
  const [amount, setAmount] = useState(0);
  const [from, SetFrom] = useState("usd");
  const [to, SetTo] = useState("inr");
  const [convertedAmount, setConvertedAmount] = useState(0);
  const useCurrencyInf = useCurrencyInfo(from);

  const options = Object.keys(useCurrencyInf);

  const swap = () => {
    SetFrom(to);
    SetTo(from);
    setAmount(convertedAmount);
    setConvertedAmount(amount);
  };
  const convert = () => {
    setConvertedAmount(amount * useCurrencyInf[to]);
  };
  useEffect(() => {
    convert();
  }, [from, amount, useCurrencyInf]);

  return (
    <>
      <InputBox
        lableName="From"
        amount={amount}
        onAmountChange={(amount) => setAmount(amount)}
        currencyOption={options}
        onCurrencyChange={(currency) => SetFrom(currency)}
        selectCurrency={from}
      ></InputBox>

      <InputBox
        lableName="To"
        amount={convertedAmount}
        onAmountChange={(convertedAmount) =>
          setConvertedAmount(convertedAmount)
        }
        currencyOption={options}
        onCurrencyChange={(currency) => SetTo(currency)}
        selectCurrency={to}
        isAmountDisable={true}
      ></InputBox>

      <Button onClick={convert}>Convert</Button>
      <Button onClick={swap}>swap</Button>
    </>
  );
}

export default CurrencyConverter;
