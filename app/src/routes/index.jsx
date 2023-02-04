import Root from './root';
import Home from './home';
import Template from './template';
import ErrorPage from './error-page';
import paths from '../objects/paths.obj';

const commomPages = {};
const commomPagesRoutes = paths.slice(1); // Ignore the Home page

commomPagesRoutes.forEach(page => {
  const { element, title } = page;
  const template = <Template title={title} />;

  commomPages[element] = template;
});

export default {
  Root: <Root />,
  Home: <Home />,
  ErrorPage: <ErrorPage />,
  ...commomPages,
};

/* 
  The "...commomPages" spread sintax will render the following properties inside the export:
  Artists: <Template title="..." />,
  Albums: <Template title="..." />,
  Tracks: <Template title="..." />,
  Movies: <Template title="..." />,
  Genres: <Template title="..." />,
*/
