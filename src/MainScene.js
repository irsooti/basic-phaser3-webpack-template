import Phaser from "phaser";
import AnotherScene from "./Scenes/AnotherScene";

class MainScene extends Phaser.Scene {
  constructor() {
    super();
    this.centerWidth = window.innerWidth / 2;
    this.centerHeight = window.innerHeight / 2;
  }

  preload() {
    this.load.setBaseURL("https://labs.phaser.io");
    this.load.image("sky", "assets/skies/space3.png");
  }

  create() {
    this.add.image(this.centerWidth, this.centerHeight, "sky").setScale(3);

    this.add
      .text(
        this.centerWidth,
        this.centerHeight,
        "Hei, this is the main scene",
        { fontSize: 32 }
      )
      .setOrigin(0.5);
    this.add
      .text(
        this.centerWidth,
        this.centerHeight + 200,
        "Click to change scene",
        {
          fontSize: 16,
        }
      )
      .setOrigin(0.5);
  }

  update() {
    this.input.on("pointerdown", () => {
      this.scene.start("AnotherScene");
    });
  }
}

const config = {
  type: Phaser.AUTO,
  width: window.innerWidth,
  height: window.innerHeight,
  scene: [MainScene, AnotherScene],
};

const game = new Phaser.Game(config);
