import PropTypes from 'prop-types';
import { useData } from '../hooks/useData';
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

  const { table, rows } = data;
  if (table !== pathname.slice(1)) return null;

  const record = columns[0];
  const noData = !rows[0] ? NoData(record) : null;
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
      <div className="top-of-table-div">
        {noData}
        <button className="cta-button">Create {record}</button>
      </div>
      {Table}
    </>
  );
}

Table.propTypes = {
  data: PropTypes.array,
};
