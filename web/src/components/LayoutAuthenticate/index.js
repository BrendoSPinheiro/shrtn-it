import * as S from './styles';
import demonstration from '../../assets/images/demonstration.svg';

import Title from '../Title';

import useTheme from '../../utils/useTheme';

const LayoutAuthenticate = ({ children }) => {
  const { theme } = useTheme();
  return (
    <>
      {children}
      <S.SectionDemonstration>
        <Title
          weight
          customClass="title-login"
          color={theme.name === 'dark' ? 'purple' : 'white'}
        >
          Seu Link curto e seguro
        </Title>
        <img src={demonstration} alt="" />
      </S.SectionDemonstration>
    </>
  );
};

export default LayoutAuthenticate;
