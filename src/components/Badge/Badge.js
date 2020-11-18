import styled, { css } from 'styled-components';

const BadgeWrapper = styled.div`
  padding: 0.6rem 0.8rem 0.4rem;
  border-radius: 3em;
  background-color: ${({ theme }) => theme.desaturatedDarkCyan};

  ${({dark}) => dark && css`
  background-color: ${({ theme }) => theme.veryDarkGrayishCyan};
  `}
`;

const BadgeTitle = styled.p`
  font-size: ${({ theme }) => theme.fontSize.xxs};
  color: ${({ theme }) => theme.white};
  text-transform: uppercase;
  font-weight: ${({ theme }) => theme.bold};
  line-height: 1.4rem;
  letter-spacing: -0.008rem;
`;

const Badge = ({ children, dark }) => {
  return (
    <BadgeWrapper dark={dark}>
      <BadgeTitle>{children}</BadgeTitle>
    </BadgeWrapper>
  );
};

export default Badge;
