import React, { useRef } from 'react';
import ReactDom from 'react-dom';

export const Modal = ({ setShowModal }) => {
  const modalRef = useRef();
  const closeModal = e => {
    if (e.target === modalRef.current) {
      setShowModal(false);
    }
  };

  return ReactDom.createPortal(
    <ModalContainer ref={modalRef} onClick={closeModal}>
      <Modal>
        <h2>This is a Modal</h2>
        <ModalButton onClick={() => setShowModal(false)}>X</ModalButton>
      </Modal>
    </ModalContainer>,
    document.getElementById('portal')
  );
};
