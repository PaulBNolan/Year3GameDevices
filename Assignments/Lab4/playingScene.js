/**
 * This is the sub class representing the play scene
 */
class PlayingScene extends Scene
{
    /**
     * This is the class constructor
     */
    constructor()
    {
        super("Playing");
        this.color = "rgb(100,50,100)";
    }

    /**
     * The class render function
     * @param {Object} ctx This object represents the canvas
     */
    render(ctx)
    {
        ctx.clearRect(0,0,innerWidth,innerHeight);
        document.body.style.background = this.color;
        ctx.font="50px serif";
        ctx.fillText(this.title,60,90);
    }
}