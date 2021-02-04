var score = 0;
var totalclicks = 0;
var upgradeCost = 100;
var clickAmount = 1;
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
    upgradeCost = upgradeCost * 2.5;
    clickAmount = clickAmount * 2;
    document.getElementById("scoretext").innerHTML = "You have " + score + " points.";
    document.getElementById("upgradeButton").innerHTML = "upClick(" + upgradeCost + ");";
    document.getElementById("clickButton").innerHTML = "incrPoints(" + clickAmount + ");";
  }
}
