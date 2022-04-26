const http = require('http');
const fs = require('fs');
const os = require('os');


const port = 4000;
const host = "127.0.0.1"



/* Code should be in the code block of the http server */
const urlPath = req.url;

if (urlPath === '/' || urlPath === '/index') {
  //index routing
} else if (urlPath === '/about') {
  //about routing
} else if (urlPath === '/sys') {
  //system routing
} else {
  //404 routing
}
/* The end */
