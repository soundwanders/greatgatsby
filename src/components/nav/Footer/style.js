import styled from "styled-components";

export const Foot = styled.footer`
  display: block;
  bottom: 0;
  margin: 0 auto;
  width: 100%;
  maxWidth: 100%;
  padding: 0;
  textalign: center;
  margintop: 1rem;
  background: pink;
  color: #000;
  overflow: hidden;
`;

export const Flex = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;

  @media (max-width: 680px) {
    flex-direction: column;
    text-align: center;
    align-items: center;
  }
`;

export const FooterLinks = styled.div`
  display: flex;
  align-items: center;
  a {
    margin: 0 0.5rem;
    img {
      margin: 0 1rem;
    }
    &:first-child,
    &:last-child {
      margin: 0;
    }
  }
`;
