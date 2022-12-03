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

for (let i = 2; i < packages.length; i += 3) {
  let obj = {},
    obj1 = {},
    obj2 = {};

  const p1 = packages[i - 2];
  const p2 = packages[i - 1];
  const p3 = packages[i];

  for (let i = 0; i < p1.length; i++) {
    if (!obj[p1.charAt(i)]) {
      obj[p1.charAt(i)] = 0;
    }
    obj[p1.charAt(i)] += 1;
  }

  for (let i = 0; i < p2.length; i++) {
    if (!obj1[p2.charAt(i)]) {
      obj1[p2.charAt(i)] = 0;
    }
    obj1[p2.charAt(i)] += 1;
  }

  for (let i = 0; i < p3.length; i++) {
    if (!obj2[p3.charAt(i)]) {
      obj2[p3.charAt(i)] = 0;
    }
    obj2[p3.charAt(i)] += 1;
  }

  const key1 = Object.keys(obj);
  const key2 = Object.keys(obj1);
  const key3 = Object.keys(obj2);

  let targetKey = "";

  key1.forEach((k) => {
    const found = key2.find((k2) => k2 === k);

    if (found) {
      const found1 = key3.find((k3) => k3 === found);

      if (found1) {
        targetKey = found1;
      }
    }
  });

  console.log(targetKey);

  score += scoreBoard[targetKey];
}

console.log(score);
