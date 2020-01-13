import React from 'react'
import styled from 'styled-components'
import HeaderContent from '../HeaderContent/HeaderContent.component'


const Header = styled.div`
  height: 60px;
  background-color: #1f364d;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
`

const Navbar = () => {
  return (
    <Header>
      <HeaderContent />
    </Header>
  )
}
export default Navbar