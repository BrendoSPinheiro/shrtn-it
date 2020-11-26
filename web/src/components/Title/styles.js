import styled, { css } from 'styled-components';

const wrapperModifiers = {
  white: (theme) => css`
    color: ${theme.colors.text.secondary};
  `,

  purple: (theme) => css`
    color: ${theme.colors.text.primary};
  `,

  weight: (theme) => css`
    & h1 {
      font-weight: ${theme.font.bold};
    }
  `,
};

export const Wrapper = styled.div`
  ${({ theme, color, weight }) => css`
    font-size: ${theme.font.size.medium};

    & h1 {
      font-weight: ${theme.font.normal};
    }

    ${!!color && wrapperModifiers[color](theme)};
    ${!!weight && wrapperModifiers.weight(theme)};
  `}
`;
