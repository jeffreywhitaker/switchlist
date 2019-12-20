// import dependencies
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import styled from 'styled-components'

// import actions
import { userLogin } from '../actions/actions'

// login page component
function Login({ userLogin, history, login }) {
  // local state login credentials
  const [credentials, setCredentials] = useState({ username: '', password: '' })

  // call login function
  const callLogin = (e) => {
    e.preventDefault()
    userLogin(credentials)
  }

  // if logged in, redirect to game list
  useEffect(() => {
    if (login.isLoggedIn) {
      history.push('/gamelist')
    }
  }, [login.isLoggedIn, history])

  // handle form values, save to local state
  const handleValueChange = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    })
  }

  // render the following
  return (
    <LoginDiv>
      <form onSubmit={callLogin}>
        <p>Username:</p>
        <input
          type="text"
          name="username"
          value={credentials.username}
          onChange={handleValueChange}
        />
        <p>Password:</p>
        <input
          type="password"
          name="password"
          value={credentials.password}
          onChange={handleValueChange}
        />
        <br />
        <br />
        <button>Log in</button>
      </form>
      <h2>Not registered?</h2>
      <Link to="/signup">Sign Up!</Link>
    </LoginDiv>
  )
}

// connect component to redux store
const mapStateToProps = (state) => {
  return {
    login: state.login,
  }
}

// export component
export default connect(mapStateToProps, { userLogin })(Login)

// styled components
const LoginDiv = styled.div`
  width: 200px
  margin: 20px auto
`
