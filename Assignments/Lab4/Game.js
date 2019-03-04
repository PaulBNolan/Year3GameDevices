/**
 * This is the class representing the game/screen itself.
 */
class Game
{
    /**
     * This is the class constructor which goes through and tests all of the assignments requests
     */
    constructor()
    {
        //The objects canvas is intialised
        this.initCanvas();
        //The initial scenes and scene manager are created
        this.sceneManager = new SceneManager();
        this.titleScene = new TitleScene();
        this.menuScene = new MenuScene();
        //The add scene function is tested
        this.sceneManager.addScene(this.titleScene);
        this.sceneManager.addScene(this.menuScene);

        this.scene = new Scene("Scene Title");
        //The go to scene function is tested
        this.sceneManager.addScene(this.scene);
        this.scene = this.sceneManager.goToScene(this.scene.title);
        this.sceneManager.render(this.ctx);

        this.scene = this.sceneManager.goToScene(this.titleScene.title);
        this.sceneManager.render(this.ctx);

        this.scene = this.sceneManager.goToScene(this.menuScene.title);
        this.sceneManager.render(this.ctx);

        //This scene manager and the following scenes are created to represent the final demo
        this.sceneManager2 = new SceneManager();

        this.sceneManager2.addScene(this.menuScene);

        this.playing = new PlayingScene();
        this.sceneManager2.addScene(this.playing);

        this.gameOver = new GameOverScene();
        this.sceneManager2.addScene(this.gameOver);

        this.sceneManager2.goToScene(this.menuScene.title);
    }
    /**
     * This function initializes the games canvas
     */
    initCanvas()
    {
        var canvas = document.createElement("canvas");

        canvas.id = 'mycanvas';
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        var ctx = canvas.getContext("2d");

        document.body.appendChild(canvas);

        console.log("Function Works");
        ctx.font = '48px serif';
        this.ctx = ctx;
    }
}
