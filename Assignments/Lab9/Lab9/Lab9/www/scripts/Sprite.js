"use strict";
/**
 * This is the class used to represent the sprite
 */

class Sprite
{
    /**
     * This is the class constructor
     * @param {Object} ctx This is the canvas given context
     * @param {Object} imageOptions This is the object used to load the sprite
     * @param {Number} fps This value determines the sprites frame rate
     * @param {Number} px This value sets the sprites x location
     * @param {Number} py This value sets the sprites y location
     */
    constructor(ctx, imageOptions, fps,px,py)
    {
        //Values are loaded and set
        this.width = imageOptions.width;
        this.height = imageOptions.height;
        this.img = imageOptions.image;

        this.ctx = ctx;

        //These two values are used to determine which portion of the
        //sprite sheet should be drawn
        this.iX = 0;
        this.iY = 0;

        this.time = 0;

        //Frame rate is determined
        if(fps > 0)
        {
            this.ticksPerFrame = 1000 / fps;
        }
        else
        {
            this.ticksPerFrame = 0;
        }
        this.x = px;
        this.y = py;
    }
    
    /**
     * This function helps update the sprite
     * @param {Number} deltaTime This value is used to control the sprites frame rate
     */
    update(deltaTime)
    {
        this.time += deltaTime;

        //This if situation is used to time each used of the render function
        if(this.time > this.ticksPerFrame)
        {
            this.render();
            this.time = 0;
        }
    }
    /**
     * This function is used to render the sprite
     */
    render()
    {
        //This portion of code is used to draw the image while erasing the previous instance
        this.ctx.clearRect(this.x, this.y,200,200);

        this.ctx.drawImage(this.img,this.iX * 100,this.iY * 100,this.width,this.height,this.x ,this.y ,200,200);

        this.img.src = 'images/trump_run.png'

        //This situation is used to access the other portions of the sprite sheet
        this.iX++;
        if(this.iX > 5)
        {
            this.iX = 0;
    
            this.iY++;
    
            if(this.iY > 3)
            {
                this.iY = 0;
            }
        }
    }
}