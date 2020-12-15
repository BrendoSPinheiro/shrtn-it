import styled, { css } from 'styled-components';

const wrapperModifiers = {
  hideModal: () => css`
    display: none;
  `,
};
export const Wrapper = styled.div`
  ${({ hideModal }) => css`
    width: 100%;
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
    min-height: 40.16rem;

    border-radius: ${theme.border.bgRadius};
    padding: ${theme.spacing.xlarge} 5rem;

    box-shadow: 10px 129px 62px rgba(0, 0, 0, 0.027476),
      10px 44.6328px 20.5416px rgba(0, 0, 0, 0.0403763);

    z-index: 999;
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

export const WrapperMoreOptions = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;

    margin-top: ${theme.spacing.medium};
  `}
`;

export const MoreOptions = styled.div`
  ${({ theme, translate }) => css`
    color: ${theme.colors.text.secondary};

    margin-bottom: ${theme.spacing.medium};
    summary {
      display: flex;
      align-items: center;
      outline: 0;
      cursor: pointer;
      &::-webkit-details-marker {
        display: none;
      }

      svg {
        transition: transform 0.4s ease;
        transform: rotate(${!!translate && '90deg'});
        margin-right: ${theme.spacing.xsmall};
      }
    }
  `}
`;

export const Options = styled.div`
  ${({ isShowOptions }) => css`
    transition: 0.3s ease-in-out;
    opacity: ${isShowOptions ? '1' : '0'};
    pointer-events: ${isShowOptions ? 'all' : 'none'};
    height: ${isShowOptions ? '100%' : '0'};
  `}
`;

export const InputRadio = styled.div`
  ${({ theme }) => css`
    label {
      margin-left: ${theme.spacing.xsmall};
    }
  `}
`;

export const WrapperDate = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;

    .basic-select {
      margin-top: 20rem;
    }
    div {
      margin-bottom: ${theme.spacing.xsmall};

      span {
        color: ${theme.colors.text.secondary};
        font-size: ${theme.font.size.small};
        margin-right: ${theme.spacing.xsmall};
      }
    }
  `}
`;

export const WrapperHour = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    flex-direction: column;

    span {
      color: ${theme.colors.text.secondary};
      font-size: ${theme.font.size.small};
      margin-top: ${theme.spacing.small};
      margin-right: ${theme.spacing.xsmall};
    }
  `}
`;
