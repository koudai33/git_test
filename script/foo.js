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

export default fruits;
