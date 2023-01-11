import './App.css';
import React from 'react'
import { Routes, Route } from "react-router-dom"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <h1>We're Not Really Strangers</h1> } />
        <Route />
      </Routes>
    </div>
  );
}

export default App;

//
