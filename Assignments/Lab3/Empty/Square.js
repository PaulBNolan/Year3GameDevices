/**
 * Constructor function.
 * Square intialised
 * @param {Number} x The x coordinate of the square
 * @param {Number} y The y coordinate of the square
 * @param {Number} width The width of the square
 * @param {Number} height The height of the square
 * @param {String} color The color of the Square epxressed as an rgb string
 */
function Square(x,y,width,height,color)
{
    
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.color = color;
}


/**
 * The square moves
 * @param {Object} ctx The canvas given context
 * @param {Object} e The variable for the key input
 */
Square.prototype.movement = function(ctx,e)
{
    ctx.clearRect(0,0,window.innerWidth, window.innerHeight);
    if(e === 37)
    {
        this.x = this.x - 1;
    }
    else if(e === 38)
    {
    this.y = this.y - 1;
    }
    else if(e === 39)
    {
    this.x = this.x + 1;
    }
    else if (e === 40)
    {
        this.y = this.y + 1;
    }

    ctx.fillRect(this.x, this.y, this.width, this.height);
}
/**
 * The square drawn
 * @param {Object} ctx The canvas given context
 */
Square.prototype.draw = function(ctx)
{
    ctx.clearRect(this.x,this.y,this.width, this.height);

    ctx.fillStyle = this.color;

    ctx.fillRect(this.x, this.y, this.width, this.height);
}