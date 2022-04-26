const http = require('http');
const fs = require('fs');
const os = require('os');

/* Code should be in the code block of the http server */
const urlPath = req.url;

if (urlPath === '/' || urlPath === '/home') {
} else if (urlPath === '/about') {
} else if (urlPath === '/sys') {
} else {
}
/* The end */

const port = 4000;
const host = '127.0.0.1';
