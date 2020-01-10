import React from 'react'
import styled from 'styled-components'
import NavLinks from '../NavLinks/NavLinks.component'


const Header = styled.div`
  height: 75px;
  background-color: #0099cc;
  display: flex;
  align-items: center;
  justify-content: space-between
`

const Navbar = () => {
  return (
    <Header>
      <h1>Job Board</h1>
      <NavLinks />
    </Header>
  )
}
export default Navbar