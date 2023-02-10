import { useContext } from 'react';
import { ModalContext } from '../contexts/ModalContext';

export default function Tbody({ rows, columns }) {
  const [open, toggleModal] = useContext(ModalContext);

  const tr = rows.map((row, i) => {
    const TDs = columns.map((col, ii) => {
      const columnName = col.split('*')[0];
      const columnData = !col.includes('*')
        ? row[col]
        : row[columnName][columnName];

      const td = <td key={`td_${i}_${ii}`}>{columnData}</td>;

      return td;
    });

    return (
      <tr key={`tr_${i}`}>
        {TDs}
        <td>
          <button onClick={() => toggleModal(!open)} title="Edit">
            Edit
          </button>
          <button title="Delete">Delete</button>
        </td>
      </tr>
    );
  });

  return <tbody>{tr}</tbody>;
}
