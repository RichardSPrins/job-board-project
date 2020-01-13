import React from 'react'
import JobList from '../JobList/JobList.component'
import styled from 'styled-components'
import { Typography } from '@material-ui/core';
import PageHeader from '../PageHeader/PageHeader.component'

const Container = styled.div`
  width: 1000px;
  height: 2000px;
  margin: 0 auto;
  border: 3px solid #1f364d;
  border-radius: 10px;
  box-sizing: border-box; 
  padding: 10px;
  display: flex;
  flex-direction: column;
`

const JobBoardContainer = (props) => {
  return (
    <Container>
      {/* <Typography variant="h4">Job Listings</Typography> */}
      <PageHeader>Job Listings</PageHeader>
      <JobList jobs={props.jobs}/>
    </Container>
  )
}

export default JobBoardContainer