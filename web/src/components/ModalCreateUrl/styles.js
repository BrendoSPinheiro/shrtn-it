import styled, { css } from 'styled-components';

const wrapperModifiers = {
  hideModal: () => css`
    display: none;
  `,
};
export const Wrapper = styled.div`
  ${({ hideModal }) => css`
    width: 100vw;
    height: 100vh;
    position: absolute;
    top: 0;

    display: flex;
    align-items: center;
    justify-content: center;

    ${!!hideModal && wrapperModifiers.hideModal()};
  `}
`;

export const Modal = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.background.secondBg};
    border: 0.1rem solid ${theme.colors.stroke.primary};

    width: 100%;
    max-width: 55rem;
    min-width: 25rem;
    height: 40.16rem;

    border-radius: ${theme.border.bgRadius};
    padding: ${theme.spacing.xlarge} 5rem;

    box-shadow: 10px 129px 62px rgba(0, 0, 0, 0.027476),
      10px 44.6328px 20.5416px rgba(0, 0, 0, 0.0403763);
  `}
`;

export const Header = styled.header`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;

    padding-bottom: ${theme.spacing.large};
    margin-bottom: ${theme.spacing.medium};
    border-bottom: 0.1rem solid ${theme.colors.stroke.primary};
  `}
`;

export const Title = styled.h1`
  ${({ theme }) => css`
    font-size: ${theme.font.size.small};
    color: ${theme.colors.text.secondary};
  `}
`;

export const Button = styled.button`
  ${({ theme }) => css`
    background: transparent;
    border: 0;

    cursor: pointer;
    transition: opacity ease 0.2s;

    &:hover {
      opacity: 0.6;
    }
    svg {
      color: ${theme.colors.icons.red};
    }
  `}
`;

export const Form = styled.form``;
