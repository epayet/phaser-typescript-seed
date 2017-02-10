import * as Phaser from "phaser";

export class PlayerSprite extends Phaser.Sprite {
    constructor(game: Phaser.Game) {
        super(game, game.world.width / 2, game.world.height / 2, "player");
        game.physics.enable(this, Phaser.Physics.ARCADE);
        this.body.collideWorldBounds = true;
    }
}