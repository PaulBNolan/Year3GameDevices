//These values cover the current point of the finger
var cPointX;
var cPointY;

//These values cover the start point of the swipe
var sPointX;
var sPointY;

//This value is used to store the swipes length
var length;

//These values are used to find the time length of the swipe
var startTime;
var endTime;

/**
 * This function is used to initialise the games canvas
 */
function initCanvas()
{
    var canvas = document.createElement("canvas");

    canvas.id = 'mycanvas';
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    var ctx = canvas.getContext("2d");

    document.body.appendChild(canvas);

    ctx.font = '48px serif';

    document.addEventListener("touchstart",onTouchStart.bind(null,ctx));
    document.addEventListener("touchmove",onTouchMove.bind(null,ctx));
    document.addEventListener("touchend",onTouchEnd.bind(null,ctx));
}

/**
 * This function is used to handle events at the start of touching the screen
 * @param {Object} ctx The Canvas context
 * @param {Object} e The event that occured
 */
function onTouchStart(ctx,e)
{
   ctx.clearRect(0,0,window.innerWidth,window.innerHeight);
   
   var touches = e.touches;
   cPointX = touches[0].clientX;
   cPointY = touches[0].clientY;

   sPointX = touches[0].clientX;
   sPointY = touches[0].clientY;

   // Print out (x,y) co-ords of touch: touches[0].clientX contains 
   //  the x position.
   console.log(touches[0].clientX + " " + touches[0].clientY);
   startTime = new Date();
}

/**
 * This function is used handle events during the swipe
 * @param {Object} ctx The canvas context
 * @param {Object} e The event that occured
 */
function onTouchMove(ctx,e)
{
    ctx.beginPath();
    ctx.moveTo(cPointX,cPointY);    //the previous touch
    ctx.lineTo(e.touches[0].clientX,e.touches[0].clientY);    //the current touch
    ctx.stroke();
    cPointX = e.touches[0].clientX;
    cPointY = e.touches[0].clientY;
}

/**
 * This function handles events at the end of the swipe
 * @param {Object} ctx The canvas context
 * @param {Object} e The event that occured
 */
function onTouchEnd(ctx,e)
{
    //The swipe length is calculated
    length = Math.sqrt(Math.pow(cPointX - sPointX,2) + Math.pow(cPointY - sPointY,2));
    //The current time is found
    endTime = new Date();
    //Time length is found
    var time = endTime - startTime;
    //Both time length and distance of swipe are checked
    if(length > 100 && time < 3000)
    {
        console.log("Swipe Detected");
        ctx.fillText("Swipe Detected",0,50);
    }
}

function main()
{
    initCanvas();
    console.log(is_touch_device());
}