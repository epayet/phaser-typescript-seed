import * as Phaser from "phaser";

export default class ItemEntity {
    sprite: Phaser.Sprite;

    constructor(sprite: Phaser.Sprite) {
        this.sprite = sprite;
    }

    collided() {
        this.sprite.alpha = 1;
    }
}