import React from "react";

import "./style/homePage.css";

import homepage_icon from "./img/homepage.png";
import { NavLink } from "react-router-dom";

import { BsTable } from "react-icons/bs";

const HomePage = () => {
  return (
    <>
      <div className="homePage">
        <div className="leftSideHomePage">
          <h1>
            Grafik <span style={{ color: "#023047" }}>Pracowniczy</span>
          </h1>
          <h4>Zaplanuj cały miesiąc w firmie.</h4>
          <p>
            Projekt przeznaczony dla firm zatrudniających duże grupy
            pracownicze. Aplikacja ta pozwoli zapanować nad grafikiem, z
            możliwością udostępnienia grafików wszystkim pracownikom. Dodatkowo
            opcje administratora zabezpieczone hasłem nie wymagają od nas
            zewnętrznego panelu, w którym osoba odpowiedzialna za grafik
            dokonywałaby ewentualnych zmian.
          </p>
          <button className="homePageButton">
            <NavLink to="/scheduleUK">
              <BsTable className="iconNav" />
              Grafik Ukraina
            </NavLink>
          </button>
        </div>
        <div className="rightSideHomePage">
          <img src={homepage_icon}></img>
        </div>
      </div>
    </>
  );
};
export default HomePage;
