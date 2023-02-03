export default function Tbody(rows, columns) {
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
          <button>Edit</button>
          <button>Delete</button>
        </td>
      </tr>
    );
  });

  return <tbody>{tr}</tbody>;
}
