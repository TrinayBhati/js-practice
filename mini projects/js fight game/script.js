function updateGame(p1, p2, gameState) {
  let playButton = document.getElementById('play')
  let resultDiv = document.getElementById('result')
  let p1NameDiv = document.getElementById('p1Name')
  let p2NameDiv = document.getElementById('p2Name')
  let p1HealthDiv = document.getElementById('p1Health')
  let p2HealthDiv = document.getElementById('p2Health')
  p1NameDiv.innerText = p1.name;
  p2NameDiv.innerText = p2.name;
  p1HealthDiv.innerText = p1.health;
  p2HealthDiv.innerText = p2.health;
  if(p1.health <= 0 || p2.health <= 0){
    game.isOver = true;
    gameState = game.isOver;
    resultDiv.innerText = game.declareWinner(game.isOver, p1, p2);
    return gameState;
  }
}

class Player {
  constructor(name, health, attackDamage){
    this.name = name;
    this.health = health;
    this.attackDamage = attackDamage;
  }
  strike(player, enemy, attackDamage){
    let damageAmount = Math.floor((Math.random)*attackDamage);
    enemy.health -= damageAmount;
    updateGame(player, enemy, game.isOver);
    return `${player.name} attacks ${enemy.name} for ${damageAmount } damage`;
  }
  heal(player, enemy, attackDamage){
    let hpAmount = Math.floor((Math.random)*6);
    player.health += hpAmount;
    updateGame(player, enemy, game.isOver);
    return `${player.name} heals for ${hpAmount} hp`
  }
}

class Game{
  constructor(){
    this.isOver = false;
  }
  play(){
    game = new Game();
  }
  checkIsOver(){
  }
  declareWinner(){
     }
  reset(p1, p2){
    
  }
}

let player1 = new Player("Trinay" , 100 , 10 );
let player2 = new Player("Shourya" , 100 , 10 );

let game = new Game();

updateGame(player1, player2, game);

//11:23