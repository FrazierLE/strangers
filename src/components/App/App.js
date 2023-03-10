import './App.css';
import React, { useState, useEffect } from 'react'
import { Routes, Route, useLocation } from "react-router-dom"
import fetchData from '../../apiCalls';
import Home from '../Home/Home';
import Level from '../Level/Level' 
import Favorites from '../Favorites/Favorites';
import NavBar from '../NavBar/NavBar';
import Error from '../Error/Error';

const App = () => {
  const [questions, setQuestions] = useState([])
  const [randomQuestion, setRandomQuestion] = useState('')
  const [favorites, setFavorites] = useState([])
  const [level, setLevel] = useState([])
  const [error, setError] = useState('')
  let location = useLocation()

  const getData = () => {
    fetchData()
      .then(data => setQuestions(data))
      .catch(err => {
        console.log(err)
        setError('We are sorry, but something has gone wrong. Please try again later.')
      })
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
      < NavBar favorites={favorites} location={location}/>
      <h1>We're Not Really Strangers</h1>
      <Routes>
      <Route path="/" element={error ? <h2 className='error-message'>We are sorry, but something has gone wrong. Please try again later.</h2> : < Home one={one} two={two} three={three}/>}/>
        <Route path="/one" element={< Level level={level} randomQuestion={randomQuestion} one={one} two={two} three={three} addToFavorites={addToFavorites} location={location}/>}/>
        <Route path="/two" element={< Level level={level} randomQuestion={randomQuestion} one={one} two={two} three={three} addToFavorites={addToFavorites} location={location}/>}/>
        <Route path="/three" element={< Level level={level} randomQuestion={randomQuestion} one={one} two={two} three={three} addToFavorites={addToFavorites} location={location}/>}/>
        <Route path="/favorites" element={< Favorites favorites={favorites} deleteFromFavorites={deleteFromFavorites}/>} />
        <Route path="*" element={< Error error={error}/>}/>
      </Routes>
    </div>
  );
}

export default App;
