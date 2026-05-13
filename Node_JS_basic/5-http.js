const { createServer } = require('node:http');
const fs = require('fs').promises;

const hostname = '127.0.0.1';
const port = 1245;


async function readCsv(filename) {
  let content;
  let result = 'This is the list of our students\n';

  try {
    content = (await fs.readFile(filename)).toString();
  } catch (e) {
    throw new Error('Cannot load the database');
  }
  const listCsv = content.split('\n');
  const listCol = listCsv[0].split(',');
  const listDict = listCsv.filter((a, idx) => a !== '' && idx > 0).map((a) => {
    const line = a.split(',');
    const dict = {};
    for (let i = 0; i < listCol.length; i += 1) {
      dict[listCol[i]] = line[i];
    }
    return (dict);
  });
  result += `Number of students: ${listDict.length}`;
  const listField = {};
  listDict.forEach((line) => {
    if (listField[line.field] === undefined) {
      listField[line.field] = [];
    }
    listField[line.field].push(line.firstname);
  });
  Object.keys(listField).forEach((key) => {
    const listStudent = listField[key];
    result += `\nNumber of students in ${key}: ${listStudent.length}. List: ${listStudent.join(', ')}`;
  });
  return (result);
}

const app = createServer();
app.on('request', async (req, res) => {
    if (req.url === '/') {
      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/plain');
      res.end('Hello Holberton School!');
    } else if (req.url === '/students') {
      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/plain');
      res.end(await readCsv('database.csv'));
    }
  })

app.listen(port, hostname);

module.exports = app;
