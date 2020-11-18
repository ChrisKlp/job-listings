import Divider from 'components/Divider/Divider';
import CardContent from 'components/CardContent/CardContent';
import CardTags from 'components/CardTags/CardTags';
import styled from 'styled-components';

const CardWrapper = styled.div`
  position: relative;
  margin-bottom: 4rem;
  padding: 3.2rem 2.4rem 2.4rem;
  padding-left: ${({ featured }) => featured ? '1.9rem' : '2.4rem'};
  border-radius: 0.5rem;
  background-color: ${({ theme }) => theme.white};
  box-shadow: 0 1.5rem 2rem -0.5rem rgba(13, 113, 130, 0.15);
  border-left: ${({ featured, theme }) =>
    featured ? `0.5rem solid ${theme.desaturatedDarkCyan}` : null};

  @media (min-width: ${({ theme }) => theme.mediaSize.md}) {
    display: flex;
    align-items: center;
    gap: 2.4rem;
    margin-bottom: 2.4rem;
    padding: 3.2rem 4rem;
    padding-left: ${({ featured }) => featured ? '3.5rem' : '4rem'};
  }
`;

const CardLogo = styled.img`
  position: absolute;
  top: 0;
  width: 4.8rem;
  height: 4.8rem;
  transform: translateY(-50%);

  @media (min-width: ${({ theme }) => theme.mediaSize.md}) {
    position: unset;
    transform: unset;
    width: 8.8rem;
    height: 8.8rem;
  }
`;

const JobCard = ({ company, logo, featured, tags, ...props }) => (
  <CardWrapper featured={featured}>
    <CardLogo src={logo} alt={company} />
    <CardContent company={company} featured={featured} {...props} />
    <Divider />
    <CardTags tags={tags} />
  </CardWrapper>
);

export default JobCard;
