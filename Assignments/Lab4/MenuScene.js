/**
 * This is the sub class representing the menu scene
 */
class MenuScene extends Scene
{
    /**
     * This is the class constructor
     */
    constructor()
    {
        super("Menu Scene");
        this.color = "rgb(100,250,100)";
    }

    /**
     * The class render function
     * @param {Object} ctx This object represents the canvas
     */
    render(ctx)
    {
        ctx.clearRect(0,0,innerWidth,innerHeight);
        document.body.style.background = this.color;
        ctx.font="100px Arial";
        ctx.fillText(this.title,60,90);
    }
}