// import dependencies
import React from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

// import functions
import { userLogout } from '../actions/actions'

// NavBar component
function NavBar({ login, userLogout, history }) {
  // handle user logout
  const handleLogout = e => {
    e.preventDefault()
    userLogout()
    history.push('/gamelist')
    // load modal here eventually
  }

  return (
    <>
    <NavHeader>
        <LogoHeader>SwitchList</LogoHeader>
        <NavBarNav>
            <StyledNavLink exact to={'/'}>Home</StyledNavLink>
            <StyledNavLink to={'/gamelist'}>Game List</StyledNavLink>
            <StyledNavLink to={'/about'}>About</StyledNavLink>
            <StyledNavLink to={'/profile'}>Profile</StyledNavLink>
            {
              login.isLoggedIn 
              ? <StyledNavLink onClick={handleLogout}>Logout</StyledNavLink>
              : <StyledNavLink to={'/login'}>Login</StyledNavLink>
            }
        </NavBarNav>
    </NavHeader>
    <div className='modal'>
      <div className='modal-content'>
        <span className='close'>&times;</span>
        <p>You have been successfuly logged out.</p>
      </div>
    </div>
    </>
  )
}

// connect Redux state
const mapStateToProps = state => {
  return {
    login: state.login
  }
}

// export NavBar
export default connect(mapStateToProps, { userLogout })(NavBar)

// styled components
const NavHeader = styled.header`
    display: flex
    justify-content: space-around
    align-items: center
    background: #FF4E44
    border-radius: 10px
    @media (max-width: 800px) {
      flex-direction: column
      height: 200px
    }
    @media (max-width: 620px) {
      height: 450px
    }
`

const LogoHeader = styled.h1`
  font-family: calibri
  font-size: 30px
`

const NavBarNav = styled.nav`
@media (max-width: 620px) {
  display: flex
  flex-direction: column
  width: 90%
}
`

const StyledNavLink = styled(NavLink)`
    text-decoration: none
    color: black
    padding: 20px
    background: #00B0D1
    border-radius: 10px
    margin: 10px 15px
    &:hover {
      filter: brightness(75%)
    }
    @media (max-width: 620px) {
      width: 90%
      text-align: center
    }
`