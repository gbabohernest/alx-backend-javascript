export default (listOfStudents, city) => {
  if (!Array.isArray(listOfStudents) || !listOfStudents.every((student) => typeof student === 'object')) {
    throw new Error('Must be an array of object(s)');
  }
  return listOfStudents.filter((student) => student.location === city);
};
