
function main()
{
var ctx = initCanvas();
draw(ctx);
}


function initCanvas()
{

var canvas = document.createElement("canvas");

canvas.id = 'mycanvas';
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var ctx = canvas.getContext("2d");

document.body.appendChild(canvas);

return ctx;
}


function clamp(value, min, max)
{
if(max<min) {
    var temp = min;
    min = max;
    max = temp;
}
return Math.max(min, Math.min(value, max));
}



function rgb(r, g, b)
{
return 'rgb('+clamp(Math.round(r),0,255)+', '+clamp(Math.round(g),0,255)+', '+clamp(Math.round(b),0,255)+')';
}


function draw(ctx)
{
  var Squares = [];
 for(i = 0; i < 200; i++)
 {
    var r = (Math.random() * 255);
    var g = (Math.random() * 255);
    var b = (Math.random() * 255);

    Squares[i] = new Square(Math.random() * window.innerWidth, Math.random() * window.innerHeight, 25, 25,rgb(r,g,b));
    Squares[i].draw(ctx);
 }
}