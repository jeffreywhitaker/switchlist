import React from 'react'
import styled from 'styled-components'

function GamePickForm() {
  return (
    <GamePickFormSection>
      <h3>Publisher</h3>
      <select name='publisher' size={1} >
        <option value="volvo">Volvo</option>
        <option value="saab">Saab</option>
        <option value="mercedes">Mercedes</option>
        <option value="audi">Audi</option>
      </select>
    </GamePickFormSection>
  )
}

export default GamePickForm

// styled components

const GamePickFormSection = styled.section`
  border: 1px solid black
  margin: 10px 0
`