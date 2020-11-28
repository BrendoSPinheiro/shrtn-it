import * as S from './styles';

const Button = ({
  children,
  icon,
  size = 'medium',
  fullWidth = false,
  onClick,
}) => (
  <S.Wrapper
    size={size}
    fullWidth={fullWidth}
    hasIcon={!!icon}
    onClick={onClick}
  >
    {!!icon && icon}
    {!!children && <span>{children}</span>}
  </S.Wrapper>
);

export default Button;
