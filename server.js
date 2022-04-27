const http = require('http');
const fs = require('fs');
const os = require('os');

const port = 4000;
const host = '127.0.0.1';

/* Create the server */
const server = http
  .createServer((req, res) => {
    /* Get the url of each request */
    const urlPath = req.url;

    if (urlPath === '/' || urlPath === '/home') {
      //index routing
      res.writeHead(200, { 'Content-Type': 'text/html' });
      fs.createReadStream(__dirname + '/pages/index.html', 'utf-8').pipe(res);
    } else if (urlPath === '/about') {
      //about routing
      res.writeHead(200, { 'Content-Type': 'text/html' });
      fs.createReadStream(__dirname + '/pages/about.html', 'utf-8').pipe(res);
    } else if (urlPath === '/sys') {
      //system routing
      const osInfo = {
        hostname: os.hostname(),
        platform: os.platform(),
        architecture: os.arch(),
        numOfCPUS: os.cpus().length,
        networkInterfaces: os.networkInterfaces(),
        uptime: os.uptime(),
      };
      res.writeHead(201, { 'Content-Type': 'text/plain' });
      fs.writeFile('osinfo.json', JSON.stringify(osInfo), (err) => {
        if (err) {
          console.error(err);
        }
        // Display if osinfo.json file is created and has the OS information
        res.end('Your OS info has been saved successfully!');
      });
    } else {
      //404 routing
      res.writeHead(404, { 'Content-Type': 'text/html' });
      fs.createReadStream(__dirname + '/pages/404.html', 'utf-8').pipe(res);
    }
    /* The end */
  })
  .listen(port, host, () => {
    console.log(`Server listening on ${host}:${port}`);
  });
