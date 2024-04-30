const fs = require('fs');

// Get the list of student names for a specific field helper function
const getStudentList = (lines, field) => {
  const studentList = lines.slice(1) // skip header line
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

const countStudents = (path) => {
  try {
    const data = fs.readFileSync(path, 'utf-8');
    const lines = data.trim().split('\n');

    let csCount = 0;
    let sweCount = 0;

    lines.forEach((line, index) => {
      // skip the header line
      if (index === 0) return;

      const [firstName, lastName, age, field] = line.split(',');
      if (firstName && lastName && age && field) {
        // Increment counts based on the field
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
  } catch (error) {
    throw new Error('Cannot load the database');
    // console.error(`Cannot load the database: ${error.message}`);
  }
};

module.exports = countStudents;
