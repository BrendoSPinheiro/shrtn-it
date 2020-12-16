import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme, loadingJumbo }) => css`
    position: relative;
    width: 100%;
    max-width: 55rem;

    height: 59rem;

    overflow-y: ${loadingJumbo ? 'hidden' : 'auto'};

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

export const Loading = styled.div`
  ${({ theme }) => css`
    position: absolute;
    top: 0;
    left: 0;

    width: 100%;
    height: 100%;

    display: flex;
    align-items: center;
    justify-content: center;

    background: ${theme.colors.background.secondBg};

    opacity: 0.5;
  `}
`;
export const Spinner = styled.div`
  border: 0.6rem solid #9085eb;
  border-left: 0.6rem solid #eeedfc;
  border-bottom: 0.6rem solid #eeedfc;

  border-radius: 50%;

  margin: auto;

  width: 6rem;
  height: 6rem;

  animation: spinner 0.3s linear infinite;

  @keyframes spinner {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
