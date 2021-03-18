let defaultSave = () => { return { score: 0, totalClicks: 0, upgradeCost: 100, upgradeCPSCost: 200, upgradeLevelCost: 1000, buttonLevel: 1, CPClick: 1, CPSecond: 0 } }

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
  document.getElementById("scoretext").innerHTML = "score = " + game.score.toFixed(1) + ";";
  document.getElementById("upgradeButton").innerHTML = "clickAmount += " + game.buttonLevel + "; score -= " + game.upgradeCost + ";";
  document.getElementById("clickButton").innerHTML = "score += " + game.CPClick + ";";
  document.getElementById("cpsButton").innerHTML = "CPSAmount += 1; score -= " + game.upgradeCPSCost + ";";
	document.getElementById("levelButton").innerHTML = "buttonLevel += 1; score -= " + game.upgradeLevelCost + ";";
  if (game.score >= 15 || game.CPClick > 1) {
    document.getElementById("upgradeButton").style.display = "grid";
  }
  if (game.score >= 50 || game.CPSecond > 0) {
    document.getElementById("cpsButton").style.display = "grid";
  }
	if (game.score >= 500 || game.buttonLevel > 1) {
		document.getElementById("levelButton").style.display = "grid";
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
    game.upgradeCost = Math.round(game.upgradeCost * 1.5);
    game.CPClick += game.buttonLevel;
  }
}

function upCPS() {
  if (game.score >= game.upgradeCPSCost) {
    game.score -= game.upgradeCPSCost;
    game.upgradeCPSCost = Math.round(game.upgradeCPSCost * 1.3);
		game.CPSecond += 1;
  }
}

function upButtons() {
	if (game.score >= game.upgradeLevelCost) {
		game.score -= game.upgradeLevelCost;
		game.upgradeLevelCost = Math.round(game.upgradeLevelCost * 10);
		game.buttonLevel += 1;
	}
}
