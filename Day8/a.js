const fs = require("fs");
const path = require("path");

const rows = fs
  .readFileSync(path.join(__dirname, "input.txt"), { encoding: "utf-8" })
  .split("\n")
  .map((row) => [...row].map((r) => Number(r)));

// part 1
let rowsSize = rows.length;
let edgeCount = 4 * rowsSize - 4;
let count = edgeCount;
// part 2
let score = 0;

function isVisibleHorizontal(row, x, start, end) {
  for (let i = start; i < end; i++) {
    if (rows[x][i] >= row) return false;
  }
  return true;
}

function isVisibleVertical(row, y, start, end) {
  for (let i = start; i < end; i++) {
    if (rows[i][y] >= row) return false;
  }
  return true;
}

const getScenicScore = (x, y) => {
  const score = [0, 0, 0, 0];
  for (let i = x - 1; i >= 0; i--) {
    // up
    if (rows[i][y] >= rows[x][y]) {
      score[0]++;
      break;
    } else {
      score[0]++;
    }
  }
  for (let i = y - 1; i >= 0; i--) {
    // left
    if (rows[x][i] >= rows[x][y]) {
      score[1]++;
      break;
    } else {
      score[1]++;
    }
  }
  for (let i = y + 1; i < rowsSize; i++) {
    // right
    if (rows[x][i] >= rows[x][y]) {
      score[2]++;
      break;
    } else {
      score[2]++;
    }
  }
  for (let i = x + 1; i < rowsSize; i++) {
    // down
    if (rows[i][y] >= rows[x][y]) {
      score[3]++;
      break;
    } else {
      score[3]++;
    }
  }
  return score.filter(Boolean).reduce((a, b) => a * b, 1);
};

for (let i = 1; i < rowsSize - 1; i++) {
  for (let j = 1; j < rowsSize - 1; j++) {
    if (
      isVisibleVertical(rows[i][j], j, 0, i) ||
      isVisibleVertical(rows[i][j], j, i + 1, rowsSize) ||
      isVisibleHorizontal(rows[i][j], i, 0, j) ||
      isVisibleHorizontal(rows[i][j], i, j + 1, rowsSize)
    ) {
      count += 1;
    }
  }

  for (let x = 0; x < rowsSize; x++) {
    for (let y = 0; y < rowsSize; y++) {
      const final = getScenicScore(x, y);
      if (final > score) {
        score = final;
      }
    }
  }
}

console.log(count);
console.log(score);
