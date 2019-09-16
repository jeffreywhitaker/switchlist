import React, { useState } from 'react'
import { axiosWithAuth } from '../utils/axiosAuth'

function Login() {
 const [credentials, setCredentials] = useState({})

const login = e => {
    e.preventDefault()
    axiosWithAuth().post('login/endpoint', credentials)
        .then(res => {
            localStorage.setItem('token', res.data.token)
            this.props.history.push('/')
        })
}

const handleChange = e => {
    setCredentials( {
        ...credentials,
        [e.target.name]: e.target.value,
    })
}

return (
    <div>
    <form onSubmit={login}>
        <p>Username:</p>
        <input
            type="text"
            name="username"
            value={credentials.username}
            onChange={handleChange}
        />
        <p>Password:</p>
        <input
            type="password"
            name="password"
            value={credentials.password}
            onChange={handleChange}
        />
        <br/>
        <br/>
        <button>Log in</button>
    </form>
    </div>
    )
}

export default Login