import Input from './Form.Input';
import submit from '../functions/form.func';
import paths from '../objects/paths.obj';
import '../styles/Form.css';

export default function Form({ formData }) {
  const { pathname } = document.location;
  const { columns } = paths.find(p => p.path === pathname);

  const inputs = columns.map((columnName, index) => {
    const name = columnName.replace('*', '');
    const foreignTable = columnName.includes('*');
    const type = foreignTable ? 'select' : 'text';
    const inputProps = { type, name, index, formData };

    return <Input key={index} props={inputProps} />;
  });

  return (
    <>
      {inputs}
      <input type="hidden" name="id" value={formData?.id} />
      <button type="submit" onClick={submit}>
        SAVE
      </button>
    </>
  );
}
