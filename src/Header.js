import React from "react";

import "./style/header.css";

import { FcComboChart } from "react-icons/fc";
import { FcOvertime } from "react-icons/fc";

const Header = () => {
  return (
    <>
      <div className="headerMain">
        <FcOvertime style={{ fontSize: "100px" }} />
        <h1> Grafik Pracowniczy</h1>
      </div>
    </>
  );
};
export default Header;
