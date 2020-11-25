import styled, { css } from 'styled-components';

const wrapperModifiers = {
  small: (theme) => css`
    width: 3.4rem;
    height: 3.4rem;
    font-size: ${theme.font.size.small};
  `,
  medium: (theme) => css`
    width: 28.9rem;
    height: 6.2rem;
    font-size: ${theme.font.size.medium};
    font-weight: 600;
  `,
  fullWidth: () => css`
    width: 100%;
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
};

export const Wrapper = styled.button`
  ${({ theme, size, fullWidth, hasIcon }) => css`
    background: ${theme.colors.button.mainBg};
    color: ${theme.colors.button.content};
    border-radius: ${theme.border.buttonRadius};
    border: 0;
    cursor: pointer;

    ${!!size && wrapperModifiers[size](theme)}
    ${!!fullWidth && wrapperModifiers.fullWidth()}
    ${!!hasIcon && wrapperModifiers.withIcon(theme)}
  `}
`;
