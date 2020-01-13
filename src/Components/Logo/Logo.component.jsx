import React from 'react'
import { Link } from 'react-router-dom'

const Logo = () => {
  return (
    <Link to="/"><p style={{color: 'white', fontSize: '20px'}}>Job Board</p></Link>
  )
}

export default Logo