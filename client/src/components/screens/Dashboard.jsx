import React, { Component } from "react";
import MetisMenu from "react-metismenu";

const menu = [
  {
    label: "Clientes",
    to: "clientes"
  },
  {
    label: "TEMET",
    to: "temet",
    content: [
      {
        label: "ADM",
        to: "adm"
      }
    ]
  }
];

class Dashboard extends Component {
  render() {
    return (
      <div className="loginContainer">
        <div className="row">
          <div className="col-2">
            <MetisMenu content={menu} />
          </div>

          <div
            className="col-10"
            style={{ backgroundColor: "#665555", minHeight: "100vh" }}
          >
            <h1>Teste 2</h1>
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
