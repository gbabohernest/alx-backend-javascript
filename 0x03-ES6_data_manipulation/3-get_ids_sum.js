export default (listOfStudents) => {
  if (!Array.isArray(listOfStudents) || !listOfStudents.every((student) => typeof student === 'object')) {
    throw new Error('Must be an array of object(s)');
  }
  const sumOfIDS = listOfStudents.reduce((total, student) => {
    const { id } = student;
    return total + id;
  }, 0);

  return sumOfIDS;
};
