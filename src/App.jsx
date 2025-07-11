import React, { useState } from 'react';
import './App.css';

function App() {
  const [amount, setAmount] = useState(0);

  return (
    <div className="container">
      <div className="card">
        <h1>Amount Tracker</h1>
        <p className="amount">₹ {amount}</p>
        <div className="buttons">
          <button onClick={() => setAmount(amount - 1)} className="minus">–</button>
          <button onClick={() => setAmount(0)} className="reset">R</button>
          <button onClick={() => setAmount(amount + 1)} className="plus">+</button>
        </div>
      </div>
    </div>
  );
}

export default App;
