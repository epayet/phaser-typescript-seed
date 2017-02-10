import "../assets/images/phaser.png";
import * as Phaser from "phaser";
import SplashState from "./states/splash";
import GameState from "./states/game";

class Game extends Phaser.Game {

    constructor() {
        let width = document.documentElement.clientWidth > 768 ? 768 : document.documentElement.clientWidth;
        let height = document.documentElement.clientHeight > 1024 ? 1024 : document.documentElement.clientHeight;

        super(width, height, Phaser.AUTO, "", null);

        this.state.add("Splash", SplashState, true);
        this.state.add("Game", GameState);
    }
}

new Game();

