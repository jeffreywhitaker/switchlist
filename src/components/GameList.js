import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'

import GameCard from './GameCard'


function GameList({ games }) {
  return (
    <GameListSection>
        {games.map(game => {
            return <GameCard game={game} />
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

export default connect(mapStateToProps, {})(GameList)

// styled components

const GameListSection = styled.section`

`