import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, filename) {
  const signUpUserPromiseObject = signUpUser(firstName, lastName);
  const uploadPhotoPromiseObject = uploadPhoto(filename);
  return Promise.allSettled([
    signUpUserPromiseObject,
    uploadPhotoPromiseObject,
  ]).then((data) => {
    data.forEach((element) => {
      if (element.status === 'rejected') {
        return [{ status: element.status, value: `${element.reason}` }];
      }
      return [{ status: element.status, value: element.value }];
    });
  });
}
