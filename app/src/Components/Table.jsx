import useData from '../hooks/useData';
import useModal from '../hooks/useModal';
import Modal from './Modal';
import Thead from './Table.Thead';
import Tbody from './Table.Tbody';
import NoData from './Table.NoData';
import paths from '../objects/paths.obj';
import '../styles/Table.css';

export default function Table() {
  const [[open, row], toggleModal] = useModal([false]);
  const { pathname } = document.location;
  const { columns } = paths.find(p => p.path === pathname);

  const data = useData(pathname);
  if (!data) return null;

  const { table, rows } = data;
  if (table !== pathname.slice(1)) return null;

  const record = columns[0];
  const noData = !rows[0] ? NoData(record) : false;

  return (
    <>
      <Modal stateManagement={[[open, row, record], toggleModal]} />
      <div className="top-of-table-div">
        {noData}
        <button onClick={() => toggleModal([!open])} className="cta-button">
          Create {record}
        </button>
      </div>
      <>
        {noData ? null : (
          <table>
            <Thead columns={columns} />
            <Tbody
              rows={rows}
              columns={columns}
              modalStateManagement={[[open], toggleModal]}
            />
          </table>
        )}
      </>
    </>
  );
}
