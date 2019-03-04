/**
 * This is the class for the Player Character
 */
class Player
{
    /**
     * This is the players constructor
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
     * //This function moves the player based on key pressed
     * @param {Number} e This value represents the keycode passed
     */
    movement(e)
    {
        //The keycode values are checked to decide the correct course of action
        if(e === 37)
        {
            this.x = this.x - 5;
        }

        else if(e === 38)
        {
            this.y = this.y - 5;
        }

        else if(e === 39)
        {
            this.x = this.x + 5;
        }

        else if(e === 40)
        {
            this.y = this.y + 5;
        }
    }
    /**
     * //This function checks if a collision is true
     * @param {Object} goal This is the goal object
     */
    checkCollision(goal)
    {
        //Value is set
        this.collides=false;
        //This if checks for collisions
        if((this.x < goal.x + goal.l) &&
           (this.x + this.l > goal.x) &&
           (this.y + this.l > goal.y) &&
           (this.y < goal.y + goal.l))
        {
            this.collides = true;
        }
        //Result is return
        return this.collides;
    }
    /**
     * This is the players draw function
     * @param {Object} ctx This value represents the ctx object
     */
    draw(ctx)
    {
        ctx.fillStyle = "#FAEBD7";
        ctx.fillRect(this.x,this.y,this.l,this.l);
    }
}