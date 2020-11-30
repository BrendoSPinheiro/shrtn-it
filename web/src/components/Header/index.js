import * as S from './styles';
import ToggleTheme from '../../components/ToggleTheme';

import { useHistory } from 'react-router-dom';

import { FiLogOut as LogOutIcon } from 'react-icons/fi';

const Header = () => {
  const history = useHistory();

  const handleLeftDashboard = () => {
    localStorage.removeItem('@shrtn.it:user');

    history.push('/login');
  };
  return (
    <S.Wrapper>
      <S.Header>
        <ToggleTheme />
        <S.Button onClick={handleLeftDashboard}>
          <LogOutIcon size={24} />
        </S.Button>
      </S.Header>
      <S.BorderBottom />
    </S.Wrapper>
  );
};

export default Header;
