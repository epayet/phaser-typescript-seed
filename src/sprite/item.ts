import * as Phaser from "phaser";

export class ItemSprite extends Phaser.Sprite {
    id: number;

    constructor(game: Phaser.Game, x: number, y: number, type: number, id: number) {
        super(game, x, y, `item-${type}`);
        game.physics.enable(this, Phaser.Physics.ARCADE);
        this.body.immovable = true;
        this.id = id;
        this.alpha = 0;
    }
}