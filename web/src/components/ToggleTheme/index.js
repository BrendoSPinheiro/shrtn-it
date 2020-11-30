import { useState } from 'react';
import Switch from 'react-switch';

import useTheme from '../../utils/useTheme';

import { FiSun as SunIcon, FiMoon as MoonIcon } from 'react-icons/fi';

import * as S from './styles';

import Dark from '../../styles/themes/dark';
import Light from '../../styles/themes/light';

const ToggleTheme = () => {
  const { theme, setTheme } = useTheme();

  const [checked, setChecked] = useState(theme.name === 'dark');

  const handleToggleTheme = () => {
    setChecked(!checked);

    theme.name === 'dark' ? setTheme(Light) : setTheme(Dark);
  };
  return (
    <S.Wrapper>
      <SunIcon size={30} color="#FAFAFA" />
      <Switch
        uncheckedIcon={false}
        checkedIcon={false}
        checked={checked}
        onColor="#7161EF"
        offColor="#3E3E3E"
        onHandleColor="#FFF"
        offHandleColor="#FFF"
        boxShadow="none"
        className="react-switch"
        width={46}
        height={18}
        handleDiameter={24}
        onChange={handleToggleTheme}
      />
      <MoonIcon size={30} color="#FAFAFA" />
    </S.Wrapper>
  );
};

export default ToggleTheme;
