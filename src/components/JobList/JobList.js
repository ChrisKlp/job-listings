import JobCard from 'components/JobCard/JobCard';
import { JobContext } from 'JobProvider';
import { useContext } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  padding-bottom: 9.6rem;
`;

const JobList = () => {
  const { filtredJobs: jobs } = useContext(JobContext);
  const jobList = jobs.map(job => <JobCard key={job.id} {...job} />);

  return <Wrapper>{jobList}</Wrapper>;
};

export default JobList;
