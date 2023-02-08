import { useEffect } from 'react';
import '../styles/Modal.css';

export default function Modal({ state }) {
  useEffect(() => () => state, [state]);

  if (state === false) return null;

  return (
    <div id="modal">
      <div id="modal-container">
        <div className="header">
          Modal title <button>X</button>
        </div>
        <div id="modal-content">FORM</div>
      </div>
    </div>
  );
}
