import PropTypes from 'prop-types';
import { useData } from '../hooks/useData';
import Thead from './Table.Thead';
import Tbody from './Table.Tbody';
import NoData from './Table.NoData';
import routes from '../objects/routes.obj';

export default function Table() {
  const { pathname } = document.location;
  const { columns } = routes.find(route => route.path === pathname);

  const data = useData(pathname);
  if (!data) return null;

  const { table, rows } = data;
  if (table !== pathname.slice(1)) return null;
  if (!rows[0]) return NoData();

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
