import readDatabase from '../utils';

class StudentsController {
  static async getAllStudents(req, res) {
    const database = process.argv[2];

    try {
      const fields = await readDatabase(database);
      const response = ['This is the list of our students'];

      Object.keys(fields)
        .sort((a, b) => a.localeCompare(b)) // Alphabetic sort
        .forEach((field) => {
          const students = fields[field];
          response.push(`Number of students in ${field}: ${students.length}. List: ${students.join(', ')}`);
        });

      res.status(200).send(response.join('\n'));
    } catch (err) {
      res.status(500).send(err.message);
    }
  }

  static async getAllStudentsByMajor(req, res) {
    const database = process.argv[2];
    const { major } = req.params;

    if (major !== 'CS' && major !== 'SWE') {
      res.status(500).send('Major parameter must be CS or SWE');
      return;
    }

    try {
      const fields = await readDatabase(database);
      const students = fields[major] || [];
      res.status(200).send(`List: ${students.join(', ')}`);
    } catch (err) {
      res.status(500).send(err.message);
    }
  }
}

export default StudentsController;
