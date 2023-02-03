import PropTypes from 'prop-types';
import { useData } from '../hooks/useData';
import routes from '../objects/routes.obj';

export default function Table() {
  const { pathname } = document.location;
  const { columns } = routes.find(route => route.path === pathname);
  const data = useData(pathname);

  if (!data) return null;

  const { table, rows } = data;
  if (!rows[0]) return <div>No data yet. Try to add one.</div>;
  if (table !== pathname.slice(1)) return null;

  const THs = columns.map((col, i) => {
    const columnName = col.split('*')[0];
    const th = <th key={`th_${i}`}>{columnName}</th>;

    return th;
  });

  const TRs = rows.map((row, i) => {
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
          <button>Edit</button>
          <button>Delete</button>
        </td>
      </tr>
    );
  });

  return (
    <table>
      <thead>
        <tr>
          {THs}
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>{TRs}</tbody>
    </table>
  );
}

Table.propTypes = {
  props: PropTypes.object,
  data: PropTypes.array,
};
