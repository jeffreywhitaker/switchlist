import React from 'react'
import { Route } from 'react-router-dom'

// import components
import NavBar from './components/NavBar'
import Home from './components/HomePage'
import GamePickForm from './components/GamePickForm'
import GameList from './components/GameList'
import About from './components/About'


function App() {
  return (
    <div className='App'>
      <NavBar />
      <Route exact path='/' component={Home} />
      <Route path='/gamelist' component={GamePickForm} />
      <Route path='/gamelist' component={GameList} />
      <Route path='/about' component={About} />
    </div>
  )
}

export default App
