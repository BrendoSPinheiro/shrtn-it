import * as S from './styles';

import Title from '../../components/Title';
import InputForm from '../../components/InputForm';
import Button from '../../components/Button';
import LayoutAuthenticate from '../../components/LayoutAuthenticate';

import { Link } from 'react-router-dom';

import content from './content';

const Login = () => {
  return (
    <S.Wrapper>
      <LayoutAuthenticate>
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
              Não tem conta? <Link to="/register">criar conta</Link>
            </S.Alternative>
          </form>
        </S.SectionForm>
      </LayoutAuthenticate>
    </S.Wrapper>
  );
};

export default Login;
