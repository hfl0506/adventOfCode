const fs = require("fs");
const path = require("path");

const file = fs.readFileSync(path.join(__dirname, "input.txt"), {
  encoding: "utf-8",
});

const rounds = file.split("\n");

const winMap = {
  A: 2,
  B: 3,
  C: 1,
};

const loseMap = {
  A: 3, // s
  B: 1, // rock
  C: 2, // paper
};

const drawMap = {
  A: 1,
  B: 2,
  C: 3,
};

let score = 0;

rounds.forEach((round) => {
  const [first, second] = round.split(" ");

  //lost
  if (second === "X") {
    score += loseMap[first] + 0;
  }

  //draw
  if (second === "Y") {
    score += drawMap[first] + 3;
  }

  // win
  if (second === "Z") {
    score += winMap[first] + 6;
  }
});

score += 12;

console.log(score);
