import React from "react";
import Counter from "./components/classCounter";
import LoginForm from "./components/loginForm";
import State from "./components/state_eventBinding";
import MainComponent from "./components/methodAsAProps/mainComponent";
const App = () => {
  var Data = {
    name: "Jeet",
  };

  return (
    <center>
      <h1>Hello to All...</h1>
      {/* <Counter />
      <LoginForm />
      <State /> */}
      <MainComponent />
    </center>
  );
};

export default App;
