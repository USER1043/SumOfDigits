import { useState } from "react";
import "./App.css";

function App() {
  // ---------- States ----------
  const [sumInput, setSumInput] = useState("");
  const [sumResult, setSumResult] = useState(null);

  // ---------- Function ----------
  const sumOfDigits = (n) => {
    n = Math.abs(n); // handle negative numbers
    let sum = 0;

    while (n > 0) {
      sum += n % 10;
      n = Math.floor(n / 10);
    }
    return sum;
  };

  // ---------- Handler ----------
  const handleSumDigits = () => {
    const n = parseInt(sumInput);
    if (isNaN(n)) return setSumResult("Enter a valid number");
    setSumResult(sumOfDigits(n));
  };

  return (
    <div className="container">
      <div className="card">
        <h2 className="title">Sum of Digits Calculator</h2>
        <input
          type="number"
          placeholder="Enter a number"
          value={sumInput}
          onChange={(e) => setSumInput(e.target.value)}
          className="input"
        />
        <button onClick={handleSumDigits} className="button">
          Calculate
        </button>

        {sumResult !== null && (
          <p className="result">Sum of Digits: {sumResult}</p>
        )}
      </div>
    </div>
  );
}

export default App;
