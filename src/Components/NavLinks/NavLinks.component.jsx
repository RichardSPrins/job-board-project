import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const NavLinkContainer = styled.div`
  height: 100%;
  width: 30%;
  display: flex;
  align-items: center;

`

const Navlink = styled.div`
  width: 25%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

const NavLinks = () => {
  return (
    <NavLinkContainer>
      <Navlink>Login</Navlink>
      <Navlink>Register</Navlink>
      <Navlink>Jobs</Navlink>
      <Navlink>Contact</Navlink>
    </NavLinkContainer>
  )
}

export default NavLinks