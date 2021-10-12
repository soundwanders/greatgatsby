import React from 'react';
import { ModalMain, CloseModal } from './style';
import './styled.css';
// import projectData from './projects.json';

export const Modal = ({ handleClose, show, children }) => {
  const showHideClassName = show ? 'Modal DisplayBlock' : 'Modal DisplayNone';

  return (
    <div className={showHideClassName}>
      <ModalMain>
        {children}
        <CloseModal onClick={handleClose}>X</CloseModal>
      </ModalMain>
    </div>
  );
};
