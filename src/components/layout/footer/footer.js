import React from "react";
import { CardFooter } from "reactstrap";

const footer = () => {
  return (
    <CardFooter
      className="text-muted"
      body
      inverse
      style={{ backgroundColor: "#333", borderColor: "#333" }}
    >
      <center>Footer</center>
    </CardFooter>
  );
};

export default footer;
