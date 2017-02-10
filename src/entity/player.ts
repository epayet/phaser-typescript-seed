import * as Phaser from "phaser";

export default class PlayerEntity {
    sprite: Phaser.Sprite;

    constructor(sprite: Phaser.Sprite) {
        this.sprite = sprite;
    }

    resetVelocity() {
        this.sprite.body.velocity.x = 0;
        this.sprite.body.velocity.y = 0;
    }

    setVelocityX(value: number) {
        this.sprite.body.velocity.x = value;
    }

    setVelocityY(value: number) {
        this.sprite.body.velocity.y = value;
    }
}