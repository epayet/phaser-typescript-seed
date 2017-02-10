import * as Phaser from "phaser";
import ItemEntity from "../entity/item";
import {NUMBER_OF_ITEM_TYPES} from "../constants";
import {ItemSprite} from "../sprite/item";
import PlayerEntity from "../entity/player";

export default class ItemsSystem {
    private game: Phaser.Game;
    private playerEntity: PlayerEntity;
    private itemsGroup: Phaser.Group;

    constructor(game: Phaser.Game, itemsGroup: Phaser.Group, playerEntity: PlayerEntity) {
        this.game = game;
        this.playerEntity = playerEntity;
        this.itemsGroup = itemsGroup;
    }

    generateEntities(nb: number): ItemEntity[] {
        let items = [];
        while (items.length <= nb) {
            let x = Math.floor(Math.random() * this.game.world.width);
            let y = Math.floor(Math.random() * this.game.world.height);
            let type = Math.floor(Math.random() * NUMBER_OF_ITEM_TYPES) + 1;

            let itemSprite = new ItemSprite(this.game, x, y, type, items.length);
            let hitOtherItems = this.game.physics.arcade.collide(itemSprite, this.itemsGroup);
            let hitPlayer = this.game.physics.arcade.collide(itemSprite, this.playerEntity.sprite);
            this.checkDistance(itemSprite);

            if (hitOtherItems || hitPlayer) {
                itemSprite.kill();
            } else {
                this.itemsGroup.add(itemSprite);
                items.push(new ItemEntity(itemSprite));
            }
        }
        return items;
    }

    checkDistance(itemSprite) {
        // TODO
        let otherItem = this.itemsGroup.getAt(0);
        let distance = this.game.physics.arcade.distanceBetween(itemSprite, otherItem);
        // console.log(distance);
    }
}