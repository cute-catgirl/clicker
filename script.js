var score = 0;
var totalclicks = 0;
var upgradeCost = 100;
var upgradeCPSCost = 300;
var clickAmount = 1;
var cpsAmount = 0;
if (localStorage.score) {
  score = Number(localStorage.score);
  totalclicks = Number(localStorage.totalclicks);
  upgradeCost = Number(localStorage.upgradeCost);
  upgradeCPSCost = Number(localStorage.upgradeCPSCost);
  clickAmount = Number(localStorage.clickAmount);
  cpsAmount = Number(localStorage.cpsAmount);
  incrPoints();
}
function saveGame() {
  localStorage.score = score;
  localStorage.totalclicks = totalclicks;
  localStorage.upgradeCost = upgradeCost;
  localStorage.upgradeCPSCost = upgradeCPSCost;
  localStorage.clickAmount = clickAmount;
  localStorage.cpsAmount = cpsAmount;
}
function updateInfo() {
  document.getElementById("scoretext").innerHTML = "You have " + score + " points.";
  document.getElementById("upgradeButton").innerHTML = "upClick(" + upgradeCost + ");";
  document.getElementById("clickButton").innerHTML = "score += " + clickAmount + ";";
  document.getElementById("cpsButton").innerHTML = "upCPS(" + upgradeCPSCost + ");";
}
function incrPoints() {
  score += clickAmount;
  totalclicks += clickAmount;
  document.getElementById("scoretext").innerHTML = "You have " + score + " points.";
  if (score >= 50) {
    document.getElementById("upgradeButton").style.display = "block";
  }
  if (score >= 200) {
    document.getElementById("cpsButton").style.display = "block";
  }
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
