import React from "react";

const Input = ({ name, type, label, value, error, onChange, placeholder }) => {
  return (
    <div className="mb-3">
      <label htmlFor={name} className="form-label">
        {label}
      </label>
      <input
        onChange={onChange}
        value={value}
        name={name}
        type={type}
        className="form-control"
        id={name}
        placeholder={placeholder}
      />

      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
};

export default Input;
