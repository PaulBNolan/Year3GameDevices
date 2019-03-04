var ws = new WebSocket("ws://localhost:8080/wstest");
function main()
{
    

    //called when the websocket is opened
    ws.onopen = function() {
        let message = {};
        message.type = "test";
        message.data = "hello";
        ws.send(JSON.stringify(message));

        message = JSON.stringify(message);
        console.log(message);
        message = JSON.parse(message);
        console.log(message);
    };
    //called when the client receives a message
    ws.onmessage = function (messageEvent) {
        console.log(messageEvent)

        let message = messageEvent.data;

        if(messageEvent.data != "connection opened")
        {
        message = JSON.parse(messageEvent.data);
        }

        if(message.type == "updateState")
        {
            updateLocalState(message.mouseX, message.mouseY)
        }
        alert(JSON.stringify(message));
    };

    ctx = initCanvas();
}

function initCanvas()
{
    var canvas = document.createElement("canvas");

    canvas.id = 'mycanvas';
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    var ctx = canvas.getContext("2d");

    document.body.appendChild(canvas);
    document.addEventListener("click", updateState.bind()
    );
    ctx.font = '48px serif';

    return ctx;
}

function updateState(e)
{
    console.log(e.clientX + " " + e.clientY);

    let message = {};
    message.type = "updateState";
    message.mouseX = e.clientX;
    message.mouseY = e.clientY;

    if(ws.readyState == ws.OPEN)
    {
        ws.send(JSON.stringify(message));
        console.log(1);
    }
}

function updateLocalState(x,y)
{
    console.log("X: "+ x + " Y:" + y)
}