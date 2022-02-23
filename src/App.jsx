import React from 'react';
import './App.css';

function sayHello() {
  alert('You clicked me!');
}

function App() {
  return (
    <div className="App">
      <header>
        <h1>Healthcare Literacy Resources</h1>
      </header>
      <button onClick={sayHello} type="button">
        UCI
      </button>
      <button onClick={sayHello} type="button">
        Options and Coverage
      </button>
      <button onClick={sayHello} type="button">
        Signing Up for Health Insurance
      </button>
    </div>
  );
}

export default App;
