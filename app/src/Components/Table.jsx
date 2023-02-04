import PropTypes from 'prop-types';
import { useData } from '../hooks/useData';
import Thead from './Table.Thead';
import Tbody from './Table.Tbody';
import NoData from './Table.NoData';
import paths from '../objects/paths.obj';

export default function Table() {
  const { pathname } = document.location;
  const { columns } = paths.find(p => p.path === pathname);

  const data = useData(pathname);
  if (!data) return null;

  const { table, rows } = data;
  if (table !== pathname.slice(1)) return null;
  if (!rows[0]) return NoData(columns[0]);

  const thead = Thead(columns);
  const tbody = Tbody(rows, columns);

  return (
    <table>
      {thead}
      {tbody}
    </table>
  );
}

Table.propTypes = {
  data: PropTypes.array,
};
