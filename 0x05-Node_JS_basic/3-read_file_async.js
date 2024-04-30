const fs = require('fs');

// Get the list of student names for a specific field helper function
const getStudentList = (lines, field) => {
  const studentList = lines.slice(1) // skip the header line
    .filter((line) => line.trim() !== '')
    .map((line) => {
      const [firstName, , , studentField] = line.split(',');
      if (studentField.trim().toUpperCase() === field.toUpperCase()) {
        return `${firstName}`;
      }
      return null;
    })
    .filter((name) => name !== null);

  return studentList.join(', ');
};

const countStudents = (path) => new Promise((resolve, reject) => {
  fs.readFile(path, 'utf-8', (err, data) => {
    if (err) {
      reject(new Error('Cannot load the database'));
      return;
    }

    const lines = data.trim().split('\n');

    let csCount = 0;
    let sweCount = 0;

    lines.forEach((line, index) => {
      // skip the header line
      if (index === 0) return;

      const [firstName, lastName, age, field] = line.split(',');
      if (firstName && lastName && age && field) {
        if (field.trim().toUpperCase() === 'CS') {
          csCount += 1;
        } else if (field.trim().toUpperCase() === 'SWE') {
          sweCount += 1;
        }
      }
    });

    console.log(`Number of students: ${lines.length - 1}`);
    console.log(`Number of students in CS: ${csCount}. List: ${getStudentList(lines, 'CS')}`);
    console.log(`Number of students in SWE: ${sweCount}. List: ${getStudentList(lines, 'SWE')}`);

    resolve({
      csCount,
      sweCount,
    });
  });
});

module.exports = countStudents;
