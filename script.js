/*var score = 0;
var totalclicks = 0;
var upgradeCost = 100;
var upgradeCPSCost = 300;
var clickAmount = 1;
var cpsAmount = 0;*/

let defaultSave = () => { return { score: 0, totalClicks: 0, upgradeCost: 100, upgradeCPSCost: 300, CPClick: 1, CPSecond: 0 } }

let game;

function loadGame() { game = JSON.parse(localStorage.getItem("gameSave")) ?? defaultSave(); }

/*if (localStorage.score) {
  score = Number(localStorage.score);
  totalclicks = Number(localStorage.totalclicks);
  upgradeCost = Number(localStorage.upgradeCost);
  upgradeCPSCost = Number(localStorage.upgradeCPSCost);
  clickAmount = Number(localStorage.clickAmount);
  cpsAmount = Number(localStorage.cpsAmount);
	updateInfo();
}*/

/*function saveGame() {
  localStorage.score = score;
  localStorage.totalclicks = totalclicks;
  localStorage.upgradeCost = upgradeCost;
  localStorage.upgradeCPSCost = upgradeCPSCost;
  localStorage.clickAmount = clickAmount;
  localStorage.cpsAmount = cpsAmount;
}*/
function saveGame() {
	localStorage.setItem("gameSave", JSON.stringify(game)); // This will save the entire game object literal in one single localStorage key. If you would like an extension of this using a defaultSave file etc, I would be happ to do so.
 }

const onLoad = window.onload = function() { init(); } // window.onload will be run when the page first loads/mounts.

// Try to separate your UI and state logic if you can. Like below:

// NOTE: There are ways to calculate gain while the window isnt in focus using deltaTime etc. If you would like a basic tutorial on this, let me know.

function init/*Stands for initiate*/() {
	loadGame();
}

function tick() {
	updateState();
	updateUI();
  // by separating UI and state logic, you will not have as many UI updates, which is always good.
}

// I set a variable to the interval so that you can run them once in the console if needed for future testing, as well as you can cancel the interval at any time using clearInterval(variable).
const updateInterval = setInterval(tick, 100); // I am running this function every 100ms now.
const saveInterval = setInterval(saveGame, 10000); // I am auto-saving the game every 10 seconds, or 10000 ms.

function updateUI() {
	document.getElementById("scoretext").innerHTML = "You have " + game.score + " points.";
  document.getElementById("upgradeButton").innerHTML = "upClick(" + game.upgradeCost + ");";
  document.getElementById("clickButton").innerHTML = "score += " + game.CPClick + ";";
  document.getElementById("cpsButton").innerHTML = "upCPS(" + game.upgradeCPSCost + ");";
  if (game.score >= 50 || game.CPClick > 1) {
    document.getElementById("upgradeButton").style.display = "block";
  }
  if (game.score >= 200 || game.CPSecond > 0) {
    document.getElementById("cpsButton").style.display = "block";
  }
} // You can use accessors/mutators to shorten this, but I won't include that atm.

function updateState() {
	game.score += game.CPSecond / 10; // to balance out with the tick interval (100 * 10 = 1000)
}

function incrPoints() {
  game.score += game.CPClick;
  game.totalClicks += game.CPClick;
  //saveGame(); I wouldn't save the game whenever something happens, you can add a manual save button in- game that calls the save method, and you can create an interval at like 10-15 secs (10000-15000 ms) that calls the save function.
}

function upClick() {
  if (game.score >= game.upgradeCost) {
    game.score -= game.upgradeCost;
    game.upgradeCost = Math.round(game.upgradeCost * 2.5);
    game.CPClick *= 2; // you can use mathematical shorthand here, this is short for game.CPClick = game.CPClick * 2.
  }
}

function upCPS() {
  if (game.score >= game.upgradeCPSCost) {
    game.score -= game.upgradeCPSCost;
    game.upgradeCPSCost = Math.round(game.upgradeCPSCost * 1.1);
    if (game.CPSecond == 0) {
      game.CPSecond++;
    }
    else {
      game.CPSecond++;
    }
  }
}

/*function updateInfo() {
  document.getElementById("scoretext").innerHTML = "You have " + score + " points.";
  document.getElementById("upgradeButton").innerHTML = "upClick(" + upgradeCost + ");";
  document.getElementById("clickButton").innerHTML = "score += " + clickAmount + ";";
  document.getElementById("cpsButton").innerHTML = "upCPS(" + upgradeCPSCost + ");";
  if (score >= 50 || clickAmount > 1) {
    document.getElementById("upgradeButton").style.display = "block";
  }
  if (score >= 200 || cpsAmount > 0) {
    document.getElementById("cpsButton").style.display = "block";
  }
}
function incrPoints() {
  score += clickAmount;
  totalclicks += clickAmount;
  document.getElementById("scoretext").innerHTML = "You have " + score + " points.";
  updateInfo();
  saveGame();
}
function upClick() {
  if (score >= upgradeCost) {
    score -= upgradeCost;
    upgradeCost = Math.round(upgradeCost * 2.5);
    clickAmount = clickAmount * 2;
    document.getElementById("scoretext").innerHTML = "You have " + score + " points.";
    document.getElementById("upgradeButton").innerHTML = "upClick(" + upgradeCost + ");";
    document.getElementById("clickButton").innerHTML = "score += " + clickAmount + ";";
  }
  updateInfo();
  saveGame();
}
function upCPS() {
  if (score >= upgradeCPSCost) {
    score -= upgradeCPSCost;
    upgradeCPSCost = Math.round(upgradeCPSCost * 1.1);
    if (cpsAmount == 0) {
      cpsAmount++;
    }
    else {
      cpsAmount++;
    }
    updateInfo();
  }
  saveGame();
}

setInterval(cpsIncr, 1000);

function cpsIncr() {
  score += cpsAmount;
  document.getElementById("scoretext").innerHTML = "You have " + score + " points.";
  saveGame();
}*/
