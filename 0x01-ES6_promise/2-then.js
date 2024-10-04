export default function handleResponseFromAPI(promise) {
  const p = new Promise((resolve, reject) => {
    if (promise) {
      return resolve({ status: 200, body: 'Success' });
    } else {
      return reject(new Error());
    }
  });

  p.then(() => {
    console.log('Got a response from the API');
  });
}
