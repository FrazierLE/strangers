import './App.css';
import React from 'react'
import { Routes, Route } from "react-router-dom"
import Deck from '../Deck/Deck';

function App() {
  return (
    <div className="App">
      <h1>We're Not Really Strangers</h1>
      <Routes>
        <Route path="/" element={< Deck />} />
        <Route />
      </Routes>
    </div>
  );
}

export default App;

//
