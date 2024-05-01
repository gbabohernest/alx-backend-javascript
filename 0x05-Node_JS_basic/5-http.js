/* eslint-disable no-unused-vars */
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
    } else {
      const lines = data.trim().split('\n');
      const headers = lines.shift().split(',');
      const students = {};
      const fields = {};

      for (const line of lines) {
        const [firstname, , , field] = line.split(',');
        if (field) {
          if (!students[field]) {
            students[field] = [];
            fields[field] = 0;
          }
          students[field].push(firstname);
          fields[field] += 1;
        }
      }

      const totalStudents = Object.values(fields).reduce((acc, cur) => acc + cur, 0);
      let output = 'This is the list of our students\n';
      output += `Number of students: ${totalStudents}\n`;
      for (const [field, count] of Object.entries(fields)) {
        output += `Number of students in ${field}: ${count}. List: ${students[field].join(', ')}\n`;
      }
      resolve(output.trim());
    }
  });
});

const handleRequest = async (req, res) => {
  const { url } = req;

  if (url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello Holberton School!');
  } else if (url === '/students') {
    try {
      const output = await countStudents(DB_FILE);
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.end(output);
    } catch (err) {
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end('Cannot load the database\n');
    }
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('404 - Not Found\n');
  }
};

app.on('request', handleRequest);

app.listen(PORT);
module.exports = app;
