export default function Thead(columns) {
  const THs = columns.map((col, i) => {
    const columnName = col.split('*')[0];
    const th = <th key={`th_${i}`}>{columnName}</th>;

    return th;
  });

  return (
    <thead>
      <tr>
        {THs}
        <th>Actions</th>
      </tr>
    </thead>
  );
}
