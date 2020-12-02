import { useState, useEffect } from 'react';

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

import { toast } from 'react-toastify';

import useTheme from '../../utils/useTheme';
import { listUrls, deleteUrl } from '../../services/api';

import useUser from '../../utils/useUser';

import { createUrl } from '../../services/api';

import * as S from './styles';

const Dashboard = () => {
  const { theme } = useTheme();

  const [hideModal, setHideModal] = useState(true);

  const [urls, setUrls] = useState([
    {
      id: 0,
      title: '',
      short_url: '',
    },
  ]);

  const [stateModal, setStateModal] = useState({
    title: '',
    full_url: '',
  });

  const [stateButtonModal, setStateButtonModal] = useState(false);

  const { user } = useUser();

  useEffect(() => {
    (async () => {
      const data = await listUrls(user.token);

      setUrls(data);
    })();
  }, [user, setUrls]);

  const handleDeleteUrl = async (id) => {
    const newArray = urls.filter((url) => id !== url.id);
    setUrls(newArray);

    await deleteUrl(id, user.token);

    toast.dark('Url deletada com sucesso!', {
      autoClose: 2000,
    });
  };

  const handleFormModalSubmit = async (event) => {
    event.preventDefault();

    const { title, full_url } = stateModal;

    setStateButtonModal(true);

    try {
      const [data] = await createUrl(user.token, { title, full_url });

      const newArray = urls;

      newArray.push(data);

      toast.dark('URL criada com sucesso!');
      setUrls(newArray);

      setHideModal(true);
      setStateButtonModal(false);
    } catch (error) {
      toast.error('Erro ao criar a url');
      setStateButtonModal(false);
    }
  };
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

            {urls.map(({ id, title, short_url }) => (
              <S.WrapperLinks key={id}>
                <div>
                  <S.ShortenedLink>
                    <h1>{title}</h1>

                    <button>
                      <TrashIcon
                        size={16}
                        onClick={() => handleDeleteUrl(id)}
                      />
                    </button>
                  </S.ShortenedLink>

                  <S.RealLink>
                    <h1>{short_url}</h1>

                    <button>
                      <a target="_blank" rel="noreferrer" href={short_url}>
                        <ExternalLinkIcon size={16} />
                      </a>
                    </button>
                  </S.RealLink>
                </div>
              </S.WrapperLinks>
            ))}
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
        state={stateModal}
        setState={setStateModal}
        handleFormModal={handleFormModalSubmit}
        stateButton={stateButtonModal}
      />
    </S.Wrapper>
  );
};

export default Dashboard;
