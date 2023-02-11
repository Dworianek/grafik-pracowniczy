import React from "react";

import "./style/App.css";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.css";

import Header from "./Header";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Page from "./Page";

class App extends React.Component {
  state = {
    password: "admin",
    admin: false,
    incorrectPassword: false,
  };

  checkPasswordAdmin = (temp) => {
    if (this.state.admin) {
      this.changeAdminStatus();
    } else {
      if (temp === this.state.password) {
        this.changeAdminStatus();
        this.setState({
          incorrectPassword: false,
        });
      } else {
        this.setState({
          incorrectPassword: true,
        });
      }
    }
  };

  changeAdminStatus = () => {
    this.setState({
      admin: !this.state.admin,
    });
  };

  changePassword = (new_password) => {
    this.setState({
      password: new_password,
    });
  };

  render() {
    return (
      <div className="app">
        <Container fluid>
          <Row>
            <Header />
          </Row>
          <Row>
            <Navbar
              adminStatus={this.state.admin}
              adminPassword={this.state.password}
              checkPasswordAdmin={this.checkPasswordAdmin}
              changeAdminStatus={this.changeAdminStatus}
              incorrectPassword={this.state.incorrectPassword}
            />
          </Row>
          <Row className="mt-4" style={{ minHeight: "80vh" }}>
            <Col>
              {
                <Page
                  adminStatus={this.state.admin}
                  changePassword={this.changePassword}
                />
              }
            </Col>
          </Row>
          <Row>
            <Footer />
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
