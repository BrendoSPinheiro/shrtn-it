import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    width: 100%;
    max-width: 55rem;

    height: 59rem;

    overflow-y: auto;

    background: ${theme.colors.background.jumboBg};
    border: 0.1rem solid ${theme.colors.stroke.secondary};
    border-radius: ${theme.border.bgRadius};
    padding: ${theme.spacing.xlarge} 5rem;

    box-shadow: 10px 129px 62px rgba(0, 0, 0, 0.027476),
      10px 44.6328px 20.5416px rgba(0, 0, 0, 0.0403763);

    ::-webkit-scrollbar-button,
    ::-webkit-resizer,
    ::-webkit-scrollbar-corner {
      display: block;
    }
    ::-webkit-scrollbar-track {
      background: ${theme.colors.background.jumboBg};
    }
    ::-webkit-scrollbar {
      width: 0.5rem;
      margin: 6rem;
    }
    ::-webkit-scrollbar-thumb {
      background: ${theme.colors.background.jumboBg};
      border-radius: 8rem;
    }
    &:hover {
      ::-webkit-scrollbar-thumb {
        background: ${theme.colors.stroke.secondary};
      }
    }
  `}
`;
