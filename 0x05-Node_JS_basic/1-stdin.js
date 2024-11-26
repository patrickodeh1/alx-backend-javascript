const readline = require('readline');

const r = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

r.question('Welcome to Holberton School, what is your name?\n', (name) => {
  console.log(`Your name is: ${name}`);
  r.close();
});

r.on('close', () => {
  console.log('This important software is now closing\n');
});
