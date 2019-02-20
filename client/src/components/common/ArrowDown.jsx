import React from "react";
import { Link } from "react-router-dom";

const ArrowDown = ({ title, url }) => (
  <div className="row">
    <i className="fas fa-caret-down mr-2" style={{ color: "white" }} />
    <p>{title}</p>
  </div>
);

export default ArrowDown;
