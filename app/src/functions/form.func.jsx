import requestAPI from './api.func';

export default async function submit(ev) {
  ev.preventDefault();
  const { pathname } = document.location;
  const formData = {};
  const { parentElement } = ev.currentTarget;
  const inputs = parentElement.querySelectorAll('input, select');

  inputs.forEach(i => {
    if (!isNaN(i.value) && i.name !== 'id') formData[`${i.name}_id`] = +i.value;
    else formData[i.name] = i.value;
  });

  if (!formData.id) delete formData.id;

  const method = formData.id ? 'PATCH' : 'POST';
  const res = await requestAPI(method, pathname, { data: formData });

  console.log('res :>> ', res);
}
