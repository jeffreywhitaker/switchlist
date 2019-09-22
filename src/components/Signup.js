import React, { useState } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'

import { postUser } from '../actions/actions'

const initialCredentials = {
    username: '',
    password: '',
    confirmPassword: ''
}

function Signup({ postUser, history }) {

    const [credentials, setCredentials] = useState(initialCredentials)

    function handleChange(e) {
        setCredentials(
            {
                ...credentials,
                [e.target.name]: e.target.value
            }
        )
    }

    function callSignUp(e) {
        e.preventDefault()
        postUser(credentials)
        history.push('/gamelist')
    }

    return (
        <SignUpDiv>
            <br/>
            <br/>
            <form onSubmit={callSignUp}>
                <input
                    type="text"
                    name="username"
                    value={credentials.username}
                    placeholder="desired user name"
                    onChange={handleChange}
                />
                <input
                    type="password"
                    name="password"
                    value={credentials.password}
                    placeholder="password"
                    onChange={handleChange}
                />
                <input
                    type="password"
                    name="confirmPassword"
                    value={credentials.confirmPassword}
                    placeholder='confirm password'
                    onChange={handleChange}
                />
                <button>Sign Up</button>
            </form>
        </SignUpDiv>
    )
}

const mapStateToProps = state => {
    return {
        signup: state.signup
    }
  }
  
  export default connect(mapStateToProps, { postUser })(Signup)

//styled components

const SignUpDiv = styled.div`
  width: 200px
  margin: 20px auto
`