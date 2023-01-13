import './App.css';
import React, { useState, useEffect } from 'react'
import { Routes, Route, NavLink } from "react-router-dom"
import fetchData from '../../apiCalls';
import Home from '../Home/Home';
import Level from '../Level/Level' 
import Favorites from '../Favorites/Favorites';
import NavBar from '../NavBar/NavBar';

const App = () => {
  const [questions, setQuestions] = useState([])
  const [randomQuestion, setRandomQuestion] = useState('')
  const [favorites, setFavorites] = useState([])
  const [level, setLevel] = useState([])
  const [error, setError] = useState('')

  const getData = () => {
    fetchData()
      .then(data => setQuestions(data))
      .catch(err => setError(err))
  }

  useEffect(() => {
    getData()
  }, [])

  const generateRandomQuestion = (level) => {
    const q = level[Math.floor(Math.random()*level.length)];
    setRandomQuestion(q)
  }

  const one = () => {
    const perception = questions.filter(question => question.level === 1)
    setLevel(perception)
    generateRandomQuestion(perception)
  }

  const two = () => {
    const connection = questions.filter(question => question.level === 2)
    setLevel(connection)
    generateRandomQuestion(connection)
  }

  const three = () => {
    const reflection = questions.filter(question => question.level === 3)
    setLevel(reflection)
    generateRandomQuestion(reflection)
  }

  const addToFavorites = (question) => {
    if(favorites.includes(question)) {
      return favorites
    } else {
      setFavorites([...favorites, question])
    }
  }

  const deleteFromFavorites = (id) => {
    const filteredFavorites = favorites.filter(card => card.id !== id)
    setFavorites(filteredFavorites)
  }

  return (
    <div className="App">
      < NavBar favorites={favorites}/>
      <h1>We're Not Really Strangers</h1>
      <Routes>
      <Route path="/" element={error ? <h2>We are sorry, but something has gone wrong. Please try again later.</h2> : < Home one={one} two={two} three={three}/>}/>
        <Route path="/one" element={< Level level={level} randomQuestion={randomQuestion} one={one} addToFavorites={addToFavorites} />}/>
        <Route path="/two" element={< Level level={level} randomQuestion={randomQuestion} two={two} addToFavorites={addToFavorites} />}/>
        <Route path="/three" element={< Level level={level} randomQuestion={randomQuestion} three={three} addToFavorites={addToFavorites} />}/>
        <Route path="/favorites" element={<Favorites favorites={favorites} deleteFromFavorites={deleteFromFavorites}/>} />
      </Routes>
    </div>
  );
}

export default App;
