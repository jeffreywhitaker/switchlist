// import dependencies
import React from 'react'
import styled from 'styled-components'

// About page component
export default function About() {
    return (
        <AboutWrapper>
            <h2>Hi, I'm Jeff. Nice to meet you!</h2>
            <p>I'm a fullstack web developer in training. Currently a student at Lambda School, this is my first private side project. Thank you for checking in!</p> 
        </AboutWrapper>
    )
}

// styled components
const AboutWrapper = styled.section`
  width: 65%
  margin: 0 auto
`