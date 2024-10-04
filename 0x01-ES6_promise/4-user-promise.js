export default function signUpUser(firstName, lastName) {
  return new Promise((resolve, reject) => {
    if (firstName) {
      resolve({ firstName, lastName });
    } else {
      reject();
    }
  });
}
