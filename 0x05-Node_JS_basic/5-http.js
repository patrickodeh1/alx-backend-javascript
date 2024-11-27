const http = require('http');
const url = require('url');
const countStudents = require('./3-read_file_async');

const database = process.argv[2];
const app = http.createServer(async (req, res) => {
  const parsedUrl = url.parse(req.url, true);

  if (parsedUrl.pathname === '/') {
    res.writeHead(200, { 'content-type': 'text/plain' });
    res.end('Hello Holberton School!');
  } else if (parsedUrl.path === '/students') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.write('This is the list of our students\n');

    const originalLog = console.log;
    const outputLogs = [];
    console.log = (message) => {
      outputLogs.push(message);
    };

    try {
      await countStudents(database);
      console.log = originalLog;
      res.end(outputLogs.join('\n'));
    } catch (error) {
      console.log = originalLog;
      res.end(`${error.message}\n`);
    }
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('404 Not Found\n');
  }
});

app.listen(1245, () => {
  console.log('...');
});

module.exports = app;
