import * as S from './styles';
import ToggleTheme from '../../components/ToggleTheme';

import { FiLogOut as LogOutIcon } from 'react-icons/fi';

const Header = () => (
  <S.Wrapper>
    <S.Header>
      <ToggleTheme />
      <S.Button>
        <LogOutIcon size={40} />
      </S.Button>
    </S.Header>
    <S.BorderBottom />
  </S.Wrapper>
);

export default Header;
