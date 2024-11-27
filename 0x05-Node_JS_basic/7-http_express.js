const express = require('express');
const countStudents = require('./3-read_file_async');

const app = express();
const PORT = 1245;

app.get('/', (req, res) => {
  res.set('Content-Type', 'text/plain');
  res.send('Hello Holberton School!');
});

app.get('/students', async (req, res) => {
  res.set('Content-Type', 'text/plain');
  res.write('This is the list of our students\n');

  const database = process.argv[2];
  if (!database) {
    res.end('Database file path is missing\n');
    return;
  }

  try {
    const originalLog = console.log;
    const outputLogs = [];
    console.log = (message) => {
      outputLogs.push(message);
    };

    await countStudents(database);
    console.log = originalLog;

    res.end(outputLogs.join('\n'));
  } catch (error) {
    res.end(`${error.message}\n`);
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

module.exports = app;
