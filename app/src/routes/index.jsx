import Root from './root';
import Home from './home';
import Template from './template';
import ErrorPage from './error-page';
import pagesProps from '../objects/pagesProps.obj';

const Pages = {};
pagesProps.forEach(page => {
  const { route, title, columns } = page;
  const template = <Template title={title} columns={columns} />;

  Pages[route] = template;
});

export default {
  ErrorPage: <ErrorPage />,
  Root: <Root />,
  Home: <Home />,
  ...Pages,
};

/* 
  The "...Pages" spread sintax will render the following properties inside the export:
  Artists: <Template title="..." columns="..." />,
  Albums: <Template title="..." columns="..." />,
  Tracks: <Template title="..." columns="..." />,
  Movies: <Template title="..." columns="..." />,
  Genres: <Template title="..." columns="..." />,
*/
