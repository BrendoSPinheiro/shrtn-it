import { useState } from 'react';

import { useHistory } from 'react-router-dom';

import * as S from './styles';

import Title from '../../components/Title';
import InputForm from '../../components/InputForm';
import Button from '../../components/Button';
import LayoutAuthenticate from '../../components/LayoutAuthenticate';

import { Link } from 'react-router-dom';

import { sessionAuth } from '../../services/api';

import useUser from '../../utils/useUser';

import content from './content';

import { toast } from 'react-toastify';

const Login = () => {
  const [formValues, setFormValues] = useState({
    email: '',
    password: '',
  });

  const [loadingButton, setLoadingButton] = useState(false);

  const history = useHistory();

  const { setUser } = useUser();

  const handleSubmitForm = async (event) => {
    event.preventDefault();

    setLoadingButton(true);

    const { email, password } = formValues;

    try {
      const data = await sessionAuth(email, password);

      setUser(data);
      toast.success('Seja bem vindo!', {
        autoClose: 3000,
      });

      history.push('/dashboard');
    } catch (e) {
      setLoadingButton(false);
      toast.error('Email ou senha inválidos, tente novamente!');
    }
  };

  return (
    <S.Wrapper>
      <LayoutAuthenticate>
        <S.SectionForm>
          <form onSubmit={handleSubmitForm}>
            <S.AlternativeMobile>
              <Title customClass="title-login">Seu Link curto e seguro</Title>
            </S.AlternativeMobile>
            <Title color="purple" customClass="title-form-login">
              Login
            </Title>
            {content.map(
              ({
                id,
                children,
                type,
                icon,
                alternativeText,
                placeholder,
                nameState,
              }) => (
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
                  placeholder={placeholder}
                  value={formValues[nameState]}
                  onChange={(event) =>
                    setFormValues({
                      ...formValues,
                      [nameState]: event.target.value,
                    })
                  }
                >
                  {children}
                </InputForm>
              )
            )}
            <Button fullWidth loading>
              {loadingButton ? <div className="loading"></div> : 'Entrar'}
            </Button>
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
