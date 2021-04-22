import React from "react";

const Greet = (props) => {
  return (
    <h1>
      Good Morning from {props.Name.name}. Ane age is {props.Age}
      <br />
      <button onClick={props.onGreet}>Greet Now</button>
    </h1>
  );
};

export default Greet;
