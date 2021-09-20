import React from 'react';
import NavLinks from '../NavLinks';
import { Wrapper } from './style';

export const Sidebar = ({ sidebar, toggle }) => {
  return (
    <Wrapper active={sidebar} onClick={toggle}>
      <NavLinks />
    </Wrapper>
  );
};

export default Sidebar;
