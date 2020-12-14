import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    color: ${theme.colors.text.primary};

    h1 {
      font-size: ${theme.font.size.large};
      font-weight: ${theme.font.normal};
      text-align: center;
      margin-top: 2rem;

      width: 40rem;

      span {
        font-weight: ${theme.font.bold};
        font-size: ${theme.font.size.large};
      }
    }

    a {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: ${theme.spacing.small};

      font-weight: ${theme.font.bold};

      border-bottom: 0.2rem solid #ffff;

      color: ${theme.colors.text.gray};

      font-size: ${theme.font.size.medium};

      text-decoration: none;
      margin-top: 2rem;

      transition: 0.2s ease-in-out;
      &:hover {
        border-bottom: 0.2rem solid ${theme.colors.text.primary};
        color: ${theme.colors.text.primary};
      }
    }
  `}
`;
