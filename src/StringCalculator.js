import React, { useState } from "react";

function StringCalculator() {
  const [text, setText] = useState("");
  const [result, setResult] = useState("");

  return (
    <div className="card">
      <h2>String Calculator</h2>

      <input
        className="display"
        placeholder="Enter a string"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <div className="string-buttons">
        <button onClick={() => setResult(text.length)}>Length</button>
        <button onClick={() => setResult(text.toUpperCase())}>Uppercase</button>
        <button onClick={() => setResult(text.toLowerCase())}>Lowercase</button>
        <button onClick={() => setResult(text.split("").reverse().join(""))}>
          Reverse
        </button>
      </div>

      <p className="result">Result: {result}</p>
    </div>
  );
}

export default StringCalculator;
