import Form from './Form';
import '../styles/Modal.css';

export default function Modal({ stateManagement }) {
  const [[open, row, record], toggleModal] = stateManagement;

  if (!open) return null;

  const actionName = row ? `Edit ` : 'Create ';

  return (
    <div id="modal">
      <div id="modal-container">
        <div className="header">
          {actionName} {record}
          <button onClick={() => toggleModal([!open])}>X</button>
        </div>
        <div id="modal-content">
          <Form action={actionName} formData={row} />
        </div>
      </div>
    </div>
  );
}
