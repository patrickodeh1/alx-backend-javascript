import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, filename) {
  const user = signUpUser(firstName, lastName);
  const pic = uploadPhoto(filename);
  return Promise.allSettled([user, pic])

    .then((res) => res.map((r) => ({
      status: r.status,
      value: r.status === 'fulfilled' ? r.value : r.reason,
    })));
}
