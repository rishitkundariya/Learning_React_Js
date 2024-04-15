import React, { useId } from "react";
import {
  TextField,
  InputLabel,
  Grid,
  Button,
  MenuItem,
  Select,
} from "@mui/material";
function InputBox({
  lableName,
  amount,
  isAmountDisable = false,
  onAmountChange,
  currencyOption = [],
  selectCurrency = "usd",
  isCurrencyDisable = false,
  onCurrencyChange,
  className = "",
}) {
  const amountInputId = useId();
  return (
    <>
      <div>
        <div>
          <Grid container spacing={2}>
            <Grid
              item
              xs={1}
              style={{
                backgroundColor: "Orange",
                color: "white",
                verticalAlign: "bottom",
              }}
            >
              {lableName}
            </Grid>
            <Grid item xs={2}>
              <TextField
                id={amountInputId}
                label="Amount"
                value={amount}
                variant="outlined"
                disabled={isAmountDisable}
                onChange={(e) =>
                  onAmountChange && onAmountChange(e.target.value)
                }
              />
            </Grid>
            <Grid item xs={2}>
              <InputLabel id="demo-simple-select-label">Currency</InputLabel>
              <select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Currency"
                value={selectCurrency}
                disabled={isCurrencyDisable}
                onChange={(e) =>
                  onCurrencyChange && onCurrencyChange(e.target.value)
                }
              >
                {currencyOption.map((currenty) => (
                  <option key={currenty} value={currenty}>
                    {currenty}
                  </option>
                ))}
              </select>
            </Grid>
          </Grid>
        </div>
      </div>
    </>
  );
}

export default InputBox;
