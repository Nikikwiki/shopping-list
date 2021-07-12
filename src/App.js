import React from 'react';
import './App.css';

function App() {
  const greeting = "greeting";
  return (
    <div className="container">
      <h1 id={greeting} >Hello, World</h1>
      <p>I am writing JSX</p>
    </div>
  )
}

export default App;
