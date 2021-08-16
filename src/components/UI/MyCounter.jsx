import React from 'react'

export const MyCounter = () => {
  const [counter, setCounter] = React.useState(0);

  const handleCounterIncrement = () => {
    setCounter(counter + 1);
  }

  const handleCounterDecrement = () => {
    setCounter(counter - 1);
  }

  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={handleCounterIncrement}>Increment</button>
      <button onClick={handleCounterDecrement}>Decrement</button>
    </div>
  )
}

