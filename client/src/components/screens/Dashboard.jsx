import React, { Component } from "react";
import MetisMenu from "react-metismenu";

const items = [
  {
    icon: "tachometer-alt",
    label: "Menu 1",
    to: "menu-1"
  },
  {
    icon: "bell",
    label: "Menu 2",
    to: "menu-2"
  },
  {
    icon: "bolt",
    label: "Menu 3",
    content: [
      {
        icon: "bolt",
        label: "Sub Menu",
        to: "sub-menu"
      }
    ]
  },
  {
    icon: "external-link",
    label: "External Link",
    externalLink: true,
    to: "https://www.google.com"
  }
];

class Dashboard extends Component {
  render() {
    return (
      <div className="loginContainer">
        <div className="row">
          <div className="col-2" style={{ padding: 0 }}>
            <MetisMenu content={items} />
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
