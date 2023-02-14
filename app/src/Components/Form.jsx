import paths from '../objects/paths.obj';
import '../styles/Form.css';

export default function Form({ action, formData }) {
  const { pathname } = document.location;
  const { columns, fields } = paths.find(p => p.path === pathname);

  const inputs = fields.map((type, i) => {
    const columnName = columns[i].replace('*', '');
    const columnValue = formData?.[columnName] || null;

    const notObject = typeof columnValue !== 'object' || !columnValue;
    const inputValue = notObject ? columnValue : columnValue[columnName];

    const input = (
      <section key={`section-input_${i}`}>
        <label key={`label_${i}`} htmlFor={columnName}>
          {columnName}
        </label>
        <input
          key={`input_${i}`}
          type={type}
          name={columnName}
          id={columnName}
          defaultValue={inputValue}
        />
      </section>
    );

    return input;
  });

  return (
    <>
      {inputs}
      <button type="submit">Save</button>
    </>
  );
}
