import styled, { css } from 'styled-components';

export const Wrapper = styled.div``;
export const InputLabel = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    border-bottom: 0.1rem solid ${theme.colors.stroke.primary};

    svg {
      font-size: 2.4rem;
      margin: ${theme.spacing.medium} ${theme.spacing.xsmall};
      color: ${theme.colors.icons.select};
    }
    margin-bottom: ${theme.spacing.xlarge};
  `}
`;

export const Name = styled.label`
  ${({ theme }) => css`
    font-size: ${theme.font.size.medium};
    color: ${theme.colors.text.secondary};
    font-family: 'Roboto';

    display: flex;
    justify-content: space-between;
  `}
`;

export const Input = styled.input`
  ${({ theme }) => css`
    border: 0;
    outline: 0;
    font-size: ${theme.font.size.medium};
    color: ${theme.colors.text.secondary};
    background: none;
    width: 95%;
  `}
`;

export const AlternativeText = styled.a`
  ${({ theme }) => css`
    font-weight: ${theme.font.light};
    color: ${theme.colors.text.gray};
    transition: color 0.2s ease;
    text-decoration: none;
    &:hover {
      color: ${theme.colors.text.primary};
    }
  `}
`;
