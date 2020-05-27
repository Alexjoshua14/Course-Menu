team = {
  //Array used to store players
  _players: [],

  //Array used to store games
  _games: [],

  //Allows user to add a player
  addPlayer(firstName, lastName, age) {
    //Creates new player object
    let player = {
      firstName,
      lastName,
      age
    }
    //Appends it to current array of _players
    this._players.push(player);
  },

  //Allows user to add a game
  addGame(opponent, teamPoints, opponentPoints) {
    //Creates new game object
    let game = {
      opponent,
      teamPoints,
      opponentPoints
    }
    //Appends it to the end of _games
    this._games.push(game);
  },

  //Makes it easier to obtain the array of players
  get players() {
    return this._players;
  },

  //Makes it easier to obtain the array of games
  get games() {
    return this._games;
  }
}

//Adds players to team object
team.addPlayer('Pablo', 'Sanchez', 11);
team.addPlayer('John', 'Little', 12);
team.addPlayer('Suzu', 'Green', 11);
team.addPlayer('Steph', 'Curry', 28);
team.addPlayer('Lisa', 'Leslie', 44);
team.addPlayer('Bugs', 'Bunny', 76);

//Adds games to team object
team.addGame('Bronco', 500, 3);
team.addGame('Rangos', 42, 41);
team.addGame('Cheifs', 124, 16);

//Prints out the players and games stored in the team object
console.log(team.players);
console.log(team.games);
