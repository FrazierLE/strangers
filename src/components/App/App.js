import './App.css';
import React, { useState, useEffect } from 'react'
import { Routes, Route, NavLink } from "react-router-dom"
import fetchData from '../../apiCalls';
import Home from '../Home/Home';
import LevelOne from '../LevelOne/LevelOne' 
import LevelTwo from '../LevelTwo/LevelTwo'
import LevelThree from '../LevelThree/LevelThree'
import Favorites from '../Favorites/Favorites';
import NavBar from '../NavBar/NavBar';

const App = () => {
  const [questions, setQuestions] = useState([])
  const [randomQuestion, setRandomQuestion] = useState('')
  const [favorites, setFavorites] = useState([])
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

  const addToFavorites = (question) => {
    setFavorites([...favorites, question])
  }

  return (
    <div className="App">
      < NavBar />
      <h1>We're Not Really Strangers</h1>
      <Routes>
        <Route path="/" element={< Home one={one} two={two} three={three}/>} />
        <Route path="/one" element={< LevelOne randomQuestion={randomQuestion} one={one} addToFavorites={addToFavorites}/>}/>
        <Route path="/two" element={< LevelTwo randomQuestion={randomQuestion} two={two} addToFavorites={addToFavorites}/>}/>
        <Route path="/three" element={< LevelThree randomQuestion={randomQuestion} three={three} addToFavorites={addToFavorites}/>}/>
        <Route path="/favorites" element={<Favorites favorites={favorites}/>} />
      </Routes>
    </div>
  );
}

export default App;

//
