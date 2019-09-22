import React from 'react'
import { connect } from 'react-redux'

function UserProfile(props){


    return (
        <div>user profile test</div>
    )
}

const mapStateToProps = state => {
    return {
        user: state.user,
        isFetching: state.isFetching,
        error: state.error
    }
  }
  
  export default connect(mapStateToProps, { })(UserProfile)