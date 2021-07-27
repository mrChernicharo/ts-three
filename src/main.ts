import "./style.css";
import { Game } from "./Game/game";

const domContainer = document.querySelector("#scene-container") as HTMLDivElement;

const game = new Game(domContainer);

game.start();
