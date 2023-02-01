import PropTypes from 'prop-types';
import { useData } from '../hooks/useData';
import Table from '../Components/Table';
import { updatePageTitle } from '../functions/page.func';

export default function Template({ title, columns }) {
  document.title = updatePageTitle(title);
  useData();

  return (
    <>
      <h1>{title}</h1> <Table columns={columns} />
    </>
  );
}

Template.propTypes = {
  title: PropTypes.string,
  columns: PropTypes.array,
};
