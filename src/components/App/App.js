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
  const [levelOne, setLevelOne] = useState([])
  const [levelTwo, setLevelTwo] = useState([])
  const [levelThree, setLevelThree] = useState([])

  const getData = () => {
    fetchData()
      .then(data => setQuestions(data))
  }

  useEffect(() => {
    getData()
  })

  const one = () => {
    const perception = questions.filter(question => question.level === 1)
    setLevelOne(perception)
    console.log('PERCEPTION', perception)
  }

  const two = () => {
    const connection = questions.filter(question => question.level === 2)
    setLevelOne(connection)
    console.log('CONNECTION', connection)
  }

  const three = () => {
    const reflection = questions.filter(question => question.level === 3)
    setLevelOne(reflection)
    console.log('REFLECTION', reflection)
  }

  return (
    <div className="App">
      <h1>We're Not Really Strangers</h1>
      <Routes>
        <Route path="/" element={< Home one={one} two={two} three={three}/>} />
        <Route path="/one" element={< LevelOne  levelOne={levelOne} />}/>
        <Route path="/two" element={< LevelTwo  levelTwo={levelTwo} />}/>
        <Route path="/three" element={< LevelThree levelThree={levelThree} />}/>
      </Routes>
    </div>
  );
}

export default App;

//
