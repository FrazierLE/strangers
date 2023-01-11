import './App.css';
import React, { useState, useEffect } from 'react'
import { Routes, Route } from "react-router-dom"
import fetchData from '../../apiCalls';
import Home from '../Home/Home';
import LevelOne from '../LevelOne/LevelOne' 
import LevelTwo from '../LevelTwo/LevelTwo'
import LevelThree from '../LevelThree/LevelThree'

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
        <Route path="/one" element={< LevelOne  />}/>
        <Route path="/two" element={< LevelTwo  />}/>
        <Route path="/three" element={< LevelThree  />}/>
      </Routes>
    </div>
  );
}

export default App;

//
