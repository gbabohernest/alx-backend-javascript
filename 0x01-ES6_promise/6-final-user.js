import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default async function handleProfileSignup(
  firstName,
  lastName,
  filename,
) {
  const signUpUserPromiseObject = signUpUser(firstName, lastName);
  const uploadPhotoPromiseObject = uploadPhoto(filename);

  const result = await Promise.allSettled([
    signUpUserPromiseObject,
    uploadPhotoPromiseObject,
  ]);

  return result.map((element) => ({
    status: element.status,
    value: element.status === 'fulfilled' ? element.value : element.reason,
  }));
}
