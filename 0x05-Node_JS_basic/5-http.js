const http = require('http');
const fs = require('fs');

const PORT = 1245;
const app = http.createServer();
const DB_FILE = process.argv.length > 2 ? process.argv[2] : '';

// function to count students from a csv file
const countStudents = (filePath) => new Promise((resolve, reject) => {
  fs.readFile(filePath, 'utf-8', (err, data) => {
    if (err) {
      reject(new Error('Cannot load the database'));
      return;
    }

    const lines = data.trim().split('\n');
    const headers = lines.shift().split(',');
    const students = lines.map((line) => {
      const values = line.split(',');
      return headers.reduce((obj, header, index) => ({
        ...obj,
        [header.trim()]:
                  values[index].trim(),
      }),
      {});
    });
    resolve(students);
  });
});

const handleRequest = async (req, res) => {
  const { url } = req;

  if (url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.write('Hello Holberton School!');
    res.end();
    // res.end('Hello Holberton School!');
  } else if (url === '/students') {
    try {
      const students = await countStudents(DB_FILE);
      const totalStudents = students.length;
      const csStudents = students.filter((student) => student.field === 'CS');
      const sweStudents = students.filter((student) => student.field === 'SWE');

      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.write('This is the list of our students\n');
      res.write(`Number of students: ${totalStudents}\n`);
      res.write(`Number of students in CS: ${csStudents.length}. List: ${csStudents.map((student) => student.firstname).join(', ')}\n`);
      res.write(`Number of students in SWE: ${sweStudents.length}. List: ${sweStudents.map((student) => student.firstname).join(', ')}`);
      res.end();
    } catch (err) {
      res.writeHead(500, { 'Content-Type': 'text/plain' });
      res.end(err.message);
    }
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('404 - Not Found\n');
  }
};

app.on('request', handleRequest);

app.listen(PORT);
module.exports = app;
