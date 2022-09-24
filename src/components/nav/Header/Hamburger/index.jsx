import React, { useContext } from 'react';
import { ThemeContext } from 'providers/ThemeProvider';
import { Wrapper, Bar } from './style';

const Hamburger = ({ sidebar, toggle }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <Wrapper sidebar={sidebar} onClick={() => toggle(!sidebar)} theme={theme}>
      <Bar top sidebar={sidebar} theme={theme} />
      <Bar mid sidebar={sidebar} theme={theme} />
      <Bar bottom sidebar={sidebar} theme={theme} />
    </Wrapper>
  );
};

export default Hamburger;
