import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  padding: 6rem 0 5rem 0;
  background-color: #f8f8f8;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 -60 1600 800'%3E%3Cg %3E%3Cpath fill='%23daddfb' d='M486 705.8c-109.3-21.8-223.4-32.2-335.3-19.4C99.5 692.1 49 703 0 719.8V800h843.8c-115.9-33.2-230.8-68.1-347.6-92.2C492.8 707.1 489.4 706.5 486 705.8z'/%3E%3Cpath fill='%23e3e5f8' d='M1600 0H0v719.8c49-16.8 99.5-27.8 150.7-33.5c111.9-12.7 226-2.4 335.3 19.4c3.4 0.7 6.8 1.4 10.2 2c116.8 24 231.7 59 347.6 92.2H1600V0z'/%3E%3Cpath fill='%23ecedf7' d='M478.4 581c3.2 0.8 6.4 1.7 9.5 2.5c196.2 52.5 388.7 133.5 593.5 176.6c174.2 36.6 349.5 29.2 518.6-10.2V0H0v574.9c52.3-17.6 106.5-27.7 161.1-30.9C268.4 537.4 375.7 554.2 478.4 581z'/%3E%3Cpath fill='%23f3f3f7' d='M0 0v429.4c55.6-18.4 113.5-27.3 171.4-27.7c102.8-0.8 203.2 22.7 299.3 54.5c3 1 5.9 2 8.9 3c183.6 62 365.7 146.1 562.4 192.1c186.7 43.7 376.3 34.4 557.9-12.6V0H0z'/%3E%3Cpath fill='%23F8F8F8' d='M181.8 259.4c98.2 6 191.9 35.2 281.3 72.1c2.8 1.1 5.5 2.3 8.3 3.4c171 71.6 342.7 158.5 531.3 207.7c198.8 51.8 403.4 40.8 597.3-14.8V0H0v283.2C59 263.6 120.6 255.7 181.8 259.4z'/%3E%3Cpath fill='%23f8f8f8' d='M1600 0H0v136.3c62.3-20.9 127.7-27.5 192.2-19.2c93.6 12.1 180.5 47.7 263.3 89.6c2.6 1.3 5.1 2.6 7.7 3.9c158.4 81.1 319.7 170.9 500.3 223.2c210.5 61 430.8 49 636.6-16.6V0z'/%3E%3Cpath fill='%23f8f8f8' d='M454.9 86.3C600.7 177 751.6 269.3 924.1 325c208.6 67.4 431.3 60.8 637.9-4.3c12.8-4.1 25.4-8.4 38.1-12.9V0H288.1c56 21.3 108.7 50.6 159.7 82C450.2 83.4 452.5 84.9 454.9 86.3z'/%3E%3Cpath fill='%23f8f8f8' d='M1600 0H498c118.1 85.8 243.5 164.5 386.8 216.2c191.8 69.2 400 74.7 595 21.1c40.8-11.2 81.1-25.2 120.3-41.7V0z'/%3E%3Cpath fill='%23f8f8f8' d='M1397.5 154.8c47.2-10.6 93.6-25.3 138.6-43.8c21.7-8.9 43-18.8 63.9-29.5V0H643.4c62.9 41.7 129.7 78.2 202.1 107.4C1020.4 178.1 1214.2 196.1 1397.5 154.8z'/%3E%3Cpath fill='%23F8F8F8' d='M1315.3 72.4c75.3-12.6 148.9-37.1 216.8-72.4h-723C966.8 71 1144.7 101 1315.3 72.4z'/%3E%3C/g%3E%3C/svg%3E");
  background-attachment: fixed;
  background-size: cover;
  @media (max-width: 940px) {
    padding: 3rem 0 3rem 0;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 -250 1600 800'%3E%3Cg %3E%3Cpath fill='%23daddfb' d='M486 705.8c-109.3-21.8-223.4-32.2-335.3-19.4C99.5 692.1 49 703 0 719.8V800h843.8c-115.9-33.2-230.8-68.1-347.6-92.2C492.8 707.1 489.4 706.5 486 705.8z'/%3E%3Cpath fill='%23e3e5f8' d='M1600 0H0v719.8c49-16.8 99.5-27.8 150.7-33.5c111.9-12.7 226-2.4 335.3 19.4c3.4 0.7 6.8 1.4 10.2 2c116.8 24 231.7 59 347.6 92.2H1600V0z'/%3E%3Cpath fill='%23ecedf7' d='M478.4 581c3.2 0.8 6.4 1.7 9.5 2.5c196.2 52.5 388.7 133.5 593.5 176.6c174.2 36.6 349.5 29.2 518.6-10.2V0H0v574.9c52.3-17.6 106.5-27.7 161.1-30.9C268.4 537.4 375.7 554.2 478.4 581z'/%3E%3Cpath fill='%23f3f3f7' d='M0 0v429.4c55.6-18.4 113.5-27.3 171.4-27.7c102.8-0.8 203.2 22.7 299.3 54.5c3 1 5.9 2 8.9 3c183.6 62 365.7 146.1 562.4 192.1c186.7 43.7 376.3 34.4 557.9-12.6V0H0z'/%3E%3Cpath fill='%23F8F8F8' d='M181.8 259.4c98.2 6 191.9 35.2 281.3 72.1c2.8 1.1 5.5 2.3 8.3 3.4c171 71.6 342.7 158.5 531.3 207.7c198.8 51.8 403.4 40.8 597.3-14.8V0H0v283.2C59 263.6 120.6 255.7 181.8 259.4z'/%3E%3Cpath fill='%23f8f8f8' d='M1600 0H0v136.3c62.3-20.9 127.7-27.5 192.2-19.2c93.6 12.1 180.5 47.7 263.3 89.6c2.6 1.3 5.1 2.6 7.7 3.9c158.4 81.1 319.7 170.9 500.3 223.2c210.5 61 430.8 49 636.6-16.6V0z'/%3E%3Cpath fill='%23f8f8f8' d='M454.9 86.3C600.7 177 751.6 269.3 924.1 325c208.6 67.4 431.3 60.8 637.9-4.3c12.8-4.1 25.4-8.4 38.1-12.9V0H288.1c56 21.3 108.7 50.6 159.7 82C450.2 83.4 452.5 84.9 454.9 86.3z'/%3E%3Cpath fill='%23f8f8f8' d='M1600 0H498c118.1 85.8 243.5 164.5 386.8 216.2c191.8 69.2 400 74.7 595 21.1c40.8-11.2 81.1-25.2 120.3-41.7V0z'/%3E%3Cpath fill='%23f8f8f8' d='M1397.5 154.8c47.2-10.6 93.6-25.3 138.6-43.8c21.7-8.9 43-18.8 63.9-29.5V0H643.4c62.9 41.7 129.7 78.2 202.1 107.4C1020.4 178.1 1214.2 196.1 1397.5 154.8z'/%3E%3Cpath fill='%23F8F8F8' d='M1315.3 72.4c75.3-12.6 148.9-37.1 216.8-72.4h-723C966.8 71 1144.7 101 1315.3 72.4z'/%3E%3C/g%3E%3C/svg%3E");
  }
  @media (max-width: 600px) {
    padding: 3rem 0 2rem 0;
  }
