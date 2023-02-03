export default [
  { path: '/', element: 'Home' },
  {
    path: '/artists',
    element: 'Artists',
    title: '🎤 Artists page',
    columns: ['artist', 'genre*'],
  },
  {
    path: '/albums',
    element: 'Albums',
    title: '💿 Albums page',
    columns: ['album', 'genre*', 'artist*'],
  },
  {
    path: '/tracks',
    element: 'Tracks',
    title: '🎵 Tracks page',
    columns: ['track', 'genre*', 'album*', 'artist*'],
  },
  {
    path: '/movies',
    element: 'Movies',
    title: '🎬 Movies page',
    columns: ['movie', 'genre*'],
  },
  {
    path: '/genres',
    element: 'Genres',
    title: '🎸 | 🎭 Genres page',
    columns: ['genre'],
  },
];

// The name with asterisk indicates that the column is from a joined table.
