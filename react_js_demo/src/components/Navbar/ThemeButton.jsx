import { useTheme } from "../../context/theme";
import React from "react";

export default function ThemeButton() {
  const { themeMode, lightTheme, darkTheme } = useTheme();
  const themechange = () => {
    if (themeMode == "light") {
      darkTheme();
    } else {
      lightTheme();
    }
  };
  return (
    <>
      <span>
        <h6 onClick={themechange} style={{ color: "orange" }}>
          {themeMode}
        </h6>
      </span>
    </>
  );
}
