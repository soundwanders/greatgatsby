import React, {useContext} from 'react';
import NavLinks from '../NavLinks';
import { ThemeContext } from 'providers/ThemeProvider';
import { Wrapper } from './style';

export const Sidebar = ({ sidebar, toggle }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <Wrapper active={sidebar} onClick={toggle} theme={theme}>
      <NavLinks />
    </Wrapper>
  );
};

export default Sidebar;
