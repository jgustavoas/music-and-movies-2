import PropTypes from 'prop-types';
import Table from '../Components/Table';
import { updatePageTitle } from '../functions/page.func';

export default function Template({ title, columns }) {
  document.title = updatePageTitle(title);

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
