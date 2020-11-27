import { useState } from 'react';
import * as S from './styles';

import ModalCreateUrl from '../../components/ModalCreateUrl';
import ToggleTheme from '../../components/ToggleTheme';

const Login = () => {
  const [hide, setHide] = useState(false);
  return (
    <S.Wrapper>
      <ModalCreateUrl hideModal={hide} onClick={() => setHide(!hide)} />
      <button onClick={() => setHide(!hide)}>CLIQUE MEEEE</button>
      <ToggleTheme />
    </S.Wrapper>
  );
};

export default Login;
