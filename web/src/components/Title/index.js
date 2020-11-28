import * as S from './styles';

const Title = ({ children, weight, color = 'white', customClass }) => {
  return (
    <S.Wrapper color={color} weight={weight} className={customClass}>
      {!!children && <h1>{children}</h1>}
    </S.Wrapper>
  );
};

export default Title;
