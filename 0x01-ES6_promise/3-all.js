import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  return Promise
    .all([uploadPhoto(), createUser()])
    .then(([photoResult, userResult]) => {
      console.log(photoResult, userResult.firstName, userResult.lastName);
      return { photoResult, userResult };
    })
    .catch(() => {
      console.log('Signup system offline');
    });
}
