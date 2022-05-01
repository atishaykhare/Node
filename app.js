const http = require('http');

function reqListener(req, res) {
    // console.log(req)
    /* Request Header do have a very complex object with a lot of information what we really require are url, headers and methods
    * which can be accessed through
    * */
    console.log({url: req.url, method:req.method, headers: req.headers})


    res.setHeader('Content-Type', 'text/html');   //setting header in response

    res.write('<html>')
    res.write('<head><title>The end is here</title></head>')
    res.write('<body><h1>Crawling in my skin, these wounds will not heal!</h1></body>')
    res.write('</html>')

    res.end();  // the point where u tell to return the response no more write after this otherwise it will give error thant must not change the response after it is ended
    // process.exit();
}

const server = http.createServer(reqListener);

// http.createServer(function(req, res) {}) //anonymous function can also be used
// http.createServer((req, res) => {}) // also use arrow function

/*
* this creates server method actually returns a server.
*
* So we have to store that in a new variable or constant and I'll use a constant because I'll never overwrite
*
it, only create a server once.
*
* */

server.listen(3000);

/*
* As you can see we get a bunch of methods we can call and one method is listen. Listen now actually starts
a process where nodejs will not immediately exit our script but where nodejs will instead keep this
running to listen,
that's why the method is named like this for incoming requests.
Now listen as you can see takes a couple of arguments, optional arguments,
the first one is the port on which you want to listen. Now in production you typically would not fill this
out and it would take the default of port 80
but here on local development, we want to use a different port and you can also define a hostname. Now by
default,
this will be the name of the machine this is running on,
so for our local machine, this is localhost by default.
So let's just pass a port, 3000 is a port you often use but you're relatively free to use any
port you want, the thousands port are typically pretty safe.
And now with that, if we re-execute this, you'll see one important thing. The cursor here in the terminal
doesn't go back in a new line because this process here is now still running,
* */