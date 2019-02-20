import React from "react";
import { Link } from "react-router-dom";

const ArrowRight = ({ title, url }) => (
  <div className="row">
    <i className="fas fa-caret-right mr-2" style={{ color: "white" }} />
    <p>{title}</p>
  </div>
);

export default ArrowRight;
