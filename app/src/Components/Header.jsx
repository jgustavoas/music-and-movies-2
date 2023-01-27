import { Link } from 'react-router-dom';
import '../styles/Header.css';

export default function Header() {
  return (
    <header>
      <div>
        <Link to="/" title="Home">
          Music and Movies 2
        </Link>
      </div>
      <nav>
        <Link to={`/artists`} title="Artists">
          Artists
        </Link>
        <Link to={`/albums`} title="Albums">
          Albums
        </Link>
        <Link to={`/tracks`} title="Tracks">
          Tracks
        </Link>
        <Link to={`/movies`} title="Movies">
          Movies
        </Link>
        <Link to={`/genres`} title="Genres">
          Genres
        </Link>
      </nav>
    </header>
  );
}
