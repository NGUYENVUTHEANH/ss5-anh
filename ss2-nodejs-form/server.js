const http = require('http');
const port = 3000;
const fs = require('fs');
const url = require('url');


const server = http.createServer((req, res) => {
    res.writeHead(200, "Content-Type", 'text/html;charset=utf-8')
    const getForm = fs.readFileSync('./views/get-form.html', 'utf-8')
    const postForm = fs.readFileSync('./views/post-porm.html',)
    res.write(postForm)
    res.end();

    const query = url.parse(req.url, true);
    let data;
    if (req.method === "POST") {
        req.on('error', (err) => {
            console.error(err);
        })
            .on('data', (chuck) => {
                data += chuck.toString();
            })
            .on('end', () => {
                console.log(data);
            })
    } else {
        console.log('This is GET method');
    }


})


server.listen(port, () => {
    console.log(`app listen on : http://localhost:${port}`);
})