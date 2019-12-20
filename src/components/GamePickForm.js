// import dependencies
import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'

// import functions
import { getPublishers } from '../actions/actions'

// GamePickForm component
function GamePickForm({ publishers, getPublishers }) {
  const [filterData, setFilterData] = useState({
    title: '',
    series: '',
    composers: [],
    hdRumble: false,
    multiplayer: false,
    cloudSaves: false,
    genres: [],
  })

  useEffect(() => {
    getPublishers()
  }, [getPublishers])

  const handleFilter = (e) => {
    e.preventDefault()
    // needs to filter gamelist results
  }

  const handleValueChange = (e) => {
    setFilterData({
      ...filterData,
      [e.target.name]: e.target.value,
    })
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
          <input
            type="text"
            placeholder="all or part of title"
            value={filterData.title}
            onChange={handleValueChange}
          />
        </GPFsubDiv>
        <GPFsubDiv>
          <p>Publisher</p>
          <select name="publisher" placeholder="publisher" size={1}>
            <option value=""></option>
            {publishers.list.map((publisher) => {
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
          <input
            type="text"
            value={filterData.series}
            onChange={handleValueChange}
          ></input>
        </GPFsubDiv>
        <GPFsubDiv>
          <p>Composers</p>
          <input
            type="text"
            value={filterData.composers}
            onChange={handleValueChange}
          ></input>
        </GPFsubDiv>
      </ColumnDiv>
      <ColumnDiv>
        <GPFsubDiv>
          <p>HD rumble</p>
          <input
            type="checkbox"
            value={filterData.hdRumble}
            onChange={handleValueChange}
          ></input>
        </GPFsubDiv>
        <GPFsubDiv>
          <p>Multiplayer</p>
          <input
            type="checkbox"
            value={filterData.multiplayer}
            onChange={handleValueChange}
          ></input>
        </GPFsubDiv>
        <GPFsubDiv>
          <p>Cloud Saves</p>
          <input
            type="checkbox"
            value={filterData.cloudSaves}
            onChange={handleValueChange}
          ></input>
        </GPFsubDiv>
      </ColumnDiv>
      <ColumnDiv>
        <GPFsubDiv>
          <p>Genres</p>
          <input
            type="text"
            value={filterData.genres}
            onChange={handleValueChange}
          ></input>
        </GPFsubDiv>
      </ColumnDiv>
    </GamePickFormSection>
  )
}

// connect to Redux state
const mapStateToProps = (state) => {
  return {
    games: state.games,
    publishers: state.publishers,
  }
}

// export component
export default connect(mapStateToProps, { getPublishers })(GamePickForm)

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
