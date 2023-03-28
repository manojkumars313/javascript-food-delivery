import React from "react";
// import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

const SearchBox = ({ value, onChange }) => {
  return (
    <InputGroup className="mb-3 searchbox">
      <span className="input-group-text">
        <span className="material-symbols-outlined">search</span>
      </span>
      <Form.Control
        placeholder="Find your food"
        aria-label="Find your food"
        aria-describedby="basic-addon"
        value={value}
        onChange={(e) => onChange(e.currentTarget.value)}
      />

      {/* <Button disabled variant="outline-secondary" id="button-addon">
        Find Food
      </Button> */}
    </InputGroup>
  );
};

export default SearchBox;
