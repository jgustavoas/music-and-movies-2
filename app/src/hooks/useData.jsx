import { useReducer, useEffect } from 'react';
import dataReducer from '../store/reducer';
import { baseURL } from '../functions/api.func';
import paths from '../objects/paths.obj';

export default function useData(pathname) {
  const [mainColumn] = paths.find(p => p.path === pathname).columns;
  const endpoint = `${baseURL}${pathname}?by=${mainColumn}`;

  const initialState = {};
  const [data, dispatch] = useReducer(dataReducer, initialState);

  useEffect(() => {
    if (pathname === '/') return null;

    let ignore = false;

    fetch(endpoint)
      .then(response => response.json())
      .then(json => {
        if (!ignore) {
          dispatch({
            type: 'LOAD',
            data: json,
          });
        }
      });

    return () => {
      ignore = true;
    };
  }, [pathname]);

  return data;
}
