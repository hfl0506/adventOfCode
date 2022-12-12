const fs = require("fs");
const path = require("path");

const file = fs.readFileSync(path.join(__dirname, "input.txt"), {
  encoding: "utf-8",
});

const cycles = file.split("\n");

let map = new Map();
let cycle = 1;
let val = 1;

cycles.forEach((c) => {
  if (c.startsWith("noop")) {
    map.set(cycle, val);
    cycle++;
  }

  if (c.startsWith("addx")) {
    const [str, x] = c.split(" ");
    map.set(cycle, val);
    cycle++;
    map.set(cycle, val);
    val += Number(x);
    cycle++;
  }
});

let sum = 0;

//part2
for (let i = 20; i <= cycle; i = i + 40) {
  sum += map.get(i) * i;
}

console.log(sum);

// part2
let str = "";

function isSpritVisible(cycle) {
  let diff = (cycle % 40 ?? 40) - map.get(cycle);
  return diff >= 0 && diff <= 2;
}

for (let i = 1; i < cycle; i++) {
  if (isSpritVisible(i)) {
    str += "#";
  } else {
    str += ".";
  }

  if (i % 40 === 0) {
    str += "\n";
  }
}

console.log(str);
