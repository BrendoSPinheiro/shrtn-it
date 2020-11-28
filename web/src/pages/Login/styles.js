import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;

  width: 100%;
  height: 100vh;

  @media (max-width: 840px) {
    flex-direction: column;
  } ;
`;
export const SectionForm = styled.div`
  ${({ theme }) => css`
    width: 40%;
    height: 100%;
    background: ${theme.colors.background.secondBg};

    border-right: 0.1rem solid ${theme.colors.stroke.primary};

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    form {
      max-width: 29.7rem;
    }
    form > .title-form-login {
      margin-bottom: 4rem;
    }

    form > button {
      margin-bottom: ${theme.spacing.small};
    }
    @media (max-width: 840px) {
      width: 100%;
      height: 100vh;
    } ;
  `}
`;

export const Alternative = styled.span`
  ${({ theme }) => css`
    color: ${theme.colors.text.secondary};
    font-size: ${theme.font.size.small};

    font-family: 'Roboto';
    & > a {
      color: ${theme.colors.text.gray};
      transition: color 0.2s ease;

      &:hover {
        color: ${theme.colors.text.primary};
      }
    }
  `}
`;
export const AlternativeMobile = styled.div`
  ${({ theme }) => css`
    text-align: center;
    font-size: ${theme.font.size.small};
    margin-bottom: 2rem;
    @media (min-width: 840px) {
      display: none;
    }
  `}
`;
