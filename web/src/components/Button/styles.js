import styled, { css } from 'styled-components';

const wrapperModifiers = {
  small: (theme) => css`
    width: 3.4rem;
    height: 3.4rem;
    font-size: ${theme.font.size.small};
  `,
  medium: (theme) => css`
    width: 100%;
    max-width: 28.9rem;
    height: 6.2rem;
    font-size: ${theme.font.size.medium};
    font-weight: 600;
  `,
  fullWidth: () => css`
    max-width: 100%;
  `,

  withIcon: (theme) => css`
    display: flex;
    align-items: center;
    justify-content: center;

    svg {
      width: 2.4rem;
      & + span {
        margin-left: ${theme.spacing.xsmall};
      }
    }
  `,
  loading: (theme) => css`
    background: ${theme.colors.button.hover};

    cursor: not-allowed;

    .loading {
      border: 0.4rem solid #9085eb;
      border-left: 0.4rem solid #fff;
      border-bottom: 0.4rem solid #fff;

      border-radius: 50%;

      margin: 0 auto;

      width: 2.8rem;
      height: 2.8rem;

      animation: spinner 0.3s linear infinite;
    }

    @keyframes spinner {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }
  `,
};

export const Wrapper = styled.button`
  ${({ theme, size, fullWidth, hasIcon, hasLoading }) => css`
    background: ${theme.colors.button.mainBg};
    color: ${theme.colors.button.content};
    border-radius: ${theme.border.buttonRadius};
    border: 0;

    transition: background 0.2s ease;

    cursor: pointer;

    &:hover {
      background: ${theme.colors.button.hover};
    }

    ${!!size && wrapperModifiers[size](theme)}
    ${!!fullWidth && wrapperModifiers.fullWidth()}
    ${!!hasIcon && wrapperModifiers.withIcon(theme)}
    ${!!hasLoading && wrapperModifiers.loading(theme)}
  `}
`;
