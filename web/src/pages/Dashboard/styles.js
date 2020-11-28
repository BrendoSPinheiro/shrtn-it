import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    height: 100vh;
    background-color: ${theme.colors.background.secondBg};
  `}
`;

export const SectionContent = styled.div`
  ${({ theme }) =>
    css`
      padding: 2.3rem ${theme.spacing.xxlarge} 0;
    `};
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Main = styled.main`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-between;

    margin-top: ${theme.spacing.xlarge};
  `}
`;

export const HeaderJumbo = styled(Header)`
  ${({ theme }) => css`
    h1 {
      font-size: ${theme.font.size.small};
      color: ${theme.colors.text.secondary};
    }
    padding-bottom: ${theme.spacing.medium};
    border-bottom: 0.1rem solid ${theme.colors.stroke.secondary};
  `}
`;

export const Search = styled(Header)`
  ${({ theme }) => css`
    gap: ${theme.spacing.medium};
  `}
`;

export const InputSearch = styled.input`
  ${({ theme }) => css`
    width: 11rem;
    height: 3.4rem;
    border-radius: ${theme.border.buttonRadius};
    border: 0.1rem solid ${theme.colors.stroke.secondary};
    color: ${theme.colors.text.gray};
    background: ${theme.colors.background.inputBg};

    font-size: ${theme.font.size.small};
    padding: ${theme.spacing.xsmall};

    &::placeholder {
      color: ${theme.colors.text.gray};
    }
  `}
`;
