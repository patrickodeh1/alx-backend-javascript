const http = require('http');
const fs = require('fs');

const hostname = '127.0.0.1';
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

    console.log(`Number of students: ${lines.length}`);
    for (const [field, names] of Object.entries(students)) {
      console.log(`Number of students in ${field}: ${names.length}. List: ${names.join(', ')}`);
    }
    return `Number of students: ${lines.length}\n` + 
      Object.entries(students)
        .map(([field, names]) => `Number of students in ${field}: ${names.length}. List: ${names.join(', ')}`)
        .join('\n');
  } catch (err) {
    throw new Error('Cannot load the database');
  }
};

const app = http.createServer((req, res) => {
  if (req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    const filePath = process.argv[2];

    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.write('This is the list of our students\n');
    try {
      const result = countStudents(filePath);
      res.end(result);
    } catch (err) {
      res.end(err.message);
    }
  }
});

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

module.exports = app;
