import React, { useState } from 'react';

function FactorialComponent() {
  const [num, setNum] = useState('');
  const [fact, setFact] = useState(null);
  const [fib, setFib] = useState([]);
  const [isPrime, setIsPrime] = useState(null);

  const calculateAll = () => {
    const n = parseInt(num);
    if (isNaN(n) || n < 0) return;

    // Factorial
    let f = 1;
    for (let i = 1; i <= n; i++) f *= i;
    setFact(f);

    // Fibonacci
    let fibArr = [0, 1];
    if (n === 0) fibArr = [0];
    else {
      for (let i = 2; i <= n; i++) {
        fibArr[i] = fibArr[i - 1] + fibArr[i - 2];
      }
    }
    setFib(fibArr.slice(0, n + 1));

    // Prime Check
    if (n <= 1) setIsPrime(false);
    else {
      let prime = true;
      for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) { prime = false; break; }
      }
      setIsPrime(prime);
    }
  };

  return (
    <div className="card">
      <h2>Experiment 2: Factorial, Fibonacci, Prime</h2>
      <div style={{ display: 'flex', gap: '10px', alignItems: 'center', flexWrap: 'wrap' }}>
        <input type="number" value={num} onChange={(e) => setNum(e.target.value)} placeholder="Enter a number" />
        <button onClick={calculateAll}>Calculate</button>
      </div>
      
      {fact !== null && (
        <div className="result-box">
          <p><strong>Factorial:</strong> {fact}</p>
          <p><strong>Fibonacci Series:</strong> {fib.join(', ')}</p>
          <p><strong>Is Prime:</strong> {isPrime ? 'Yes' : 'No'}</p>
        </div>
      )}
    </div>
  );
}

export default FactorialComponent;
