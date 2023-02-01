import { useState, useEffect } from 'react';

export function useData() {
  const { pathname } = document.location;
  const baseURL = 'http://localhost:3000';
  const endpoint = `${baseURL}${pathname}`;

  const [data, setData] = useState(null);

  useEffect(() => {
    if (pathname !== '/') {
      let ignore = false;

      fetch(endpoint)
        .then(response => response.json())
        .then(json => {
          if (!ignore) {
            setData(json);
          }
        });

      return () => {
        ignore = true;
      };
    } else return null;
  }, []);

  return data;
}
