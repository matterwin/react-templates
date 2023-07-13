export default App;

import React, { useState, useMemo } from 'react';

function App() {
  const [count, setCount] = useState(0);

  // Example: Expensive computation
  const expensiveValue = useMemo(() => {
    console.log('Calculating expensiveValue...');
    let result = 0;
    for (let i = 0; i < 1000000000; i++) {
      result += i;
    }
    return result;
  }, []);

  return (
    <div>
      <p>Count: {count}</p>
      <p>Expensive Value: {expensiveValue}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default App;
