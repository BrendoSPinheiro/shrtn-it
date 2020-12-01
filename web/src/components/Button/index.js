import * as S from './styles';

const Button = ({
  children,
  icon,
  size = 'medium',
  fullWidth = false,
  loading = false,
  onClick,
}) => (
  <S.Wrapper
    size={size}
    fullWidth={fullWidth}
    hasIcon={!!icon}
    onClick={onClick}
    hasLoading={!!loading}
  >
    {!!icon && icon}
    {!!children && <span>{children}</span>}
  </S.Wrapper>
);

export default Button;
