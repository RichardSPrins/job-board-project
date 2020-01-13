import React from 'react'
import styled from 'styled-components'

const Header = styled.p`
  padding: 0;
  margin: 0;
  font-size: 30px;
`

const PageHeader = (props) => {
  const {children} = props
  return (
    <>
      <Header>
        {children}
      </Header> 
    </>
  )
}

export default PageHeader