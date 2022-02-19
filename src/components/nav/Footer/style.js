import styled from 'styled-components';

export const Foot = styled.footer`
  display: block;
  bottom: 0;
  margin: 0 auto;
  width: 100%;
  padding: 0;
  color: #222;
  background-color: #f5f4ff;
  background-image: url("data:image/svg+xml,%3Csvg width='84' height='48' viewBox='0 0 84 48' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h12v6H0V0zm28 8h12v6H28V8zm14-8h12v6H42V0zm14 0h12v6H56V0zm0 8h12v6H56V8zM42 8h12v6H42V8zm0 16h12v6H42v-6zm14-8h12v6H56v-6zm14 0h12v6H70v-6zm0-16h12v6H70V0zM28 32h12v6H28v-6zM14 16h12v6H14v-6zM0 24h12v6H0v-6zm0 8h12v6H0v-6zm14 0h12v6H14v-6zm14 8h12v6H28v-6zm-14 0h12v6H14v-6zm28 0h12v6H42v-6zm14-8h12v6H56v-6zm0-8h12v6H56v-6zm14 8h12v6H70v-6zm0 8h12v6H70v-6zM14 24h12v6H14v-6zm14-8h12v6H28v-6zM14 8h12v6H14V8zM0 8h12v6H0V8z' fill='%23ff4f4f' fill-opacity='0.02' fill-rule='evenodd'/%3E%3C/svg%3E");
  overflow: hidden;
  z-index: -2;
`;

export const Flex = styled.div`
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  width: 100%;
  padding: 1rem 0;
  white-space: nowrap;

  @media (max-width: 940px) {
    flex-direction: column;
    text-align: center;
    align-items: center;
    flex-gap: 1rem;
  }
`;

export const Copyright = styled.div`
  display: inherit;
  padding: 2.5rem 0 0.5rem 0;
  margin: 0 auto;
  overflow: hidden;
  font-family: 'Filson Soft', 'Roboto', Helvetica, sans-serif;
  font-size: 0.85vmax;
  letter-spacing: 0.5px;
  @media (max-width: 940px) {
    padding: 1rem 0;
    font-size: 0.75rem;
  }
`;
