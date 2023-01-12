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
  let perception = [];
  let connection = [];
  let reflection = [];

  const getData = () => {
    fetchData()
      .then(data => setQuestions(data))
  }

  useEffect(() => {
    getData()
  }, [])

  const generateRandomQuestion = (level) => {
    const q = level[Math.floor(Math.random()*level.length)];
    console.log('QU', q)
    setRandomQuestion(q)
  }

  const one = () => {
    perception = questions.filter(question => question.level === 1)
    generateRandomQuestion(perception)
  }

  const two = () => {
    connection = questions.filter(question => question.level === 2)
    generateRandomQuestion(connection)
  }

  const three = () => {
    reflection = questions.filter(question => question.level === 3)
    generateRandomQuestion(reflection)
  }

  // const filterLevel = () => {
  //   const level = questions.map(question => {
  //     console.log('QUESTION', question)
  //     if(question.level === 1) {
  //       perception.push(question)
  //     }
  //     else if(question.level === 2) {
  //       connection.push(question)
  //     }
  //     else if(question.level === 3) {
  //       return question
  //     }
  //   })
  //   generateRandomQuestion(perception)
  //   generateRandomQuestion(connection)
  //   generateRandomQuestion(reflection)
  // }

  return (
    <div className="App">
      <h1>We're Not Really Strangers</h1>
      <Routes>
        <Route path="/" element={< Home one={one} two={two} three={three}/>} />
        <Route path="/one" element={< LevelOne randomQuestion={randomQuestion} one={one}/>}/>
        <Route path="/two" element={< LevelTwo randomQuestion={randomQuestion} two={two}/>}/>
        <Route path="/two" element={< LevelThree randomQuestion={randomQuestion} three={three}/>}/>
      </Routes>
    </div>
  );
}

export default App;

//
