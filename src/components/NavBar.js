import React from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

import { userLogout } from '../actions/actions'


function NavBar({ login, userLogout }) {
  const handleLogout = e => {
    e.preventDefault()
    userLogout()
}

  return (
    <NavHeader>
        <LogoHeader>SwitchList</LogoHeader>
        <nav>
            <StyledNavLink to={'/'}>Home</StyledNavLink>
            <StyledNavLink to={'/gamelist'}>Game List</StyledNavLink>
            <StyledNavLink to={'/about'}>About</StyledNavLink>
            <StyledNavLink to={'/profile'}>Profile</StyledNavLink>
            {
              login.isSuccessful 
              ? <StyledNavLink to={'/gamelist'} onClick={handleLogout}>Logout</StyledNavLink>
              : <StyledNavLink to={'/login'}>Login</StyledNavLink>
            }
        </nav>
    </NavHeader>
  )
}

const mapStateToProps = state => {
  return {
    login: state.login
  }
}

export default connect(mapStateToProps, { userLogout })(NavBar)

// styled components

const NavHeader = styled.header`
    border: 1px solid black
    display: flex
    justify-content: space-around
    align-items: center
`

const LogoHeader = styled.h1`
  font-family: calibri
  font-size: 30px
`


const StyledNavLink = styled(NavLink)`
    text-decoration: none
    padding: 20px
    background: cyan
    border: 1px solid black
    margin: 10px 15px
`