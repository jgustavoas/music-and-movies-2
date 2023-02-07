import { updatePageTitle } from '../functions/page.func';
import '../styles/main.css';

export default function Home() {
  document.title = updatePageTitle();

  return (
    <>
      <h1>Welcome to Music and Movies 2</h1>
      <div id="search-field">
        <section>
          <input type="text" name="search" id="search" placeholder="Search" />
          <select name="item" id="item">
            <option value=""> --- Filter ---</option>
            <option value="artists">Artist</option>
            <option value="albums">Album</option>
            <option value="tracks">Track</option>
            <option value="movies">Movie</option>
            <option value="genres">Genre</option>
          </select>
        </section>

        <button className="cta-button">Search</button>
      </div>
    </>
  );
}
