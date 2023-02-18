export const baseURL = 'http://localhost:3000';

export default async function requestAPI(method, pathname = '', data = {}) {
  const endpoint = `${baseURL}${pathname}`;

  // Default options are marked with *
  const response = await fetch(endpoint, {
    method,
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json',
    },
    redirect: 'follow',
    referrerPolicy: 'no-referrer',
    body: JSON.stringify(data),
  });

  return response.json(); // parses JSON response into native JavaScript objects
}
