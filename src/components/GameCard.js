import React from 'react'
import styled from 'styled-components'


function GameCard({ game }) {
  return (
    <GameCardDiv>
        <h2>{game.name}</h2>
        <img src={game.caseImg} alt='game case' />
        <p>Published by {game.publisher}</p>
        <p>Released {game.releaseDate}</p>
        <p>Genres: {game.genres.join(', ')}</p>
    </GameCardDiv>
  )
}

export default GameCard

// styled components

const GameCardDiv = styled.div`
    padding: 20px
    margin: 20px
    border: 1px solid black
`