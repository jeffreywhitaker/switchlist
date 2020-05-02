// import dependencies
import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'

// import components and functions
import GameCard from './GameCard'

// GameList component
function GameList({ games }) {
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
        return <GameCard game={game} key={game.title} />
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
export default connect(mapStateToProps, {})(GameList)

// styled components

const GameListSection = styled.section``

const ResultsPerPageDiv = styled.div`
    display: flex
    justify-content: flex-end
    margin-right: 30px
`
