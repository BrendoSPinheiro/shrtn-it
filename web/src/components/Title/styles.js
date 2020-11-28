import styled, { css } from 'styled-components';

const wrapperModifiers = {
  white: () => css`
    color: #fafafa;
  `,

  purple: () => css`
    color: #7161ef;
  `,

  weight: (theme) => css`
    & h1 {
      font-weight: ${theme.font.bold};
    }
  `,
};

export const Wrapper = styled.div`
  ${({ theme, color, weight }) => css`
    font-size: max(${theme.font.size.medium}, 90%);

    & h1 {
      font-weight: ${theme.font.normal};
    }

    ${!!color && wrapperModifiers[color]()};
    ${!!weight && wrapperModifiers.weight(theme)};
  `}
`;
