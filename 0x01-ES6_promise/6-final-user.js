import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, filename) {
  const signUpUserPromiseObject = signUpUser(firstName, lastName);
  const uploadPhotoPromiseObject = uploadPhoto(filename);

  const result = Promise.allSettled([
    signUpUserPromiseObject,
    uploadPhotoPromiseObject,
  ]).then((data) => data.map((element) => ({
    status: element.status,
    value: element.status === 'fulfilled' ? element.value : element.reason,
  })));

  return result;
}
