import React, { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import UserContext from "../../context/UserContext";
import { ThemeProvider } from "../../context/theme";
import ThemeButton from "./ThemeButton";

export default function Navbar() {
  const { data } = useContext(UserContext);
  const [themeMode, setThemeMode] = useState("light");
  const lightTheme = () => {
    setThemeMode("light");
  };
  const darkTheme = () => {
    setThemeMode("dark");
  };
  useEffect(() => {
    let getHtml = document.getElementsByTagName("nav");
    if (themeMode == "light") {
      getHtml[0].classList.remove("navbar-dark");
      getHtml[0].classList.remove("bg-dark");
      getHtml[0].classList.add("navbar-light");
      getHtml[0].classList.add("bg-light");
    } else {
      getHtml[0].classList.remove("navbar-light");
      getHtml[0].classList.remove("bg-light");
      getHtml[0].classList.add("navbar-dark");
      getHtml[0].classList.add("bg-dark");
    }
  }, [themeMode]);
  return (
    <>
      <ThemeProvider value={{ themeMode, lightTheme, darkTheme }}>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <div class="container-fluid">
            <Link class="navbar-brand" to="dashboard">
              DashBoard
            </Link>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <Link class="nav-link active" to="/" aria-current="page">
                    Home
                  </Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" to="bgchanger">
                    BackGround Changer
                  </Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" to="counter">
                    Counter
                  </Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link " to="password" tabindex="-1">
                    Password Generator
                  </Link>
                </li>
                <li class="nav-item nav-link">{data?.username}</li>
              </ul>
              <form class="d-flex">
                <input
                  class="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <ThemeButton></ThemeButton>
                <NavLink
                  class="btn btn-outline-success"
                  to="search/Rishit"
                  type="submit"
                >
                  Search
                </NavLink>
              </form>
            </div>
          </div>
        </nav>
      </ThemeProvider>
    </>
  );
}
