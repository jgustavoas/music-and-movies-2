import { useContext } from 'react';
import { ModalContext } from '../contexts/ModalContext';
import '../styles/Modal.css';

export default function Modal() {
  const [open, toggleModal] = useContext(ModalContext);

  if (!open) return null;

  return (
    <div id="modal">
      <div id="modal-container">
        <div className="header">
          Modal title <button onClick={() => toggleModal(!open)}>X</button>
        </div>
        <div id="modal-content">FORM</div>
      </div>
    </div>
  );
}
