import React from "react";

import classes from "./Card.module.css";

const Card = (props) => {
  //Dynamically getting class name of Card passed through props using `${}`
  return (
    <div className={`${classes.card} ${props.className}`}>{props.children}</div>
  );
};

export default Card;
