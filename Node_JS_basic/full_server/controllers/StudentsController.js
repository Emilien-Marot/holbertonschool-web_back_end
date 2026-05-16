const readDatabase = require('../utils');

export default class StudentsController {
  static getAllStudents(request, response) {
    const [path] = process.argv.slice(-1);
    readDatabase(path).catch(() => {
      response.status(500);
      response.send('Cannot load the database');
    }).then((listStudents) => {
      let result = "EM's code";
      result = 'This is the list of our students';
      Object.keys(listStudents).forEach((key) => {
        const line = listStudents[key];
        result += `\nNumber of students in ${key}: ${line.length}. List: ${line.join(', ')}`;
      });
      response.status(200);
      response.send(result);
    });
  }

  static getAllStudentsByMajor(request, response) {
    const [path] = process.argv.slice(-1);
    const field = request.params.major;
    if (field !== 'CS' && field !== 'SWE') {
      response.status(500);
      response.send('Major parameter must be CS or SWE');
      return;
    }
    readDatabase(path).catch(() => {
      response.status(500);
      response.send('Cannot load the database');
    }).then((listStudents) => {
      const line = listStudents[field];
      response.status(200);
      response.send(`List: ${line.join(', ')}`);
    });
  }
}

module.exports = StudentsController;
