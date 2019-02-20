import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <div>
        <footer className="text-white p-4 text-center foot">
          Copyright &copy; {new Date().getFullYear()} FileKnox - Lameck Sandro
        </footer>
      </div>
    );
  }
}

export default Footer;
