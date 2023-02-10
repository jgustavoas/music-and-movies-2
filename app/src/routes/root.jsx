import { Outlet } from 'react-router-dom';
import { ModalContext } from '../contexts/ModalContext';
import useModal from '../hooks/useModal';
import Header from '../Components/Header';

export default function Root() {
  return (
    <ModalContext.Provider value={useModal(false)}>
      <Header title="App"></Header>
      <main>
        <Outlet />
      </main>
      <footer>Music and Movies 2</footer>
    </ModalContext.Provider>
  );
}
