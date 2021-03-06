import * as React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

export const StyledLink = styled(props => <Link {...props} />)`
  color: #008080;
  text-decoration: none;
  padding: 0 1rem;
`;
