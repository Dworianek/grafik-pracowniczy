import React from "react";

import WorkerPL from "./component/WorkerPL";

import Table from "react-bootstrap/Table";

import "./style/scheduleuk.css";

class SchedulePL extends React.Component {
  state = {
    workers: [
      {
        id: 1,
        rcp: "0001",
        name: "Monika",
        surname: "Węglarz",
        status: "Liderka",
        brigade: 2,
      },
      {
        id: 2,
        rcp: "0002",
        name: "Milena",
        surname: "Żyszkowska ",
        status: "Liderka",
        brigade: 1,
      },
      {
        id: 3,
        rcp: "0003",
        name: "Ola",
        surname: "Kot",
        status: "Operatorka",
        brigade: 3,
      },
      {
        id: 4,
        rcp: "0004",
        name: "Adrianna",
        surname: "Nosol",
        status: "Operatorka",
        brigade: 1,
      },
      {
        id: 5,
        rcp: "0005",
        name: "Aneta",
        surname: "Dworak",
        status: "Operatorka",
        brigade: 2,
      },
      {
        id: 6,
        rcp: "0006",
        name: "Klaudia",
        surname: "Stępień",
        status: "Operatorka",
        brigade: 1,
      },
      {
        id: 7,
        rcp: "0007",
        name: "Maria",
        surname: "Kowalska",
        status: "Operatorka",
        brigade: 3,
      },
      {
        id: 8,
        rcp: "0008",
        name: "Paulina",
        surname: "Sulej",
        status: "Operatorka",
        brigade: 2,
      },
      {
        id: 9,
        rcp: "0009",
        name: "Wiktoria",
        surname: "Kurek",
        status: "Operatorka",
        brigade: 3,
      },
      {
        id: 10,
        rcp: "0010",
        name: "Blanka",
        surname: "Kot",
        status: "Operatorka",
        brigade: 1,
      },
      {
        id: 11,
        rcp: "0011",
        name: "Nikol",
        surname: "Dąbrowska",
        status: "Operatorka",
        brigade: 2,
      },
      {
        id: 12,
        rcp: "0012",
        name: "Justyna",
        surname: "Wiśniewska",
        status: "Operatorka",
        brigade: 1,
      },
      {
        id: 13,
        rcp: "0013",
        name: "Katarzyna",
        surname: "Wiśnia",
        status: "Operatorka",
        brigade: 3,
      },
      {
        id: 14,
        rcp: "0014",
        name: "Sylwia",
        surname: "Poborska",
        status: "Operatorka",
        brigade: 3,
      },
    ],
    new_rcp: "",
    new_name: "",
    new_surname: "",
    new_status: "Liderka",
    new_brigade: 0,

    errors: {
      name: false,
      username: false,
      rcp: false,
      status: false,
      brigade: false,
    },
  };

  messages = {
    name_incorect: "Imię musi składać się minimum z 4 liter.",
    surname_incorrect: "Nazwisko musi składać się minimum z 4 liter.",
    rcp_incorrect: "Błędny RCP, musi mieć równo 4 znaki.",
    status_incorrect: "Wybierz stanowisko pracownika.",
    brigade_incorrect: "Wybierz zmianę godzinową pracownika.",
  };

  handleAddWorker = () => {
    const validation = this.formValidation();
    console.log(validation);

    if (validation.correct) {
      const newOmen = {
        id: this.state.workers.length + 1,
        rcp: this.state.new_rcp,
        name: this.state.new_name,
        surname: this.state.new_surname,
        status: this.state.new_status,
        brigade: this.state.new_brigade,
      };
      this.setState({
        workers: [...this.state.workers, newOmen],
        new_rcp: "",
        new_name: "",
        new_surname: "",
        new_status: "Liderka",
        new_brigade: 0,
        errors: {
          name: false,
          surname: false,
          rcp: false,
          status: false,
          brigade: false,
        },
      });
    } else {
      this.setState({
        errors: {
          name: !validation.name,
          surname: !validation.surname,
          rcp: !validation.rcp,
          status: !validation.status,
          brigade: !validation.brigade,
        },
      });
    }
  };

  handleNewName = (e) => {
    this.setState({
      new_name: e.target.value,
    });
  };

  handleNewSurname = (e) => {
    this.setState({
      new_surname: e.target.value,
    });
  };

  handleNewRCP = (e) => {
    this.setState({
      new_rcp: e.target.value,
    });
  };

  handleNewStatus = (e) => {
    this.setState({
      new_status: e.target.value,
    });
  };

  handleNewBrigade = (e) => {
    this.setState({
      new_brigade: e.target.value,
    });
  };

  deleteTask = (id) => {
    const workers = [...this.state.workers];
    const index = workers.findIndex((worker) => worker.id === id);
    workers.splice(index, 1);

    this.setState({
      workers: workers,
    });
  };

