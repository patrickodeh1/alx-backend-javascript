const fs = require('fs');

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf-8');
    const lines = data.split('\n');
    const studentsData = lines.slice(1);
    const studentsByField = {};

    studentsData.forEach((line) => {
      const fields = line.split(',');
      const firstName = fields[0];
      const field = fields[3];

      if (!studentsByField[field]) {
        studentsByField[field] = [];
      }

      studentsByField[field].push(firstName);
    });

    const totalStudents = studentsData.length;

    console.log(`Number of students: ${totalStudents}`);

    for (const field of Object.keys(studentsByField)) {
      console.log(`Number of students in ${field}: ${studentsByField[field].length}. List: ${studentsByField[field].join(', ')}`);
    }
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
