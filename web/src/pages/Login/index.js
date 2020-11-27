import * as S from './styles';

import demonstration from '../../assets/images/demonstration.svg';

import Title from '../../components/Title';

const Login = () => {
  return (
    <S.Wrapper>
      <S.SectionForm>wdwd</S.SectionForm>
      <S.SectionDemonstration>
        <Title weight>Seu Link curto e seguro</Title>
        <img src={demonstration} alt="" />{' '}
      </S.SectionDemonstration>
    </S.Wrapper>
  );
};

export default Login;
