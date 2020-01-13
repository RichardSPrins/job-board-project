import React from 'react'
import styled from 'styled-components'


const JobContainer = styled.div`
  margin: 15px;
  box-sizing: border-box;
  ${'' /* border: 1px solid; */}
  border-radius: 10px;
  background-color: #1f364d;
  padding: 10px;
  box-shadow: 6px 11px 16px 0px rgba(36,36,36,0.5);
  `


const Job = (props) => {
  const {job} = props
  return (
    <JobContainer className="">
      <h3>{job.title}</h3>
      <p>{job.snippet}</p>
      <p>{job.company}</p>
    </JobContainer>
  )
}

export default Job