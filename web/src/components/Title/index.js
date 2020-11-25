import * as S from './styles';

const Title = ({ children, weight, color = 'white' }) => {
  return (
    <S.Wrapper color={color} weight={weight}>
      {!!children && <h1>{children}</h1>}
    </S.Wrapper>
  );
};

export default Title;
