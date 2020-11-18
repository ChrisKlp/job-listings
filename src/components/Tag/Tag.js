import styled, { css } from 'styled-components';
import iconRemove from 'images/icon-remove.svg';

const TagWrapper = styled.div`
  border-radius: 0.4rem;
  display: flex;
  align-items: center;
  overflow: hidden;
`;

const TagName = styled.p`
  padding: 0.4rem 0.8rem;
  background-color: ${({ theme }) => theme.filterCyan};
  font-weight: ${({ theme }) => theme.bold};
  font-size: ${({ theme }) => theme.fontSize.xs};
  line-height: 2.4rem;
  letter-spacing: -0.01rem;
  color: ${({ theme }) => theme.desaturatedDarkCyan};

  ${({ button }) =>
    button &&
    css`
      cursor: pointer;
      transition: background-color 0.2s, color 0.2s;

      :focus {
        outline: none;
        background-color: ${({ theme }) => theme.filterFocus};
      }

      :hover {
        background-color: ${({ theme }) => theme.desaturatedDarkCyan};
        color: ${({ theme }) => theme.white};
      }
    `}
`;

const RemoveBtn = styled.button`
  padding: 0.9rem;
  width: 3.2rem;
  height: 3.2rem;
  background-color: ${({ theme }) => theme.desaturatedDarkCyan};
  background-image: url(${iconRemove});
  background-repeat: no-repeat;
  background-position: center;
  cursor: pointer;
  transition: background-color 0.2s, color 0.2s;

  :focus {
    outline: none;
  }

  :hover {
    background-color: ${({ theme }) => theme.veryDarkGrayishCyan};
  }
`;

const Tag = ({ remove, children, ...props }) => {
  return (
    <>
      {remove ? (
        <TagWrapper>
          <TagName>{children}</TagName>
          <RemoveBtn {...props} />
        </TagWrapper>
      ) : (
        <TagWrapper {...props}>
          <TagName button>{children}</TagName>
        </TagWrapper>
      )}
    </>
  );
};

export default Tag;
