import React from "react";
import { useState } from "react";

const Click = () => {
  const [number, setNumber] = useState(0);

  const increment = ()=> {
        setNumber(number + 1)
  }

  const decrement =()=>{
    if(number > 2) {
    setNumber(number - 1)
  }  
}
  const reset =()=>{
    setNumber(0)
  }
  return (
    <div>
     <h1>{number}</h1>

      <h2>
        <button onClick={increment}>Increment</button>
      </h2>

      <h2>
        <button onClick={decrement}>Decrement</button>
      </h2>

      <h2>
        <button onClick={reset}>Reset</button>
      </h2>

    </div>
  );
};

export default Click;