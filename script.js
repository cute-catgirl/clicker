var score = 0;
function clickButton() {
  score++;
  document.getElementById("scoretext").innerHTML = "You have " + score + " points.";
  if(score >= 100) {
    console.log("cat")
  }
}
