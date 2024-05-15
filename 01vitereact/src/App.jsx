import { useState } from "react"

function App() {
  // create state variable
  const [counter, setCounter] = useState(13);

  // increase counter
  const increase = () => {
    if (counter === 20) return;
    setCounter(counter + 1);
  }

  // decrease counter
  const decrease = () => {
    if (counter === 0) return;
    setCounter(counter - 1);
  }

  return (
    <div>
      <h1>Chai aur code | Maja aagaya na! {counter} </h1>
      <button onClick={increase}>Increase {counter}</button>
      <button onClick={decrease}>Increase {counter}</button>
    </div>
  )
}

export default App
