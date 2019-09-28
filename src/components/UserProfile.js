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
            <UserWrapper>
                <PersonInfoWrapper>
                    <div>Person Info</div>
                </PersonInfoWrapper>
                <UpdateInfoWrapper>
                    <div>Update Fields</div>
                </UpdateInfoWrapper>
            </UserWrapper>
            <GameTagWrapper>
                <div>Game Tag Info</div>
            </GameTagWrapper>
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
    width: 96%
    margin: 10px auto
    display: flex
    flex-direction: column
`

const UserWrapper = styled.article`
    height: 500px
    display: flex
    justify-content: space-between
`

const PersonInfoWrapper = styled.article`
    height: 100%
    width: 33%
    border: 1px solid black
`

const UpdateInfoWrapper = styled.article`
    height: 100%
    width: 66%
    border: 1px solid black
`

const GameTagWrapper = styled.article`
    margin-top: 10px
    height: 400px
    width: 100%
    border: 1px solid black
`