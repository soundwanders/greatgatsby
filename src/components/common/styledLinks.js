import styled from "styled-components"
import { Link } from "gatsby"

export const StyledLink = styled(props => <Link {...props}/>)`
  color: maroon;
  text-decoration: none;
  padding: 0 2rem;
`