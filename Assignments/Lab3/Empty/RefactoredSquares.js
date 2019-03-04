/**
 * Main function is initialised
 */
function main()
{
var ctx = initCanvas();

var square1 = new Square(
    Math.random() * window.innerWidth, 
    Math.random() * window.innerHeight, 
    25, 
    25,
    rgb(200,200,200));

    document.addEventListener("keydown", function(event)
    {
        if(event.keyCode == 37 
            || event.keyCode === 38 
            || event.keyCode == 39 
            || event.keyCode === 40)
        {
            square1.movement(ctx,event.keyCode);
        }
    });


draw(ctx, square1);
}

/**
 * Canvas Initialized
 */
function initCanvas()
{

var canvas = document.createElement("canvas");

window.addEventListener("keydown", function(e) {
  if([32, 37, 38, 39, 40].indexOf(e.keyCode) > -1) {
      e.preventDefault();
  }
}, false);


canvas.id = 'mycanvas';
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var ctx = canvas.getContext("2d");

document.body.appendChild(canvas);

return ctx;
}

/**
 * @param {Number} value 
 * @param {Number} min 
 * @param {Number} max 
 */
function clamp(value, min, max)
{
if(max<min) {
    var temp = min;
    min = max;
    max = temp;
}
return Math.max(min, Math.min(value, max));
}


/**
 * Color intialized
 * @param {Number} r Red Color Value
 * @param {Number} g Green Color Value
 * @param {Number} b Blue Color Value
 */
function rgb(r, g, b)
{
return 
'rgb(' + 
clamp(Math.round(r),0,255) + ', '+ 
clamp(Math.round(g),0,255) +', ' + 
clamp(Math.round(b),0,255) + ')' ;
}
/**
 * The square drawn and key input handled
 * @param {Object} ctx The Canvas given context
 * @param {Object} Square1 Object created for square class
 */
function draw(ctx, square1)
{
  square1.draw(ctx);
}
