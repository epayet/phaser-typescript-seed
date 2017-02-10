import * as Phaser from "phaser";
import PlayerEntity from "../entity/player";

export default class PlayerSystem {
    private cursors: Phaser.CursorKeys;
    private entity: PlayerEntity;

    constructor(entity: PlayerEntity, cursors: Phaser.CursorKeys) {
        this.entity = entity;
        this.cursors = cursors;
    }

    update() {
        this.entity.resetVelocity();

        let speed = 300;
        if (this.cursors.left.isDown) {
            this.entity.setVelocityX(-speed);
        }
        else if (this.cursors.right.isDown) {
            this.entity.setVelocityX(speed);
        }

        if (this.cursors.up.isDown) {
            this.entity.setVelocityY(-speed);
        }
        else if (this.cursors.down.isDown) {
            this.entity.setVelocityY(speed);
        }
    }
}