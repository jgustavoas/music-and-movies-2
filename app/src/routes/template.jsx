import PropTypes from 'prop-types';
import Table from '../Components/Table';
import { updatePageTitle } from '../functions/page.func';

export default function Template({ title }) {
  document.title = updatePageTitle(title);

  return (
    <>
      <h1>{title}</h1> <Table />
    </>
  );
}

Template.propTypes = {
  title: PropTypes.string,
  columns: PropTypes.array,
};
