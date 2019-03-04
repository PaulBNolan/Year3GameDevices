
/**
 * This is the starting function
 */
function main()
{
    //Game object is created
    var game = new Game();

    game.initWorld();

    //Game update function is called
    game.update();
}