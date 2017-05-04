var http = require("http");
var url = require("url");

function start(route, handle){
    function onRequest(request, response){
        var postData = "";
        var pathname = url.parse(request.url).pathname;
        console.log("Request for " + pathname + " received.");

        route(handle, pathname, response, request);
    }

    http.createServer(onRequest).listen(3000, "0.0.0.0");
    console.log("Server has stared.");
}

exports.start = start;
