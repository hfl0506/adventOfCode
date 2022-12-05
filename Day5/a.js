const fs = require("fs");
const path = require("path");

const file = fs.readFileSync(path.join(__dirname, "input.txt"), {
  encoding: "utf-8",
});

const stacks = file.split("\n");

let crates = [
  ["F", "T", "C", "L", "R", "P", "G", "Q"],
  ["N", "Q", "H", "W", "R", "F", "S", "J"],
  ["F", "B", "H", "W", "P", "M", "Q"],
  ["V", "S", "T", "D", "F"],
  ["Q", "L", "D", "W", "V", "F", "Z"],
  ["Z", "C", "L", "S"],
  ["Z", "B", "M", "V", "D", "F"],
  ["T", "J", "B"],
  ["Q", "N", "B", "G", "L", "S", "P", "H"],
];

// part 1
// function moveStackToOther(arr) {
//   const times = arr[0];
//   const fromArr = arr[1] - 1;
//   const toArr = arr[2] - 1;
//   for (let i = 0; i < times; i++) {
//     const pop = crates[fromArr].pop();
//     crates[toArr].push(pop);
//   }
// }

// part 2
function moveEntireStackToOther(arr) {
  const times = arr[0];
  const fromArr = arr[1] - 1;
  const toArr = arr[2] - 1;
  let len = crates[fromArr].length;
  const spliceArr = crates[fromArr].splice(len - times, len);
  crates[toArr].push(...spliceArr);
}

stacks.forEach((stack) => {
  let numbers = stack.match(/\d+/g).map(Number);

  // part 1
  //moveStackToOther(numbers);

  // part 2
  moveEntireStackToOther(numbers);
});

let words = "";

crates.forEach((crate) => {
  words += crate[crate.length - 1];
});

console.log(words);
