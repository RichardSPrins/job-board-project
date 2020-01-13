import React from 'react'
import Job from '../Job/Job.component'

const JobList = (props) => {
  const { jobs } = props
  return (
    <div>
      {jobs.map(job => <Job key={Math.random() * 100} job={job}/>)}
    </div>
  )
}

export default JobList