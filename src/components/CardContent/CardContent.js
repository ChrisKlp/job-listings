import styled from 'styled-components';
import Badge from 'components/Badge/Badge';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
`;

const CompanyName = styled.p`
  margin-right: 0.8rem;
  color: ${({ theme }) => theme.desaturatedDarkCyan};
  font-weight: ${({ theme }) => theme.bold};
  font-size: ${({ theme }) => theme.fontSize.xs};

  @media (min-width: ${({ theme }) => theme.mediaSize.md}) {
    font-size: 1.4rem;
  }
`;

const JobTitle = styled.a`
  display: block;
  font-size: ${({ theme }) => theme.fontSize.s};
  color: ${({ theme }) => theme.veryDarkGrayishCyan};
  line-height: 2.4rem;
  font-weight: ${({ theme }) => theme.bold};
  text-decoration: none;
  transition: color 0.2s;

  :hover {
    color: ${({ theme }) => theme.desaturatedDarkCyan};
  }

  @media (min-width: ${({ theme }) => theme.mediaSize.lg}) {
    font-size: ${({ theme }) => theme.fontSize.m};
  }
`;

const JobDetails = styled.div`
  display: flex;
  gap: 0.8rem;

  @media (min-width: ${({ theme }) => theme.mediaSize.lg}) {
    gap: 1.6rem;
  }
`;

const Detail = styled.p`
  display: flex;
  align-items: center;
  font-weight: ${({ theme }) => theme.medium};
  font-size: ${({ theme }) => theme.fontSize.xs};
  line-height: 2.4rem;
  letter-spacing: -0.01rem;
  color: ${({ theme }) => theme.darkGrayishCyan};

  :not(:first-child)::before {
    display: block;
    margin-right: 0.8rem;
    content: '';
    width: 0.4rem;
    height: 0.4rem;
    border-radius: 50%;
    background-color: hsl(180, 10%, 74%);
  }

  @media (min-width: ${({ theme }) => theme.mediaSize.lg}) {
    font-size: ${({ theme }) => theme.fontSize.s};
    letter-spacing: -0.012rem;

    :not(:first-child)::before {
      margin-right: 1.6rem;
    }
  }
`;

const CardContent = ({
  company,
  new: badgeNew,
  featured,
  position,
  postedAt,
  contract,
  location,
}) => {
  const isNew = badgeNew ? <Badge>New!</Badge> : null;
  const isFeatured = featured ? <Badge dark>Featured</Badge> : null;

  return (
    <Wrapper>
      <Header>
        <CompanyName>{company}</CompanyName>
        {isNew}
        {isFeatured}
      </Header>
      <JobTitle href="">{position}</JobTitle>
      <JobDetails>
        <Detail>{postedAt}</Detail>
        <Detail>{contract}</Detail>
        <Detail>{location}</Detail>
      </JobDetails>
    </Wrapper>
  );
};

export default CardContent;
