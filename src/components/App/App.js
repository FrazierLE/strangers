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
  const [randomQuestion, setRandomQuestion] = useState('')

  const getData = () => {
    fetchData()
      .then(data => setQuestions(data))
  }

  useEffect(() => {
    getData()
  })

  const generateRandomQuestion = (level) => {
    const q = level[Math.floor(Math.random()*level.length)];
    setRandomQuestion(q.question)
  }

  const one = () => {
    const perception = questions.filter(question => question.level === 1)
    generateRandomQuestion(perception)
  }

  const two = () => {
    const connection = questions.filter(question => question.level === 2)
    generateRandomQuestion(connection)
  }

  const three = () => {
    const reflection = questions.filter(question => question.level === 3)
    generateRandomQuestion(reflection)
  }

  return (
    <div className="App">
      <h1>We're Not Really Strangers</h1>
      <Routes>
        <Route path="/" element={< Home one={one} two={two} three={three}/>} />
        <Route path="/one" element={< LevelOne randomQuestion={randomQuestion}/>}/>
        <Route path="/two" element={< LevelTwo randomQuestion={randomQuestion}/>}/>
        <Route path="/three" element={< LevelThree randomQuestion={randomQuestion}/>}/>
      </Routes>
    </div>
  );
}

export default App;

//
