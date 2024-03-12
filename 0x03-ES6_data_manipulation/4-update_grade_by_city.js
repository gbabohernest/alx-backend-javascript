export default (listOfStudents, city, newGrades) => {
  if (
    !Array.isArray(listOfStudents)
    || !listOfStudents.every((student) => typeof student === 'object')
    || !Array.isArray(newGrades)
    || !newGrades.every((grade) => typeof grade === 'object')
    || typeof city !== 'string'
  ) {
    throw new Error('Invalid type');
  }

  const filteredStudents = listOfStudents.filter(
    (student) => student.location === city,
  );
  //   console.log(filteredStudents);
  const updateStudent = filteredStudents.map((student) => {
    const { id } = student;
    const gradeObject = newGrades.find((grade) => grade.studentId === id);
    // console.log(gradeObject);
    if (gradeObject) {
      return {
        ...student,
        grade: gradeObject.grade,
      };
    }
    return {
      ...student,
      grade: 'N/A',
    };
  });
  return updateStudent;
};
