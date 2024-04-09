import React from "react";
import ReactDOM from "react-dom/client";

//className reather than class
const Car = (props) => {
  return <h2>Hi car {props.color}</h2>;
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Car color="red" />);
