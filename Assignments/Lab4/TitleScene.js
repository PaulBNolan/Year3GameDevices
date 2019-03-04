/**
 * This is the sub for the title scene
 */
class TitleScene extends Scene
{
    /**
     * This is the class constructor
     */
    constructor()
    {
        super("Title Scene");
        this.color = "rgb(200,0,200)";
    }

    /**
     * The class render function
     * @param {Object} ctx This object represents the canvas
     */
    render(ctx)
    {
        ctx.clearRect(0,0,innerWidth,innerHeight);
        document.body.style.background = this.color;
        ctx.font="50px sans-serif";
        ctx.fillText(this.title,60,90);
    }
}