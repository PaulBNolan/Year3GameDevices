/**
 * The sub class for the GameOverScene
 */
class GameOverScene extends Scene
{
    //The sub class constructor
    constructor()
    {
        //The base constructor is called
        super("Game Over");
        //Color created
        this.color = "rgb(240,100,150)";
    }
    /**
     * The class render function
     * @param {Object} ctx This object represents the canvas
     */
    render(ctx)
    {
        ctx.clearRect(0,0,innerWidth,innerHeight);
        //Font and color set
        document.body.style.background = this.color;
        ctx.font="75px Times New Roman";
        ctx.fillText(this.title,60,90);
    }
}