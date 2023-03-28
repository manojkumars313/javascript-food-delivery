import React, { useState } from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Register from "./Register";
import SignIn from "./SignIn";

const Form = () => {
  const [key, setKey] = useState("signin");

  return (
    <div style={{ width: "40rem", margin: "auto" }}>
      <Tabs
        onSelect={(k) => setKey(k)}
        activeKey={key}
        defaultActiveKey="register"
        id="fill-tab-example"
        className="mb-3"
        justify
      >
        {/* TODO: SignIn Form */}
        <Tab eventKey="signin" title="Sign In" className="p-5">
          <SignIn />
        </Tab>

        {/* TODO: Register Form */}
        <Tab eventKey="register" title="Register" className="p-5">
          <Register />
        </Tab>
      </Tabs>
    </div>
  );
};

export default Form;
