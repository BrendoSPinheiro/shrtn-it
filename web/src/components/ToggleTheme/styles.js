import styled, { css } from 'styled-components';

export const Wrapper = styled.label`
  ${({ theme }) => css`
    background: ${theme.colors.background.mainBg};
  `}
`;
