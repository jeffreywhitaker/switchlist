// import dependencies
import React, { useEffect } from "react"
import { connect } from "react-redux"
import styled from "styled-components"

// import functions
import { getPublishers } from "../actions/actions"

// GamePickForm component
function GamePickForm({ publishers, getPublishers }) {
  useEffect(() => {
    getPublishers()
  }, [getPublishers])

  const handleFilter = e => {
    e.preventDefault()
    // needs to filter gamelist results
  }

  return (
    <GamePickFormSection>
      <ColumnDiv1>
        <h3>Search by</h3>
        <button onClick={handleFilter}>Search</button>
      </ColumnDiv1>
      <ColumnDiv>
        <GPFsubDiv>
          <p>Title</p>
          <input type="text" placeholder="all or part of title" />
        </GPFsubDiv>
        <GPFsubDiv>
          <p>Publisher</p>
          <select name="publisher" size={1}>
            <option value=""></option>
            {publishers.list.map(publisher => {
              return (
                <option value={publisher} key={publisher}>
                  {publisher}
                </option>
              )
            })}
          </select>
        </GPFsubDiv>
        <GPFsubDiv>
          <p>Series</p>
          <input type="text"></input>
        </GPFsubDiv>
        <GPFsubDiv>
          <p>Composers</p>
          <input type="text"></input>
        </GPFsubDiv>
      </ColumnDiv>
      <ColumnDiv>
        <GPFsubDiv>
          <p>HD rumble</p>
          <input type="checkbox"></input>
        </GPFsubDiv>
        <GPFsubDiv>
          <p>Multiplayer</p>
          <input type="checkbox"></input>
        </GPFsubDiv>
        <GPFsubDiv>
          <p>Cloud Saves</p>
          <input type="checkbox"></input>
        </GPFsubDiv>
      </ColumnDiv>
      <ColumnDiv>
        <GPFsubDiv>
          <p>Genres</p>
          <input type="text"></input>
        </GPFsubDiv>
      </ColumnDiv>
    </GamePickFormSection>
  )
}

// connect to Redux state
const mapStateToProps = state => {
  return {
    games: state.games,
    publishers: state.publishers
  }
}

// export component
export default connect(
  mapStateToProps,
  { getPublishers }
)(GamePickForm)

// styled components

const GamePickFormSection = styled.section`
  display: flex
  flex-wrap: wrap
  justify-content: space-around
  align-items: baseline
  border-top: 1px solid black
  border-bottom: 1px solid black
  margin: 10px 20px
  padding: 20px 30px
`

const GPFsubDiv = styled.div`
  margin: 10px;
`

const ColumnDiv = styled.div`
  display: flex
  flex-direction: column
`

const ColumnDiv1 = styled.div`
  height: 100%
  display: flex
  flex-direction: column
  justify-content: space-between
`
