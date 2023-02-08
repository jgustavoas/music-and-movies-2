import { useModal } from '../hooks/useModal';
import '../styles/Modal.css';

export default function Modal() {
  const open = useModal();

  if (!open) return null;

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
