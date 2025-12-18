import { useState } from 'react'
import './App.css'

function App() {
  let [counter, setCounter] = useState(0);

  const addValue = () => {
    if(counter<20) setCounter(counter+1)
    console.log(counter);
  }
  const decValue = () => {
    if(counter>0) setCounter(counter-1)
    console.log(counter);
  }

  return (
    <>
      <h2>Counter</h2>
      <p>Counter value : {counter}</p>
      <button onClick={addValue}>+1</button>
      <button onClick={decValue}>-1</button>
    </>
  )
}

export default App
