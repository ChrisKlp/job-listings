import bgHeaderMobile from 'images/bg-header-mobile.svg';
import bgHeaderDesktop from 'images/bg-header-desktop.svg';
import styled from 'styled-components';

const Header = styled.div`
  margin-bottom: 5.6rem;
  height: 15.6rem;
  background-color: ${({ theme }) => theme.desaturatedDarkCyan};
  background-image: url(${bgHeaderMobile});
  background-repeat: no-repeat;
  background-size: cover;

  @media (min-width: ${({ theme }) => theme.mediaSize.md}) {
    margin-bottom: 7.6rem;
    background-image: url(${bgHeaderDesktop});
  }
`;

export default Header;
