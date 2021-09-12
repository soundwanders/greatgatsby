import styled from "styled-components";

export const Foot = styled.footer`
  display: block;
  bottom: 0;
  margin: 0 auto;
  width: 100%;
  maxwidth: 100%;
  padding: 0 auto;
  textalign: center;
  margintop: 1rem;
  background: #037fb7;
  color: #fff;
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
      margin: 0;
    }
    &:first-child,
    &:last-child {
      margin: 0;
    }
  }
`;
