import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    height: 100vh;
    background-color: ${theme.colors.background.secondBg};

    @media (max-width: 1050px) {
      height: 100%;
    }
  `}
`;

export const SectionContent = styled.div`
  max-width: 120rem;
  margin: 0 auto;
  padding: 0 2%;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Main = styled.main`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-between;
    gap: 2rem;
    margin-top: ${theme.spacing.xlarge};

    @media(max-width: 1050px){
      flex-direction column;
      align-items: center;
    }
  `}
`;

export const HeaderJumbo = styled(Header)`
  ${({ theme }) => css`
    h1 {
      font-size: ${theme.font.size.small};
      color: ${theme.colors.text.secondary};
    }
    padding-bottom: ${theme.spacing.medium};
    border-bottom: 0.1rem solid ${theme.colors.stroke.secondary};
  `}
`;

export const Search = styled(Header)`
  ${({ theme }) => css`
    gap: ${theme.spacing.medium};
  `}
`;

export const InputSearch = styled.input`
  ${({ theme }) => css`
    width: 11rem;
    height: 3.4rem;
    border-radius: ${theme.border.buttonRadius};
    border: 0.1rem solid ${theme.colors.stroke.secondary};
    color: ${theme.colors.text.gray};
    background: ${theme.colors.background.inputBg};

    font-size: ${theme.font.size.small};
    padding: ${theme.spacing.xsmall};

    &::placeholder {
      color: ${theme.colors.text.gray};
    }
  `}
`;

const WrapperLinksModifiers = {
  selected: (theme) => css`
    background: ${theme.colors.background.selectBg};
  `,
};
export const WrapperLinks = styled.div`
  ${({ theme, selected }) => css`
    padding:${theme.spacing.xsmall} ${theme.spacing.medium};

    display: flex;
    justify-content: space-between;

    border-bottom: 0.1rem solid ${theme.colors.stroke.secondary};

    div {

      display: flex;
      flex-direction: column;
      gap: 1rem;

      cursor: pointer;


      button {
        background: transparent;
        border: 0;
        cursor: pointer;

        transition: transform 0.4s ease;
        &:hover {
          transform: scale(1.2);
        }

        svg{ transition: opacity 0.4s ease;
          z-index: 9999;
          &:hover {
            opacity: 0.6;
          }

        }
        svg {
          color: ${theme.colors.icons.blue};

        }
        > svg {
          color: ${theme.colors.icons.red};

          }
        }
      }
    }

    &:hover {
      background: ${theme.colors.background.selectBg};
    }

    ${!!selected && WrapperLinksModifiers.selected(theme)}
  `}
`;
export const ShortenedLink = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
    h1 {
      color: ${theme.colors.text.secondary};
      font-size: ${theme.font.size.small};
    }
  `}
`;

export const NOrFoundUrl = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.text.primary};
    font-size: ${theme.font.size.large};

    text-align: center;

    margin-top: 6rem;

    transform: rotate(90deg);
  `}
`;
export const RealLink = styled(ShortenedLink)`
  ${({ theme }) => css`
    margin-top: ${theme.spacing.xsmall};
    padding-bottom: ${theme.spacing.medium};

    h1 {
      color: ${theme.colors.text.primary};
      font-size: ${theme.font.size.xmall};
    }

    button {
      svg {
        color: ${theme.colors.icons.blue};
        transition: opacity 0.4s ease;

        &:hover {
          opacity: 0.6;
        }
      }
    }
  `}
`;

export const HeaderJumboDetails = styled(HeaderJumbo)``;
export const Date = styled.div`
  ${({ theme }) => css`
    font-size: ${theme.font.size.small};
    font-weight: ${theme.font.normal};
    span {
      color: ${theme.colors.text.gray};
    }
    p {
      color: ${theme.colors.text.primary};
    }
  `}
`;

export const WrapperLinkDetails = styled.div`
  ${({ theme }) => css`
    margin-top: ${theme.spacing.medium};
  `}
`;
export const Icons = styled.div`
  ${({ theme }) => css`

    display: flex;

    align-items: center;
    justify-content: center;
    gap: 1rem;

    button {
        background: transparent;
        border: 0;
        cursor: pointer;

        transition: transform 0.4s ease;
        &:hover {
          transform: scale(1.2);
        }
        svg{

          transition: opacity 0.4s ease;
          z-index: 9999;
          &:hover {
            opacity: 0.6;
          }
        }
        svg {
          color: ${theme.colors.icons.blue};
        }
        > svg {
          color: ${theme.colors.icons.red};

        }
  `}
`;
export const ShortenedLinkDetail = styled(ShortenedLink)`
  ${({ theme }) => css`
    display: flex;
    flex-direction: row;

    justify-content: space-between;
    align-items: center;
    h1 {
      font-size: ${theme.font.size.xlarge};
      color: ${theme.colors.text.primary};
      font-weight: ${theme.font.normal};
    }
  `}
`;
export const RealLinkDetail = styled(RealLink)`
  ${({ theme }) => css`
    h1 {
      font-size: ${theme.font.size.large};
      color: ${theme.colors.text.secondary};
      font-weight: ${theme.font.normal};
    }

    p {
      margin-top: ${theme.spacing.xlarge};
      font-size: ${theme.font.size.medium};
      color: ${theme.colors.text.secondary};
      font-weight: ${theme.font.bold};
      span {
        color: ${theme.colors.text.primary};
      }
    }
    div {
      width: 100%;
      display: flex;
      justify-content: space-between;
      flex-direction: row;
      p {
        margin-top: 1rem;
        font-weight: ${theme.font.normal};
        color: ${theme.colors.text.gray};
      }
    }
    border-bottom: 0.1rem solid ${theme.colors.stroke.secondary};

    display: flex;
    flex-direction: column;
    align-items: flex-start;
  `}
`;
export const ClickStats = styled.div`
  ${({ theme }) => css`
    margin-top: ${theme.spacing.large};

    color: ${theme.colors.text.primary};
    width: 4.6rem;

    div {
      display: flex;
      align-items: center;
      justify-content: space-between;
      font-weight: ${theme.font.normal};
      h1 {
        font-size: ${theme.font.size.large};
        font-weight: ${theme.font.normal};
      }

      p {
        font-size: ${theme.font.size.small};
        font-weight: ${theme.font.normal};
        color: ${theme.colors.text.gray};
      }
    }
  `}
`;

export const LoadingJumbo = styled.div`
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

export const QrCodeBox = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    p {
      width: 100%;
      margin-top: ${theme.spacing.xlarge};
      font-size: ${theme.font.size.medium};
      color: ${theme.colors.text.secondary};
      font-weight: ${theme.font.bold};
      border-bottom: 0.1rem solid ${theme.colors.stroke.secondary};

      padding-bottom: ${theme.spacing.medium};
    }
    span {
      width: 100%;
      margin-top: ${theme.spacing.xsmall};
      font-size: ${theme.font.size.xmall};
      color: ${theme.colors.text.secondary};
      font-family: 'Roboto', sans-serif;
      font-weight: ${theme.font.normal};
    }

    svg {
      margin-top: 2rem;

      transition: transform 0.4s ease;
      &:hover {
        transform: scale(1.2);
      }
    }
  `}
`;
