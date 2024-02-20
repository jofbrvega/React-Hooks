import "./App.css";
import React, {useState} from "react";

function App() {
  const [count, setCount] = useState(4)

  function decrementCount() {
    setCount(prevCount => prevCount - 1)
  }

  function incrementCount() {
    setCount(prevCount => prevCount + 1)
  }
  return (
    <>
        <button onClick={decrementCount}> - </button>
        <div> {count} </div>
        <button onClick={incrementCount}> + </button>
    </>
  );
}

export default App;
