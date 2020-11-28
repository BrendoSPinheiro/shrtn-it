import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.background.mainBg};
    height: 13rem;
  `}
`;

export const Header = styled.header`
  ${({ theme }) => css`
    max-width: 200rem;
    margin: 0 auto;
    padding: 0 ${theme.spacing.xxlarge};
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 10rem;
  `}
`;
export const BorderBottom = styled.div`
  ${({ theme }) => css`
    width: 100%;
    height: 3rem;
    background-color: ${theme.colors.background.secondBg};

    border-top-left-radius: ${theme.border.bgRadius};
    border-top-right-radius: ${theme.border.bgRadius};
  `}
`;

export const Button = styled.button`
  ${({ theme }) => css`
    background: transparent;

    border: 0;
    cursor: pointer;

    svg {
      color: #fff;
      transition: 0.4s ease;
    }

    &:hover {
      /* opacity: 0.6; */
      svg {
        color: ${theme.colors.icons.red};
      }
    }
  `}
`;
