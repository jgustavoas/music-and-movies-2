import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from './routes/root';
import indexRoutes from './routes';
import './styles/index.css';

const { ErrorPage, Home, Artists, Albums, Tracks, Movies, Genres } =
  indexRoutes;

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: ErrorPage,
    children: [
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
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
