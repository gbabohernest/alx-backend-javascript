export default function getFullResponseFromAPI(success) {
  return new Promise((resolve, reject) => {
    const data = { status: 200, body: 'Success' };
    if (success === true) {
      resolve(data);
    } else if (success === false) {
      reject(new Error('The fake API is not working currently'));
    }
  });
}
