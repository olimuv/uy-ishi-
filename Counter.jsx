import { useState } from "react";
export default function Counter() {
  const [n, setN] = useState(0);
  return <div>
    <h2>{n}</h2>
    <button onClick={() => setN(v => Math.min(10,v+1))}>+</button>
    <button onClick={() => setN(v => Math.max(0,v-1))}>-</button>
    <button onClick={() => setN(0)}>Reset</button>
    {n===10 && <p>Maximum limit reached!</p>}
  </div>;
}