import styled from 'styled-components';

const Divider = styled.hr`
  margin: 1.6rem 0;
  height: 1px;
  border: none;
  background-color: ${({ theme }) => theme.dividerColor};

  @media (min-width: ${({ theme }) => theme.mediaSize.md}) {
    display: none;
  }
`;

export default Divider