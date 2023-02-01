export default [
  { path: '/', element: 'Home' },
  {
    path: '/artists',
    element: 'Artists',
    title: '🎤 Artists page',
    columns: ['Name', 'Genre'],
  },
  {
    path: '/albums',
    element: 'Albums',
    title: '💿 Albums page',
    columns: ['Name', 'Genre', 'Artist'],
  },
  {
    path: '/tracks',
    element: 'Tracks',
    title: '🎵 Tracks page',
    columns: ['Name', 'Genre', 'Album', 'Artist'],
  },
  {
    path: '/movies',
    element: 'Movies',
    title: '🎬 Movies page',
    columns: ['Name', 'Genre'],
  },
  {
    path: '/genres',
    element: 'Genres',
    title: '🎸 | 🎭 Genres page',
    columns: ['Name'],
  },
];
