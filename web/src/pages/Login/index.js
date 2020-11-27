import * as S from './styles';

import demonstration from '../../assets/images/demonstration.svg';

import Title from '../../components/Title';
import InputForm from '../../components/InputForm';
import Button from '../../components/Button';

import useTheme from '../../utils/useTheme';

import content from './content';

const Login = () => {
  const { theme } = useTheme();
  return (
    <S.Wrapper>
      <S.SectionForm>
        <form>
          <S.AlternativeMobile>
            <Title customClass="title-login">Seu Link curto e seguro</Title>
          </S.AlternativeMobile>
          <Title color="purple" customClass="title-form-login">
            Login
          </Title>
          {content.map(({ id, children, type, icon, alternativeText }) => (
            <InputForm
              key={id}
              icon={icon}
              type={type}
              alternativeText={
                !!alternativeText && {
                  url: alternativeText.url,
                  name: alternativeText.name,
                }
              }
            >
              {children}
            </InputForm>
          ))}
          <Button sie="medium">Entrar</Button>
          <S.Alternative>
            Não tem conta? <a href="#">criar conta</a>
          </S.Alternative>
        </form>
      </S.SectionForm>
      <S.SectionDemonstration>
        <Title
          weight
          customClass="title-login"
          color={theme.name === 'dark' ? 'purple' : 'white'}
        >
          Seu Link curto e seguro
        </Title>
        <img src={demonstration} alt="" />
      </S.SectionDemonstration>
    </S.Wrapper>
  );
};

export default Login;
