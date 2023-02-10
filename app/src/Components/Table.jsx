import { useContext } from 'react';
import { useData } from '../hooks/useData';
import { ModalContext } from '../contexts/ModalContext';
import Thead from './Table.Thead';
import Tbody from './Table.Tbody';
import NoData from './Table.NoData';
import paths from '../objects/paths.obj';

export default function Table() {
  const [open, toggleModal] = useContext(ModalContext);
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
      <div className="top-of-table-div">
        {noData}
        <button onClick={() => toggleModal(!open)} className="cta-button">
          Create {record}
        </button>
      </div>
      <>
        {noData ? null : (
          <table>
            <Thead columns={columns} />
            <Tbody rows={rows} columns={columns} />
          </table>
        )}
      </>
    </>
  );
}
