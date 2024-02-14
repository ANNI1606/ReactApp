import { useState } from "react";
function App() {
  const [count, setCount] = useState(0);

  function decrement() {
    setCount(count - 1);
  }
  function increment() {
    setCount(count + 1);
  }
  const textColor = count < 0 ? "red" : "black";
  return (
    <div>
      <p style={{ color: textColor }}>Contatore: {count}</p>
      <span>0</span>
      <button onClick={decrement}>-</button>
      <button onClick={increment}>+</button>
    </div>
  );
}

export default App;
