import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import { userLogin } from '../actions/actions'

function Login({ userLogin }) {
    const [credentials, setCredentials] = useState({})

    const callLogin = e => {
        e.preventDefault()
        userLogin(credentials)
    }

    const handleValueChange = e => {
        setCredentials( {
            ...credentials,
            [e.target.name]: e.target.value,
        })
    }

    return (
        <div>
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
                <br/>
                <br/>
                <button>Log in</button>
            </form>
            <h2>Not registered?</h2>
            <Link to="/signup" >Sign Up!</Link>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        login: state.login
    }
  }
  
  export default connect(mapStateToProps, { userLogin })(Login)