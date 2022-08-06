class Game {
  constructor() {
    
  }

  getState() {
    var gameStateRef = database.ref("gameState");
    gameStateRef.on("value", function(data) {
      gameState = data.val();
    });
  }
  update(state) {
    database.ref("/").update({
      gameState: state
    });
  }

  start() {
    player = new Player();
    playerCount = player.getCount();

    form = new Form();
    form.display();

    paddle1 = createSprite(20, 300, 20, 100);

    paddle2 = createSprite(580, 300, 20, 100);

    paddles = [paddle1, paddle2];


  }

  handleElements() {
    form.hide();

  }

  play() {
    this.handleElements();

    Player.getPlayersInfo();

    if (allPlayers !== undefined) {
      
      //index of the array
      var index = 0;
      for (var plr in allPlayers) {
        //add 1 to the index for every loop
        index = index + 1;

        //use data form the database to display the paddles in x and y direction
        var x = allPlayers[plr].positionX;
        var y = allPlayers[plr].positionY;

        paddles[index - 1].position.x = x;
        paddles[index - 1].position.y = y;
      }

      // handling keyboard events
      this.handlePlayerControls();

      drawSprites();
    }
  }


  handlePlayerControls() {
    if (keyIsDown(UP_ARROW)) {
      player.positionY -= 10;
      player.update();
    }

    if (keyIsDown(DOWN_ARROW)) {
      player.positionY += 10;
      player.update();
    }

  }

  
}
