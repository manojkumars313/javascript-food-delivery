import React, { useState } from "react";
import Joi from "joi-browser";
import Input from "./Input";

const Register = () => {
  const [account, setAccount] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});

  const schema = {
    name: Joi.string().required().label("Name"),
    email: Joi.string().required().label("Email ID"),
    password: Joi.string().required().label("Password"),
  };

  const validateProperty = ({ name, value }) => {
    const obj = { [name]: value };
    const sch = { [name]: schema[name] };
    const { error } = Joi.validate(obj, sch);

    return error ? error.details[0].message : null;
  };

  const handleChange = ({ currentTarget: input }) => {
    const errs = { ...errors };
    const errorMessage = validateProperty(input);
    if (errorMessage) errs[input.name] = errorMessage;
    else delete errs[input.name];

    const acc = { ...account };
    acc[input.name] = input.value;
    setAccount({ ...acc });
    setErrors({ ...errs });
  };

  const validate = () => {
    const options = { abortEarly: false };
    const { error } = Joi.validate(account, schema, options);
    // console.log(result);

    if (!error) return null;

    const errs = {};
    for (let item of error.details) errs[item.path[0]] = item.message;
    return errs;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const errs = validate();
    // console.log(errs);
    setErrors({ ...errs });
    if (errs) return;

    console.log(account);
    console.log("Login");
  };

  return (
    <form className="row g-3" onSubmit={handleSubmit}>
      <Input
        name="name"
        type="text"
        label="Name"
        value={account.name}
        onChange={handleChange}
        error={errors.name}
        placeholder="Enter your name"
      />

      <Input
        name="newEmail"
        type="email"
        label="Email ID"
        value={account.email}
        onChange={handleChange}
        error={errors.email}
        placeholder="Enter your Email ID"
      />

      <Input
        name="newPassword"
        type="password"
        label="Password"
        value={account.password}
        onChange={handleChange}
        error={errors.password}
        placeholder="Enter your password"
      />

      <div className="col-12">
        <button disabled={validate()} type="submit" className="btn btn-primary">
          Register
        </button>
      </div>
    </form>
  );
};

export default Register;