`;

export const ProjectContainer = styled.div`
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  padding: 0;
  width: 100%;
  max-width: 100%;
  overflow-x: hidden;
  z-index: -2;
`;

export const Grid = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 8fr;
  gap: 2rem;

  @media (max-width: 940px) {
    grid-template-columns: repeat(1, 1fr);
    gap: 0;
    margin: 0 auto;
  }
`;

export const Card = styled.div`
  display: inherit;
  width: 100%;
  margin: 0 auto;
  padding: 0;
  align-items: center;
  background: transparent;
  @media (max-width: 940px) {
    width: 85%;
  }
`;

export const Item = styled.div`
  display: grid;
  justify-content: center;
  margin: 0;
  padding: 2rem 5rem;
  overflow: hidden;
  @media (max-width: 940px) {
    padding: 2rem 2rem;
  }
  @media (max-width: 600px) {
    padding: 1.75rem 0;
  }
    img {
      display: -webkit-box;
      display: -webkit-flex;
      display: -moz-box;
      display: flex;
      width: 28vmax;
      height: 18.5vmax;
      max-height: 18.5vmax;
      -webkit-box-shadow: 4px 8px 9px 0px rgba(0,0,0,0.25);
      -moz-box-shadow: 4px 8px 9px 0px rgba(0,0,0,0.25);
      box-shadow: 4px 8px 9px 0px rgba(0,0,0,0.25);
      border-radius: 12px;
      cursor: pointer;
      @media (max-width: 940px) {
        width: 500px;
        height: 300px;
        max-height: 300px;
      }
      @media (max-width: 600px) {
        width: 100%;
        height: 200px;
        max-height: 200px;
        padding: 0;
      }
    }
    &:focus {
      opacity: 0.88;
      border: 1px solid transparent;
    }
`;

