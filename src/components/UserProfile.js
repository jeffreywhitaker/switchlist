import React, { useState, useEffect } from 'react'

import { axiosWithAuth } from '../utils/axiosAuth'
import { getUser } from '../actions/actions'

export default function UserProfile(props){
    const [user, setUser] = useState() // need to set up useEffect hook on mount to get user data

    useEffect(() => {
        axiosWithAuth().get('http://localhost:5000/users/') // fix the login
    }, [])

    const getData = () => {
        axiosWithAuth().get('/data')
            .then(res => console.log(res))
            .catch(err => console.log(err))
    }

    return (
        <div>user profile test</div>
    )
}