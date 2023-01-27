import { Link } from 'react-router-dom';
import '../styles/Header.css';

export default function Header() {
  return (
    <header>
      <div>
        <Link to="/">Music and Movies 2</Link>
      </div>
      <nav>
        <Link to={`/artists`}>Artists</Link>
        <Link to={`/albums`}>Albums</Link>
        <Link to={`/tracks`}>Tracks</Link>
        <Link to={`/movies`}>Movies</Link>
        <Link to={`/genres`}>Genres</Link>
      </nav>
    </header>
  );
}
