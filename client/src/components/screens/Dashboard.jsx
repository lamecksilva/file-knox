import React, { Component } from "react";
import Collapsible from "react-collapsible";
import ArrowDown from "../common/ArrowDown";
import ArrowRight from "../common/ArrowRight";

class Dashboard extends Component {
  render() {
    return (
      <div className="loginContainer">
        <div className="row">
          <div className="col-3 mt-4">
            <a className="btn btn-success ml-4">+ New Item</a>
          </div>
          <div className="col-5 mt-4 text-center text-white">
            <h4>Empresa 01</h4>
          </div>
        </div>

        <div className="row">
          <div className="col-2">
            <ul className="list-group ml-4 mt-4 list-group-flush">
              <Collapsible
                className="list-group-item itemDrop"
                trigger={<ArrowRight title="Clientes" />}
                triggerWhenOpen={<ArrowDown title="Clientes" />}
              >
                <li className="list-group-item itemDrop">
                  <i className="fas fa-caret-right" /> Item 02
                </li>
                <li className="list-group-item itemDrop">
                  <i className="fas fa-caret-right" /> Item 03
                </li>
              </Collapsible>
            </ul>
          </div>

          <div className="col-10">
            <div className="row">
              <div className="col-2 text-center mt-3">
                <i class="fas fa-file fa-7x" />
                <h4 className="text-white mt-1">doc1.pdf</h4>
              </div>
              <div className="col-2 text-center mt-3">
                <i class="fas fa-file fa-7x" />
                <h4 className="text-white mt-1">doc2.pdf</h4>
              </div>
              <div className="col-2 text-center mt-3">
                <i class="fas fa-file fa-7x" />
                <h4 className="text-white mt-1">doc3.pdf</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
