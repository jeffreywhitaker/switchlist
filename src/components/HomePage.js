// imports
import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

// HomePage component
function HomePage() {
  return (
    <HomeWrapper>
      <h2>Welcome to SwitchList!</h2>
      <p>
        Do you love your Nintendo Switch games? Well so do we! This website
        exists to aid users in finding just the right game. We allow users to
        search through the list of Switch games via a number of useful
        parameters. Want to find all the switch games with Nobuo Uematsu as
        composer? Well now you can! Eventually we want to add the ability for
        users to create their own profile and sort games (for instance, mark
        each game that the user owns, or set them into seperate containers like
        'Jim's Games') We hope to add this extended functionality soon.
      </p>
      <br />
      <SignUpNavLink to={'/signup'}>Sign Up</SignUpNavLink>
    </HomeWrapper>
  )
}

// export HomePage
export default HomePage

// styled components

const HomeWrapper = styled.section`
  width: 65%
  margin: 0 auto
  display: flex
  flex-direction: column
`

const SignUpNavLink = styled(NavLink)`
  text-decoration: none
  width: 50%
  color: black
  padding: 20px
  background: #00B0D1
  border-radius: 10px
  text-align: center
  font-size: 20px
  margin: 10px auto
  &:hover {
    filter: brightness(75%);
  }
`
