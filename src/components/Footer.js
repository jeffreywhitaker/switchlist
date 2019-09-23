// import dependencies
import React from 'react'
import styled from 'styled-components'

// Footer component
export default function Footer() {
    return (
        <FooterSection>
            <p>SwitchList</p>
            <p>Copyright Jeffrey David Whitaker, 2019</p>
        </FooterSection>
    )
}

// styled components
const FooterSection = styled.section`
    border-top: 1px solid black
    text-align: center
    margin-top: 10px
`