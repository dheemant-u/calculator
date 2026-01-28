import React, { useState } from "react";

function ScientificCalculator() {
  const [value, setValue] = useState("");

  const click = (v) => setValue(value + v);
  const clear = () => setValue("");

  const calculate = () => {
    try {
      setValue(eval(value).toString());
    } catch {
      setValue("Error");
    }
  };

  const sqrt = () => setValue(Math.sqrt(value).toString());
  const square = () => setValue(Math.pow(value, 2).toString());
  const sin = () => setValue(Math.sin(value).toString());
  const cos = () => setValue(Math.cos(value).toString());
  const tan = () => setValue(Math.tan(value).toString());

  return (
    <div className="card">
      <h2>Scientific Calculator</h2>

      <input className="display" value={value} readOnly />

      <div className="grid">
        {["7","8","9","4","5","6","1","2","3","0",".","+","-","*","/"]
          .map((b) => (
            <button key={b} onClick={() => click(b)}>{b}</button>
          ))
        }

        <button onClick={sqrt}>√</button>
        <button onClick={square}>x²</button>
        <button onClick={sin}>sin</button>
        <button onClick={cos}>cos</button>
        <button onClick={tan}>tan</button>

        <button className="equal" onClick={calculate}>=</button>
        <button className="clear" onClick={clear}>C</button>
      </div>
    </div>
  );
}

export default ScientificCalculator;
