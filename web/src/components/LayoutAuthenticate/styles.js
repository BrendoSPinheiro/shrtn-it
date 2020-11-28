import styled, { css } from 'styled-components';

export const SectionDemonstration = styled.div`
  ${({ theme }) => css`
    width: 60%;

    background: ${theme.colors.background.mainBg};

    padding: 10rem;

    display: flex;
    justify-content: center;
    /* align-items: center; */
    flex-direction: column;

    gap: 8rem;

    img {
      width: min(60rem, 100%);
      margin: 0 auto;
    }

    .title-login {
      width: 28.2rem;
      text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    }
    @media (max-width: 840px) {
      display: none;
    } ;
  `}
`;
