import React from "react";
import classes from "./MyInput.module.css";

export const MyInput = ({ children, ...props }) => {
  return (
    <input
      {...props}
      className={classes.myInput}
    />
  );
};
