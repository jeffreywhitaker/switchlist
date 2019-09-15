import React from 'react'
import { Route } from 'react-router-dom'
import styled from 'styled-components'

// import components
import NavBar from './components/NavBar'
import Home from './components/HomePage'
import GamePickForm from './components/GamePickForm'
import GameList from './components/GameList'
import About from './components/About'
import Footer from './components/Footer'


export default function App() {
  return (
    <AppWrapper className='appWrapper'>
      <NavBar />
      <Route exact path='/' component={Home} />
      <Route path='/gamelist' component={GamePickForm} />
      <Route path='/gamelist' component={GameList} />
      <Route path='/about' component={About} />
      <Footer />
    </AppWrapper>
  )
}

// styled components

const AppWrapper = styled.div`
  max-width: 1100px
  margin: 0 auto
`