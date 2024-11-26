const readline = require('readline');


const r = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
console.log('Welcome to Holberton School, what is your name?');
r.on('line', (input) => {
  if (input.trim()) {
    console.log(`Your name is: ${input}`);
  }
  r.close();
});

r.on('close', () => {
  console.log('This important software is now closing\n');
  process.exit(0);
});
