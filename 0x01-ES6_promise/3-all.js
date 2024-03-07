import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  const uploadPhotoPromiseObject = uploadPhoto();
  const createUserPromiseObject = createUser();

  return Promise.all([uploadPhotoPromiseObject, createUserPromiseObject])
    .then((data) => {
      const [photo, name] = data;
      console.log(`${photo.body} ${name.firstName} ${name.lastName}`);
    })
    .catch(() => {
      console.log(new Error('Signup system offline'));
    });
}
