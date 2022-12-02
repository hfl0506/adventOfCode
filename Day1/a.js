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

const max = Math.max(...arr);

console.log(max);
