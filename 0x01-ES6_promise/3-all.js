import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  return Promise
    .all([uploadPhoto(), createUser()])
    .then((Result) => {
      console.log(`${Result[0].body}, ${Result[1].firstName}, ${Result[1].lastName}`);
    })
    .catch(() => console.log('Signup system offline'));
}
