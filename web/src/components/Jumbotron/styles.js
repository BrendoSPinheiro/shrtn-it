import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    width: 100%;
    max-width: 55rem;
    min-height: 59rem;
    background: ${theme.colors.background.jumboBg};
    border: 0.1rem solid ${theme.colors.stroke.secondary};
    border-radius: ${theme.border.bgRadius};
    padding: ${theme.spacing.xlarge} 5rem;

    box-shadow: 10px 129px 62px rgba(0, 0, 0, 0.027476),
      10px 44.6328px 20.5416px rgba(0, 0, 0, 0.0403763);
  `}
`;
