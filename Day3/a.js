const fs = require("fs");
const path = require("path");

const file = fs.readFileSync(path.join(__dirname, "input.txt"), {
  encoding: "utf-8",
});

const packages = file.split("\n");

const scoreBoard = {
  a: 1,
  b: 2,
  c: 3,
  d: 4,
  e: 5,
  f: 6,
  g: 7,
  h: 8,
  i: 9,
  j: 10,
  k: 11,
  l: 12,
  m: 13,
  n: 14,
  o: 15,
  p: 16,
  q: 17,
  r: 18,
  s: 19,
  t: 20,
  u: 21,
  v: 22,
  w: 23,
  x: 24,
  y: 25,
  z: 26,
  A: 27,
  B: 28,
  C: 29,
  D: 30,
  E: 31,
  F: 32,
  G: 33,
  H: 34,
  I: 35,
  J: 36,
  K: 37,
  L: 38,
  M: 39,
  N: 40,
  O: 41,
  P: 42,
  Q: 43,
  R: 44,
  S: 45,
  T: 46,
  U: 47,
  V: 48,
  W: 49,
  X: 50,
  Y: 51,
  Z: 52,
};

let score = 0;

packages.forEach((package) => {
  let obj = {};
  let obj1 = {};

  let pLength = Math.floor(package.length / 2);

  const part1 = package.substring(0, pLength);
  const part2 = package.substring(pLength, package.length);

  for (let p1 in part1) {
    if (!obj[part1[p1]]) {
      obj[part1[p1]] = 0;
    }

    obj[part1[p1]] += 1;
  }

  for (let p2 in part2) {
    if (!obj1[part2[p2]]) {
      obj1[part2[p2]] = 0;
    }

    obj1[part2[p2]] += 1;
  }

  const keys = Object.keys(obj);
  const keys1 = Object.keys(obj1);

  let targetKey = "";

  keys.forEach((k) => {
    const found = keys1.find((k1) => k1 === k);
    if (found !== undefined) targetKey = found;
  });

  score += scoreBoard[targetKey];
});

console.log(score);
