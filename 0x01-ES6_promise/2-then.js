export default function handleResponseFromAPI(promise) {
  const p = new Promise((resolve, reject) => {
    if (promise === true) {
       resolve({ status: 200, body: 'Success' });
    } else {
        reject(new Error());

    }
  });

  p.then(response => {
    console.log('Got a response from the API');
    return response;
  });
  
  p.catch(error => {
    console.log('Got a response from the API');
    return error;
  });
  return p;
}
