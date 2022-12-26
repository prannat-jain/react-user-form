import React from "react";

import Card from "../UI/Card";
import Button from "../UI/Button";
import { useState } from "react";
import classes from "./AddUser.module.css";

const AddUser = (props) => {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");

  const addUserHandler = (event) => {
    event.preventDefault();
    console.log(enteredUsername, enteredAge);
  };

  const usernameChangeHandler = (event) => {
    setEnteredUsername(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  return (
    <Card className={classes.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          placeholder="Username"
          onChange={usernameChangeHandler}
        ></input>

        <label htmlFor="age">Age (Years)</label>
        <input
          type="text"
          id="age"
          placeholder="age"
          onChange={ageChangeHandler}
        ></input>

        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
};
export default AddUser;
