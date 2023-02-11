import { Outlet } from 'react-router-dom';
import Header from '../Components/Header';

export default function Root() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <footer>Music and Movies 2</footer>
    </>
  );
}
