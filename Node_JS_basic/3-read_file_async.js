const fs = require('fs').promises;

module.exports = async (filename) => {
  let content;
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
  console.log(`Number of students: ${listDict.length}`);
  const listField = {};
  listDict.forEach((line) => {
    if (listField[line.field] === undefined) {
      listField[line.field] = [];
    }
    listField[line.field].push(line.firstname);
  });
  Object.keys(listField).forEach((key) => {
    const listStudent = listField[key];
    console.log(`Number of students in ${key}: ${listStudent.length}. List: ${listStudent.join(', ')}`);
  });
};
