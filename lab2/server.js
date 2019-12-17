'use strict';
var http = require('http');
var port = process.env.PORT || 1337;
var url = require('url');

http.createServer(function (req, res) {
    var queryString = url.parse(req.url, true).query;

    var method = queryString.method;
    var x = parseFloat(queryString.x);
    var y = parseFloat(queryString.y);
    var output;

    //check the value of method and calculate x and y 
    if (method == 'add') {
        output = x + ' + ' + y + ' = ' + (x + y);
    }
    else if (method == 'subtract') {output = x + ' - ' + y + ' = ' + (x - y);
    }
    else if (method == 'multiply') {output = x + ' * ' + y + ' = ' + (x * y);
    }
    else if (method == 'divide') { output = x + ' / ' + y + ' = ' + (x / y);
    }
    else {        output = "Invalid input, please check";
    }

    res.write(output);
    res.end();
}).listen(port);
