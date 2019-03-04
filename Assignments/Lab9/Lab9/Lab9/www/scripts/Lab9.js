
/**
 * This is the starting function
 */
function main()
{
    //Image is created and loaded
    var img = new Image();
    img.scr = 'Images/trump_run.png'
    //Game object is created
    var game = new Game(img);
    //Game update function is called
    game.update();
}