// import dependencies
import React from 'react'
import { Route } from 'react-router-dom'
import styled from 'styled-components'

// import components
import NavBar from './components/NavBar'
import Home from './components/HomePage'
import GamePickForm from './components/GamePickForm'
import GameList from './components/GameList'
import About from './components/About'
import Login from './components/Login'
import Signup from './components/Signup'
import UserProfile from './components/UserProfile'
import Footer from './components/Footer'
import PrivateRoute from './components/PrivateRoute'

// App component
export default function App() {
  return (
    <AppWrapper className="appWrapper">
      <Route path="/" component={NavBar} />
      <Route exact path="/" component={Home} />
      <Route path="/gamelist" component={GamePickForm} />
      <Route path="/gamelist" component={GameList} />
      <Route path="/about" component={About} />
      <Route path="/login" component={Login} />
      <Route path="/signup" component={Signup} />
      <PrivateRoute path="/profile" component={UserProfile} />
      <Footer />
    </AppWrapper>
  )
}

// styled components
const AppWrapper = styled.div`
  max-width: 1100px
  margin: 0 auto
`
