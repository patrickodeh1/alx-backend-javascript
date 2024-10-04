export default function handleResponseFromAPI(promise) {
  const p = new Promise((resolve, reject) => {
    if (promise === true) {
      return resolve({ status: 200, body: 'Success' });
    }
    return reject(new Error());
  });

  p.then(() => {
    console.log('Got a response from the API');
  }).catch(() => {
    console.log('Got a response from the API');
  });
  return p;
}
