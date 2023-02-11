import React from "react";

import { NavLink } from "react-router-dom";
import { HiHome } from "react-icons/hi";

import "./style/errorPage.css";

import error_icon from "./img/error404.png";

const ErrorPage = () => {
  return (
    <>
      <div className="errorMain">
        <div className="rightPanelSide">
          <h2> Strona której szukasz nie istnieje</h2>
          <p> Upewnij się, że podany adres URL istnieje.</p>
          <button className="homeButton">
            <NavLink
              to="/"
            >
              <HiHome className="iconNav" />
              Strona Główna
            </NavLink>
          </button>
        </div>
        <div className="leftPanelSide">
          <img src={error_icon}></img>
        </div>
      </div>
    </>
  );
};
export default ErrorPage;
