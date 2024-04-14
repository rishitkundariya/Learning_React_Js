import React from "react";
import {
  TextField,
  InputLabel,
  Grid,
  Button,
  MenuItem,
  Select,
} from "@mui/material";
function InputBox(
  lableName,
  amount,
  isAmountDisable = false,
  onAmountChange,
  currencyOption = [],
  selectCurrency = "usd",
  isCurrencyDisable = false,
  className = ""
) {
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
              From
            </Grid>
            <Grid item xs={2}>
              <TextField
                id="outlined-basic"
                label="Amount"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={2}>
              <InputLabel id="demo-simple-select-label">Currency</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Currency"
              ></Select>
            </Grid>
          </Grid>

          <Grid
            container
            spacing={5}
            style={{ marginTop: "-25px", marginBottom: "30px" }}
          >
            <Grid item xs={8}>
              <Button variant="contained">Swap</Button>
            </Grid>
          </Grid>
          <Grid container spacing={2}>
            <Grid
              item
              xs={1}
              style={{
                backgroundColor: "Green",
                color: "white",
                verticalAlign: "bottom",
              }}
            >
              To
            </Grid>
            <Grid item xs={2}>
              <TextField
                id="outlined-basic"
                label="Amount"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={2}>
              <InputLabel id="demo-simple-select-label">Currency</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Currency"
              ></Select>
            </Grid>
          </Grid>

          <Grid
            container
            spacing={5}
            style={{ marginTop: "-25px", marginBottom: "30px" }}
          >
            <Grid item xs={8}>
              <Button variant="contained">Convert Amount</Button>
            </Grid>
          </Grid>
        </div>
      </div>
    </>
  );
}

export default InputBox;
