import styled from "styled-components";

export const Foot = styled.footer`
  display: block;
  bottom: 0;
  margin: 0 auto;
  width: 100%;
  maxwidth: 100%;
  padding: 0;
  textalign: center;
  background: pink;
  color: #222;
  overflow: hidden;
`;

export const Flex = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  padding: 1.5rem 0;
  white-space: nowrap;

  @media (max-width: 680px) {
    flex-direction: column;
    text-align: center;
    align-items: center;
    flex-gap: 1rem;
  }
`;

export const FooterLinks = styled.div`
  display: flex;
  align-items: center;
  @media (max-width: 968px) {
    padding-top: 1.5rem;
  }

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

export const Copyright = styled.span`
  font-family: monospace, Lucida-Sans, Lucida-Grande, sans-serif;
  padding-left: 2rem;

  @media (max-width: 968px) {
    padding-left: 0;
  }
`
