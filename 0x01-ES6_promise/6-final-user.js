import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, filename) {
  return Promise.allSettled([
    signUpUser(firstName, lastName),
    uploadPhoto(filename),
  ]).then((data) => data.map((element) => {
    if (element.status === 'rejected') {
      return { status: 'rejected', value: element.message };
    }
    return { status: 'fulfilled', value: element };
  }));
}
