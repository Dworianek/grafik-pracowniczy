import React from "react";

import "./style/navbar.css";
import { NavLink } from "react-router-dom";

import { BsTable } from "react-icons/bs";
import { MdAdminPanelSettings } from "react-icons/md";
import { HiHome } from "react-icons/hi";

class NavBar extends React.Component {
  state = {
    input_password: "",
  };

  handleInputPasswordValue = (e) => {
    this.setState({
      input_password: e.target.value,
    });
  };

  clearInputPasswordValue = () => {
    this.props.checkPasswordAdmin(this.state.input_password);
    this.setState({
      input_password: "",
    });
  };

  render() {
    return (
      <>
        <div className="navbar">
          <div className="navbarMain">
            <ul>
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive ? "active" : "inactive"
                  }
                >
                  <HiHome className="iconNav" />
                  Strona Główna
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="scheduleUK"
                  className={({ isActive }) =>
                    isActive ? "active" : "inactive"
                  }
                >
                  <BsTable className="iconNav" />
                  Grafik Ukraina
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="schedulePL"
                  className={({ isActive }) =>
                    isActive ? "active" : "inactive"
                  }
                >
                  <BsTable className="iconNav" />
                  Grafik Polska
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="adminPanel"
                  className={({ isActive }) =>
                    isActive ? "active" : "inactive"
                  }
                >
                  <MdAdminPanelSettings className="iconNav" />
                  Admin Panel
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="navbarAdmin">
            {this.props.adminStatus ? (
              <h5>Zalogowany jako Administrator</h5>
            ) : (
              <div className="validation">
                <input
                  type="password"
                  placeholder="Podaj hasło"
                  value={this.state.input_password}
                  onChange={this.handleInputPasswordValue}
                />{" "}
                {this.props.incorrectPassword && (
                  <span
                    style={{
                      color: "white",
                      fontSize: "14px",
                      fontWeight: "500",
                    }}
                  >
                    Niepoprawne hasło!!!
                  </span>
                )}
              </div>
            )}

            <button
              className="adminButton"
              onClick={this.clearInputPasswordValue}
            >
              {this.props.adminStatus
                ? "Wyloguj Administratora"
                : "Zaloguj Administratora"}
            </button>
          </div>
        </div>
      </>
    );
  }
}
export default NavBar;
