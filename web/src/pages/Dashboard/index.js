import { useState } from 'react';

import Header from '../../components/Header';
import Title from '../../components/Title';
import Button from '../../components/Button';
import Jumbotron from '../../components/Jumbotron';
import ModalCreateUrl from '../../components/ModalCreateUrl';

import {
  FiPlus as PlusIcon,
  FiSearch as SearchIcon,
  FiTrash2 as TrashIcon,
  FiExternalLink as ExternalLinkIcon,
  FiBarChart2 as BarCharIcon,
} from 'react-icons/fi';

import useTheme from '../../utils/useTheme';

import * as S from './styles';

const Dashboard = () => {
  const { theme } = useTheme();

  const [hideModal, setHideModal] = useState(true);
  return (
    <S.Wrapper>
      <Header />
      <S.SectionContent>
        <S.Header>
          <Title weight color={theme.name === 'light' ? 'purple' : 'white'}>
            Dashboard
          </Title>
          <Button
            size="small"
            icon={<PlusIcon size={24} />}
            onClick={() => setHideModal(!hideModal)}
          />
        </S.Header>
        <S.Main>
          <Jumbotron>
            <S.HeaderJumbo>
              <h1>Seus Links</h1>
              <S.Search>
                <S.InputSearch type="text" placeholder="Pesquisar..." />
                <Button size="small" icon={<SearchIcon size={24} />} />
              </S.Search>
            </S.HeaderJumbo>

            <S.WrapperLinks>
              <div>
                <S.ShortenedLink>
                  <h1>site1.com.br</h1>

                  <button>
                    <TrashIcon size={16} />
                  </button>
                </S.ShortenedLink>

                <S.RealLink>
                  <h1>shrt.si15.com</h1>

                  <button>
                    <ExternalLinkIcon size={16} />
                  </button>
                </S.RealLink>
              </div>
            </S.WrapperLinks>
          </Jumbotron>

          <Jumbotron>
            <S.HeaderJumboDetails>
              <h1>Detalhes</h1>

              <S.Date>
                <span>Criado em:</span>

                <p>29/10/2020</p>
              </S.Date>
            </S.HeaderJumboDetails>

            <S.WrapperLinkDetails>
              <S.ShortenedLinkDetail>
                <h1>shrt.si19.com</h1>

                <S.Icons>
                  <button>
                    <TrashIcon size={16} />
                  </button>

                  <button>
                    <ExternalLinkIcon size={16} />
                  </button>
                </S.Icons>
              </S.ShortenedLinkDetail>

              <S.RealLinkDetail>
                <h1>site2.com.br</h1>

                <p>Estatísticas</p>
              </S.RealLinkDetail>

              <S.ClickStats>
                <div>
                  <BarCharIcon size={24} /> <h1>10</h1>
                </div>

                <div>
                  <p>Clicks</p>
                </div>
              </S.ClickStats>
            </S.WrapperLinkDetails>
          </Jumbotron>
        </S.Main>
      </S.SectionContent>

      <ModalCreateUrl
        onClick={() => setHideModal(!hideModal)}
        hideModal={hideModal}
      />
    </S.Wrapper>
  );
};

export default Dashboard;
