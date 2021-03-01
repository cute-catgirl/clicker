let defaultSave = () => { return { score: 0, totalClicks: 0, upgradeCost: 30, upgradeCPSCost: 100, CPClick: 1, CPSecond: 0 } }

let game;

function loadGame() { game = JSON.parse(localStorage.getItem("gameSave")) ?? defaultSave(); }

function saveGame() {
	localStorage.setItem("gameSave", JSON.stringify(game));
 }

const onLoad = window.onload = function() { init(); }

function init() {
	loadGame();
}

function tick() {
	updateState();
	updateUI();
}

const updateInterval = setInterval(tick, 100);
const saveInterval = setInterval(saveGame, 10000);

function updateUI() {
  document.getElementById("scoretext").innerHTML = "You have " + game.score + " points.";
  document.getElementById("upgradeButton").innerHTML = "upClick(" + game.upgradeCost + ");";
  document.getElementById("clickButton").innerHTML = "score += " + game.CPClick + ";";
  document.getElementById("cpsButton").innerHTML = "upCPS(" + game.upgradeCPSCost + ");";
  if (game.score >= 15 || game.CPClick > 1) {
    document.getElementById("upgradeButton").style.display = "block";
  }
  if (game.score >= 50 || game.CPSecond > 0) {
    document.getElementById("cpsButton").style.display = "block";
  }
}

function updateState() {
	game.score += game.CPSecond / 10;
	game.score = Math.round(game.score * 10) / 10;
}

function incrPoints() {
  game.score += game.CPClick;
  game.totalClicks += game.CPClick;
}

function upClick() {
  if (game.score >= game.upgradeCost) {
    game.score -= game.upgradeCost;
    game.upgradeCost = Math.round(game.upgradeCost * 1.1);
    game.CPClick += 1;
  }
}

function upCPS() {
  if (game.score >= game.upgradeCPSCost) {
    game.score -= game.upgradeCPSCost;
    game.upgradeCPSCost = Math.round(game.upgradeCPSCost * 1.2);
    if (game.CPSecond == 0) {
      game.CPSecond++;
    }
    else {
      game.CPSecond++;
    }
  }
}
