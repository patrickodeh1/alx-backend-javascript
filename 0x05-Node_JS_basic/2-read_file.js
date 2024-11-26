const fs = require('fs');

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf-8');
    const lines = data.split('\n').filter((line) => line.trim() !== '');
    
    if (lines.length <= 1) {
      throw new Error('No valid student data in the file');
    }

    const studentsData = lines.slice(1);
    const studentsByField = {};

    studentsData.forEach((line) => {
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
      0
    );

    console.log(`Number of students: ${totalStudents}`);
    for (const [field, names] of Object.entries(studentsByField)) {
      console.log(
        `Number of students in ${field}: ${names.length}. List: ${names.join(', ')}`
      );
    }
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
