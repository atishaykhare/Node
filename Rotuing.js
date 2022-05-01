const http = require('http');
const fs = require('fs');

function reqListener(req, res) {

    const url = req.url;
    const method = req.method;

    if (url === '/') {
        res.write('<html>')
        res.write('<head><title>Input Page</title></head>')
        res.write('<body><form action="/message" method="POST"><input type="text" name="message"/><br/><button type="submit" >Submit</button> </form></body>')
        res.write('</html>')
        return res.end();
    }
    if (url === '/message' && method === 'POST') {
        const body = [];
        req.on('data', (chunk) => {
            console.log({chunk})
            body.push(chunk);
        })
        req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            const message = parsedBody.split('=')[1];
            fs.writeFileSync('dummy.txt', message)
            res.statusCode = 200;
            res.write('<html>')
            res.write('<head><title>Input Page</title></head>')
            res.write(`<body><h1>${message}</h1></body>`)
            res.write('</html>')
            return res.end();
        })
    }
    res.statusCode = 302;
    res.setHeader('Location', '/')
    return res.end();

}

const server = http.createServer(reqListener);

server.listen(3000);
