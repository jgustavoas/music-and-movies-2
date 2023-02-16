import useData from '../hooks/useData';

export default function Input({ props }) {
  const { type, name, index, value } = props;
  const id = `${type}_${name}`;

  switch (type) {
    case 'select': {
      const data = useData(`/${name}s`);
      const options = data.rows?.map(row => (
        <option key={`option_${index}_${row.id}`} value={row.id}>
          {row[name]}
        </option>
      ));

      return (
        <section key={`section-input_${index}`}>
          <label key={`label_${index}`} htmlFor={id}>
            {name}
          </label>
          <select name={name} id={id} defaultValue={value}>
            <option value="">--- Select {name} ---</option>
            {options}
          </select>
        </section>
      );
    }
    default: {
      return (
        <>
          <section key={`section-input_${index}`}>
            <label key={`label_${index}`} htmlFor={id}>
              {name}
            </label>
            <input
              key={`input_${index}`}
              type={type}
              name={name}
              id={id}
              defaultValue={value}
            />
          </section>
        </>
      );
    }
  }
}
