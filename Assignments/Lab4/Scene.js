class Scene
{
    /**
     * //The constructor for the scene class and subclasses
     * @param {String} title The text set for the screen
     */
    constructor(title)
    {
        this.title = title;
    }

    start()
    {
        console.log("Starting");
    }

    stop()
    {
        console.log("Stopping");
    }
    //The basic render function for the scene class
    render(ctx)
    {
        ctx.fillText(this.title,60,60);
    }
}