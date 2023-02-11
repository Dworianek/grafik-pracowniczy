import React from "react";

import "./style/adminPanel.css";

import password_icon from "./img/password.png";

class AdminPage extends React.Component {
  state = {
    newPassword: "",
    newPasswordRepeat: "",

    errors: {
      password: false,
      passwordRepeat: false,
      passwordCompare: false,
      passwordAccept: false,
    },
  };

  messages = {
    password: "Hasło musi składać się minimum z 6 znaków.",
    passwordRepeat: "Hasło musi składać się minimum z 6 znaków.",
    passwordCompare: "Hasła nie są takie same.",
    passwordAccept: "Zmiana hasła zakończona sukcesem.",
  };

  handlePasswordInput = (e) => {
    this.setState({
      newPassword: e.target.value,
    });
  };

  handlePasswordRepeatInput = (e) => {
    this.setState({
      newPasswordRepeat: e.target.value,
    });
  };

  handleClearInput = () => {
    this.setState({
      newPassword: "",
      newPasswordRepeat: "",
    });
  };

  handleChangePassword = () => {
    const validation = this.formValidation();
    console.log(validation);

    if (validation.correct) {
      this.props.changePassword(this.state.newPassword);
      this.setState({
        newPassword: "",
        newPasswordRepeat: "",
        errors: {
          passwordRepeat: false,
          passwordAccept: true,
        },
      });
    } else {
      this.setState({
        errors: {
          password: !validation.password,
          passwordRepeat: !validation.passwordRepeat,
          passwordCompare: !validation.passwordCompare,
        },
      });
    }
  };

  // handleChangePassword = () => {
  //   if (this.state.newPassword === this.state.newPasswordRepeat) {
  //     this.props.changePassword(this.state.newPassword);
  //     this.setState({
  //       newPassword: "",
  //       newPasswordRepeat: "",
  //     });
  //   }
  // };

  formValidation = () => {
    let password = false;
    let passwordRepeat = false;
    let passwordCompare = false;
    let correct = false;

    if (this.state.newPassword.length > 4) {
      password = true;
    }
    if (this.state.newPasswordRepeat.length > 4) {
      passwordRepeat = true;
    }
    if (
      this.state.newPassword.length != 0 &&
      this.state.newPasswordRepeat.length != 0 &&
      this.state.newPassword === this.state.newPasswordRepeat
    ) {
      passwordCompare = true;
    }
    if (password && passwordRepeat && passwordCompare) {
      correct = true;
    }
    return {
      correct,
      password,
      passwordRepeat,
      passwordCompare,
    };
  };

  render() {
    return (
      <>
        <div className="adminPage">
          <div className="adminPanelImg">
            <img src={password_icon}></img>
          </div>
          {this.props.adminStatus ? (
            <div className="adminPanelForm">
              <h3>Ustaw nowe hasło</h3>
              <div className="formElement">
                <label>Nowe hasło</label>
                <div className="validation">
                  <input
                    type="password"
                    placeholder="Nowe Hasło"
                    value={this.state.newPassword}
                    onChange={this.handlePasswordInput}
                  />
                  {this.state.errors.password && (
                    <span>{this.messages.password}</span>
                  )}
                </div>
              </div>

              <div className="formElement">
                <label>Powtórz hasło</label>
                <div className="validation">
                  <input
                    type="password"
                    placeholder="Powtórz Nowe Hasło"
                    value={this.state.newPasswordRepeat}
                    onChange={this.handlePasswordRepeatInput}
                  />
                  {this.state.errors.passwordRepeat && (
                    <span>{this.messages.password}</span>
                  )}
                  {this.state.errors.passwordCompare && (
                    <span>{this.messages.passwordCompare}</span>
                  )}
                  {this.state.errors.passwordAccept && (
                    <span style={{ color: "green" }}>
                      {this.messages.passwordAccept}
                    </span>
                  )}
                </div>
              </div>
              <div className="formElement-button">
                <button
                  className="dontChangePassword"
                  onClick={this.handleClearInput}
                >
                  Wyczyść
                </button>
                <button
                  className="changePassword"
                  onClick={this.handleChangePassword}
                >
                  Zmień Hasło
                </button>
              </div>
            </div>
          ) : (
            <div className="leftSideHomePage">
              <h3 style={{ textAlign: "center" }}>
                Brak dostępu do panelu Administratora
              </h3>
              <h5 style={{ textAlign: "center" }}>
                Zaloguj się do panelu z użyciem hasła.
              </h5>
            </div>
          )}
        </div>
      </>
    );
  }
}
export default AdminPage;
