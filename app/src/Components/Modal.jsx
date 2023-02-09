import '../styles/Modal.css';

export default function Modal({ toggle, hook }) {
  if (!toggle) {
    return null;
  }

  return (
    <div id="modal">
      <div id="modal-container">
        <div className="header">
          Modal title <button onClick={() => hook(!toggle)}>X</button>
        </div>
        <div id="modal-content">FORM</div>
      </div>
    </div>
  );
}
