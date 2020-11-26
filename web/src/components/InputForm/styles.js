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
