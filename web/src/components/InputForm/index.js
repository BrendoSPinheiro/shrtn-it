import * as S from './styles';

import { Link } from 'react-router-dom';
const InputForm = ({
  children,
  type,
  icon,
  alternativeText = null,
  placeholder,
}) => {
  return (
    <S.Wrapper>
      <S.Name>
        {children}
        {!!alternativeText && (
          <S.AlternativeText>
            <Link to={alternativeText.url}>{alternativeText.name}</Link>
          </S.AlternativeText>
        )}
      </S.Name>
      <S.InputLabel>
        {icon} <S.Input type={type} placeholder={placeholder} />
      </S.InputLabel>
    </S.Wrapper>
  );
};

export default InputForm;
