export function updatePageTitle(title) {
  const separator = '|';
  const [rootTitle] = document.title.split(separator);
  const newTitle = `${rootTitle} | ${title}`;

  if (!title) return rootTitle;

  return newTitle;
}
