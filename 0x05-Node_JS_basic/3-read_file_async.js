const fs = require('fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf-8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }
      try {
        const lines = data.split('\n').filter((line) => line.trim() !== '');
        if (lines.length <= 1) {
          throw new Error('No valid student data in the file');
        }

        const StudentsData = lines.slice(1);
        const studentsByField = {};

        StudentsData.forEach((line) => {
          const fields = line.split(',');
          if (fields.length < 4) {
            return;
          }

          const firstName = fields[0].trim();
          const field = fields[3].trim();

          if (!studentsByField[field]) {
            studentsByField[field] = [];
          }
          studentsByField[field].push(firstName);
        });

        const totalStudents = Object.values(studentsByField).reduce(
          (acc, names) => acc + names.length,
          0,
        );

        console.log(`Number of students: ${totalStudents}`);
        for (const [field, names] of Object.entries(studentsByField)) {
          console.log(
            `Number of students in ${field}: ${names.length}. List: ${names.join(', ')}`,
          );
        }

        resolve();
      } catch (error) {
        reject(new Error('Cannot load the database'));
      }
    });
  });
}

module.exports = countStudents;
