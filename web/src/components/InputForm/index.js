import * as S from './styles';
const InputForm = ({ children, type, icon }) => {
  return (
    <S.Wrapper>
      <S.Name>
        {children}
        <S.InputLabel>
          {icon} <S.Input type={type} />
        </S.InputLabel>
      </S.Name>
    </S.Wrapper>
  );
};

export default InputForm;
