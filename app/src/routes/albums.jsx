import Table from '../Components/Table';
import tableColumns from '../objects/tableColumns.obj';

export default function Albums() {
  return (
    <>
      <h1>💿 Albums page</h1> <Table columns={tableColumns.albums} />
    </>
  );
}
