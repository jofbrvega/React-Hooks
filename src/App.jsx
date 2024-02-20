import "./App.css";
import React, {useState} from "react";

function initialCount() {
  console.log('Initial state is only ran one time with function')
  return 4;
}

function App() {
  const [count, setCount] = useState(() => {
    return initialCount()
  })

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
