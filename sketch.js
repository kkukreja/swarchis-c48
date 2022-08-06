var canvas;
var database, gameState;
var form, player, playerCount;
var allPlayers;
var paddle1, paddle2
var paddles = [];

function preload() {
  
}

function setup() {
  canvas = createCanvas(600, 600);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}

function draw() {
  background("black");
  if (playerCount === 2) {
    game.update(1);
  }

  if (gameState === 1) {
    game.play();
  }

}
