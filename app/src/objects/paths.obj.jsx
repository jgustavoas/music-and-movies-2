export default [
  { path: '/', element: 'Home' },
  {
    path: '/artists',
    element: 'Artists',
    title: '🎤 Artists page',
    columns: ['artist', 'genre*'],
    fields: ['text', 'text'],
  },
  {
    path: '/albums',
    element: 'Albums',
    title: '💿 Albums page',
    columns: ['album', 'genre*', 'artist*'],
    fields: ['text', 'text', 'text'],
  },
  {
    path: '/tracks',
    element: 'Tracks',
    title: '🎵 Tracks page',
    columns: ['track', 'genre*', 'album*', 'artist*'],
    fields: ['text', 'text', 'text', 'text'],
  },
  {
    path: '/movies',
    element: 'Movies',
    title: '🎬 Movies page',
    columns: ['movie', 'genre*'],
    fields: ['text', 'text'],
  },
  {
    path: '/genres',
    element: 'Genres',
    title: '🎸 | 🎭 Genres page',
    columns: ['genre'],
    fields: ['text'],
  },
];

const pathsMap = new Map();
pathsMap.set('/', { element: 'Home' });
pathsMap.set('/artists', {
  element: 'Artists',
  title: '🎤 Artists page',
  columns: ['artist', 'genre*'],
  fields: ['text', 'text'],
});
pathsMap.set('/tracks', {
  element: 'Tracks',
  title: '🎵 Tracks page',
  columns: ['track', 'genre*', 'album*', 'artist*'],
  fields: ['text', 'text', 'text', 'text'],
});
pathsMap.set('/movies', {
  element: 'Movies',
  title: '🎬 Movies page',
  columns: ['movie', 'genre*'],
  fields: ['text', 'text'],
});
pathsMap.set('/genres', {
  element: 'Genres',
  title: '🎸 | 🎭 Genres page',
  columns: ['genre'],
  fields: ['text'],
});

// The name with asterisk indicates that the column is from a joined table.
