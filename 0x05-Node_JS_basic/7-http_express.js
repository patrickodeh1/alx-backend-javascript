const express = require('express');
const fs = require('fs');

const app = express();
const port = 1245;

const countStudents = (filePath) => {
  try {
    const data = fs.readFileSync(filePath, 'utf8');
    const lines = data.trim().split('\n').slice(1); // Exclude header row
    const students = {};

    lines.forEach((line) => {
      const [name, , , field] = line.split(',');
      if (field) {
        if (!students[field]) students[field] = [];
        students[field].push(name);
      }
    });

    const totalCount = `Number of students: ${lines.length}`;
    const fieldCount = Object.entries(students)
      .map(([field, names]) => `Number of students in ${field}: ${names.length}. List: ${names.join(', ')}`)
      .join('\n');

    return `${totalCount}\n${fieldCount}`;
  } catch (err) {
    throw new Error('Cannot load the database');
  }
};

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  const filePath = process.argv[2];

  try {
    const result = countStudents(filePath);
    res.send(`This is the list of our students\n${result}`);
  } catch (err) {
    res.send(err.message);
  }
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

module.exports = app;
