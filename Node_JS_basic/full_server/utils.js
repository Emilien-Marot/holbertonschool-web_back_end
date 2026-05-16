const fs = require('fs').promises;

export default function readDatabase(filename) {
  return Promise.resolve(fs.readFile(filename))
    .then((content) => {
      const listCsv = content.toString().split('\n');
      const listCol = listCsv[0].split(',');
      const listDict = listCsv.filter((a, idx) => a !== '' && idx > 0).map((a) => {
        const line = a.split(',');
        const dict = {};
        for (let i = 0; i < listCol.length; i += 1) {
          dict[listCol[i]] = line[i];
        }
        return (dict);
      });
      const listField = {};
      listDict.forEach((line) => {
        if (listField[line.field] === undefined) {
          listField[line.field] = [];
        }
        listField[line.field].push(line.firstname);
      });
      return (listField);
    }, () => new Error('Cannot load the database'));
}

module.exports = readDatabase;
