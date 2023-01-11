import './App.css';
import React, { useState, useEffect } from 'react'
import { Routes, Route } from "react-router-dom"
import Deck from '../Deck/Deck';
import fetchData from '../../apiCalls';
import Home from '../Home/Home';

const App = () => {
  const [questions, setQuestions] = useState([])


  const getData = () => {
    fetchData()
      .then(data => setQuestions(data))
  }

  useEffect(() => {
    getData()
    // console.log('DATA', questions)
  })

  return (
    <div className="App">
      <h1>We're Not Really Strangers</h1>
      <Routes>
        <Route path="/" element={< Home questions={questions} />} />
        <Route path="/:id" element={< Deck  />}/>
      </Routes>
    </div>
  );
}

export default App;

//
