/**
 * Created by Administrator on 2016/4/5.
 */

var http = require("http");

http.createServer(function (request, response) {
    //response.writeHead(statusCode, [reasonPhrase], [headers])
    // statusCode   HTTP״̬�룬��200(����ɹ�����404��δ�ҵ����ȡ�

    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write("Hello World");
    response.end();
}).listen(8888);

console.log("Server has started.");
