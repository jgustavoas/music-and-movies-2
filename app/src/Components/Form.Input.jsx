import { useState } from 'react';
import useData from '../hooks/useData';

function evChange(ev, setInputValue) {
  setInputValue(ev.target.value);
}

export default function Input({ props }) {
  const { type, name, index, formData } = props;
  const inputID = `${type}_${name}`;

  const columnValue = formData?.[name];
  const notObject = typeof columnValue !== 'object' || !columnValue;
  const foreignID = notObject ? '' : formData[name].id;
  const value = notObject ? columnValue : foreignID;

  const [inputValue, setInputValue] = useState(value);

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
          <label key={`label_${index}`} htmlFor={inputID}>
            {name}
          </label>
          <select
            name={name}
            id={inputID}
            value={inputValue}
            onChange={ev => evChange(ev, setInputValue)}
          >
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
            <label key={`label_${index}`} htmlFor={inputID}>
              {name}
            </label>
            <input
              key={`input_${index}`}
              type={type}
              name={name}
              id={inputID}
              defaultValue={value}
            />
          </section>
        </>
      );
    }
  }
}