export const ModalWrapper = styled.button`
  background: transparent;
  border-style: none;
  border: none;
  outline: none;
  padding: 0;
  margin: 0;
`;

export const ModalContent = styled.div`
  padding: 0;
`;

export const ModalHeader = styled.h1`
  font-family: 'Filson Soft', Ubuntu, sans-serif;
  font-size: 3.5vmax;
  letter-spacing: 0.25px;
  padding: 0.5rem 0 0.5rem 0;
  text-align: center;
  color: #44287d;
  @media (max-width: 940px) {
    font-size: 3.75vmax;
    padding: 1rem 0 0 0;
  }
`;

export const Swatch = styled.img`
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: flex;
  width: 20%;
  background: #f9f9f9;
  margin: 0 auto;
  margin-top: -2rem;
  padding: 0 0 2rem 0;
  transform: scale(1.33, 0.8);
  @media (max-width: 940px) {
    width: 40%;
    padding: 0 0 1rem 0;
    margin-top: -1.1rem;
  }
`;

export const Close = styled.button`
  background: transparent;
  border: none;
  border-style: none;
  outline: none;
  font-size: 2vmax;
  color: #222;
  cursor: pointer;
  @media (max-width: 940px) {
    font-size: 3vmax;
  }
`;

export const List = styled.ul`
  display: block;
  text-align: center;
  white-space: wrap;
  margin: 0 auto;
`;

export const Info = styled.li`
  padding: 1rem 0;
  font-family: 'Filson Soft', Ubuntu, sans-serif;
  font-size: 1.3vmax;
  margin: 0 auto;
  color: #44287d;
  text-align: center;
  line-height: 1.25;
  list-style-position: inside;
  list-style-type: initial;

  @media (max-width: 940px) {
    padding: 0.25rem 0;
    font-size: 2vmax;
    text-align: left;
    list-style-type: initial;
    margin-left: 0.5rem;
    &:first-child {
      padding-top: 1rem;
    }
    &:last-child {
      padding-bottom: 1rem;
    }
  }
`;

export const ListItem = styled.li`
  padding: 0.75rem 0;
  font-family: 'Filson Soft', Ubuntu, sans-serif;
  font-size: 1.3vmax;
  list-style-type: none;
  &:nth-child(5) {
    padding: 3rem 0 1rem 0;
  }
  &:nth-child(7) {
    font-size: 1.1vmax;
    color: #44287d;
  }
  a {
    color: #196aff;
    text-decoration: none;
  }
  a:hover {
    color: #ffa500;
    text-decoration: underline;
  }
  @media (max-width: 940px) {
    font-size: 2.3vmax;
    padding: 0.4rem 0;
    &:nth-child(5) {
      padding: 2rem 0 0.4rem 0;
    }
    &:nth-child(7) {
      font-size: 2vmax;
    }
  }
`;
