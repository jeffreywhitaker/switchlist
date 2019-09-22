import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'

import { getPublishers } from '../actions/actions'

function GamePickForm({ publishers }) {
  useEffect(() => {
    getPublishers()
  }, [])

  return (
    <GamePickFormSection>
      <h3>Search by</h3>
        <TitleSearchDiv>
          <p>Title</p>
          <input type='text' placeholder='all or part of title'/>
        </TitleSearchDiv>
        <PublisherSearchDiv>
          <p>Publisher</p>
          <select name='publisher' size={1} >
            <option value = ''></option>
            {publishers.map(publisher => {
              return <option value={publisher} key={publisher}>{publisher}</option>
            })}
          </select>
      </PublisherSearchDiv>
    </GamePickFormSection>
  )
}

const mapStateToProps = state => {
  return {
    games: state.games,
    isFetching: state.games.isFetching,
    error: state.games.error,
    publishers: state.publishers.list,
  }
}

export default connect(mapStateToProps, {})(GamePickForm)

// styled components

const GamePickFormSection = styled.section`
  border: 1px solid black
  margin: 10px 0
`

const TitleSearchDiv = styled.div`
  margin: 10px
`

const PublisherSearchDiv = styled.div`
  margin: 10px
`