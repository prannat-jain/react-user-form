import React from "react";

import Card from "../UI/Card";
import Button from "../UI/Button";

import classes from "./AddUser.module.css";

const AddUser = (props) => {
  const addUserHandler = (event) => {
    event.preventDefault();
  };

  return (
    <Card className={classes.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input type="text" id="username" placeholder="Username"></input>

        <label htmlFor="age">Age (Years)</label>
        <input type="text" id="age" placeholder="age"></input>

        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
};
export default AddUser;
