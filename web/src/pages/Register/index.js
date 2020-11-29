import { useState } from 'react';

import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

import { createUser } from '../../services/api';

import { useHistory } from 'react-router-dom';

import LayoutAuthenticate from '../../components/LayoutAuthenticate';
import Title from '../../components/Title';
import InputForm from '../../components/InputForm';
import Button from '../../components/Button';

import * as S from './styles';

import content from './content';

const Register = () => {
  const [formValues, setFormValues] = useState({
    name: '',
    email: '',
    password: '',
  });

  const history = useHistory();

  const handleSubmitForm = async (event) => {
    event.preventDefault();

    try {
      const { name, email, password } = formValues;

      await createUser(name, email, password);

      toast.dark('Usuário criado com sucesso');

      history.push('/login');
    } catch (e) {
      return toast.error('Email já cadastrado, tente novamente!');
    }
  };
  return (
    <S.Wrapper>
      <LayoutAuthenticate>
        <S.SectionForm>
          <form onSubmit={handleSubmitForm}>
            <Title color="purple" customClass="title-form-login">
              Cadastrar
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
            <Button sie="medium">Entrar</Button>
            <S.Alternative>
              Já tem conta? <Link to="/login">login</Link>
            </S.Alternative>
          </form>
        </S.SectionForm>
      </LayoutAuthenticate>
    </S.Wrapper>
  );
};

export default Register;
