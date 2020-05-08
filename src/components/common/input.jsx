import React from "react";

const Input = ({ name, label, error, ...rest }) => {
  return (
    <div>
      {label &&
      <label htmlFor={name}>{label}</label>
      }
      <input {...rest} name={name} id={name} />
      {error && <span className="text-danger">{error}</span>}
    </div>
  );
};

export default Input;
