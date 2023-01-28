import Table from '../Components/Table';
import tableColumns from '../objects/tableColumns.obj';

export default function Artists() {
  return (
    <>
      <h1>🎤 Artists page</h1> <Table columns={tableColumns.artists} />
    </>
  );
}
