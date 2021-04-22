import React from "react";
import Mybutton from "./components/mainButton";
import Greet from "./components/greet";
const App = () => {
  var Data = {
    name: "Jeet",
  };

  const greetNow = () => {
    alert(`Greet from ${Data.name}`);
  };

  return (
    <div>
      <h1>Hello to All...</h1>
      <Greet Name={Data} Age={26} onGreet={greetNow} />
    </div>
  );
};

export default App;
