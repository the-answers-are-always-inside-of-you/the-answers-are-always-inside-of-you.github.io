// HTTP モジュールの読み込み
var http = require("http");

var fs = require("fs");
var path = require("path");

const server = http.createServer((req, res) => {
    var filePath = "." + req.url;
    if (filePath == "./") {
        filePath = "./200.html";
    }

    var extname = String(path.extname(filePath)).toLowerCase();
    var mimeTypes = {
        ".html": "text/html",
        ".js": "text/javascript",
        ".css": "text/css",
        ".json": "application/json",
        ".png": "image/png",
        ".jpg": "image/jpg",
        ".gif": "image/gif",
        ".svg": "image/svg+xml",
        ".wav": "audio/wav",
        ".mp4": "video/mp4",
        ".woff": "application/font-woff",
        ".ttf": "application/font-ttf",
        ".eot": "application/vnd.ms-fontobject",
        ".otf": "application/font-otf",
        ".wasm": "application/wasm",
    };

    var contentType = mimeTypes[extname] || "application/octet-stream";

    fs.readFile(filePath, function (error, content) {
        if (error) {
            if (error.code == "ENOENT") {
                fs.readFile("./404.html", function (error, content) {
                    res.writeHead(404, { "Content-Type": "text/html" });
                    res.end(content, "utf-8");
                });
            } else {
                res.writeHead(500);
                res.end(
                    "Sorry, check with the site admin for error: " +
                    error.code +
                    " ..\n",
                );
            }
        } else {
            res.writeHead(200, { "Content-Type": contentType });
            res.end(content, "utf-8");
        }
    });
})

// サーバーを起動
const hostname = "127.0.0.1";
const port = 3000;

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
