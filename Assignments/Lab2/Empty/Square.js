function Square(x,y,width,height,color)
{
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.color = color;
    console.log(x);
}

Square.prototype.draw = function(ctx)
{

   // var canvas = document.getElementById('mycanvas');
    //var ctx = canvas.getContext('2d');
    
 
    ctx.fillStyle = this.color;

    ctx.fillRect(this.x, this.y, this.width, this.height);
 
}