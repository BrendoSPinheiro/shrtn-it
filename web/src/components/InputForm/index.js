import * as S from './styles';
const InputForm = ({ children, type, icon, alternativeText = null }) => {
  return (
    <S.Wrapper>
      <S.Name>
        {children}
        {!!alternativeText && (
          <S.AlternativeText href={alternativeText.url}>
            {alternativeText.name}
          </S.AlternativeText>
        )}
      </S.Name>
      <S.InputLabel>
        {icon} <S.Input type={type} />
      </S.InputLabel>
    </S.Wrapper>
  );
};

export default InputForm;
