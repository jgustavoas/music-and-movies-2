import { updatePageTitle } from '../functions/page.func';

export default function Home() {
  document.title = updatePageTitle();

  return <h1>Welcome to Music and Movies 2</h1>;
}
