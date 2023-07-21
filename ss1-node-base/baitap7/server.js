const http = require('http');
const fs = require('fs');
const url = require('url');
const port = 3000;

const server = http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": 'text/html;charset=utf-8' });
    let readOverview = fs.readFileSync('./txt/overview.html', "utf-8");
    let readProduct = fs.readFileSync('./txt/product.html', "utf-8");
    const { query, pathname } = url.parse(req.url, true)
    if (pathname === '/' || pathname === '/overview') {
        res.write(readOverview)
    } else if (pathname === '/product') {
        res.write(readProduct)
    } else {
        res.writeHead(404, { "Content-Type": 'text/html;charset=utf-8' });
        res.write("Page 40+4=404")
    }
    res.end();
});

server.listen(port, () => {
    console.log(`Server listen on : http://localhost:${port}`);
});
