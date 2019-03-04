function main()
{
    var ws = new WebSocket("ws://localhost:8080/wstest");
    //called when the websocket is opened
    ws.onopen = function() {
        ws.send("Hello, world");
    };
    //called when the client receives a message
    ws.onmessage = function (evt) {
        alert(evt.data);
    };

}