"use strict";
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

        this.initCanvas(268.6,403);
        //These lines are used to loop through the update and draw functions
        this.boundRecursiveUpdate = this.update.bind(this);

        this.img = img;
        this.img.addEventListener('load', function() {}, false);

        this.SpriteObject = new Sprite(this.ctx, { width: 100 , height: 100, image: this.img }, 6, 100 * this.game_ratio, 100 * this.game_ratio);
        this.SpriteObject2 = new Sprite(this.ctx, { width: 100, height: 100, image: this.img }, 0, 300 * this.game_ratio, 300 * this.game_ratio);

        this.previousTime = 0;

        this.now = new Date();
    }

    /**
     * This function intializes the canvas
     */
    initCanvas(width,height)
    {
        var canvas = document.createElement("canvas");

        var ctx = canvas.getContext("2d");

        canvas.width = width;
        canvas.height = height;


        // Width-height-ratio of game resolution
        this.game_ratio = canvas.width / canvas.height;
        // Make div full height of browser and keep the ratio of game resolution
        var div = document.getElementById('game-app');
        div.style.width = (window.innerHeight * this.game_ratio) + 'px';
        div.style.height = window.innerHeight + 'px';

        var dpi_w = (parseInt(div.style.width) / canvas.width);
        var dpi_h = (parseInt(div.style.height) / canvas.height);

        this.height = window.innerHeight * (dpi_w / dpi_h);
        this.width = this.height * this.game_ratio;

        canvas.style.width = this.width + 'px';
        canvas.style.height = this.height + 'px';
        div.appendChild(canvas);


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