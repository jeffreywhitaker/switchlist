import React from 'react'
import { Route } from 'react-router-dom'
import styled from 'styled-components'
import ShallowRenderer from 'react-test-renderer/shallow'
import App from '../App'

// import components
import NavBar from '../components/NavBar'
import Home from '../components/HomePage'
import GamePickForm from '../components/GamePickForm'
import GameList from '../components/GameList'
import About from '../components/About'
import Login from '../components/Login'
import Signup from '../components/Signup'
import UserProfile from '../components/UserProfile'
import Footer from '../components/Footer'
import PrivateRoute from '../components/PrivateRoute'

describe('the App component', () => {
  it('matches previous snapshot', () => {
    const renderer = new ShallowRenderer()
    renderer.render(<App />)
    const output = renderer.getRenderOutput()
    expect(output).toMatchSnapshot()
  })

  // it('renders the proper child components', () => {
  //   const renderer = new ShallowRenderer()
  //   renderer.render(<App />)
  //   const output = renderer.getRenderOutput()
  //   expect(output.props.children).toEqual([
  //     <AppWrapper className="appWrapper">
  //       <Route path="/" component={NavBar} />
  //       <Route exact path="/" component={Home} />
  //       <Route path="/gamelist" component={GamePickForm} />
  //       <Route path="/gamelist" component={GameList} />
  //       <Route path="/about" component={About} />
  //       <Route path="/login" component={Login} />
  //       <Route path="/signup" component={Signup} />
  //       <PrivateRoute path="/profile" component={UserProfile} />
  //       <Footer />
  //     </AppWrapper>
  //   ])
  // })
})

// styled components
const AppWrapper = styled.div`
  max-width: 1100px
  margin: 0 auto
`
