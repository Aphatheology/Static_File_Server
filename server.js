const http = require('http');
const fs = require('fs');
const os = require('os');
const path = require("path")
const port = 5000;
const host = "127.0.0.1"

const server = http.createServer((req, res) => {
    let reqUrl = req.url

    switch (reqUrl) {
        case "/":

        case "/about":

        case "/home":
        case "/sys":
        default:
            res.writeHead(404, { "Content-Type": "text/html" })
            fs.readFile(path.join(__dirname, "pages", "404.html"), "utf-8", (err, data) => {
                // Display the error
                if (err) {
                    console.error(err)
                }
                res.end(data)
            })
    }
})
server.listen(port, host, () => {
    console.log(`Listening @ ${host}:${port}`)
})