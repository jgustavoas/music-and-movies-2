import '../styles/Modal.css';

export default function Modal({ stateManagement }) {
  const [[open, row, record], toggleModal] = stateManagement;

  if (!open) return null;

  const actionName = row ? `Edit ` : 'Create ';

  const content = !row
    ? null
    : Object.entries(row).map(entry => {
        const [key, value] = entry;
        const data =
          typeof value !== 'object' || value === null ? value : value[key];

        return <div key={key}>{data}</div>;
      });

  return (
    <div id="modal">
      <div id="modal-container">
        <div className="header">
          {actionName} {record}
          <button onClick={() => toggleModal([!open])}>X</button>
        </div>
        <div id="modal-content">{content}</div>
      </div>
    </div>
  );
}