  formValidation = () => {
    let name = false;
    let surname = false;
    let rcp = false;
    let status = false;
    let brigade = false;
    let correct = false;

    if (
      this.state.new_name.length > 4 &&
      this.state.new_name.indexOf(" ") === -1 &&
      /^[a-zA-Z]+$/.test(this.state.new_name)
    ) {
      name = true;
    }
    if (
      this.state.new_surname.length > 4 &&
      this.state.new_surname.indexOf(" ") === -1 &&
      /^[a-zA-Z]+$/.test(this.state.new_surname)
    ) {
      surname = true;
    }
    if (this.state.new_rcp.length == 4) {
      rcp = true;
    }

    if (
      this.state.new_status === "Liderka" ||
      this.state.new_status === "Operatorka"
    ) {
      status = true;
    }
    if (
      this.state.new_brigade === "1" ||
      this.state.new_brigade === "2" ||
      this.state.new_brigade === "3"
    ) {
      brigade = true;
    }

    if (name && surname && rcp && status && brigade) {
      correct = true;
    }
    return {
      correct,
      name,
      surname,
      rcp,
      status,
      brigade,
    };
  };

  render() {
    const workers = this.state.workers.map((worker) => (
      <WorkerPL
        key={worker.id}
        adminStatus={this.props.adminStatus}
        {...worker}
        delete={this.deleteTask}
      />
    ));

    const thElements = [];
    for (let i = 1; i <= 30; i++) {
      thElements.push(<th key={i}>{i}</th>);
    }

    return (
      <>
        <div className="scheduleUkMain">
          {this.props.adminStatus ? (
            <div className="adminPanel">
              <div>
                <h3>Podsumowanie Polska</h3>
                <div className="PlWorkers">
                  <div className="PlStat WorkerStat">
                    <h3>Wszystkich</h3>
                    <p>{this.state.workers.length}</p>
                  </div>
                  <div className="PlStat WorkerStat">
                    <h3>I Zmiana</h3>
                    <p>
                      {
                        this.state.workers.filter(
                          (worker) => worker.brigade == 1
                        ).length
                      }
                    </p>
                  </div>
                  <div className="PlStat WorkerStat">
                    <h3>II Zmiana</h3>
                    <p>
                      {
                        this.state.workers.filter(
                          (worker) => worker.brigade == 2
                        ).length
                      }
                    </p>
                  </div>
                  <div className="PlStat WorkerStat">
                    <h3>III Zmiana</h3>
                    <p>
                      {
                        this.state.workers.filter(
                          (worker) => worker.brigade == 3
                        ).length
                      }
                    </p>
                  </div>
                </div>
              </div>
              <div className="formMain">
                <h2>Dodaj nowego pracownika</h2>
                <div className="inputRow1">
                  <div className="validation">
                    <input
                      type="text"
                      placeholder="Podaj imię"
                      value={this.state.new_name}
                      onChange={this.handleNewName}
                    />{" "}
                    {this.state.errors.name && (
                      <span>{this.messages.name_incorect}</span>
                    )}
                  </div>
                  <div className="validation">
                    <input
                      type="text"
                      placeholder="Podaj nazwisko"
                      value={this.state.new_surname}
                      onChange={this.handleNewSurname}
                    />{" "}
                    {this.state.errors.surname && (
                      <span>{this.messages.surname_incorrect}</span>
                    )}
                  </div>
                </div>
                <div className="inputRow2">
                  <div className="validation">
                    <input
                      type="number"
                      name=""
                      id=""
                      placeholder="Numer RCP"
                      value={this.state.new_rcp}
                      onChange={this.handleNewRCP}
                    />
                    {this.state.errors.rcp && (
                      <span>{this.messages.rcp_incorrect}</span>
                    )}
                  </div>
                  <div className="validation">
                    <select
                      value={this.state.new_status}
                      onChange={this.handleNewStatus}
                    >
                      <option value="Liderka">Liderka</option>
                      <option value="Operatorka">Operatorka</option>
                    </select>
                    {this.state.errors.status && (
                      <span>{this.messages.status_incorrect}</span>
                    )}
                  </div>
                </div>
                <div className="validation">
                  <label onChange={this.handleNewBrigade}>
                    <input type="radio" value={1} name="brigade" />
                    {` Zmiana I `}
                    <input
                      style={{ marginLeft: "10px" }}
                      type="radio"
                      value={2}
                      name="brigade"
                    />
                    {` Zmiana II `}
                    <input
                      style={{ marginLeft: "10px" }}
                      type="radio"
                      value={3}
                      name="brigade"
                    />
                    {` Zmiana III `}
                  </label>
                  {this.state.errors.brigade && (
                    <span>{this.messages.brigade_incorrect}</span>
                  )}
                </div>
                <button
                  className="addWorkerButton"
                  onClick={this.handleAddWorker}
                >
                  Dodaj pracownika
                </button>
              </div>
            </div>
          ) : null}

          <Table striped responsive>
            <thead>
              <tr>
                {this.props.adminStatus ? <th></th> : null}
                <th>RCP</th>
                <th>Imię</th>
                <th>Nazwisko</th>
                <th>Stanowisko</th>
                {thElements}
              </tr>
            </thead>
            <tbody>{workers}</tbody>
          </Table>
        </div>
      </>
    );
  }
}

export default SchedulePL;
