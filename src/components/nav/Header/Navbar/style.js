import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  position: fixed;
  flex-wrap: nowrap;
  max-width: 86%;
  padding: 0.25rem 0;
  align-items: center;
  justify-content: space-between;
  overflow: hidden;
  background: transparent;
  z-index: 4;
`;

export const Brand = styled.div`
  max-width: 3rem;
  padding: 1rem;
  @media (max-width: 960px) {
    max-width: 2rem;
  }
  img.svg {
    -webkit-user-select: none;
    user-select: none;
  }
`;
