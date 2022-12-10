const fs = require("fs");
const path = require("path");

const file = fs.readFileSync(path.join(__dirname, "input.txt"), {
  encoding: "utf-8",
});
const moves = file.split("\n");

const head = { x: 0, y: 0 };
const tail = { x: 0, y: 0 };

const rope = [
  head,
  { x: 0, y: 0 },
  { x: 0, y: 0 },
  { x: 0, y: 0 },
  { x: 0, y: 0 },
  { x: 0, y: 0 },
  { x: 0, y: 0 },
  { x: 0, y: 0 },
  { x: 0, y: 0 },
  tail,
];

const sets = new Set();

sets.add(`${tail.x},${tail.y}`);

for (let move of moves) {
  const [dir, step] = move.split(" ");
  const num = Number(step);

  for (let i = 0; i < step; ++i) {
    if (dir === "L") {
      --head.x;
    }

    if (dir === "R") {
      ++head.x;
    }

    if (dir === "U") {
      ++head.y;
    }
    if (dir === "D") {
      --head.y;
    }

    for (let j = 0; j < 9; ++j) {
      const pairHead = rope[j];
      const pairTail = rope[j + 1];

      const xAxis = Math.abs(pairHead.x - pairTail.x);
      const yAxis = Math.abs(pairHead.y - pairTail.y);
      const totalAxis = xAxis + yAxis;

      const moveX = xAxis >= 2 || totalAxis >= 3;
      const moveY = yAxis >= 2 || totalAxis >= 3;

      if (moveX) {
        pairTail.x += pairHead.x > pairTail.x ? 1 : -1;
      }
      if (moveY) {
        pairTail.y += pairHead.y > pairTail.y ? 1 : -1;
      }
    }
    sets.add(`${tail.x},${tail.y}`);
  }
}

console.log(sets.size);
