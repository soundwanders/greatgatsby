import React from 'react';
import './styled.css';

export const Modal = ({ handleClose, show, children }) => {
  const showHideClassName = show ? 'Modal DisplayBlock' : 'Modal DisplayNone';

  return (
    <div className={showHideClassName}>
      <section className="ModalMain">
        {children}
        <button className="ToggleModal" type="button" onClick={handleClose}>
          X
        </button>
      </section>
    </div>
  );
};
