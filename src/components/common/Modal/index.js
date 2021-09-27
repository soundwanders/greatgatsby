import React from 'react';
import './styled.css';

export const Modal = ({ handleClose, show, children }) => {
  const showHideClassName = show ? 'Modal DisplayBlock' : 'Modal DisplayNone';

  return (
    <div className={showHideClassName}>
      <section className="ModalMain">
        {children}
        <button
          className="CloseModal"
          type="button"
          onClick={handleClose}
        ></button>
      </section>
    </div>
  );
};
