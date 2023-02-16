import React from "react";

import WorkerUK from "./component/WorkerUK";

import Table from "react-bootstrap/Table";

import "./style/scheduleuk.css";

class ScheduleUK extends React.Component {
  state = {
    workers: [
      {
        id: 1,
        rcp: "0001",
        name: "Kolzina",
        surname: "Bondarenko",
        status: "Liderka",
        brigade: 1,
      },
      {
        id: 2,
        rcp: "0002",
        name: "Victoria",
        surname: "Lysenko ",
        status: "Operatorka",
        brigade: 2,
      },
      {
        id: 3,
        rcp: "0003",
        name: "Natasha",
        surname: "Kravchuk",
        status: "Operatorka",
        brigade: 2,
      },
      {
        id: 4,
        rcp: "0004",
        name: "Viktoriia",
        surname: "Veselska",
        status: "Operatorka",
        brigade: 1,
      },
      {
        id: 5,
        rcp: "0005",
        name: "Anastasiia",
        surname: "Makushynska",
        status: "Operatorka",
        brigade: 1,
      },
      {
        id: 6,
        rcp: "0006",
        name: "Nataliia",
        surname: "Vitman",
        status: "Operatorka",
        brigade: 1,
      },
      {
        id: 7,
        rcp: "0007",
        name: "Yelyzaveta",
        surname: "Kolzina",
        status: "Operatorka",
        brigade: 2,
      },
      {
        id: 8,
        rcp: "0008",
        name: "Christina",
        surname: "Pavlova",
        status: "Operatorka",
        brigade: 1,
      },
      {
        id: 9,
        rcp: "0009",
        name: "Natasha",
        surname: "Kravchuk",
        status: "Operatorka",
        brigade: 2,
      },
      {
        id: 10,
        rcp: "0010",
        name: "Liliia",
        surname: "Polozun",
        status: "Operatorka",
        brigade: 2,
      },
      {
        id: 11,
        rcp: "0011",
        name: "Alona",
        surname: "Chorna",
        status: "Operatorka",
        brigade: 1,
      },
      {
        id: 12,
        rcp: "0012",
        name: "Natasha",
        surname: "Kravchuk",
        status: "Operatorka",
        brigade: 1,
      },
      {
        id: 13,
        rcp: "0013",
        name: "Natasha",
        surname: "Pakholiuk",
        status: "Operatorka",
        brigade: 2,
      },
      {
        id: 14,
        rcp: "0014",
        name: "Kolisnyk",
        surname: "Kravchuk",
        status: "Operatorka",
        brigade: 1,
      },
      {
        id: 15,
        rcp: "0015",
        name: "Natalia",
        surname: "Kravchuk",
        status: "Operatorka",
        brigade: 1,
      },
      {
        id: 16,
        rcp: "0016",
        name: "Dariia",
        surname: "Pashchenko",
        status: "Operatorka",
        brigade: 2,
      },
      {
        id: 17,
        rcp: "0017",
        name: "Tetiana",
        surname: "Sydorova",
        status: "Operatorka",
        brigade: 2,
      },
      {
        id: 18,
        rcp: "0018",
        name: "Alina",
        surname: "Leliukh",
        status: "Operatorka",
        brigade: 2,
      },
      {
        id: 19,
        rcp: "0019",
        name: "Liubov",
        surname: "Melnyk",
        status: "Operatorka",
        brigade: 1,
      },
      {
        id: 20,
        rcp: "0020",
        name: "Yuliia",
        surname: "Zlobina",
        status: "Operatorka",
        brigade: 1,
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
    if (this.state.new_brigade === "1" || this.state.new_brigade === "2") {
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
      <WorkerUK
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
                <h3>Podsumowanie Ukraina</h3>
                <div className="UkWorkers">
                  <div className="UkStat WorkerStat">
                    <h3>Wszystkich</h3>
                    <p>{this.state.workers.length}</p>
                  </div>
                  <div className="UkStat WorkerStat">
                    <h3>I Zmiana</h3>
                    <p>
                      {
                        this.state.workers.filter(
                          (worker) => worker.brigade === 1
                        ).length
                      }
                    </p>
                  </div>
                  <div className="UkStat WorkerStat">
                    <h3>II Zmiana</h3>
                    <p>
                      {
                        this.state.workers.filter(
                          (worker) => worker.brigade === 2
                        ).length
                      }
                    </p>
                  </div>
                  <div className="UkStat WorkerStat">
                    <h3>Liderek</h3>
                    <p>
                      {
                        this.state.workers.filter(
                          (worker) => worker.status === "Liderka"
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

export default ScheduleUK;
