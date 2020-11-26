import InputForm from '../InputForm';
import Button from '../Button';
import { FiX as XIcon } from 'react-icons/fi';
import * as S from './styles';

import content from './content';

const ModalCreateUrl = ({ hideModal = true, onClick }) => (
  <S.Wrapper hideModal={hideModal}>
    <S.Modal>
      <S.Header>
        <S.Title>Criar uma URL</S.Title>
        <S.Button onClick={onClick}>
          <XIcon size={24} />
        </S.Button>
      </S.Header>

      <S.Form>
        {content.map(({ id, type, children, icon }) => (
          <InputForm key={id} type={type} icon={icon}>
            {children}
          </InputForm>
        ))}

        <Button size="medium" fullWidth>
          Confirmar
        </Button>
      </S.Form>
    </S.Modal>
  </S.Wrapper>
);

export default ModalCreateUrl;
