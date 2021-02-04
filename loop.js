setInterval(cpsIncr, 1000);

function cpsIncr() {
  score += cpsAmount;
  document.getElementById("scoretext").innerHTML = "You have " + score + " points.";
}
