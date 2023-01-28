import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import routeIndex from './routes';
import routesProps from './objects/routes.obj';
import './styles/index.css';

const children = routesProps.map(route => {
  const { path, element } = route;
  return { path, element: routeIndex[element] };
});

const router = createBrowserRouter([
  {
    path: '/',
    element: routeIndex.Root,
    errorElement: routeIndex.ErrorPage,
    children,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

/* 
  The "children" variable in line 8 will render the following array:
    [
      {
        path: '/',
        element: Home,
      },
      {
        path: '/artists',
        element: Artists,
      },
      {
        path: '/albums',
        element: Albums,
      },
      {
        path: '/tracks',
        element: Tracks,
      },
      {
        path: '/movies',
        element: Movies,
      },
      {
        path: '/genres',
        element: Genres,
      },
    ],
*/
