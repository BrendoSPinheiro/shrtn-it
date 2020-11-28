import Header from '../../components/Header';
import Title from '../../components/Title';
import Button from '../../components/Button';
import Jumbotron from '../../components/Jumbotron';

import { FiPlus as PlusIcon, FiSearch as SearchIcon } from 'react-icons/fi';

import useTheme from '../../utils/useTheme';

import * as S from './styles';

const Dashboard = () => {
  const { theme } = useTheme();
  return (
    <S.Wrapper>
      <Header />
      <S.SectionContent>
        <S.Header>
          <Title weight color={theme.name === 'light' ? 'purple' : 'white'}>
            Dashboard
          </Title>
          <Button size="small" icon={<PlusIcon size={24} />} />
        </S.Header>
        <S.Main>
          <Jumbotron>
            <S.HeaderJumbo>
              <h1>Seus Links</h1>
              <S.Search>
                <S.InputSearch
                  type="text"
                  name=""
                  id=""
                  placeholder="Pesquisar..."
                />
                <Button size="small" icon={<SearchIcon size={24} />} />
              </S.Search>
            </S.HeaderJumbo>
          </Jumbotron>
          <Jumbotron />
        </S.Main>
      </S.SectionContent>
    </S.Wrapper>
  );
};

export default Dashboard;
