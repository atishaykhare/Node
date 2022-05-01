const http = require('http');
const fs = require('fs');

function reqListener(req, res) {

    const url = req.url;
    const method = req.method;

    if(url === '/'){
        res.write('<html>')
        res.write('<head><title>Input Page</title></head>')
        res.write('<body><form action="/message" method="POST"><input type="text" name="message"/><br/><button type="submit" >Submit</button> </form></body>')
        res.write('</html>')
        return res.end();
    }
    if(url === '/message' && method === 'POST'){
        fs.writeFileSync('dummy.txt', 'Dummy Data')
        res.statusCode = 302;
        res.setHeader('Location', '/')
        console.log({req})
        return res.end();
        res.write('<html>')
        res.write('<head><title>Input Page</title></head>')
        res.write('<body><h1></h1></body>')
        res.write('</html>')
        return res.end();
    }

}

const server = http.createServer(reqListener);

server.listen(3000);
