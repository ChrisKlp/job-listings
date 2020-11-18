import { useContext } from 'react';
import { JobContext } from 'JobProvider';
import Tag from 'components/Tag/Tag';
import styled from 'styled-components';

const TagsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 1.6rem;

  @media (min-width: ${({ theme }) => theme.mediaSize.md}) {
    justify-content: flex-end;
    flex-grow: 1;
  }
`;

const CardTags = ({ tags }) => {
  const { addFilter } = useContext(JobContext);

  const jobTagsList = tags.map((tag, index) => (
    <li key={index}>
      <Tag onClick={() => addFilter(tag)}>{tag}</Tag>
    </li>
  ));

  return (
    <>
      <TagsList>{jobTagsList}</TagsList>
    </>
  );
};

export default CardTags;
