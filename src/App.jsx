import React from 'react';
import './App.css';

function sayHello() {
  alert('You clicked me!');
}

function App() {
  return (
    <div className="App">
      <header>
        <h1>Zot Central Health Care</h1>
      </header>
      <button style={{ color: 'yellow' }} onClick={sayHello} type="button">
        UCI
      </button>
      <button type="button">Options and Coverage</button>
      <button type="button">Signing Up for Health Insurance</button>
    </div>
  );
}

export default App;
