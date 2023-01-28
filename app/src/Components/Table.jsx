import PropTypes from 'prop-types';

export default function Table({ columns }) {
  const th = columns.map((col, i) => <th key={`th_${i}`}>{col}</th>);
  const cells = columns.map((col, i) => <td key={`td_${i}`}>{i}</td>);

  return (
    <table>
      <thead>
        <tr>
          {th}
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          {cells}
          <td>
            <button>Edit</button>
            <button>Delete</button>
          </td>
        </tr>
        <tr>
          {cells}
          <td>
            <button>Edit</button>
            <button>Delete</button>
          </td>
        </tr>
        <tr>
          {cells}
          <td>
            <button>Edit</button>
            <button>Delete</button>
          </td>
        </tr>
        <tr>
          {cells}
          <td>
            <button>Edit</button>
            <button>Delete</button>
          </td>
        </tr>
        <tr>
          {cells}
          <td>
            <button>Edit</button>
            <button>Delete</button>
          </td>
        </tr>
        <tr>
          {cells}
          <td>
            <button>Edit</button>
            <button>Delete</button>
          </td>
        </tr>
        <tr>
          {cells}
          <td>
            <button>Edit</button>
            <button>Delete</button>
          </td>
        </tr>
        <tr>
          {cells}
          <td>
            <button>Edit</button>
            <button>Delete</button>
          </td>
        </tr>
        <tr>
          {cells}
          <td>
            <button>Edit</button>
            <button>Delete</button>
          </td>
        </tr>
        <tr>
          {cells}
          <td>
            <button>Edit</button>
            <button>Delete</button>
          </td>
        </tr>
      </tbody>
    </table>
  );
}

Table.propTypes = {
  props: PropTypes.object,
  columns: PropTypes.array,
  rows: PropTypes.array,
};
