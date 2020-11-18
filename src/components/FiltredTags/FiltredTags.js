import { useContext } from 'react';
import { JobContext } from 'JobProvider';
import styled from 'styled-components';
import Tag from 'components/Tag/Tag';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: -10.2rem;
  margin-bottom: 5.6rem;
  padding: 2rem 0 2rem 1.9rem;
  background-color: ${({ theme }) => theme.white};
  border-radius: 0.5rem;
  box-shadow: 0 1.5rem 2rem -0.5rem rgba(13, 113, 130, 0.15);

  @media (min-width: ${({ theme }) => theme.mediaSize.md}) {
    margin-top: -11rem;
    margin-bottom: 4rem;
    padding: 2rem 4rem;
  }
`;

const TagListWrapper = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 1.6rem;
`;

const ClearButton = styled.button`
  margin: 0 2.4rem;
  color: ${({ theme }) => theme.darkGrayishCyan};
  font-weight: ${({ theme }) => theme.bold};
  font-size: ${({ theme }) => theme.fontSize.xs};
  line-height: 2.4rem;
  letter-spacing: -0.01rem;
  cursor: pointer;
  transition: color 0.2s;

  :focus {
    outline: none;
  }

  :hover {
    color: ${({ theme }) => theme.desaturatedDarkCyan};
    text-decoration: underline;
  }
`;

const FiltredTags = () => {
  const { filters, clearFilters, removeFilter } = useContext(JobContext);
  const filtersList = filters.map(filter => (
    <li key={filter}>
      <Tag remove onClick={() => removeFilter(filter)}>
        {filter}
      </Tag>
    </li>
  ));
  return (
    <Wrapper>
      <TagListWrapper>{filtersList}</TagListWrapper>
      <ClearButton onClick={clearFilters}>Clear</ClearButton>
    </Wrapper>
  );
};

export default FiltredTags;
