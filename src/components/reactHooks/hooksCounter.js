import React from "react";

const HooksCounter = (props) => {
  const [count, setCount] = React.useState(0);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>
        You Clicked --- {count}
      </button>
    </div>
  );
};

export default HooksCounter;
