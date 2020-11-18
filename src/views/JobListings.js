import FiltredTags from 'components/FiltredTags/FiltredTags';
import Header from 'components/Header/Header';
import JobList from 'components/JobList/JobList';
import { JobContext } from 'JobProvider';
import { useContext } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  padding: 0 2.4rem;
  max-width: 110rem;

  @media (min-width: ${({ theme }) => theme.mediaSize.md}) {
    margin: 0 auto;
    padding: 0;
    width: 90%;
  }
`;

const JobListings = () => {
  const { filters } = useContext(JobContext);

  return (
    <>
      <Header />
      <Wrapper>
        {filters.length ? <FiltredTags /> : null}
        <JobList />
      </Wrapper>
    </>
  );
};

export default JobListings;
