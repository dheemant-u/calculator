import React, { useState } from 'react';

function SetOneCalculator() {
  const [a, setA] = useState('');
  const [b, setB] = useState('');
  const [expressionResult, setExpressionResult] = useState(null);
  const [sumOfSquares, setSumOfSquares] = useState(null);
  const [evenOdd, setEvenOdd] = useState('');

  const handleCalculations = () => {
    const valA = parseFloat(a);
    const valB = parseFloat(b);
    if (isNaN(valA) || isNaN(valB)) return;

    // (a+b)/(a-b)*(a+b)
    if (valA - valB !== 0) {
      const res = ((valA + valB) / (valA - valB)) * (valA + valB);
      setExpressionResult(res.toFixed(2));
    } else {
      setExpressionResult("Infinity (a-b is 0)");
    }

    // Sum of squares of digits for 'a'
    const digitsStr = Math.abs(valA).toString().replace('.', '');
    let sumSq = 0;
    for (let char of digitsStr) {
      sumSq += Math.pow(parseInt(char), 2);
    }
    setSumOfSquares(sumSq);

    // Even or Odd check for sum of a+b
    const sumAB = valA + valB;
    setEvenOdd(sumAB % 2 === 0 ? 'Even' : 'Odd');
  };

  return (
    <div className="card">
      <h2>Experiment 3: SET-1 Math Calculator</h2>
      <div style={{ display: 'flex', gap: '10px', marginBottom: '1rem', flexWrap: 'wrap' }}>
        <input type="number" value={a} onChange={(e) => setA(e.target.value)} placeholder="Enter a" />
        <input type="number" value={b} onChange={(e) => setB(e.target.value)} placeholder="Enter b" />
      </div>
      <button onClick={handleCalculations}>Evaluate Expressions</button>

      {expressionResult !== null && (
        <div className="result-box">
          <p><strong>(a+b)/(a-b)*(a+b):</strong> {expressionResult}</p>
          <p><strong>Sum of Squares of Digits of 'a':</strong> {sumOfSquares}</p>
          <p><strong>Sum of (a+b) is:</strong> {evenOdd}</p>
        </div>
      )}
    </div>
  );
}

export default SetOneCalculator;
