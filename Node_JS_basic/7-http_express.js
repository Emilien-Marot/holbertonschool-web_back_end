const express = require('express');
const { promises: fs } = require('fs');

const app = express();
const port = 1245;
const [, , filename] = process.argv;

async function readCsv(filename) {
  let content;
  let result = 'This is the list of our students\n';

  try {
    content = (await fs.readFile(filename)).toString();
  } catch (e) {
    return ('Cannot load the database');
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

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', async (req, res) => {
  res.send(await readCsv(filename));
});

app.listen(port);

module.exports = app;
