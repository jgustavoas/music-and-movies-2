import { useReducer, useEffect } from 'react';
import dataReducer from '../store/reducer';
import routes from '../objects/routes.obj';

export function useData(pathname) {
  const baseURL = 'http://localhost:3000';
  const [mainColumn] = routes.find(r => r.path === pathname).columns;
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
