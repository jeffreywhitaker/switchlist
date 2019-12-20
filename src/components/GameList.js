// import dependencies
import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'

// import components and functions
import GameCard from './GameCard'
import { getGames } from '../actions/actions'

// GameList component
function GameList({ games, getGames }) {
  useEffect(() => {
    getGames()
  }, [getGames])

  return (
    <GameListSection>
      <ResultsPerPageDiv>
        <span>Results per page</span>
        <select name="results per page">
          <option>10</option>
          <option>25</option>
          <option>50</option>
          <option>100</option>
        </select>
      </ResultsPerPageDiv>
      {games.list.map((game) => {
        return <GameCard game={game} key={game.name} />
      })}
    </GameListSection>
  )
}

// connect to Redux state
const mapStateToProps = (state) => {
  return {
    games: state.games,
  }
}

// export component
export default connect(mapStateToProps, { getGames })(GameList)

// styled components

const GameListSection = styled.section``

const ResultsPerPageDiv = styled.div`
    display: flex
    justify-content: flex-end
    margin-right: 30px
`
