import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

const NavLinkContainer = styled.div`
  height: 100%;
  width: 30%;
  display: flex;
  align-items: center;
  align-self: flex-end;
`

const Navlink = styled(NavLink)`
  width: 25%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  color: #5f8ab4;
  &.active {
    color: white;
  }
`

const NavLinks = () => {
  return (
    <NavLinkContainer>
      <Navlink activeClassName={'active'} to="/login">Login</Navlink>
      <Navlink activeClassName={'active'} to="/register">Register</Navlink>
      <Navlink activeClassName={'active'} to="/jobs">Jobs</Navlink>
      <Navlink activeClassName={'active'} to="/contact">Contact</Navlink>
    </NavLinkContainer>
  )
}

export default NavLinks