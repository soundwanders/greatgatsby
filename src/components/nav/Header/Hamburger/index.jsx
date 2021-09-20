import React from 'react';
import { Wrapper, Bar } from './style';

const Hamburger = ({ sidebar, toggle }) => {
  return (
    <Wrapper sidebar={sidebar} onClick={() => toggle(!sidebar)}>
      <Bar top sidebar={sidebar} />
      <Bar mid sidebar={sidebar} />
      <Bar bottom sidebar={sidebar} />
    </Wrapper>
  );
};

export default Hamburger;
