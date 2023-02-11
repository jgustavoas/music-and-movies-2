import '../styles/Modal.css';

export default function Modal({ stateManagement }) {
  const [open, toggleModal] = stateManagement;

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
