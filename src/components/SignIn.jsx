import React, { useState } from "react";
import Joi from "joi-browser";
import Input from "./Input";

const SignIn = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const schema = {
    email: Joi.string().required().label("Email ID"),
    password: Joi.string().required().label("Password"),
  };

  const validateProperty = ({ name, value }) => {
    const obj = { [name]: value };
    const sch = { [name]: schema[name] };
    const { error } = Joi.validate(obj, sch);

    return error ? error.details[0].message : null;

    // if (name === "email") {
    //   if (value.trim() === "") return "Email ID is required.";
    // }

    // if (name === "password") {
    //   if (value.trim() === "") return "Password is required.";
    // }
  };

  const handleChange = ({ currentTarget: input }) => {
    const errs = { ...errors };
    const errorMessage = validateProperty(input);
    if (errorMessage) errs[input.name] = errorMessage;
    else delete errs[input.name];

    const acc = { ...data };
    acc[input.name] = input.value;
    setData({ ...acc });
    setErrors({ ...errs });
  };

  const validate = () => {
    const options = { abortEarly: false };
    const { error } = Joi.validate(data, schema, options);
    // console.log(result);

    if (!error) return null;

    const errs = {};
    for (let item of error.details) errs[item.path[0]] = item.message;
    return errs;

    // const errs = {};
    // if (data.email.trim() === "") errs.email = "Email ID is required.";
    // if (data.password.trim() === "") errs.password = "Password is required.";

    // return Object.keys(errs).length === 0 ? null : errs;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const errs = validate();
    // console.log(errs);
    setErrors({ ...errs });
    if (errs) return;

    // Call the server
    console.log(data);
    console.log("Login");
  };

  return (
    <form className="row g-3" onSubmit={handleSubmit}>
      <Input
        name="email"
        type="email"
        label="Email ID"
        value={data.email}
        onChange={handleChange}
        error={errors.email}
        placeholder="Enter your registered Email ID"
      />

      <Input
        name="password"
        type="password"
        label="Password"
        value={data.password}
        onChange={handleChange}
        error={errors.password}
        placeholder="Enter your password"
      />

      <div className="col-12">
        <button disabled={validate()} type="submit" className="btn btn-primary">
          Sign in
        </button>
      </div>
    </form>
  );
};

export default SignIn;
