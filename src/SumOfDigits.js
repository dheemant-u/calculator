import React, { useState } from 'react';

function SumOfDigits() {
  const [number, setNumber] = useState('');
  const [steps, setSteps] = useState([]);
  const [finalSum, setFinalSum] = useState(null);

  const calculateSum = () => {
    const digits = Math.abs(parseInt(number)).toString().split('');
    if (isNaN(parseInt(number))) return;

    let sum = 0;
    const history = [];

    digits.forEach((digit, index) => {
      sum += parseInt(digit);
      history.push(`Step ${index + 1}: Adding ${digit} -> Running Total: ${sum}`);
    });

    setSteps(history);
    setFinalSum(sum);
  };

  return (
    <div className="card">
      <h2>Experiment 4: Sum of Digits Visualization</h2>
      <div style={{ display: 'flex', gap: '10px', marginBottom: '1rem' }}>
        <input type="number" value={number} onChange={(e) => setNumber(e.target.value)} placeholder="Enter integer" />
        <button onClick={calculateSum}>Calculate Sum</button>
      </div>

      {finalSum !== null && (
        <div className="result-box">
          <ul>
            {steps.map((step, idx) => <li key={idx}>{step}</li>)}
          </ul>
          <h3>Final Sum: {finalSum}</h3>
        </div>
      )}
    </div>
  );
}

export default SumOfDigits;
