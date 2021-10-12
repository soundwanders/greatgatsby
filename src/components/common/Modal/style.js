import styled from 'styled-components';

export const ModalMain = styled.section`
  position: fixed;
  width: 60%;
  height: auto;
  top: 50%;
  left: 50%;
  background: rgb(163, 163, 163);
  transform: translate(-50%, -50%);
  animation: animateModal 0.2s;
`;

export const CloseModal = styled.button`
  background: transparent;
  color: #222;
  padding: 1rem;
  border-style: none;
  border: none;
  outline: none;
`;
