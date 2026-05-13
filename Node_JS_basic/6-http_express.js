const { createServer } = require('node:http');

const hostname = '127.0.0.1';
const port = 1245;

const app = createServer();
app.on('request', async (req, res) => {
  res.statusCode = 200;
  if (req.url === '/') {
    res.setHeader('Content-Type', 'text/html');
    res.end('Hello Holberton School!');
  } else {
    res.setHeader('Content-Type', 'text/plain');
    res.end('<!DOCTYPE html>\n'
      + '<html lang="en">\n'
      + '<head>\n'
      + '<meta charset="utf-8">\n'
      + '<title>Error</title>\n'
      + '</head>\n'
      + '<body>\n'
      + '<pre>Cannot GET /lskdlskd</pre>\n'
      + '</body>\n'
      + '</html>');
  }
});

app.listen(port, hostname);

module.exports = app;
