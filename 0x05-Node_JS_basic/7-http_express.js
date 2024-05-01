/* eslint-disable no-unused-vars */
const express = require('express');
const fs = require('fs').promises;

const app = express();
const PORT = 1245;

const countStudents = async (filePath) => {
  try {
    const data = await fs.readFile(filePath, 'utf8');
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
    return output.trim();
  } catch (err) {
    throw new Error('Cannot load the database');
  }
};

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', async (req, res) => {
  try {
    const output = await countStudents(process.argv[2]);
    res.set('Content-Type', 'text/plain');
    res.send(output);
  } catch (err) {
    res.status(404).send('Cannot load the database');
  }
});

app.listen(PORT);

module.exports = app;
