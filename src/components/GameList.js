import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'

import GameCard from './GameCard'
import { getGames } from '../actions/actions'


function GameList({ games, getGames }) {
    useEffect(() => {
        getGames()
    }, [getGames])

  return (
    <GameListSection>
        <ResultsPerPageDiv>
            <span>Results per page</span>
            <select name='results per page'>
                <option>10</option>
                <option>25</option>
                <option>50</option>
                <option>100</option>
            </select>
        </ResultsPerPageDiv>
        {games.map(game => {
            return <GameCard game={game} key={game.name} />
        })}
    </GameListSection>
  )
}

const mapStateToProps = state => {
    return {
      games: state.games,
      isFetching: state.isFetching,
      error: state.error
    }
}

export default connect(mapStateToProps, { getGames })(GameList)

// styled components

const GameListSection = styled.section`
    border: 1px solid black
`

const ResultsPerPageDiv = styled.div`
    display: flex
    justify-content: flex-right
`