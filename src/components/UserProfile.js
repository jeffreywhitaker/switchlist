// import dependencies
import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'

// import actions
import { getUserData } from '../actions/actions'

// user profile component
function UserProfile(){
    // get user data on page load
    useEffect(() => {
        getUserData()
    }, [])

    // render the following
    return (
        <ProfileWrapper>
            
        </ProfileWrapper>
    )
}

// connect to Redux store
const mapStateToProps = state => {
    return {
        user: state.user
    }
}

// export component
export default connect(mapStateToProps, { })(UserProfile)

// styled components
const ProfileWrapper = styled.section`

`