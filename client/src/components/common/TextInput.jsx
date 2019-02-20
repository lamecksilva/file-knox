import React from "react";
import ErrorLabel from "./ErrorLabel.jsx";

const TextInput = ({ type, name, placeholder, label, onChange, error }) => {
  return (
    <div className="form-group mt-1 w-75 mx-auto">
      {label && <label className="labelTextInput">{label}</label>}
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        onChange={onChange}
        className="form-control textInput"
      />
      {error && <ErrorLabel error={error} />}
    </div>
  );
};

export default TextInput;
