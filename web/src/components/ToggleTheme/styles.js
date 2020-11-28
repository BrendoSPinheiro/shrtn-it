import styled, { css } from 'styled-components';

export const Wrapper = styled.label`
  ${({ theme }) => css`
    & > .react-switch {
      margin: 0 ${theme.spacing.medium};
    }
  `}
`;
