import { createGlobalStyle, css } from 'styled-components';

const GlobalStyles = createGlobalStyle`

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;

  }

  html{
    font-size: 62.5%;

  }

  body{
    ${({ theme }) => css`
      font-family: ${theme.font.family};
      font-size: ${theme.font.size.small};
    `}
  }



`;

export default GlobalStyles;
