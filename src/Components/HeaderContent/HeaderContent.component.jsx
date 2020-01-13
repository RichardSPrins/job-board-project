import React from 'react'
import NavLinks from '../NavLinks/NavLinks.component'
import Logo from '../Logo/Logo.component'
import styled from 'styled-components'

const Content = styled.div`
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  width: 1000px;
`



const HeaderContent = () => {
  return (
    <Content>
      <Logo />
      <NavLinks />
    </Content>
  )
}

export default HeaderContent