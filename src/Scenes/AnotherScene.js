export default class AnotherScene extends Phaser.Scene {
  constructor() {
    super({ key: "AnotherScene" });
    this.centerWidth = window.innerWidth / 2;
    this.centerHeight = window.innerHeight / 2;
  }

  preload() {
    this.load.setBaseURL("https://labs.phaser.io");
    this.load.image("sky", "assets/skies/space3.png");
    this.load.image("red", "assets/particles/red.png");
  }
  create() {
    this.add.image(this.centerWidth, this.centerHeight, "sky").setScale(4);

    this.add
      .text(
        this.centerWidth,
        this.centerHeight,
        "Hei, this is another scene!!",
        { fontSize: 32 }
      )
      .setOrigin(0.5);

    const particles = this.add.particles("red");

    const emitter = particles.createEmitter({
      speed: 100,
      scale: { start: 1, end: 0 },
      blendMode: "ADD",
      x: this.centerWidth,
      y: this.centerHeight + 150,
    });
  }
  update() {}
}
