import PropTypes from 'prop-types';
import Table from '../Components/Table';

export default function Template({ title, columns }) {
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
