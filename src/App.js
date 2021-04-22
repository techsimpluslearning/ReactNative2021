import React from "react";
import Counter from "./components/classCounter";
import LoginForm from "./components/loginForm";
const App = () => {
  var Data = {
    name: "Jeet",
  };

  return (
    <center>
      <h1>Hello to All...</h1>
      <Counter />
      <LoginForm />
    </center>
  );
};

export default App;
