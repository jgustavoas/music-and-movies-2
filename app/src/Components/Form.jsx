import Input from './Form.Input';
import paths from '../objects/paths.obj';
import '../styles/Form.css';

export default function Form({ formData }) {
  const { pathname } = document.location;
  const { columns } = paths.find(p => p.path === pathname);

  const inputs = columns.map((columnName, index) => {
    const name = columnName.replace('*', '');
    const foreignTable = columnName.includes('*');
    const columnValue = formData?.[name];

    const notObject = typeof columnValue !== 'object' || !columnValue;
    const value = notObject ? columnValue : formData[name][name];
    const type = foreignTable ? 'select' : 'text';
    const inputProps = { type, name, index, value };

    return <Input key={index} props={inputProps} />;
  });

  return (
    <>
      {inputs}
      <button type="submit">SAVE</button>
    </>
  );
}
