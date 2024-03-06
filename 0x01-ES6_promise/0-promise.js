export default function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
    const data = { message: 'testing promise' };
    resolve(data);
    reject(new Error('Error fetching data'));
  });
}
