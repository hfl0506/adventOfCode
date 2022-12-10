const fs = require("fs");
const path = require("path");

const file = fs.readFileSync(path.join(__dirname, "input.txt"), {
  encoding: "utf-8",
});

const moves = file.split("\n");

let sets = new Set();
let head = { x: 0, y: 0 };
let tail = { x: 0, y: 0 };
sets.add(`${tail.x},${tail.y}`);

for (let move of moves) {
  const [dir, step] = move.split(" ");
  const num = Number(step);

  for (let i = 0; i < num; ++i) {
    if (dir === "U") {
      ++head.y;
    }
    if (dir === "D") {
      --head.y;
    }
    if (dir === "L") {
      --head.x;
    }
    if (dir === "R") {
      ++head.x;
    }

    const xAxis = Math.abs(head.x - tail.x);
    const yAxis = Math.abs(head.y - tail.y);
    const totalAxis = xAxis + yAxis;

    const moveX = xAxis >= 2 || totalAxis >= 3;
    const moveY = yAxis >= 2 || totalAxis >= 3;

    if (moveX) {
      tail.x += head.x > tail.x ? 1 : -1;
    }
    if (moveY) {
      tail.y += head.y > tail.y ? 1 : -1;
    }

    sets.add(`${tail.x},${tail.y}`);
  }
}

console.log(sets.size);
