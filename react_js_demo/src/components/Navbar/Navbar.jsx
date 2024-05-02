import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import UserContext from "../../context/UserContext";

export default function Navbar() {
  const { data } = useContext(UserContext);
  console.log(data);
  return (
    <>
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
              <li class="nav-item">{data?.username}</li>
            </ul>
            <form class="d-flex">
              <input
                class="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
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
    </>
  );
}
