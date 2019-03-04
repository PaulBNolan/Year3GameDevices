/**
 * This class represents the games Goal
 */
class Goal
{
    /**
     * This is the goal construtor
     * @param {Number} x This value represents the players x position
     * @param {Number} y This value represents the players y position
     * @param {Number} l This value represents the players side length
     */
    constructor(x,y,l)
    {
        this.x = x;
        this.y = y;
        this.l = l;
    }

    /**
     * This is the players draw function
     * @param {Object} ctx This value represents the ctx object
     */
    draw(ctx)
    {
        ctx.fillStyle = "#00FF00";
        //Hollow Square is drawn
        ctx.strokeRect(this.x,this.y,this.l,this.l);
    }
}