import fs from 'fs';

const readDatabase = (filePath) => new Promise((resolve, reject) => {
  fs.readFile(filePath, 'utf-8', (err, data) => {
    if (err) {
      reject(new Error('Cannot load the database'));
      return;
    }

    const students = data
      .split('\n')
      .filter((line) => line.trim() !== '') // Remove empty lines
      .slice(1) // Remove the header row
      .map((line) => line.split(','));

    const fields = {};
    students.forEach((student) => {
      const [firstname, , , field] = student;
      if (!fields[field]) fields[field] = [];
      fields[field].push(firstname);
    });

    resolve(fields);
  });
});

export default readDatabase;
