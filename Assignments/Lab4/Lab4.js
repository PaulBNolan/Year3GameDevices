/**
 * The below function initialises and runs the program
 */
function main()
{
    //Game object is initialized
    var game = new Game();
    //An event listerner is added for mouse clicks
    document.addEventListener("click",mouseTest.bind(null,game));
}
//This function is used to run mouse click events
function mouseTest(game, e)
{
    //Game scene is changed
    game.scene = game.sceneManager2.goToNextScene();
    //The game renders the new scene
    game.sceneManager2.render(game.ctx);
}