const express = require('express');

const app = express();
const port = 1245;

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/./', (req, res) => {
  res.send('<!DOCTYPE html>\n'
    + '<html lang="en">\n'
    + '<head>\n'
    + '<meta charset="utf-8">\n'
    + '<title>Error</title>\n'
    + '</head>\n'
    + '<body>\n'
    + '<pre>Cannot GET /lskdlskd</pre>\n'
    + '</body>\n'
    + '</html>');
});

app.listen(port);

module.exports = app;
