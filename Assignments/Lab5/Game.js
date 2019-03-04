/**
 * This class represents the game
 */
class Game
{
    /**
     * This is the games constructor
     */
    constructor()
    {
        this.initCanvas();
        this.initWorld();
        //These lines are used to loop through the update and draw functions
        this.boundRecursiveUpdate = this.update.bind(this);
        this.boundDraw = this.draw.bind(this);
    }
    /**
     * This function intializes the canvas
     */
    initCanvas()
    {
        var canvas = document.createElement("canvas");

        canvas.id = 'mycanvas';
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        var ctx = canvas.getContext("2d");

        document.body.appendChild(canvas);

        ctx.font = '48px serif';
        this.ctx = ctx;
    }

    /**
     * 
     */
    initWorld()
    {
        console.log("Initialising game world");
        //The player object is created
        this.player = new Player(window.innerWidth/2,window.innerHeight/2,50);
        //The goal object is created
        this.goal = new Goal(window.innerWidth/4,window.innerHeight/4,75)
        //This line is implemented to move the player when the arrows are pressed
        document.addEventListener("keydown", this.keyDownHandler.bind(null,this.player));
        //This line is implemented to prevent the screen from scrolling
        window.addEventListener("keydown", function(e) {
            // Space and arrow keys
            if([32, 37, 38, 39, 40].indexOf(e.keyCode) > -1) {
                e.preventDefault();
            }
        }, false);
        
    }

    /**
     * This function is used to check for key events
     * @param {Object} player This is the player object
     * @param {Object} e This object represnts the event
     */
    keyDownHandler(player,e)
    {
        // Handle key events here...
        player.movement(e.keyCode);
    }

    /**
     * This function is used to carry out collision responses
     */
    collisionResponse()
    {
        this.ctx.save();
        //End Text is drawn
        this.ctx.fillStyle = "#00008B";

        this.ctx.font = 'italic 40pt Calibri';

        this.ctx.textBaseline = "top";

        this.ctx.fillText("You Win", window.innerWidth/2,window.innerHeight/2);

        this.ctx.restore();
    }

    /**
     * //This function is used to update the game object
     */
    update()
    {
        this.boundDraw();

        if(this.player.checkCollision(this.goal) == true)
        {
            this.collisionResponse();
        }

        //The update function is calling again by this line
        window.requestAnimationFrame(this.boundRecursiveUpdate);
    }
    /**
     * This function is used to draw the objects draw functions
     */
    draw()
    {
        //The screened cleared
        this.ctx.clearRect(0,0,window.innerWidth,window.innerHeight);
        //Object draw functions are called
        this.player.draw(this.ctx);
        this.goal.draw(this.ctx);
    }
}