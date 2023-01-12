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
  const [levelOne, setLevelOne] = useState('')
  // const [levelTwo, setLevelTwo] = useState([])
  // const [levelThree, setLevelThree] = useState([])
  let randomQuestion

  const getData = () => {
    fetchData()
      .then(data => setQuestions(data))
  }

  useEffect(() => {
    getData()
  })

  const generateRandomQuestion = (level) => {
    const q = level[Math.floor(Math.random()*level.length)];
    console.log('RANDOMQUESTION', q)
    randomQuestion = q.question
  }

  const one = () => {
    const perception = questions.filter(question => question.level === 1)
    generateRandomQuestion(perception)
    setLevelOne(randomQuestion)
    console.log('LEVEL ONE', levelOne)
  }

  const two = () => {
    const connection = questions.filter(question => question.level === 2)
    // setLevelOne(connection)
    // generateRandomQuestion(connection)
  }

  const three = () => {
    const reflection = questions.filter(question => question.level === 3)
    // setLevelOne(reflection)
    // generateRandomQuestion(reflection)
  }

  return (
    <div className="App">
      <h1>We're Not Really Strangers</h1>
      <Routes>
        <Route path="/" element={< Home one={one} two={two} three={three}/>} />
        <Route path="/one" element={< LevelOne levelOne={levelOne}/>}/>
        <Route path="/two" element={< LevelTwo />}/>
        <Route path="/three" element={< LevelThree />}/>
      </Routes>
    </div>
  );
}

export default App;

//
