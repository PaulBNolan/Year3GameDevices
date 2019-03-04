/**
 * This class represents the game
 */
class Game
{
    /**
     * This is the game class constructor
     * @param {Object} img This object is used to load the spreadsheet
     */
    constructor(img)
    {

        this.initCanvas();
        //These lines are used to loop through the update and draw functions
        this.boundRecursiveUpdate = this.update.bind(this);

        this.img = img;
        this.img.addEventListener('load', function() {}, false);

        this.SpriteObject = new Sprite(this.ctx, {width: 100, height: 100, image: this.img},6,100,100);
        this.SpriteObject2 = new Sprite(this.ctx, {width: 100, height: 100, image: this.img},0,300,300);

        this.previousTime = 0;

        this.now = new Date();
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
     * This function is used to update the 2 sprites
     */
    update()
    {
        var deltaTime = 1000.0/60.0;

        this.SpriteObject.update(deltaTime);
        this.SpriteObject2.update(deltaTime);

        window.requestAnimationFrame(this.boundRecursiveUpdate);
    }
}