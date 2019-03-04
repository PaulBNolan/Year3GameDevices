/**
 * This class represents the scene manager which is 
 * used to manage the scene class.
 */
class SceneManager
{
    /**
     * This is the constructor for the class
     */
    constructor()
    {
        this.currentScene = null;
        this.scenes = {};
        this.sceneTitles = [];
        this.sceneIndex = -1;
    }
    /**
     * This function is used to add scenes to the
     * scene manager function
     * @param {object} scene This is the object 
     * representing the scene added
     */
    addScene(scene)
    {
        //The scene is assigned to the dictionary
        this.scenes[scene.title] = scene;
        //The scenes title is pushed to the list
        this.sceneTitles.push(scene.title);
    }
    /**
     * This function is used to search for and go
     * to a specific scene based on its title
     * @param {String} title This is the text for
     * the scene searched for
     */
    goToScene(title)
    {
        //If current scene is not empty
        if(this.currentScene != null)
        {
            this.currentScene.stop();
        }
        //Current scene set
        this.currentScene = this.scenes[title];
        //Current scene started
        this.currentScene.start();
        //Scene index is found and set
        for(var i = 0; i < this.sceneTitles.length; i++)
        {
            if(this.sceneTitles[i] === title)
            {
                this.sceneIndex = i;
            }
        }
        //Scene returned
        return this.currentScene;
    }
    /**
     * This function finds the next scene
     */
    goToNextScene()
    {
        //Scene is stopped
        this.currentScene.stop();
        //Index is increased
        this.sceneIndex++;
        //Index is reset if it exceeds the list size
        if(this.sceneIndex === this.sceneTitles.length)
        {
            this.sceneIndex = 0;
        }
        this.currentScene = this.scenes[this.sceneTitles[this.sceneIndex]];
        this.currentScene.start();
        return this.currentScene;
    }
    /**
     * This render function is used to render
     * the current scene
     * @param {Object} ctx This object represents 
     * the canvas
     */
    render(ctx)
    {
        this.currentScene.render(ctx);
    }
}