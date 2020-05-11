var omikuji_items = ["大吉", "中吉", "小吉", "凶", "大凶"];
var btn = document.getElementById("btn");
var disp = document.getElementById("disp");
var num = 0;

btn.addEventListener("click", function () {
  var num = Math.floor(Math.random() * omikuji_items.length);
  disp.innerHTML = omikuji_items[num];
  if (omikuji_items[num] == "大吉") {
    alert("おめでと");
  } else if (omikuji_items[num] == "大凶") {
    alert("残念");
  } else {
    alert("まあまあ");
  }
});
