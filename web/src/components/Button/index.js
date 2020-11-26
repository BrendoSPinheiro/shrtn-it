import * as S from './styles';

const Button = ({ children, icon, size = 'medium', fullWidth = false }) => (
  <S.Wrapper size={size} fullWidth={fullWidth} hasIcon={!!icon}>
    {!!icon && icon}
    {!!children && <span>{children}</span>}
  </S.Wrapper>
);

export default Button;
