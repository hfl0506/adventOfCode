const fs = require("fs");
const path = require("path");

const file = fs.readFileSync(path.join(__dirname, "input.txt"), {
  encoding: "utf-8",
});

const rounds = file.split("\n");

const scoreMap = {
  X: 1,
  Y: 2,
  Z: 3,
  A: 1,
  B: 2,
  C: 3,
};

let score = 0;

rounds.forEach((round, idx) => {
  console.log(`${idx} : ${round}`);
  const [first, second] = round.split(" ");

  //draw
  if (
    (first === "A" && second === "X") ||
    (first === "B" && second === "Y") ||
    (first === "C" && second === "Z")
  ) {
    const draw = scoreMap[second] + 3;
    console.log(`draw : ${draw}`);
    score += draw;
  }

  // win
  if (
    (first === "A" && second === "Y") ||
    (first === "B" && second === "Z") ||
    (first === "C" && second === "X")
  ) {
    const win = scoreMap[second] + 6;
    console.log(`win : ${win}`);
    score += win;
  }

  if (
    (first === "A" && second === "Z") ||
    (first === "B" && second === "X") ||
    (first === "C" && second === "Y")
  ) {
    const lost = scoreMap[second] + 0;
    console.log(`lost : ${lost}`);
    score += lost;
  }
});

console.log(score);
