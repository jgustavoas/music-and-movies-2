import { useState, useEffect } from 'react';

export function useData(pathname) {
  const baseURL = 'http://localhost:3000';
  const endpoint = `${baseURL}${pathname}`;

  const [data, setData] = useState(null);

  useEffect(() => {
    if (pathname === '/') return null;

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
  }, [pathname]);

  return data;
}
