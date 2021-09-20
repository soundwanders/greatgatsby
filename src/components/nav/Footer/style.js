import styled from 'styled-components';

export const Foot = styled.footer`
  display: block;
  bottom: 0;
  margin: 0 auto;
  width: 100%;
  padding: 0;
  textalign: center;
  color: #222;
  background-color: #ffdade;
  background-image: url("data:image/svg+xml,%3Csvg width='84' height='48' viewBox='0 0 84 48' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h12v6H0V0zm28 8h12v6H28V8zm14-8h12v6H42V0zm14 0h12v6H56V0zm0 8h12v6H56V8zM42 8h12v6H42V8zm0 16h12v6H42v-6zm14-8h12v6H56v-6zm14 0h12v6H70v-6zm0-16h12v6H70V0zM28 32h12v6H28v-6zM14 16h12v6H14v-6zM0 24h12v6H0v-6zm0 8h12v6H0v-6zm14 0h12v6H14v-6zm14 8h12v6H28v-6zm-14 0h12v6H14v-6zm28 0h12v6H42v-6zm14-8h12v6H56v-6zm0-8h12v6H56v-6zm14 8h12v6H70v-6zm0 8h12v6H70v-6zM14 24h12v6H14v-6zm14-8h12v6H28v-6zM14 8h12v6H14V8zM0 8h12v6H0V8z' fill='%23ff4f4f' fill-opacity='0.02' fill-rule='evenodd'/%3E%3C/svg%3E");
  z-index: -2;
  overflow: hidden;
`;

export const Flex = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  width: 100%;
  padding: 1rem 0;
  white-space: nowrap;

  @media (max-width: 960px) {
    flex-direction: column;
    text-align: center;
    align-items: center;
    flex-gap: 1rem;
  }
`;

export const FooterLinks = styled.div`
  display: inherit;
  width: 55%;
  align-items: center;
  padding-top: 2rem;
  z-index: 2;
  @media (max-width: 968px) {
    padding-top: 1.5rem;
  }

  a {
    margin: 0 0.5rem;
    img {
      margin: 0 2.5rem 0 1.5rem;
    }
    &:first-child,
    &:last-child {
      margin: 0;
    }
  }
`;

export const Copyright = styled.div`
  display: inherit;
  font-family: 'Roboto', Ubuntu, Helvetica, sans-serif;
  font-size: 1.1rem;
  padding-bottom: 0.5rem;
  padding-left: 1rem;
  margin: 0 auto;
  overflow: hidden;

  @media (max-width: 968px) {
    padding-left: 0;
    font-size: 0.9rem;
  }
`;
