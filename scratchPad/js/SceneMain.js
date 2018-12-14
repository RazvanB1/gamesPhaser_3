

class SceneMain extends Phaser.Scene {
    constructor() {
        super('SceneMain');
    }
    preload()
    {
        //load our images or sounds
        //this.load.image("key", "path");
        // 1 --- this.load.image("face", "images/face.png");
        // 2 --- animatii
        this.load.spritesheet('char', 'images/mainChar.png', { frameWidth: 128, frameHeight: 128 });
    }
    create() {
        //define our objects
        console.log("message!");
        //1 ---this.face = this.add.image(0, 0, "face");
        // 1 --a-- propietati pt imagini
        //this.face.alpha = 0.5;
        //this.face.angle = 45;
        //this.face.scaleX = 0.25;
        //this.face.scaleY = 0.25;
        //this.face.displayWidth = 200; // cati px are imaginea
        //this.face.scaleY = this.face.scaleX; // ca sa pastreze proportia

        //1 --b-- this.face.setOrigin(0,0);
        //this.face.x = game.config.width/2;
        //this.face.y = game.config.height/2;


    }
    update() {
        //constant running loop
    }

}