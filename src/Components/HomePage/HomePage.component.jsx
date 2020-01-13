import React from 'react'
import Hero from '../Hero/Hero.component'
import styled from 'styled-components'

const Container = styled.div`
  box-sizing: border-box; 
  width: 1000px;
  height: 200px;
  margin: 0 auto;
  border: 3px solid #1f364d;
  border-radius: 10px;
  padding: 10px
`

const HomePage = () => {
  return (
    <Container>
      <Hero />
    </Container>
  )
}

export default HomePage