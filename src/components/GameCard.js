import React from 'react'
import styled from 'styled-components'
import { FRONTEND_URI } from '../config/rootConfig'
import { gameUrlMaker } from '../utils/gameUrlMaker'

function GameCard({ game }) {
  return (
    <GameCardDiv>
      <h2>{game.title}</h2>
      {game.series ? <p>{game.series} series</p> : <p>Not in a series</p>}
      <GameCoverImg src={game.caseImg} alt={`${game.title} cover art`} />
      <p>Released {game.releaseDate}</p>
      {game.publishers && game.publishers.length > 0 ? (
        <p>
          Published by&nbsp;
          {game.publishers.map((publisher) => publisher.name).join(', ')}
        </p>
      ) : null}
      {game.directors && game.directors.length > 0 ? (
        <p>
          Directed by&nbsp;
          {game.directors.map((director) => director.name).join(', ')}
        </p>
      ) : null}
      {game.composers && game.composers.length > 0 ? (
        <p>
          Music composed by&nbsp;
          {game.composers.map((composer) => composer.name).join(', ')}
        </p>
      ) : null}
      {game.multiplayer ? <p>Multiplayer: Yes</p> : <p>Multiplayer: No</p>}
      {game.hdRumble ? <p>HD Rumble: Yes</p> : <p>HD Rumble: No</p>}
      {game.cloudSaves ? <p>Cloud Saves: Yes</p> : <p>Cloud Saves: No</p>}
      <p>Genres: {game.genres.join(', ')}</p>
      <button>
        <a href={`${FRONTEND_URI}/games/${gameUrlMaker(game.title)}`}>
          Visit Page
        </a>
      </button>
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
