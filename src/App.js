import React from 'react'

// import components
import NavBar from './components/NavBar'
import Home from './components/HomePage'
import GamePickForm from './components/GamePickForm'
import GameList from './components/GameList'


function App() {
  return (
    <div className="App">
      <NavBar />
      <Home />
      <GamePickForm />
      <GameList />
      {/* <About /> */}
    </div>
  )
}

export default App
