import * as Phaser from "phaser";
import PlayerEntity from "../entity/player";
import PlayerSystem from "../system/player";
import ItemsSystem from "../system/items";
import {PlayerSprite} from "../sprite/player";
import {ItemSprite} from "../sprite/item";
import ItemEntity from "../entity/item";

export default class GameState extends Phaser.State {
    private playerEntity: PlayerEntity;
    private itemEntities: ItemEntity[];
    private playerSystem: PlayerSystem;
    private itemsGroup: Phaser.Group;

    create() {
        let playerSprite = new PlayerSprite(this.game);
        this.add.existing(playerSprite);
        this.playerEntity = new PlayerEntity(playerSprite);

        this.itemsGroup = this.add.group();
        this.itemsGroup.enableBody = true;
        let itemsSystem = new ItemsSystem(this.game, this.itemsGroup, this.playerEntity);
        this.itemEntities = itemsSystem.generateEntities(20);

        let cursors = this.input.keyboard.createCursorKeys();
        this.playerSystem = new PlayerSystem(this.playerEntity, cursors);
    }

    update() {
        this.playerSystem.update();
        this.physics.arcade.collide(this.playerEntity.sprite, this.itemsGroup, (player, item) => this.collided(item));
    }

    collided(item: ItemSprite) {
        this.itemEntities[item.id].collided();
        item.alpha = 1;
    }
}