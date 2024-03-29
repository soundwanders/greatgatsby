import styled from 'styled-components';

const LightBG = `url(
  "data:image/svg+xml,%3Csvg width='84' height='48' viewBox='0 0 84 48' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h12v6H0V0zm28 8h12v6H28V8zm14-8h12v6H42V0zm14 0h12v6H56V0zm0 8h12v6H56V8zM42 8h12v6H42V8zm0 16h12v6H42v-6zm14-8h12v6H56v-6zm14 0h12v6H70v-6zm0-16h12v6H70V0zM28 32h12v6H28v-6zM14 16h12v6H14v-6zM0 24h12v6H0v-6zm0 8h12v6H0v-6zm14 0h12v6H14v-6zm14 8h12v6H28v-6zm-14 0h12v6H14v-6zm28 0h12v6H42v-6zm14-8h12v6H56v-6zm0-8h12v6H56v-6zm14 8h12v6H70v-6zm0 8h12v6H70v-6zM14 24h12v6H14v-6zm14-8h12v6H28v-6zM14 8h12v6H14V8zM0 8h12v6H0V8z' fill='%23ff4f4f' fill-opacity='0.02' fill-rule='evenodd'/%3E%3C/svg%3E"
);`

const DarkBG = `url(
  "data:image/svg+xml,%3Csvg width='84' height='48' viewBox='0 0 84 48' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h12v6H0V0zm28 8h12v6H28V8zm14-8h12v6H42V0zm14 0h12v6H56V0zm0 8h12v6H56V8zM42 8h12v6H42V8zm0 16h12v6H42v-6zm14-8h12v6H56v-6zm14 0h12v6H70v-6zm0-16h12v6H70V0zM28 32h12v6H28v-6zM14 16h12v6H14v-6zM0 24h12v6H0v-6zm0 8h12v6H0v-6zm14 0h12v6H14v-6zm14 8h12v6H28v-6zm-14 0h12v6H14v-6zm28 0h12v6H42v-6zm14-8h12v6H56v-6zm0-8h12v6H56v-6zm14 8h12v6H70v-6zm0 8h12v6H70v-6zM14 24h12v6H14v-6zm14-8h12v6H28v-6zM14 8h12v6H14V8zM0 8h12v6H0V8z' fill='%23b9a9d4' fill-opacity='0.12' fill-rule='evenodd'/%3E%3C/svg%3E"
);`

export const SkillsContainer = styled.div`
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0;
  padding: 4rem 0 1rem 0;
  width: 100%;
  max-width: 100%;
  overflow-x: hidden;
  background-color: ${({ theme }) => (theme === 'light' ? '#f5f4ff' : '#a091b6')};
  background-image: ${({ theme }) => (theme === 'light' ? LightBG : DarkBG )};
  pointer-events: none;
  user-select: none;
  z-index: -2;
`;

export const Grid = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: 8fr;
  gap: 3rem 0.5rem;
  justify-content: center;
  margin: 0;
  @media (max-width: 940px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: 600px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const Logo = styled.img`
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: flex;
  justify-content: center;
  align-content: center;
  width: 25%;
  margin: 0 auto;
  @media (min-width: 560px) and (max-width: 940px) {
    width: 16%;
  }
`;

export const ReactLogo = styled.img`
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: flex;
  justify-content: center;
  align-content: center;
  width: 31%;
  margin: 0 auto;
  @media (min-width: 560px) and (max-width: 940px) {
    width: 23%;
  }
`;

export const ScaledLogo = styled.img`
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: flex;
  justify-content: center;
  align-content: center;
  width: 27%;
  margin: 0 auto;
  @media (min-width: 560px) and (max-width: 940px) {
    width: 19%;
  }
`;
