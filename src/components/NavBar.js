import React from 'react'
import styled from 'styled-components'


function NavBar() {
  return (
    <NavHeader>
        <div>Logo Here</div>
        <nav>
            <NavLink href='#'>Home</NavLink>
            <NavLink href='#'>Game List</NavLink>
            <NavLink href='#'>About</NavLink>
        </nav>
    </NavHeader>
  )
}

export default NavBar

// styled components

const NavHeader = styled.header`
    border: 1px solid black;
    display: flex;
    justify-content: space-around;
`

const NavLink = styled.a`
    text-decoration: none;
    padding: 20px;
    background: cyan;
    border: 1px solid black;
    margin: 10px 15px;
`