import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import indexRoutes from './routes';
import routesProps from './objects/routes.obj';
import './styles/index.css';

const children = routesProps.map(route => {
  const { path, element } = route;
  return { path, element: indexRoutes[element] };
});

const router = createBrowserRouter([
  {
    path: '/',
    element: indexRoutes.Root,
    errorElement: indexRoutes.ErrorPage,
    children,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
