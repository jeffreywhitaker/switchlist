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

`