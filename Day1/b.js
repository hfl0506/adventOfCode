const fs = require("fs");
const path = require("path");

const file = fs.readFileSync(path.join(__dirname, "input1.txt"), {
  encoding: "utf-8",
});

let calories = file.split("\n\n");

let arr = [];

calories.forEach((cal) => {
  let total = 0;

  cal.split("\n").forEach((c) => (total += Number(c)));

  arr.push(total);
});

const sortArr = arr.sort((a, b) => (a > b ? -1 : 1));

const topThreeTotal = sortArr.splice(0, 3).reduce((cur, next) => cur + next, 0);

console.log(topThreeTotal);
