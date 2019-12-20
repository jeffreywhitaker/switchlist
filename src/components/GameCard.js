import React from 'react'
import styled from 'styled-components'

function GameCard({ game }) {
  return (
    <GameCardDiv>
      <h2>{game.name}</h2>
      {game.series ? <p>{game.series} series</p> : <p>Not in a series</p>}
      <GameCoverImg src={game.caseImg} alt={`${game.name} cover art`} />
      <p>Released {game.releaseDate}</p>
      {game.publishers ? (
        <p>
          Published by
          {game.publishers.map((publisher) => ` ${publisher.name},`)}
        </p>
      ) : null}
      {game.directors ? (
        <p>
          Directed by
          {game.directors.map((director) => ` ${director.name},`)}
        </p>
      ) : null}
      {game.composers ? (
        <p>
          Music composed by
          {game.composers.map((composer) => ` ${composer.name},`)}
        </p>
      ) : null}
      {game.multiplayer ? <p>Multiplayer: Yes</p> : <p>Multiplayer: No</p>}
      {game.hdRumble ? <p>HD Rumble: Yes</p> : <p>HD Rumble: No</p>}
      {game.cloudSaves ? <p>Cloud Saves: Yes</p> : <p>Cloud Saves: No</p>}
      <p>Genres: {game.genres.join(', ')}</p>
    </GameCardDiv>
  )
}

export default GameCard

// styled components

const GameCardDiv = styled.div`
    padding: 20px
    margin: 20px
    background: #00B0D1
    border-radius: 10px
`

const GameCoverImg = styled.img`
  width: 100px;
`
