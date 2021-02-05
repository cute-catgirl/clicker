var score = 0;
var totalclicks = 0;
var upgradeCost = 100;
var upgradeCPSCost = 300;
var clickAmount = 1;
var cpsAmount = 0;
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
    document.getElementById("scoretext").innerHTML = "You have " + score + " points.";
    document.getElementById("cpsButton").innerHTML = "upCPS(" + upgradeCPSCost + ");";
  }
}
