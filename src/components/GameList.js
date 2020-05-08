// import dependencies
import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'

// import components and functions
import GameCard from './GameCard'

// GameList component
function GameList({ games }) {
  const [resultsPerPage, setResultsPerPage] = useState(10)

  return (
    <GameListSection>
      <ResultsPerPageDiv>
        <span>Results per page</span>
        <select
          name="pageresults"
          value={resultsPerPage}
          onChange={() => setResultsPerPage(e.target.value)}
          size={1}
        >
          <option value={10}>10</option>
          <option value={25}>25</option>
          <option value={50}>50</option>
          <option value={100}>100</option>
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
