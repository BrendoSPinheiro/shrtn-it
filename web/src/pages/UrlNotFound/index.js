import * as S from './styles';
import { Link } from 'react-router-dom';

import {
  FiAlertTriangle as AlertTriangleIcon,
  FiArrowLeft as ArrowLeftIcon,
} from 'react-icons/fi';

const UrlNotFound = () => (
  <S.Wrapper>
    <AlertTriangleIcon size={40} />
    <h1>
      Esse link que você está tentando acessar{' '}
      <span> não existe ou está indisponível!</span>
    </h1>

    <Link to="/login">
      {' '}
      <ArrowLeftIcon />
      Ir para login
    </Link>
  </S.Wrapper>
);

export default UrlNotFound;
