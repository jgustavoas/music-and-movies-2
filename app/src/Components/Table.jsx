import { useContext } from 'react';
import { useData } from '../hooks/useData';
import { ModalContext } from '../contexts/ModalContext';
import Thead from './Table.Thead';
import Tbody from './Table.Tbody';
import NoData from './Table.NoData';
import Modal from './Modal';
import paths from '../objects/paths.obj';

export default function Table() {
  const { pathname } = document.location;
  const { columns } = paths.find(p => p.path === pathname);

  const data = useData(pathname);
  if (!data) return null;

  const [open, toggleModal] = useContext(ModalContext);

  const { table, rows } = data;
  if (table !== pathname.slice(1)) return null;

  const record = columns[0];
  const noData = !rows[0] ? NoData(record) : false;
  const thead = Thead(columns);
  const tbody = Tbody(rows, columns);
  const Table = noData ? null : (
    <>
      <table>
        {thead}
        {tbody}
      </table>
    </>
  );

  return (
    <>
      <Modal />
      <div className="top-of-table-div">
        {noData}
        <button onClick={() => toggleModal(!open)} className="cta-button">
          Create {record}
        </button>
      </div>
      {Table}
    </>
  );
}
