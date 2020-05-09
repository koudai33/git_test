export default fruits;

let fruits = {
  list: {
    summer: {
      fruits: [
        { name: "watermelon", colors: "green", teachProgramming() {} },
        { name: "pineapple", colors: "yellow", teachHistroy() {} },
      ],
      teach() {},
    },
    winter: {
      fruits: [{ name: "apple", colors: "red" }],
      makeSmile() {},
    },
  },
  plan() {},
  uploadVideo() {
    var agyo = ["あ", "い", "う", "え", "お", "か", "き", "く", "け", "こ"];
    //二重ループを使ったあ行とか行の名前リスト
    for (var na = 0; na < agyo.length; na++) {
      for (var i = 0; i < agyo.length; i++) {
        document.write("<p>" + agyo[na] + agyo[i] + "</p>");
      }
    }
  },
};

function stopCar(speed) {
  return speed <= 60;
}

function alertStopCor(speed) {
  if (speed >= 60) {
    alert("STOP!!");
  }
}
stopCar(50);

function unfollow() {
  console.log("ad");
}

function cancelTweet() {
  console.log("hogehoge");
}

function confirmew(fn) {
  if (window.confirm("実行しますか")) {
  }
}

confirmew(unfollow);

function confirmed(fnc) {
  const input = window.prompt("実行しますか");
  if (input === "実行") {
    fn();
  }
}

confirmed(function () {
  console.log("削除");
});

document.write("hello");
