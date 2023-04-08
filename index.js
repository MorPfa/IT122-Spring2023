const http = require("http"); 
http.createServer((req,res) => {
    var path = req.url.toLowerCase();    
    switch(path) {
        case '/':
            res.writeHead(200, {'Content-Type': 'text/plain'});
            res.end('This is the home page');
            break;
        case '/about':
            res.writeHead(200, {'Content-Type': 'text/plain'});
            res.end('My name is Moritz and I love coding!');
            break;
        default:
            res.writeHead(404, {'Content-Type': 'text/plain'});
            res.end('Error 404 Page Not found');
            break;
    }    
}).listen(process.env.PORT || 3000);